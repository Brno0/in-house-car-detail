/* ==========================================================================
   [ FASE 2 ] MANIFESTO DE FOTOS
   --------------------------------------------------------------------------
   Único lugar a editar para colocar fotos no ar. Salve o arquivo na pasta
   indicada e cole o caminho entre as aspas. Aspas vazias = marcador cinza.
   ========================================================================== */
const PHOTOS = {
  /* ---------- JÁ NO AR (29 fotos) ---------- */

  /* Capas dos cards de lavagem */
  'SRV-EXPRESSA-CAPA'  : 'assets/img/servicos/expressa-capa.webp',
  'SRV-TECNICA-CAPA'   : 'assets/img/servicos/tecnica-capa.webp',
  'SRV-DETALHADA-CAPA' : 'assets/img/servicos/detalhada-capa.webp',

  /* Bloco do Polimento */
  'SRV-POLIMENTO-CAPA' : 'assets/img/servicos/polimento-capa.webp',

  /* Galerias dos modais */
  'SRV-EXPRESSA-1' : 'assets/img/servicos/expressa-1.webp',
  'SRV-EXPRESSA-2' : 'assets/img/servicos/expressa-2.webp',
  'SRV-EXPRESSA-3' : 'assets/img/servicos/expressa-3.webp',

  'SRV-TECNICA-1'  : 'assets/img/servicos/tecnica-1.webp',
  'SRV-TECNICA-2'  : 'assets/img/servicos/tecnica-2.webp',
  'SRV-TECNICA-3'  : 'assets/img/servicos/tecnica-3.webp',

  'SRV-DETALHADA-1': 'assets/img/servicos/detalhada-1.webp',
  'SRV-DETALHADA-2': 'assets/img/servicos/detalhada-2.webp',
  'SRV-DETALHADA-3': 'assets/img/servicos/detalhada-3.webp',

  /* ---------- AINDA FALTAM (7 espaços) ---------- */

  /* Faixa panorâmica — você trabalhando na garagem do cliente */
  'FAIXA-01'     : '',   // assets/img/hero/faixa-domicilio.jpg   horizontal, 2100x900

  /* Antes e depois — mesmo carro, mesmo ângulo, mesma luz */
  'AD-01-ANTES'  : '',   // assets/img/antes-depois/01-antes.jpg   horizontal, 1600x1000
  'AD-01-DEPOIS' : '',   // assets/img/antes-depois/01-depois.jpg  horizontal, 1600x1000

  /* Galeria em mosaico (masonry — cada foto mantém a própria proporção) */
  'GAL-01' : 'assets/img/galeria/01.webp',
  'GAL-02' : 'assets/img/galeria/02.webp',
  'GAL-03' : 'assets/img/galeria/03.webp',
  'GAL-04' : 'assets/img/galeria/04.webp',
  'GAL-05' : 'assets/img/galeria/05.webp',
  'GAL-06' : 'assets/img/galeria/06.webp',
  'GAL-07' : 'assets/img/galeria/07.webp',
  'GAL-08' : 'assets/img/galeria/08.webp',
  'GAL-09' : 'assets/img/galeria/09.webp',
  'GAL-10' : 'assets/img/galeria/10.webp',
  'GAL-11' : 'assets/img/galeria/11.webp',
  'GAL-12' : 'assets/img/galeria/12.webp',
  'GAL-13' : 'assets/img/galeria/13.webp',
  'GAL-14' : 'assets/img/galeria/14.webp',
  'GAL-15' : 'assets/img/galeria/15.webp',
  'GAL-16' : 'assets/img/galeria/16.webp',

  /* Galeria do modal do Polimento */
  'SRV-POLIMENTO-1':'', 'SRV-POLIMENTO-2':'', 'SRV-POLIMENTO-3':'',

  /* Fundo do topo — ativado no CSS, não aqui. Ver IMAGENS.md */
  'HERO-BG' : '',
};

/* ==========================================================================
   FOCO DO RECORTE
   Onde a foto deve ficar "ancorada" quando o espaço corta parte dela.
   '50% 50%' = centro. Aumente o segundo valor para mostrar mais a parte de
   baixo (útil quando o carro está na metade inferior do enquadramento).
   ========================================================================== */
const FOCO = {
  'SRV-EXPRESSA-CAPA' : '50% 66%',
  'SRV-TECNICA-CAPA'  : '50% 70%',
  'SRV-DETALHADA-CAPA': '50% 64%',
  'SRV-POLIMENTO-CAPA': '50% 58%',
};

/* Dimensões reais de cada foto. Servem para o navegador reservar o espaço
   antes de a imagem carregar — sem isso a galeria "pula" durante a rolagem. */
const SIZES = {
  'GAL-01':[900,1200],
  'GAL-02':[960,513],
  'GAL-03':[1200,900],
  'GAL-04':[900,1200],
  'GAL-05':[900,1200],
  'GAL-06':[1200,502],
  'GAL-07':[900,1200],
  'GAL-08':[900,1200],
  'GAL-09':[900,1200],
  'GAL-10':[900,1200],
  'GAL-11':[900,1200],
  'GAL-12':[900,1200],
  'GAL-13':[900,1200],
  'GAL-14':[900,1200],
  'GAL-15':[900,1200],
  'GAL-16':[900,1200],
  'SRV-DETALHADA-1':[675,900],
  'SRV-DETALHADA-2':[900,675],
  'SRV-DETALHADA-3':[675,900],
  'SRV-DETALHADA-CAPA':[900,1125],
  'SRV-EXPRESSA-1':[675,900],
  'SRV-EXPRESSA-2':[675,900],
  'SRV-EXPRESSA-3':[675,900],
  'SRV-EXPRESSA-CAPA':[900,1125],
  'SRV-POLIMENTO-CAPA':[1100,1200],
  'SRV-TECNICA-1':[675,900],
  'SRV-TECNICA-2':[675,900],
  'SRV-TECNICA-3':[675,900],
  'SRV-TECNICA-CAPA':[747,934],
};

/* ==========================================================================
   ENVIO DA PRÉ-RESERVA (e-mail + planilha)
   --------------------------------------------------------------------------
   Cole abaixo a URL do Google Apps Script (termina em /exec).
   Passo a passo em backend/COMO-ATIVAR.md

   Com a URL preenchida, TODA pré-reserva vira um e-mail para você e uma linha
   na planilha — mesmo que o cliente não chegue a enviar a mensagem no WhatsApp.
   Vazio, o site só abre o WhatsApp e nada é registrado.
   ========================================================================== */
const BOOKING_API = 'https://script.google.com/macros/s/AKfycbzYYHOU3eZvRHFYjX_QSCsnid4k6nQJ2SHnGpV5HI7go3kVr__w93rzfQ079m5Jxi65/exec';

/* Trava de agenda entre clientes diferentes.
   Só ligue (true) depois de confirmar que a planilha está recebendo: com isso
   o site passa a consultar os períodos já ocupados antes de mostrar as opções. */
const AGENDA_COMPARTILHADA = false;

/* ==========================================================================
   SEÇÕES SEM FOTO
   false = mostra os marcadores cinza (bom enquanto você está montando)
   true  = esconde a seção inteira até ter foto (use antes de publicar)
   ========================================================================== */
const ESCONDER_SECOES_SEM_FOTO = false;

/* ========================= CONTATO ========================= */
const WHATSAPP = '5544997215139';   // (44) 99721-5139 — Bruno Torres
const TAXA_FORA_MARINGA = 20;

/* ==========================================================================
   REGRA DE ADICIONAIS
   --------------------------------------------------------------------------
   O catálogo diz que adicionais valem "para as lavagens nível 1 e 2".
   Aqui a regra é por ITEM, não por nível: cada pacote mostra apenas os
   adicionais que ele ainda NÃO inclui. Na prática a Detalhada continua sem
   quase nada para vender (já inclui 8 dos 11), mas libera couro, teto e
   motor — R$ 160 que o catálogo bloqueava justamente no cliente que mais paga.

   Para voltar à regra literal do catálogo, troque para false.
   ========================================================================== */
const ADICIONAIS_NA_DETALHADA = true;

/* ========================= ADICIONAIS ========================= */
const ADICIONAIS = [
  { id:'encer',     nome:'Enceramento técnico',                preco:50 },
  { id:'cera',      nome:'Cera líquida',                       preco:20 },
  { id:'plast_int', nome:'Proteção de plásticos internos',     preco:30 },
  { id:'plast_ext', nome:'Proteção de plásticos externos',     preco:20 },
  { id:'ca_vidros', nome:'Remoção de chuva ácida — vidros',    preco:20 },
  { id:'ca_para',   nome:'Remoção de chuva ácida — parabrisa', preco:30 },
  { id:'couro',     nome:'Higienização e hidratação de couro', preco:40 },
  { id:'rodas',     nome:'Limpeza de rodas e caixas de roda',  preco:10 },
  { id:'frestas',   nome:'Detalhamento de frestas',            preco:10 },
  { id:'teto',      nome:'Limpeza de teto',                    preco:80 },
  { id:'motor',     nome:'Lavagem de cofre (motor)',           preco:80 },
];

/* ========================= LAVAGENS ========================= */
const SERVICES = [
  {
    id:'expressa', code:'EXPRESSA', nivel:1, icon:'expressa',
    name:'Lavagem Expressa', preco:80,
    tagline:'O essencial para manter o carro limpo e apresentável.',
    long:'A manutenção do dia a dia. Lava, aspira e deixa o carro apresentável sem entrar em detalhamento. É o serviço para quem lava com frequência e quer manter o padrão.',
    includes:['Pré-lavagem','Lavagem','Aspiração e limpeza de tapetes','Limpeza de painel e portas','Selante nos pneus'],
    inclusos:[],
  },
  {
    id:'tecnica', code:'TECNICA', nivel:2, icon:'tecnica',
    name:'Lavagem Técnica', preco:150,
    tagline:'Cuidado completo por dentro e por fora, com mais proteção.',
    long:'Tudo da Expressa mais as etapas de proteção: rodas e caixas de roda limpas, plásticos externos restaurados, plásticos do painel recuperados, cera líquida na pintura e anti-bacteriano nas áreas de contato.',
    includes:['Tudo da Lavagem Expressa','Limpeza de rodas e caixas de roda','Restauração de plásticos externos','Restauração de plásticos internos — somente painel','Cera líquida','Anti-bacteriano no painel e portas'],
    inclusos:['rodas','plast_ext','cera','plast_int'],
  },
  {
    id:'detalhada', code:'DETALHADA', nivel:3, icon:'detalhada', destaque:true,
    name:'Lavagem Detalhada', preco:250,
    tagline:'Tratamento premium que devolve o brilho de carro novo.',
    long:'O pacote completo. Tudo da Técnica mais o detalhamento fino: cantos e frestas, vidros e parabrisa descontaminados, enceramento técnico e restauração dos plásticos internos.',
    includes:['Tudo da Lavagem Técnica','Detalhamento de cantos e frestas','Descontaminação de vidros e parabrisa','Enceramento técnico','Restauração de plásticos internos — painel, portas e console'],
    inclusos:['rodas','plast_ext','cera','encer','frestas','ca_vidros','ca_para','plast_int'],
  },
];

/* ========================= POLIMENTO (linha separada) ========================= */
const POLIMENTO = {
  id:'polimento', code:'POLIMENTO', icon:'polimento',
  name:'Polimento', preco:null, sobAvaliacao:true,
  tagline:'Remove riscos leves e devolve o brilho da pintura.',
  long:'Polimento técnico para riscos superficiais, swirls e oxidação leve. O preço depende do estado real da pintura, por isso avaliamos o veículo antes de passar qualquer valor — não trabalhamos com preço fechado sem ver o carro.',
  includes:['Avaliação da pintura antes de iniciar','Remoção de riscos leves e swirls','Restauração do brilho','Orçamento fechado só após a avaliação'],
  inclusos:[],
  aceitaAdicionais:false,
};

const TODOS_SERVICOS = [...SERVICES, POLIMENTO];

function adicionaisDisponiveis(srv){
  if(!srv || srv.aceitaAdicionais === false) return [];
  if(srv.id === 'detalhada' && !ADICIONAIS_NA_DETALHADA) return [];
  return ADICIONAIS.filter(a => !srv.inclusos.includes(a.id));
}

/* ========================= ÍCONES ========================= */
const ICONS = {
  expressa:'<path d="M4 30 L8 18 Q11 12 18 12 L30 12 Q37 12 40 18 L44 30" stroke="currentColor" stroke-width="2" fill="none"/><line x1="2" y1="30" x2="46" y2="30" stroke="currentColor" stroke-width="2"/><circle cx="13" cy="30" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="35" cy="30" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M6 6 L10 10 M14 4 L16 9" stroke="currentColor" stroke-width="2"/>',
  tecnica:'<path d="M24 5 L39 13 V24 C39 32 32 37 24 40 C16 37 9 32 9 24 V13 Z" stroke="currentColor" stroke-width="2" fill="none"/><path d="M17 23.5 L22 28.5 L31 18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>',
  detalhada:'<path d="M22 8 L25 20 L37 23 L25 26 L22 38 L19 26 L7 23 L19 20 Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/><path d="M37 6 L38.2 10 L42 11.2 L38.2 12.4 L37 16.4 L35.8 12.4 L32 11.2 L35.8 10 Z" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linejoin="round"/>',
  polimento:'<circle cx="24" cy="24" r="14" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="24" cy="24" r="5" stroke="currentColor" stroke-width="2" fill="none"/><line x1="24" y1="4" x2="24" y2="9" stroke="currentColor" stroke-width="2"/><line x1="24" y1="39" x2="24" y2="44" stroke="currentColor" stroke-width="2"/><line x1="4" y1="24" x2="9" y2="24" stroke="currentColor" stroke-width="2"/><line x1="39" y1="24" x2="44" y2="24" stroke="currentColor" stroke-width="2"/>',
};

/* ==========================================================================
   JANELAS DE ATENDIMENTO
   --------------------------------------------------------------------------
   Três por dia, no lugar das 10 de uma hora. O cliente escolhe o período;
   a hora exata de chegada e a duração são fechadas no WhatsApp.

   Para restringir uma janela a certos serviços, adicione o campo `janelas`
   ao serviço em SERVICES. Exemplo — Detalhada só de manhã e no começo da tarde:
       janelas:['manha','tarde']
   Sem esse campo, o serviço aceita todas as janelas.
   ========================================================================== */
const JANELAS = [
  { id:'manha', hora:'08:00', label:'Manhã',            sub:'chegamos a partir das 8h'  },
  { id:'tarde', hora:'13:00', label:'Início da tarde',  sub:'chegamos a partir das 13h' },
  { id:'fim',   hora:'16:00', label:'Fim da tarde',     sub:'chegamos a partir das 16h' },
];
function janelasDoServico(srv){
  if(!srv || !srv.janelas) return JANELAS;
  return JANELAS.filter(j => srv.janelas.includes(j.id));
}
function janelaLabel(hora){
  const j = JANELAS.find(x=>x.hora===hora);
  return j ? `${j.label} · ${j.hora}` : hora;
}
const WEEKDAY_LABEL = ['DOM','SEG','TER','QUA','QUI','SEX','SÁB'];
const MONTHS = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];

/* ========================= UTILIDADES ========================= */
const $  = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>Array.from(r.querySelectorAll(s));
const esc = (v='') => String(v).replace(/[&<>"']/g, c => (
  {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]
));
const brl = n => 'R$ ' + Number(n).toLocaleString('pt-BR');

/* ========================= SLOTS DE FOTO ========================= */
function slotMarkup(code, meta, extraClass=''){
  const src = PHOTOS[code];
  if(src){
    const d = SIZES[code];
    const dim = d ? ` width="${d[0]}" height="${d[1]}"` : '';
    const foco = FOCO[code] ? ` style="object-position:${FOCO[code]}"` : '';
    return `<div class="slot is-filled ${extraClass}" data-slot="${code}">
      <img src="${esc(src)}" alt="${esc(meta.alt || 'IN HOUSE CAR DETAIL')}" loading="lazy" decoding="async"${dim}${foco}>
    </div>`;
  }
  return `<div class="slot ${extraClass}" data-slot="${code}">
    <div class="slot-empty">
      <span class="code">${code}</span>
      <span class="meta">${meta.hint || ''}</span>
    </div>
  </div>`;
}

function hydrateStaticSlots(){
  $$('[data-slot]').forEach(el=>{
    const code = el.dataset.slot;
    const src = PHOTOS[code];
    if(!src || el.querySelector('img')) return;
    const img = document.createElement('img');
    img.src = src; img.loading = 'lazy'; img.decoding = 'async';
    img.alt = 'IN HOUSE CAR DETAIL';
    const d = SIZES[code];
    if(d){ img.width = d[0]; img.height = d[1]; }
    if(FOCO[code]) img.style.objectPosition = FOCO[code];
    el.appendChild(img);
    el.classList.add('is-filled');
  });
}

/* ========================= SEÇÃO DE SERVIÇOS ========================= */
function renderServiceGrid(){
  $('#serviceGrid').innerHTML = SERVICES.map(s => `
    <article class="service-card ${s.destaque ? 'destaque' : ''}">
      ${s.destaque ? '<span class="card-flag">mais completo</span>' : ''}
      ${slotMarkup(`SRV-${s.code}-CAPA`, {hint:'capa 4:5 · 900x1125', alt:s.name}, 'ratio-4-5')}
      <div class="card-body">
        <div class="card-top">
          <svg class="service-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">${ICONS[s.icon]}</svg>
          <span class="nivel">Nível ${s.nivel}</span>
        </div>
        <h3><button class="card-trigger" data-id="${s.id}">${esc(s.name)}</button></h3>
        <p class="preco"><small>a partir de</small>${brl(s.preco)}</p>
        <p class="card-tagline">${esc(s.tagline)}</p>
        <ul class="card-list">${s.includes.slice(0,3).map(i=>`<li>${esc(i)}</li>`).join('')}</ul>
        <span class="tag">ver tudo que está incluso</span>
      </div>
    </article>
  `).join('');

  $('#polimentoBlock').innerHTML = `
    ${slotMarkup('SRV-POLIMENTO-CAPA', {hint:'3:4 · 900x1200<br>pintura com brilho / reflexo', alt:'Polimento'}, '')}
    <div class="pol-body">
      <span class="pol-eyebrow">Serviço avulso</span>
      <h3>Polimento</h3>
      <p>${esc(POLIMENTO.long)}</p>
      <ul class="card-list">${POLIMENTO.includes.map(i=>`<li>${esc(i)}</li>`).join('')}</ul>
      <div class="pol-actions">
        <span class="pol-preco">Preço sob avaliação</span>
        <button class="btn btn-gold" data-servico="polimento">Pedir avaliação</button>
      </div>
    </div>`;

  $$('.card-trigger').forEach(b=>b.addEventListener('click', ()=>openServiceModal(b.dataset.id)));
  $$('[data-servico]').forEach(b=>b.addEventListener('click', ()=>{
    state.service = TODOS_SERVICOS.find(x=>x.id===b.dataset.servico);
    state.adicionais = [];
    goTo('agenda');
    scrollToId('#agendamento');
  }));
}

/* ========================= MODAL DE SERVIÇO ========================= */
let lastFocused = null;

function openServiceModal(id){
  const s = TODOS_SERVICOS.find(x=>x.id===id);
  const overlay = $('#modalOverlay');
  lastFocused = document.activeElement;

  const gallery = [1,2,3].map(n =>
    slotMarkup(`SRV-${s.code}-${n}`, {hint:'vertical · 675x900', alt:s.name})
  ).join('');

  const precoTxt = s.sobAvaliacao
    ? '<span class="modal-preco sob">Preço sob avaliação</span>'
    : `<span class="modal-preco"><small>a partir de</small> ${brl(s.preco)}</span>`;

  $('#modalContent').innerHTML = `
    <button class="modal-close" id="modalCloseBtn" aria-label="Fechar">✕</button>
    <div class="modal-head">
      <svg class="modal-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">${ICONS[s.icon]}</svg>
      <div>
        <h3>${esc(s.name)}</h3>
        ${precoTxt}
      </div>
    </div>
    <p class="desc">${esc(s.long)}</p>
    <ul class="modal-list">${s.includes.map(i=>`<li>${esc(i)}</li>`).join('')}</ul>
    <div class="modal-gallery">${gallery}</div>
    <p class="modal-nota">O valor pode variar conforme o tamanho e o estado do veículo. Confirmamos no WhatsApp antes de fechar.</p>
    <div class="modal-actions">
      <button class="btn btn-gold" id="chooseServiceBtn">Escolher este serviço</button>
      <button class="btn btn-ghost" id="closeServiceBtn">Fechar</button>
    </div>`;

  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';

  $('#modalCloseBtn').addEventListener('click', closeServiceModal);
  $('#closeServiceBtn').addEventListener('click', closeServiceModal);
  $('#chooseServiceBtn').addEventListener('click', ()=>{
    state.service = s;
    state.adicionais = [];
    closeServiceModal();
    goTo(flow()[1]);
    scrollToId('#agendamento');
  });
  $('#modalCloseBtn').focus();
}

function closeServiceModal(){
  const overlay = $('#modalOverlay');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
  if(lastFocused) lastFocused.focus();
}

/* ========================= ANTES / DEPOIS ========================= */
function initBeforeAfter(){
  const range = $('#baRange'), after = $('#baAfter'), handle = $('#baHandle');
  if(!range) return;
  const apply = ()=>{
    after.style.clipPath = `inset(0 0 0 ${range.value}%)`;
    handle.style.left = `${range.value}%`;
  };
  range.addEventListener('input', apply);
  apply();
}

/* ========================= LIGHTBOX ========================= */
function initLightbox(){
  const lb = $('#lightbox'), lbImg = $('#lightboxImg');
  $('#mosaico').addEventListener('click', e=>{
    const img = e.target.closest('.slot.is-filled img');
    if(!img) return;
    lbImg.src = img.src; lbImg.alt = img.alt;
    lb.classList.add('open'); lb.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  });
  const close = ()=>{
    lb.classList.remove('open'); lb.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  };
  $('#lightboxClose').addEventListener('click', close);
  lb.addEventListener('click', e=>{ if(e.target === lb) close(); });
  document.addEventListener('keydown', e=>{
    if(e.key !== 'Escape') return;
    if(lb.classList.contains('open')) close();
    if($('#modalOverlay').classList.contains('open')) closeServiceModal();
    if($('#privOverlay').classList.contains('open')) fecharPrivacidade();
  });
}

/* ========================= ESTADO ========================= */
let state = {
  step:'servico', service:null, adicionais:[], date:null, time:null, code:null,
  form:{ nome:'', telefone:'', endereco:'', numero:'', bairro:'', cidade:'', complemento:'', modelo:'', obs:'', temEstrutura:false, consenteLGPD:false },
};

/* Etapas variam: Polimento não tem adicionais, então pula essa tela. */
function flow(){
  const f = ['servico'];
  if(adicionaisDisponiveis(state.service).length) f.push('adicionais');
  return f.concat(['agenda','dados','revisao']);
}
const STEP_TITLES = {
  servico:'Serviço', adicionais:'Adicionais', agenda:'Data e período',
  dados:'Seus dados', revisao:'Pré-reserva',
};
function goTo(step){ state.step = step; renderStep(); }
function stepIndex(){ return flow().indexOf(state.step); }
function nextStep(){ const f = flow(); goTo(f[Math.min(stepIndex()+1, f.length-1)]); }
function prevStep(){ const f = flow(); goTo(f[Math.max(stepIndex()-1, 0)]); }

/* ========================= CÁLCULO ========================= */
function foraDeMaringa(){
  const c = state.form.cidade.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  return c !== '' && c !== 'maringa';
}
function totalAdicionais(){
  return state.adicionais.reduce((t,id)=>{
    const a = ADICIONAIS.find(x=>x.id===id);
    return t + (a ? a.preco : 0);
  },0);
}
function estimativa(){
  if(!state.service || state.service.sobAvaliacao) return null;
  return state.service.preco + totalAdicionais() + (foraDeMaringa() ? TAXA_FORA_MARINGA : 0);
}

/* ========================= PERSISTÊNCIA ========================= */
const DEMO_MODE = !BOOKING_API;

const Store = {
  async getDay(iso){
    if(BOOKING_API && AGENDA_COMPARTILHADA){
      try{
        const r = await fetch(`${BOOKING_API}?action=dia&data=${iso}`);
        const j = await r.json();
        return { times: j.times || [] };
      }catch(e){ console.error('[IN HOUSE] falha ao ler a agenda', e); return { times:[] }; }
    }
    if(window.storage){
      try{
        const res = await window.storage.get('day:'+iso, true);
        return res && res.value ? JSON.parse(res.value) : { times:[], details:[] };
      }catch(e){ return { times:[], details:[] }; }
    }
    try{
      const raw = localStorage.getItem('ih:day:'+iso);
      return raw ? JSON.parse(raw) : { times:[], details:[] };
    }catch(e){ return { times:[], details:[] }; }
  },

  /* Só guarda no navegador. O envio ao backend é feito por enviarParaBackend(),
     que é o caminho único — duas chamadas criariam duas linhas na planilha e
     dois e-mails por agendamento. */
  async saveBooking(iso, entry){
    const rec = await Store.getDay(iso);
    if(rec.times.includes(entry.time)) return { ok:false, motivo:'ocupado' };
    rec.times.push(entry.time);
    (rec.details = rec.details || []).push(entry);
    try{
      if(window.storage) await window.storage.set('day:'+iso, JSON.stringify(rec), true);
      else localStorage.setItem('ih:day:'+iso, JSON.stringify(rec));
    }catch(e){ return { ok:false, motivo:'gravacao' }; }
    return { ok:true, code: entry.codigo };
  },
};

if(DEMO_MODE){
  console.warn('[IN HOUSE] BOOKING_API está vazio em assets/js/app.js. As pré-reservas NÃO estão sendo enviadas por e-mail nem gravadas na planilha — o site só abre o WhatsApp. Veja backend/COMO-ATIVAR.md');
}

/* ========================= DATAS ========================= */
function getUpcomingWeekendDates(count=8){
  const dates = [], d = new Date();
  d.setHours(0,0,0,0); d.setDate(d.getDate()+1);
  while(dates.length < count){
    const dow = d.getDay();
    if(dow === 6 || dow === 0){
      const iso = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
      dates.push({ iso, dow:WEEKDAY_LABEL[dow], dnum:d.getDate(), month:MONTHS[d.getMonth()] });
    }
    d.setDate(d.getDate()+1);
  }
  return dates;
}

/* ========================= STEPPER ========================= */
function renderStepper(){
  const f = flow(), atual = stepIndex();
  $('#stepper').innerHTML = f.map((s,i)=>{
    const cls = i === atual ? 'active' : (i < atual ? 'done' : '');
    return `<div class="s ${cls}">${i+1}. ${STEP_TITLES[s]}</div>`;
  }).join('');
}

/* Aviso visual de modo demonstração removido a pedido.
   O alerta no console continua (invisível ao cliente) como lembrete de que,
   sem BOOKING_API preenchido, nenhuma pré-reserva chega até você. */
const demoBanner = '';

/* Resumo de valores mostrado na etapa de adicionais */
function barraTotal(){
  if(!state.service) return '';
  if(state.service.sobAvaliacao){
    return `<div class="total-bar"><span>Polimento</span><b class="sob">sob avaliação</b></div>`;
  }
  const add = totalAdicionais();
  return `
    <div class="total-bar">
      <div class="total-linhas">
        <span>${esc(state.service.name)} <em>${brl(state.service.preco)}</em></span>
        ${add ? `<span>${state.adicionais.length} adicional(is) <em>+ ${brl(add)}</em></span>` : ''}
      </div>
      <b>${brl(state.service.preco + add)}</b>
    </div>`;
}

/* ========================= ETAPAS ========================= */
async function renderStep(){
  renderStepper();
  const body = $('#bookingBody'), nav = $('#bookingNav');

  /* ---- Serviço ---- */
  if(state.step === 'servico'){
    body.innerHTML = `
      ${demoBanner}
      <h3>Qual serviço você precisa?</h3>
      <p class="sub">Os valores são a partir de. O preço final depende do tamanho e do estado do veículo, e é confirmado no WhatsApp.</p>
      <div class="pick-grid">
        ${TODOS_SERVICOS.map(s => `
          <button class="pick ${state.service && state.service.id===s.id ? 'selected':''}" data-id="${s.id}">
            <b>${esc(s.name)}</b>
            <span>${esc(s.tagline)}</span>
            <em>${s.sobAvaliacao ? 'sob avaliação' : 'a partir de ' + brl(s.preco)}</em>
          </button>`).join('')}
      </div>`;
    $$('.pick', body).forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const novo = TODOS_SERVICOS.find(x=>x.id===btn.dataset.id);
        if(!state.service || state.service.id !== novo.id) state.adicionais = [];
        state.service = novo;
        renderStep();
      });
    });
    nav.innerHTML = `<span></span><button class="btn btn-gold" id="nextBtn" ${!state.service?'disabled':''}>Próximo</button>`;
    $('#nextBtn').addEventListener('click', nextStep);
  }

  /* ---- Adicionais ---- */
  else if(state.step === 'adicionais'){
    const lista = adicionaisDisponiveis(state.service);
    body.innerHTML = `
      <h3>Quer incluir algum adicional?</h3>
      <p class="sub">Opcional. Aparecem só os itens que a ${esc(state.service.name)} ainda não inclui.</p>
      <div class="add-grid">
        ${lista.map(a => `
          <label class="add-item ${state.adicionais.includes(a.id) ? 'on':''}">
            <input type="checkbox" value="${a.id}" ${state.adicionais.includes(a.id) ? 'checked':''}>
            <span class="add-nome">${esc(a.nome)}</span>
            <span class="add-preco">+ ${brl(a.preco)}</span>
          </label>`).join('')}
      </div>
      ${barraTotal()}`;
    $$('.add-item input', body).forEach(chk=>{
      chk.addEventListener('change', ()=>{
        const id = chk.value;
        state.adicionais = chk.checked
          ? [...state.adicionais, id]
          : state.adicionais.filter(x=>x!==id);
        renderStep();
      });
    });
    nav.innerHTML = `<button class="btn btn-ghost" id="backBtn">Voltar</button><button class="btn btn-gold" id="nextBtn">${state.adicionais.length ? 'Próximo' : 'Seguir sem adicionais'}</button>`;
    $('#backBtn').addEventListener('click', prevStep);
    $('#nextBtn').addEventListener('click', nextStep);
  }

  /* ---- Data e horário ---- */
  else if(state.step === 'agenda'){
    const dates = getUpcomingWeekendDates(8);
    body.innerHTML = `
      <h3>Escolha o dia e o período</h3>
      <p class="sub">Atendemos aos sábados e domingos, em três períodos por dia.</p>
      <div class="date-row">
        ${dates.map(d => `
          <button class="date-chip ${state.date && state.date.iso===d.iso ? 'selected':''}" data-iso="${d.iso}">
            <span class="dow">${d.dow}</span><span class="dnum">${d.dnum}</span><span class="dow">${d.month}</span>
          </button>`).join('')}
      </div>
      <div id="timeArea" style="margin-top:26px;"></div>`;
    $$('.date-chip', body).forEach(btn=>{
      btn.addEventListener('click', async ()=>{
        state.date = dates.find(x=>x.iso===btn.dataset.iso);
        state.time = null;
        $$('.date-chip', body).forEach(b=>b.classList.remove('selected'));
        btn.classList.add('selected');
        await renderTimeArea();
        updateAgendaNav();
      });
    });
    nav.innerHTML = `<button class="btn btn-ghost" id="backBtn">Voltar</button><button class="btn btn-gold" id="nextBtn" disabled>Próximo</button>`;
    $('#backBtn').addEventListener('click', prevStep);
    if(state.date) await renderTimeArea();
    updateAgendaNav();
  }

  /* ---- Dados ---- */
  else if(state.step === 'dados'){
    const f = state.form;
    body.innerHTML = `
      <h3>Seus dados e endereço</h3>
      <p class="sub">Usamos apenas para confirmar e realizar o atendimento.</p>
      <div class="form-grid">
        <div class="field"><label for="f_nome">NOME COMPLETO</label><input id="f_nome" value="${esc(f.nome)}" placeholder="Seu nome"></div>
        <div class="field"><label for="f_telefone">TELEFONE / WHATSAPP</label><input id="f_telefone" value="${esc(f.telefone)}" placeholder="(44) 00000-0000" inputmode="tel"></div>
        <div class="field full"><label for="f_modelo">MODELO E COR DO VEÍCULO</label><input id="f_modelo" value="${esc(f.modelo)}" placeholder="Ex: Onix prata"></div>
        <div class="field"><label for="f_endereco">RUA</label><input id="f_endereco" value="${esc(f.endereco)}" placeholder="Rua / Avenida"></div>
        <div class="field"><label for="f_numero">NÚMERO</label><input id="f_numero" value="${esc(f.numero)}" placeholder="Nº"></div>
        <div class="field"><label for="f_bairro">BAIRRO</label><input id="f_bairro" value="${esc(f.bairro)}" placeholder="Bairro"></div>
        <div class="field"><label for="f_cidade">CIDADE</label><input id="f_cidade" value="${esc(f.cidade)}" placeholder="Maringá"></div>
        <div class="taxa-nota"><span>Maringá não tem custo de deslocamento. Para <b>cidades da região, há taxa fixa de ${brl(TAXA_FORA_MARINGA)}</b>.</span></div>
        <div class="field full"><label for="f_complemento">COMPLEMENTO / PONTO DE REFERÊNCIA</label><input id="f_complemento" value="${esc(f.complemento)}" placeholder="Opcional"></div>
        <div class="field full"><label for="f_obs">OBSERVAÇÕES</label><textarea id="f_obs" placeholder="Opcional">${esc(f.obs)}</textarea></div>
        <label class="check-box full" id="checkBoxWrap">
          <input type="checkbox" id="f_estrutura" ${f.temEstrutura?'checked':''}>
          <span class="txt">
            <b>Tenho ponto de água e tomada no local</b>
            <span>Precisamos de uma torneira ou mangueira e uma tomada acessível para realizar o serviço.</span>
          </span>
        </label>
        <label class="check-box full" id="checkLgpdWrap">
          <input type="checkbox" id="f_lgpd" ${f.consenteLGPD?'checked':''}>
          <span class="txt">
            <b>Autorizo o uso dos meus dados para este atendimento</b>
            <span>Nome, telefone e endereço são usados só para confirmar e realizar o serviço. Você pode pedir a exclusão a qualquer momento. <button type="button" class="link-inline" data-privacidade>Ler o aviso de privacidade</button></span>
          </span>
        </label>
      </div>`;
    nav.innerHTML = `<button class="btn btn-ghost" id="backBtn">Voltar</button><button class="btn btn-gold" id="nextBtn">Revisar</button>`;
    $('#backBtn').addEventListener('click', ()=>{ collectForm(); prevStep(); });
    $('#nextBtn').addEventListener('click', ()=>{
      collectForm();
      const faltando = [['nome','nome'],['telefone','telefone'],['endereco','rua'],['numero','número'],['bairro','bairro'],['cidade','cidade']]
        .filter(([k])=>!state.form[k]).map(([,r])=>r);
      if(faltando.length){ alert('Faltou preencher: ' + faltando.join(', ') + '.'); return; }
      if(!state.form.temEstrutura){
        $('#checkBoxWrap').classList.add('invalid');
        alert('Confirme que há água e energia no local para continuar.');
        return;
      }
      if(!state.form.consenteLGPD){
        $('#checkLgpdWrap').classList.add('invalid');
        alert('Precisamos da sua autorização para usar os dados neste atendimento.');
        return;
      }
      nextStep();
    });
  }

  /* ---- Revisão ---- */
  else if(state.step === 'revisao'){
    const f = state.form, s = state.service, est = estimativa();
    const adds = state.adicionais.map(id=>ADICIONAIS.find(a=>a.id===id)).filter(Boolean);
    body.innerHTML = `
      <h3>Confira antes de enviar</h3>
      <p class="sub">Isto é uma pré-reserva. Nada é cobrado agora.</p>
      <div class="summary-box">
        <div class="summary-row"><span>Serviço</span><span>${esc(s.name)}${s.sobAvaliacao ? '' : ' · ' + brl(s.preco)}</span></div>
        ${adds.map(a=>`<div class="summary-row sub-row"><span>+ ${esc(a.nome)}</span><span>${brl(a.preco)}</span></div>`).join('')}
        <div class="summary-row"><span>Data</span><span>${state.date.dow} · ${state.date.dnum} ${state.date.month}</span></div>
        <div class="summary-row"><span>Período</span><span>${janelaLabel(state.time)}</span></div>
        <div class="summary-row"><span>Cliente</span><span>${esc(f.nome)}</span></div>
        <div class="summary-row"><span>Telefone</span><span>${esc(f.telefone)}</span></div>
        <div class="summary-row"><span>Veículo</span><span>${esc(f.modelo) || '—'}</span></div>
        <div class="summary-row"><span>Endereço</span><span>${esc(f.endereco)}, ${esc(f.numero)} — ${esc(f.bairro)}, ${esc(f.cidade)}</span></div>
        <div class="summary-row"><span>Deslocamento</span><span>${foraDeMaringa() ? brl(TAXA_FORA_MARINGA) + ' (fora de Maringá)' : 'Sem custo'}</span></div>
        <div class="summary-row total">
          <span>${est === null ? 'Valor' : 'Estimativa'}</span>
          <span>${est === null ? 'Sob avaliação' : brl(est)}</span>
        </div>
      </div>
      <div class="aviso-prereserva">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M12 7v6" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="16.4" r="1" fill="currentColor"/></svg>
        <div>
          <b>O pedido vai pelo WhatsApp</b>
          <p>Ao tocar no botão abaixo, abrimos o WhatsApp com este resumo já escrito — você só precisa apertar enviar. ${est === null
            ? 'Avaliamos a pintura antes de fechar o valor do polimento.'
            : 'O valor é uma estimativa; confirmamos depois de conferir o tamanho e o estado do carro.'}</p>
        </div>
      </div>`;
    nav.innerHTML = `<button class="btn btn-ghost" id="backBtn">Voltar</button><button class="btn btn-gold" id="confirmBtn">Enviar pelo WhatsApp</button>`;
    $('#backBtn').addEventListener('click', prevStep);
    $('#confirmBtn').addEventListener('click', submitBooking);
  }

  /* ---- Comprovante ---- */
  else if(state.step === 'ticket'){
    const f = state.form, s = state.service, est = estimativa();
    const adds = state.adicionais.map(id=>ADICIONAIS.find(a=>a.id===id)).filter(Boolean);
    $('#stepper').innerHTML = '';
    body.innerHTML = `
      <div class="ticket-wrap">
        <div class="ticket">
          <div class="ticket-top">
            <b>IN HOUSE</b>
            <div class="ticket-code">CÓD. ${esc(state.code)}</div>
          </div>
          <div class="ticket-row"><span>Serviço</span><b>${esc(s.name)}</b></div>
          ${adds.length ? `<div class="ticket-row"><span>Adicionais</span><b>${adds.map(a=>esc(a.nome)).join(', ')}</b></div>` : ''}
          <div class="ticket-row"><span>Data</span><b>${state.date.dow} ${state.date.dnum} ${state.date.month}</b></div>
          <div class="ticket-row"><span>Período</span><b>${janelaLabel(state.time)}</b></div>
          <div class="ticket-row"><span>Cliente</span><b>${esc(f.nome)}</b></div>
          <div class="ticket-row"><span>Endereço</span><b>${esc(f.endereco)}, ${esc(f.numero)} — ${esc(f.bairro)}</b></div>
          <div class="ticket-row"><span>${est === null ? 'Valor' : 'Estimativa'}</span><b>${est === null ? 'Sob avaliação' : brl(est)}</b></div>
          <div class="ticket-status aguardando">pedido pronto · falta enviar no whatsapp</div>
        </div>
        <div class="pos-envio">
          <b>Falta um toque</b>
          <p>Abrimos o WhatsApp com o seu pedido já escrito. <b>Toque em enviar por lá</b> para que a gente receba. Guarde o código <b>${esc(state.code)}</b>.</p>
        </div>
        <a class="btn btn-gold ticket-zap" href="${state.waUrl}" target="_blank" rel="noopener">Abrir o WhatsApp</a>
      </div>`;
    nav.innerHTML = `<span></span><button class="btn btn-ghost" id="newBookingBtn">Fazer outra pré-reserva</button>`;
    $('#newBookingBtn').addEventListener('click', resetBooking);
  }
}

/* Mensagem pronta com o resumo — funciona mesmo sem backend */
function linkWhatsApp(){
  const f = state.form, srv = state.service, est = estimativa();
  const adds = state.adicionais.map(id=>ADICIONAIS.find(a=>a.id===id)).filter(Boolean);
  const L = [
    '*PRÉ-RESERVA — IN HOUSE CAR DETAIL*',
    `Código: ${state.code || '-'}`,
    '',
    `*Serviço:* ${srv.name}${srv.sobAvaliacao ? ' (sob avaliação)' : ' — ' + brl(srv.preco)}`,
  ];
  if(adds.length) L.push(`*Adicionais:* ${adds.map(a=>`${a.nome} (${brl(a.preco)})`).join(', ')}`);
  if(state.date) L.push(`*Data:* ${state.date.dow} ${state.date.dnum}/${state.date.month} — ${janelaLabel(state.time)}`);
  L.push('',
    `*Cliente:* ${f.nome}`,
    `*Telefone:* ${f.telefone}`);
  if(f.modelo) L.push(`*Veículo:* ${f.modelo}`);
  L.push(`*Endereço:* ${f.endereco}, ${f.numero} — ${f.bairro}, ${f.cidade}`);
  if(f.complemento) L.push(`*Referência:* ${f.complemento}`);
  L.push(`*Água e energia no local:* sim`);
  L.push(`*Deslocamento:* ${foraDeMaringa() ? brl(TAXA_FORA_MARINGA) + ' (fora de Maringá)' : 'sem custo'}`);
  L.push(`*${est === null ? 'Valor' : 'Estimativa'}:* ${est === null ? 'sob avaliação' : brl(est)}`);
  if(f.obs) L.push('', `*Observações:* ${f.obs}`);
  L.push('', 'Enviado pelo site.');
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(L.join('\n'))}`;
}

/* Entrega garantida: sendBeacon continua valendo mesmo se a página for
   descarregada quando o WhatsApp assume a tela no celular. O fetch é só
   reserva, para navegador que não tenha o beacon. */
function enviarParaBackend(dados){
  if(!BOOKING_API) return;
  const corpo = JSON.stringify(dados);
  try{
    if(navigator.sendBeacon){
      const blob = new Blob([corpo], {type:'text/plain;charset=UTF-8'});
      if(navigator.sendBeacon(BOOKING_API, blob)) return;
    }
  }catch(e){}
  fetch(BOOKING_API, {
    method:'POST', mode:'no-cors', keepalive:true,
    headers:{'Content-Type':'text/plain;charset=utf-8'}, body:corpo,
  }).catch(()=>{});
}

function novoCodigo(){
  return 'IH-' + Math.random().toString(36).slice(2,7).toUpperCase();
}

function collectForm(){
  ['nome','telefone','modelo','endereco','numero','bairro','cidade','complemento','obs'].forEach(id=>{
    const el = $('#f_'+id);
    if(el) state.form[id] = el.value.trim();
  });
  const chk = $('#f_estrutura');
  if(chk) state.form.temEstrutura = chk.checked;
  const lg = $('#f_lgpd');
  if(lg) state.form.consenteLGPD = lg.checked;
}

function updateAgendaNav(){
  const nextBtn = $('#nextBtn');
  if(!nextBtn) return;
  nextBtn.disabled = !(state.date && state.time);
  nextBtn.onclick = nextStep;
}

async function renderTimeArea(){
  const timeArea = $('#timeArea');
  timeArea.innerHTML = `<p class="hint">Carregando horários...</p>`;
  const record = await Store.getDay(state.date.iso);
  const booked = (BOOKING_API && AGENDA_COMPARTILHADA) ? (record.times || []) : [];
  const janelas = janelasDoServico(state.service);
  timeArea.innerHTML = `
    <p class="sub" style="margin-bottom:10px;">Período — ${state.date.dow} ${state.date.dnum} ${state.date.month}</p>
    <div class="janela-grid">
      ${janelas.map(j => {
        const ocupada = booked.includes(j.hora);
        return `<button class="janela ${state.time===j.hora?'selected':''}" data-t="${j.hora}" ${ocupada?'disabled':''}>
          <span class="j-label">${j.label}</span>
          <span class="j-hora">${j.hora}</span>
          <span class="j-sub">${ocupada ? 'já reservado' : j.sub}</span>
        </button>`;
      }).join('')}
    </div>
    <p class="hint">Trabalhamos por período, não por hora fechada. A hora exata de chegada e a duração são combinadas no WhatsApp.</p>`;
  $$('.janela:not(:disabled)', timeArea).forEach(btn=>{
    btn.addEventListener('click', ()=>{
      state.time = btn.dataset.t;
      $$('.janela', timeArea).forEach(b=>b.classList.remove('selected'));
      btn.classList.add('selected');
      updateAgendaNav();
    });
  });
}

function submitBooking(){
  state.code = novoCodigo();
  const adds = state.adicionais.map(id=>ADICIONAIS.find(a=>a.id===id)).filter(Boolean);
  const dados = {
    codigo: state.code,
    data: state.date.iso,
    janela: janelaLabel(state.time),
    time: state.time,
    servico: state.service.name,
    nivel: state.service.nivel || '',
    precoBase: state.service.preco,
    adicionais: adds.map(a=>`${a.nome} (${a.preco})`).join('; '),
    totalAdicionais: totalAdicionais(),
    deslocamento: foraDeMaringa() ? TAXA_FORA_MARINGA : 0,
    estimativa: estimativa(),
    nome: state.form.nome,
    telefone: state.form.telefone,
    modelo: state.form.modelo,
    endereco: `${state.form.endereco}, ${state.form.numero} - ${state.form.bairro}, ${state.form.cidade}`,
    cidade: state.form.cidade,
    complemento: state.form.complemento,
    obs: state.form.obs,
    temEstrutura: state.form.temEstrutura,
    consenteLGPD: state.form.consenteLGPD,
  };

  /* Registra ANTES de abrir o WhatsApp. Assim o pedido chega até você mesmo
     que o cliente desista de enviar a mensagem. */
  enviarParaBackend(dados);
  Store.saveBooking(state.date.iso, dados).catch(()=>{});

  /* A janela precisa abrir de forma síncrona dentro do clique, senão o
     navegador trata como pop-up e bloqueia. */
  const url = linkWhatsApp();
  window.open(url, '_blank', 'noopener');
  state.waUrl = url;

  goTo('ticket');
}

function resetBooking(){
  state = { step:'servico', service:null, adicionais:[], date:null, time:null, code:null,
    form:{ nome:'', telefone:'', endereco:'', numero:'', bairro:'', cidade:'', complemento:'', modelo:'', obs:'', temEstrutura:false, consenteLGPD:false } };
  state.waUrl = null;
  renderStep();
  scrollToId('#agendamento');
}


/* ========================= AVISO DE PRIVACIDADE (LGPD) ========================= */
const PRIVACIDADE = `
  <button class="modal-close" id="privFechar" aria-label="Fechar">✕</button>
  <h3>Aviso de privacidade</h3>
  <p class="desc">Como a IN HOUSE CAR DETAIL trata os dados que você informa neste site, conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018).</p>

  <div class="priv">
    <h4>Quem é o responsável</h4>
    <p>Bruno Torres — IN HOUSE CAR DETAIL, Maringá/PR.<br>
    Contato: <a href="mailto:inhousecardetail@gmail.com">inhousecardetail@gmail.com</a> · WhatsApp (44) 99721-5139.</p>

    <h4>Que dados são coletados</h4>
    <p>Apenas o que você digita no formulário de pré-reserva: nome, telefone, endereço completo com ponto de referência, modelo e cor do veículo, e as observações que você escrever.</p>
    <p>O site <b>não usa cookies de rastreamento, nem analytics, nem pixel de anúncio</b>. Não coletamos nada em segundo plano.</p>

    <h4>Para que servem</h4>
    <p>Exclusivamente para entrar em contato, confirmar o horário e executar o serviço no endereço informado. Não usamos seus dados para publicidade e não vendemos nem cedemos a terceiros.</p>

    <h4>Como os dados chegam até nós</h4>
    <p>Ao enviar a pré-reserva, o site abre o WhatsApp com o resumo já escrito e <b>você</b> envia a mensagem. A partir daí os dados trafegam pelo WhatsApp e ficam sujeitos também à política de privacidade da Meta.</p>
    <p>Uma cópia do pedido fica guardada no seu próprio navegador, para que você possa consultá-la. Ela não é enviada a lugar nenhum e some se você limpar os dados do navegador.</p>

    <h4>Base legal</h4>
    <p>Execução de contrato e procedimentos preliminares a pedido do titular (art. 7º, V da LGPD), somados ao seu consentimento, marcado no formulário.</p>

    <h4>Por quanto tempo ficam guardados</h4>
    <p>Pelo tempo do atendimento e pelo período necessário para histórico de serviço e obrigações legais. Depois disso são apagados.</p>

    <h4>Seus direitos</h4>
    <p>Você pode pedir a qualquer momento: confirmação de que tratamos seus dados, acesso a eles, correção, exclusão, ou a revogação do consentimento. Basta pedir pelo WhatsApp ou pelo e-mail acima — respondemos em até 15 dias.</p>

    <h4>Segurança</h4>
    <p>O site é servido por HTTPS e não mantém banco de dados próprio. As conversas ficam no WhatsApp, protegido por criptografia de ponta a ponta.</p>

    <p class="priv-data">Última atualização: setembro de 2026.</p>
  </div>

  <div class="modal-actions"><button class="btn btn-ghost" id="privFechar2">Fechar</button></div>
`;

function abrirPrivacidade(){
  const ov = $('#privOverlay');
  $('#privContent').innerHTML = PRIVACIDADE;
  ov.classList.add('open');
  ov.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
  $('#privFechar').addEventListener('click', fecharPrivacidade);
  $('#privFechar2').addEventListener('click', fecharPrivacidade);
  $('#privFechar').focus();
}
function fecharPrivacidade(){
  const ov = $('#privOverlay');
  ov.classList.remove('open');
  ov.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

/* ========================= NAVEGAÇÃO ========================= */
function scrollToId(sel){
  const el = $(sel);
  if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
}

function initNav(){
  $$('[data-scroll]').forEach(b=>b.addEventListener('click', ()=>scrollToId(b.dataset.scroll)));
  const burger = $('#burgerBtn'), menu = $('#mobileMenu');
  burger.addEventListener('click', ()=>{
    const open = menu.classList.toggle('open');
    document.body.classList.toggle('menu-aberto', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.textContent = open ? '✕' : '☰';
  });
  $$('a', menu).forEach(a=>a.addEventListener('click', ()=>{
    menu.classList.remove('open');
    document.body.classList.remove('menu-aberto');
    burger.setAttribute('aria-expanded','false');
    burger.textContent = '☰';
  }));
  $('#modalOverlay').addEventListener('click', e=>{
    if(e.target.id === 'modalOverlay') closeServiceModal();
  });
  $('#privOverlay').addEventListener('click', e=>{
    if(e.target.id === 'privOverlay') fecharPrivacidade();
  });
  document.addEventListener('click', e=>{
    if(e.target.closest('[data-privacidade]')){ e.preventDefault(); abrirPrivacidade(); }
  });
  const zap = $('#waFloat');
  if(!zap) return;
  zap.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Olá! Vim pelo site e quero saber sobre a lavagem a domicílio.')}`;
  // Esconde o botão flutuante enquanto o agendamento está visível, para não
  // cobrir os botões de navegação do formulário no celular.
  const alvo = $('#agendamento');
  if(alvo && 'IntersectionObserver' in window){
    new IntersectionObserver(
      ([e]) => zap.classList.toggle('oculto', e.isIntersecting),
      { threshold: 0.18 }
    ).observe(alvo);
  }
}

function esconderSecoesVazias(){
  const secoes = [
    ['#resultados', ['AD-01-ANTES','AD-01-DEPOIS']],
    ['#galeria',    ['GAL-01','GAL-02','GAL-03','GAL-04','GAL-05','GAL-06']],
  ];
  const vazias = secoes.filter(([,codes]) => codes.every(c => !PHOTOS[c])).map(([sel]) => sel);
  if(!vazias.length) return;
  if(!ESCONDER_SECOES_SEM_FOTO){
    console.info('[IN HOUSE] Seções ainda sem foto: ' + vazias.join(', ') +
      '. Antes de publicar, preencha as fotos ou mude ESCONDER_SECOES_SEM_FOTO para true.');
    return;
  }
  vazias.forEach(sel=>{
    const el = $(sel); if(el) el.style.display = 'none';
    $$(`a[href="${sel}"]`).forEach(a => a.style.display = 'none');
  });
}

/* ========================= INICIALIZAÇÃO ========================= */
renderServiceGrid();
hydrateStaticSlots();
initBeforeAfter();
initLightbox();
initNav();
esconderSecoesVazias();
renderStep();
