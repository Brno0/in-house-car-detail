# Mapa de fotos

## Situação atual: 29 de 33 espaços preenchidos

**No ar:** capas dos 3 níveis, capa do polimento, as 3 galerias de lavagem e as
16 fotos do mosaico.

**Faltam 4:**

| Espaço | O que é |
|---|---|
| `FAIXA-01` | Fundo do bloco "A estrutura chega junto com a gente", dentro de Como funciona. É a única prova visual de que o serviço é a domicílio. |
| `SRV-POLIMENTO-1/2/3` | Galeria do modal de polimento (a capa já está no ar). |
| `HERO-BG` | Fundo do topo. Opcional — a textura da marca segura bem. |

**Seção Resultados (antes/depois) desativada.** Está guardada em
`_secao-resultados.html`, com instruções de como reativar. Quando tiver o par de
fotos (`AD-01-ANTES` e `AD-01-DEPOIS`), é colar a seção de volta e preencher as
duas chaves no `PHOTOS`.

---


Cada espaço de foto no site tem um **código** (ex: `GAL-01`). No site, os espaços
vazios aparecem como um retângulo cinza com o código escrito dentro. Abra a
página e você vê exatamente onde cada foto vai cair.

## Como colocar uma foto no ar

1. Salve o arquivo na pasta indicada, com o nome indicado.
2. Abra `assets/js/app.js`.
3. No bloco `PHOTOS`, no topo, cole o caminho entre as aspas do código correspondente.

Antes: `'GAL-01': '',`
Depois: `'GAL-01': 'assets/img/galeria/01.jpg',`

Pronto. Não precisa mexer no HTML.

---

## Prioridade 1 — essenciais (8 fotos)

| Código | Arquivo | Proporção | O que é |
|---|---|---|---|
| `HERO-BG` | `assets/img/hero/hero-bg.jpg` | 16:9 · 1920×1080 | Fundo do topo. Carro escuro, molhado, com reflexo. **Ativada de outro jeito — ver nota.** |
| `FAIXA-01` | `assets/img/hero/faixa-domicilio.jpg` | 21:9 · 2100×900 | Você trabalhando na garagem do cliente. É a prova de que o serviço é a domicílio. |
| `AD-01-ANTES` | `assets/img/antes-depois/01-antes.jpg` | 16:10 · 1600×1000 | Carro sujo. |
| `AD-01-DEPOIS` | `assets/img/antes-depois/01-depois.jpg` | 16:10 · 1600×1000 | **Mesmo carro, mesmo ângulo, mesma distância, mesma luz.** Se o enquadramento mudar, o comparador quebra visualmente. |
| ~~`SRV-EXPRESSA-CAPA`~~ | ✅ no ar | 4:5 vertical | Tracker prata. |
| ~~`SRV-TECNICA-CAPA`~~ | ✅ no ar | 4:5 vertical | Ka branco, placa borrada. |
| ~~`SRV-DETALHADA-CAPA`~~ | ✅ no ar | 4:5 vertical | Toro preta. |
| ~~`SRV-POLIMENTO-CAPA`~~ | ✅ no ar | 3:4 vertical | Civic preto, placa borrada. |

### Nota sobre o `HERO-BG`

Esse não fica no bloco `PHOTOS`. Abra `assets/css/styles.css`, primeira linha
ativa do arquivo, e descomente:

```css
/* --hero-photo: url('../img/hero/hero-bg.jpg'); */
```

vira

```css
--hero-photo: url('../img/hero/hero-bg.jpg');
```

Sem essa foto o topo continua funcionando com a textura hexagonal da marca.

---

## Prioridade 2 — galeria (6 fotos)

Os tamanhos são diferentes de propósito: o mosaico é irregular para não parecer
grade de catálogo. Respeite a proporção de cada um.

| Código | Arquivo | Proporção | O que é |
|---|---|---|---|
| ~~`GAL-01` a `GAL-16`~~ | ✅ 16 no ar | qualquer proporção | Espuma, rodas, interiores, painéis, carros completos. |

**O mosaico é uma grade com quadros de tamanhos diferentes**, todos alinhados
dentro do mesmo retângulo. São quatro formatos, definidos por classe no
`index.html`:

| Classe | Formato | Melhor para |
|---|---|---|
| (sem classe) | quadrado 1×1 | qualquer foto |
| `m-tall` | alto 1×2 | fotos verticais |
| `m-wide` | largo 2×1 | fotos horizontais e panorâmicas |
| `m-big` | grande 2×2 | a foto mais forte do conjunto |

O padrão atual das 16 posições foi montado para que as 3 fotos horizontais
(`GAL-02`, `GAL-03`, `GAL-06`) caiam nos quadros largos. Se você trocar uma foto
vertical por uma horizontal, troque também a classe da posição no `index.html`.

São 4 colunas no desktop, 3 em telas médias e 2 no celular.

Cada foto declara largura e altura no HTML (mapa `SIZES` em `app.js`), então o
navegador reserva o espaço antes de carregar — a galeria não "pula" na rolagem.

### Ajustando o enquadramento

Quando o espaço corta parte da foto, o padrão é mostrar o centro. Para mostrar
outra região, use o mapa `FOCO` no topo de `assets/js/app.js`:

```js
const FOCO = {
  'SRV-TECNICA-CAPA': '50% 70%',   // 70% = mostra mais a parte de baixo
};
```

O primeiro número é horizontal, o segundo vertical. `50% 50%` é o centro.
Números maiores no segundo valor puxam o enquadramento para baixo — útil quando
o carro está na metade inferior da foto e o topo só tem céu e poste.
Para acrescentar uma sétima foto, crie a chave `GAL-17` no bloco `PHOTOS`
e um `<div class="slot" data-slot="GAL-17">` no `index.html`.

Clicar amplia em tela cheia.

---

## Prioridade 3 — galerias dos modais (até 12 fotos)

Aparecem quando o cliente clica em um serviço. A primeira é grande, as outras
duas menores. **Mínimo 1 por serviço**, 3 deixa completo.

A tira aceita foto vertical e horizontal na mesma linha, sem cortar. Pasta `assets/img/servicos/`.

| Serviço | Códigos | Arquivos sugeridos |
|---|---|---|
| ~~Expressa~~ | ✅ 3 no ar | espuma de pré-lavagem, traseira Tracker, volante Onix |
| ~~Técnica~~ | ✅ 3 no ar | traseira Ka, painel Ka, roda Ka |
| ~~Detalhada~~ | ✅ 3 no ar | traseira Toro, painel Toro, roda Toro |
| Polimento | `SRV-POLIMENTO-1` · `-2` · `-3` | **faltam** — mostre pintura antes/depois do polimento |

**Dica de conteúdo:** as fotos precisam justificar a diferença de preço entre os
níveis. Se a foto da Expressa e a da Detalhada mostrarem a mesma coisa, o cliente
não entende por que uma custa R$ 80 e a outra R$ 250. Fotografe o que é
exclusivo de cada nível — frestas detalhadas, plástico restaurado, brilho do
enceramento.

---

## Regras de captura

- **Celular serve.** Câmera traseira, resolução máxima, HDR ligado.
- **Luz:** carro à sombra, céu claro. Sol direto na lataria estoura o reflexo e some com o brilho.
- **Antes/depois:** marque a posição dos seus pés antes da foto "antes". Volte no mesmo lugar para o "depois".
- **Enquadre horizontal** para tudo, exceto `GAL-05`.
- **Sem placa legível.** Eu borro se vier visível, mas evite na captura.
- **Sem pessoas identificáveis** sem autorização por escrito.

## Regras de preparo do arquivo

- Formato `.jpg`, qualidade 80–85.
- **Nenhum arquivo acima de 400 KB.** Foto de celular sai com 4–8 MB. Use [squoosh.app](https://squoosh.app) (grátis, roda no navegador).
- Nomes em minúsculo, sem espaço e sem acento.
- Corte na proporção certa antes de subir. O site corta pelo centro se você não cortar — e pode cortar a parte boa.
