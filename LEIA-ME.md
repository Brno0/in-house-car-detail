# IN HOUSE CAR DETAIL — site

Entrega das **Fases 0 e 1**. Use esta pasta como contexto do projeto daqui pra frente.

## Estrutura

```
IN_HOUSE/
├── index.html                  ← página única
├── assets/
│   ├── css/styles.css          ← todo o visual
│   ├── js/app.js               ← dados, fotos e agendamento
│   └── img/
│       ├── logo-badge*.jpg/webp    (logo redonda — nav, rodapé, favicon)
│       ├── logo-hero*.jpg/webp     (logo com o carro — topo)
│       ├── hero/                   ← fundo do topo + faixa panorâmica
│       ├── servicos/               ← capas e galerias dos 6 serviços
│       ├── antes-depois/           ← pares do comparador
│       └── galeria/                ← mosaico
├── IMAGENS.md                  ← mapa de onde vai cada foto
└── LEIA-ME.md
```

Abra o `index.html` no navegador. Funciona sem servidor.

---

## O que foi feito

### Fase 0 — base
- `Index.html` e `template.html` eram dois sites divergentes. Agora existe um só: `index.html`, baseado no `template.html` (que já tinha o modal, o requisito de água/energia e o azul certo).
- Nomes de arquivo corrigidos. `inhouse img.jpeg` → `logo-badge.jpg`; `in houseimg .jpeg` → `logo-hero.jpg`. Espaço em nome de arquivo quebra URL em servidor.
- `{{LOGO_MED}}` no rodapé era um placeholder nunca substituído — a logo do rodapé estava quebrada. Corrigido.
- CSS e JS saíram de dentro do HTML para arquivos próprios.
- Logos convertidas para WebP com fallback JPG e geradas em 3 tamanhos cada. O navegador só baixa o que vai usar:

| | antes | agora (tamanho usado) |
|---|---|---|
| logo do menu (44px) | 233 KB | **5 KB** |
| logo do topo (420px) | 283 KB | **67 KB** |
| **total no primeiro carregamento** | **516 KB** | **72 KB** |

### Fase 1 — identidade visual
- **Prata adicionada** (`--silver`, `--silver-bright`, `--silver-dim`). A logo tem "HOUSE" em cromado e o CSS anterior não tinha esse tom. Agora títulos e destaques usam prata, e o ouro fica reservado para ação e acento — hierarquia de cor que antes não existia.
- **Textura hexagonal** de fundo em toda a página, tirada do padrão da logo. SVG inline de 596 bytes, sem requisição de rede.
- **Vinheta radial** escurecendo as bordas, concentrando a atenção no centro.
- **Clarão de luz** que atravessa a logo do topo uma vez ao carregar, ecoando o flare da arte original. Passa uma vez e para — não fica piscando.
- Azuis reorganizados em 5 níveis (`--navy-900` a `--navy-600`) para dar profundidade real entre fundo, seção e card.
- Foco de teclado visível, `prefers-reduced-motion` respeitado, responsivo até 360px.

### Fase 1.1 — catálogo 2026
- Serviços reestruturados em **3 níveis de lavagem** (Expressa R$ 80 · Técnica R$ 150 · Detalhada R$ 250) mais **Polimento** em bloco separado, sob avaliação. Os 6 serviços antigos por "dentro/fora" saíram.
- **Adicionais não aparecem na seção Serviços.** Entram só como etapa opcional do agendamento, e cada pacote mostra apenas o que ainda não inclui.
- Preços exibidos como "a partir de", com nota de que variam por tamanho e estado — coerente com o aviso do próprio catálogo.
- Estimativa calculada ao vivo: base + adicionais + deslocamento. Polimento mostra "sob avaliação".
- Etapas do agendamento passaram a ser dinâmicas: lavagens têm 5, polimento tem 4 (pula adicionais).
- Contato real no rodapé: Bruno Torres, WhatsApp (44) 99721-5139, inhousecardetail@gmail.com.
- **Botão flutuante de WhatsApp** com mensagem pronta. Enquanto a Fase 4 não existe, é o único canal do site que realmente entrega um lead.

### Fase 1.2 — preços e agenda
- **Técnica ganhou "Restauração de plásticos internos — somente painel"**, fechando a inversão de preço. Antes o pacote custava R$ 20 a mais que comprar os mesmos itens avulsos; agora custa R$ 10 a menos, mais o anti-bacteriano que não tem preço avulso.
- A Detalhada passou a especificar que a restauração interna é completa (painel, portas e console), para justificar a diferença.
- Como a Técnica agora inclui plásticos internos, esse adicional saiu da lista dela no agendamento. Sobraram 7 adicionais vendáveis (potencial +R$ 270).
- **Agenda trocada: 10 horários de 1h viraram 3 períodos por dia** — Manhã 08h, Início da tarde 13h, Fim da tarde 16h. O cliente escolhe o período; hora exata e duração são fechadas no WhatsApp.
- Rótulos mudaram de "Horário" para "Período" no resumo, no comprovante e na mensagem do WhatsApp.

**Escada de preço depois do ajuste:**

| Pacote | Preço | Mesmos itens avulsos | Diferença |
|---|---|---|---|
| Expressa | R$ 80 | — | — |
| Técnica | R$ 150 | R$ 160 | −R$ 10 (6%) |
| Detalhada | R$ 250 | R$ 270 | −R$ 20 (7%) |

### Recebimento garantido (e-mail + planilha)
- **A pré-reserva passou a ser registrada antes de o WhatsApp abrir.** Antes, quem não apertasse enviar no WhatsApp sumia sem rastro. Agora o pedido é enviado a um Google Apps Script que dispara e-mail para dois endereços e grava uma linha numa planilha.
- Envio por `navigator.sendBeacon`, que sobrevive ao descarregamento da página quando o app do WhatsApp assume a tela no celular. `fetch` com `keepalive` fica de reserva.
- **Defeito corrigido no teste:** o pedido estava saindo duas vezes — por `enviarParaBackend` e de novo por `Store.saveBooking`. Na planilha isso viraria duas linhas e dois e-mails por agendamento. `saveBooking` passou a gravar só no navegador.
- A planilha vem com coluna **Status** em lista suspensa (Pendente, Confirmado, Concluído, Cancelado, Não compareceu) e serve como painel de ADM na versão gratuita.
- A leitura de disponibilidade ganhou flag própria (`AGENDA_COMPARTILHADA`, desligada), para que ligar o e-mail não ligue junto uma trava de agenda ainda não testada.
- O e-mail traz botões de ação direta: chamar o cliente no WhatsApp, abrir o endereço no mapa e abrir a planilha.

### Envio real, LGPD e publicação
- **O formulário passou a entregar.** Ao confirmar, o site abre o WhatsApp com o resumo completo já escrito — serviço, adicionais, data, período, cliente, endereço, referência, deslocamento e estimativa. O cliente só aperta enviar. A janela é aberta de forma síncrona dentro do clique, senão o navegador bloqueia como pop-up.
- O comprovante deixou de dizer "enviada" e passou a dizer **"falta enviar no WhatsApp"**, com botão de reabrir caso o pop-up tenha sido barrado.
- Como não existe backend, os períodos deixaram de aparecer como "reservados" — seria mentira, já que o registro é local ao navegador. O texto agora diz que a disponibilidade é confirmada no WhatsApp. Quando `BOOKING_API` for preenchido, a trava real volta sozinha.
- **Aviso de privacidade (LGPD) completo**, acessível pelo rodapé e por dentro do formulário. Checkbox de consentimento obrigatório antes de revisar. O aviso declara: responsável, dados coletados, finalidade, base legal, trânsito pelo WhatsApp, guarda local no navegador, prazo, direitos do titular e ausência de cookies e analytics.
- **Seção Resultados removida** do `index.html` e guardada em `_secao-resultados.html`. Comentar a seção no HTML não era possível: ela tinha comentários dentro, e HTML não aceita comentário aninhado.
- Adicionados `README.md` com o passo a passo do GitHub Pages e `robots.txt`.

### Correções de renderização
Rodei o site num navegador real em 360, 375, 768 e 1440px. Três defeitos que só apareceram aí:

- **Menu mobile vazado.** O menu estava dentro do `<header>`, e `backdrop-filter` cria bloco de contenção para descendentes `position:fixed`. O menu herdava os 64px de altura do cabeçalho em vez da tela inteira, e os links vazavam por cima da página. Existia desde a primeira versão. O menu saiu do `<header>`.
- **Capas mostrando o topo da foto.** O `aspect-ratio` do slot aplicava, mas a `<img>` com `height:100%` dentro de uma linha de grid `auto` gera dependência cíclica: o navegador usa a altura natural, a imagem transborda e o `object-position` não tem efeito. A imagem passou a ser posicionada de forma absoluta dentro do slot.
- Botão flutuante do WhatsApp aparecia por cima do menu aberto.

### Mosaico da galeria
Grade com quatro formatos de quadro (1×1, 1×2, 2×1, 2×2) alinhados no mesmo retângulo, com `grid-auto-flow:dense`. As 3 fotos horizontais ficam nos quadros largos; as verticais nos altos e quadrados. Mapa `FOCO` novo permite ajustar o enquadramento de cada foto sem reeditar o arquivo.

### Reestruturação e mobile
- **"A estrutura chega junto com a gente" virou parte de "Como funciona"** — deixou de ser seção própria e passou a fechar aquela seção, onde o assunto é o mesmo.
- **Galeria com 16 fotos** em masonry de colunas. Cada foto declara suas dimensões (mapa `SIZES`), então o layout não pula durante a rolagem.
- **Responsivo reescrito do zero.** Os media queries acumulavam remendos de seis versões; foram apagados e substituídos por cinco breakpoints organizados (1080 / 980 / 860 / 640 / 400).
- Corrigidos na passagem: campos de formulário a 16px (abaixo disso o iOS dá zoom sozinho ao tocar), stepper de 5 etapas virou pontos com o nome só da etapa atual, resumo e comprovante empilham em telas estreitas, modal em tela cheia no celular, `env(safe-area-inset-*)` para iPhone com entalhe.
- **Três defeitos encontrados na renderização real:** os rótulos do chip de data colavam numa linha só (`SÁB19SET`) porque viraram `<span>` inline — afetava desktop também; o preço do adicional quebrava de linha em nome longo; e o botão flutuante do WhatsApp cobria os botões do formulário — agora ele some enquanto o agendamento está na tela.
- `<img id="lightboxImg" src="">` disparava uma requisição para a própria página. Atributo removido.

### Ajustes posteriores
- Galeria alinhada em grade quadrada 3 colunas (antes era masonry irregular).
- **Limpeza de teto: R$ 40 → R$ 80.** O catálogo em PDF ainda diz R$ 40.
- Aviso visual de modo demonstração removido do formulário. O alerta no console permanece.

### Seções novas
- **Faixa panorâmica** entre serviços e como-funciona, com os números do atendimento.
- **Antes e depois** com comparador arrastável.
- **Galeria em mosaico** irregular, com ampliação em tela cheia ao clicar.
- Capas de foto nos 6 cards de serviço.
- Galeria dentro do modal reformatada: 1 grande + 2 pequenas, em vez de 3 iguais.

### Ajustes de conteúdo
- Copy mudou de "agendamento confirmado" para **pré-reserva**, que é o modelo que você escolheu. O site não promete mais o que não pode cumprir.
- Taxa de **R$ 20 fora de Maringá** aparece em 3 pontos: no bloco de requisitos, na faixa e no formulário. O resumo calcula sozinho se há taxa, pelo campo cidade.
- Etapa 4 do formulário virou "Pré-reserva", e o comprovante diz "aguardando confirmação".

---

## Onde colocar as fotos

Ver **IMAGENS.md**. Resumo: cada espaço vazio no site mostra um código (`GAL-01`,
`SRV-EXT-CAPA`…). Você salva o arquivo na pasta certa e cola o caminho no bloco
`PHOTOS`, no topo de `assets/js/app.js`. Não precisa mexer no HTML.

---

## ⚠️ Estado atual do agendamento

O formulário está em **MODO DEMONSTRAÇÃO**. Um aviso âmbar aparece na primeira
etapa avisando isso, e some sozinho quando o backend for ligado.

Hoje a pré-reserva é gravada só no navegador de quem preencheu. **Ela não chega
até você.** Dois clientes diferentes veem agendas diferentes.

Isso é resolvido na Fase 4: você cola a URL do Google Apps Script na constante
`BOOKING_API`, no topo de `assets/js/app.js`. A camada de persistência já está
preparada para isso — nada mais precisa mudar no código.

**Não publique o site para clientes reais antes da Fase 4.**

---

## Pendências antes de ir ao ar

- [x] Telefone e e-mail reais no rodapé
- [x] Fotos dos serviços e da galeria (29 de 36)
- [ ] Antes/depois + faixa (7 espaços restantes)
- [ ] Atualizar o catálogo PDF: limpeza de teto agora é R$ 80
- [ ] Backend de pré-reserva (Fase 4)
- [x] Aviso de privacidade / LGPD
- [x] Preços definidos (catálogo 2026)
- [x] Furo de preço da Técnica corrigido
- [x] Agenda reduzida a 3 períodos por dia
- [ ] Definir duração por serviço e travar períodos incompatíveis (ver `janelas` em SERVICES)
- [ ] Definir capacidade: 3 períodos x 2 dias = 6 atendimentos por fim de semana
