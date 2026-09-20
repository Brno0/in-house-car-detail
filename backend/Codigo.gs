/**
 * IN HOUSE CAR DETAIL — recebedor de pré-reservas
 * Google Apps Script. Grava cada pedido numa planilha e avisa por e-mail.
 *
 * Instruções de instalação: ver COMO-ATIVAR.md
 */

/* ====================== CONFIGURAÇÃO ====================== */

// Quem recebe o aviso. Separe por vírgula.
const EMAILS = 'inhousecardetail@gmail.com,torresbruno674@gmail.com';

// Nome da aba da planilha. Ela é criada sozinha na primeira pré-reserva.
const ABA = 'Agendamentos';

// Aparece no assunto do e-mail.
const MARCA = 'IN HOUSE';

/* ====================== COLUNAS ====================== */

const COLUNAS = [
  'Recebido em', 'Código', 'Status',
  'Data', 'Período', 'Serviço', 'Nível',
  'Preço base', 'Adicionais', 'Total adicionais', 'Deslocamento', 'Estimativa',
  'Cliente', 'Telefone', 'Veículo',
  'Endereço', 'Cidade', 'Complemento', 'Observações',
  'Água/energia', 'Consentiu LGPD',
];

/* ====================== ENTRADA ====================== */

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    const linha = gravar(d);
    enviarEmail(d, linha);
    return json({ ok: true, code: d.codigo || '', linha: linha });
  } catch (err) {
    // Mesmo com erro, tenta avisar por e-mail para nenhum pedido se perder
    try {
      MailApp.sendEmail({
        to: EMAILS,
        subject: '[' + MARCA + '] ERRO ao registrar uma pré-reserva',
        body: 'Deu erro ao processar. Conteúdo bruto recebido:\n\n' +
              (e && e.postData ? e.postData.contents : '(vazio)') +
              '\n\nErro: ' + err,
      });
    } catch (e2) {}
    return json({ ok: false, motivo: String(err) });
  }
}

/** Consulta de períodos já ocupados num dia.
 *  Use quando quiser ligar a trava de agenda compartilhada no site. */
function doGet(e) {
  const data = (e.parameter && e.parameter.data) || '';
  if (!data) return json({ ok: true, times: [] });

  const sh = aba();
  const vals = sh.getDataRange().getValues();
  const iData = COLUNAS.indexOf('Data');
  const iPer  = COLUNAS.indexOf('Período');
  const iSt   = COLUNAS.indexOf('Status');

  const times = [];
  for (let i = 1; i < vals.length; i++) {
    const st = String(vals[i][iSt] || '').toLowerCase();
    if (st.indexOf('cancel') === 0) continue;              // cancelado libera a vaga
    if (String(vals[i][iData]) !== data) continue;
    const p = String(vals[i][iPer] || '');
    const hora = (p.match(/\d{2}:\d{2}/) || [''])[0];
    if (hora && times.indexOf(hora) === -1) times.push(hora);
  }
  return json({ ok: true, times: times });
}

/* ====================== PLANILHA ====================== */

function aba() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(ABA);
  if (!sh) sh = ss.insertSheet(ABA);

  if (sh.getLastRow() === 0) {
    sh.appendRow(COLUNAS);
    const h = sh.getRange(1, 1, 1, COLUNAS.length);
    h.setFontWeight('bold').setBackground('#011125').setFontColor('#e3bb74');
    sh.setFrozenRows(1);
    sh.setColumnWidth(COLUNAS.indexOf('Endereço') + 1, 260);
    sh.setColumnWidth(COLUNAS.indexOf('Observações') + 1, 220);
    sh.setColumnWidth(COLUNAS.indexOf('Adicionais') + 1, 220);

    // Status vira lista suspensa, para você só escolher
    const regra = SpreadsheetApp.newDataValidation()
      .requireValueInList(['Pendente', 'Confirmado', 'Concluído', 'Cancelado', 'Não compareceu'], true)
      .setAllowInvalid(false).build();
    sh.getRange(2, COLUNAS.indexOf('Status') + 1, 5000).setDataValidation(regra);
  }
  return sh;
}

function gravar(d) {
  const sh = aba();
  sh.appendRow([
    new Date(), d.codigo || '', 'Pendente',
    d.data || '', d.janela || '', d.servico || '', d.nivel || '',
    num(d.precoBase), d.adicionais || '', num(d.totalAdicionais),
    num(d.deslocamento), num(d.estimativa),
    d.nome || '', d.telefone || '', d.modelo || '',
    d.endereco || '', d.cidade || '', d.complemento || '', d.obs || '',
    d.temEstrutura ? 'sim' : 'não', d.consenteLGPD ? 'sim' : 'não',
  ]);
  return sh.getLastRow();
}

function num(v) {
  const n = Number(v);
  return isNaN(n) || v === null || v === '' ? '' : n;
}

/* ====================== E-MAIL ====================== */

function enviarEmail(d, linha) {
  const zap = 'https://wa.me/' + soDigitos(d.telefone);
  const mapa = 'https://www.google.com/maps/search/?api=1&query=' +
               encodeURIComponent((d.endereco || '') + ' ' + (d.cidade || ''));
  const planilha = SpreadsheetApp.getActiveSpreadsheet().getUrl();

  const assunto = '[' + MARCA + '] ' + (d.servico || 'Pré-reserva') +
                  ' — ' + (d.janela || '') + ' — ' + (d.nome || '');

  const linhas = [
    ['Código',        d.codigo],
    ['Serviço',       d.servico + (d.nivel ? ' (nível ' + d.nivel + ')' : '')],
    ['Adicionais',    d.adicionais || '—'],
    ['Data',          d.data],
    ['Período',       d.janela],
    ['Estimativa',    d.estimativa ? 'R$ ' + d.estimativa : 'sob avaliação'],
    ['—', '—'],
    ['Cliente',       d.nome],
    ['Telefone',      d.telefone],
    ['Veículo',       d.modelo || '—'],
    ['Endereço',      d.endereco],
    ['Referência',    d.complemento || '—'],
    ['Água/energia',  d.temEstrutura ? 'confirmado' : 'NÃO CONFIRMADO'],
    ['Observações',   d.obs || '—'],
  ];

  const tabela = linhas.map(function (p) {
    if (p[0] === '—') return '<tr><td colspan="2" style="height:10px"></td></tr>';
    return '<tr>' +
      '<td style="padding:7px 14px 7px 0;color:#667;white-space:nowrap;vertical-align:top">' + p[0] + '</td>' +
      '<td style="padding:7px 0;font-weight:600;color:#111">' + escapar(p[1]) + '</td></tr>';
  }).join('');

  const html =
    '<div style="font-family:Arial,Helvetica,sans-serif;max-width:560px">' +
    '<div style="background:#011125;color:#e3bb74;padding:16px 20px;border-radius:10px 10px 0 0">' +
      '<div style="font-size:13px;letter-spacing:2px">NOVA PRÉ-RESERVA</div>' +
      '<div style="font-size:22px;color:#fff;font-weight:bold;margin-top:4px">' + escapar(d.nome) + '</div>' +
    '</div>' +
    '<div style="border:1px solid #e3e3e8;border-top:none;border-radius:0 0 10px 10px;padding:18px 20px">' +
      '<table style="font-size:14px;border-collapse:collapse;width:100%">' + tabela + '</table>' +
      '<div style="margin-top:20px">' +
        botao(zap, '#1faa54', 'Chamar no WhatsApp') +
        botao(mapa, '#3b6fd4', 'Ver endereço no mapa') +
        botao(planilha, '#6b6b72', 'Abrir a planilha') +
      '</div>' +
      '<p style="font-size:12px;color:#888;margin-top:18px">' +
        'Linha ' + linha + ' da aba ' + ABA + '. ' +
        'O cliente pode não ter enviado a mensagem no WhatsApp — confirme você.' +
      '</p>' +
    '</div></div>';

  MailApp.sendEmail({
    to: EMAILS,
    subject: assunto,
    htmlBody: html,
    body: linhas.map(function (p) { return p[0] + ': ' + p[1]; }).join('\n'),
    name: MARCA + ' — site',
  });
}

function botao(url, cor, texto) {
  return '<a href="' + url + '" style="display:inline-block;margin:0 8px 8px 0;padding:10px 16px;' +
         'background:' + cor + ';color:#fff;text-decoration:none;border-radius:6px;font-size:13px;' +
         'font-weight:bold">' + texto + '</a>';
}

function soDigitos(tel) {
  const s = String(tel || '').replace(/\D/g, '');
  if (!s) return '';
  return s.length <= 11 ? '55' + s : s;   // acrescenta o código do país se faltar
}

function escapar(v) {
  return String(v === undefined || v === null || v === '' ? '—' : v)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ====================== TESTE ======================
   Rode esta função uma vez no editor para conferir que
   a planilha é criada e o e-mail chega.
   =================================================== */
function testar() {
  const exemplo = {
    codigo: 'IH-TESTE', data: '2026-09-20', janela: 'Início da tarde · 13:00',
    servico: 'Lavagem Técnica', nivel: 2, precoBase: 150,
    adicionais: 'Enceramento técnico (50); Limpeza de teto (80)',
    totalAdicionais: 130, deslocamento: 20, estimativa: 300,
    nome: 'Cliente de Teste', telefone: '(44) 99721-5139', modelo: 'Onix prata',
    endereco: 'Av. Brasil, 1000 - Zona 1, Maringá', cidade: 'Maringá',
    complemento: 'Portão azul', obs: 'Isto é um teste.',
    temEstrutura: true, consenteLGPD: true,
  };
  const l = gravar(exemplo);
  enviarEmail(exemplo, l);
  Logger.log('Gravado na linha ' + l + ' e e-mail enviado para ' + EMAILS);
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
