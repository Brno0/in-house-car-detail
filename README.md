# IN HOUSE CAR DETAIL — site

Site de página única para agendamento de estética automotiva a domicílio em
Maringá/PR. HTML, CSS e JavaScript puros — sem build, sem dependência, sem
servidor. Basta servir os arquivos estáticos.

---

## Publicar no GitHub Pages

> **Atenção ao erro mais comum:** o GitHub Pages procura o `index.html` na
> **raiz** do repositório. Suba o **conteúdo** desta pasta, não a pasta.
>
> Certo: `seu-repo/index.html`, `seu-repo/assets/…`
> Errado: `seu-repo/IN_HOUSE/index.html`

### Passo a passo

1. **Crie o repositório**
   Em [github.com/new](https://github.com/new), nome sugerido `in-house-car-detail`.
   Marque **Public** (o Pages gratuito só funciona em repositório público).
   Não marque nenhuma opção de inicialização.

2. **Suba os arquivos**
   Na tela do repositório vazio, clique em **uploading an existing file**.
   Abra esta pasta no seu computador, selecione **tudo o que está dentro dela**
   (`index.html`, a pasta `assets`, `.nojekyll`, `robots.txt` e os `.md`) e
   arraste para a área de upload.
   Escreva "primeira versão" e clique em **Commit changes**.

3. **Ligue o Pages**
   No repositório: **Settings** → **Pages** (menu da esquerda).
   Em *Source*, escolha **Deploy from a branch**.
   Em *Branch*, escolha **main** e a pasta **/ (root)**. Clique em **Save**.

4. **Aguarde**
   Leva de 1 a 3 minutos na primeira vez. A URL aparece no topo da própria
   tela de Settings → Pages:
   `https://SEU-USUARIO.github.io/in-house-car-detail/`

5. **Teste no celular**
   Abra a URL no seu telefone e percorra o formulário até o fim. O WhatsApp
   precisa abrir com a mensagem pronta.

### Atualizar o site depois

Arraste os arquivos novos por cima pela interface do GitHub (**Add file** →
**Upload files**). O Pages republica sozinho em cerca de 1 minuto.
Se não aparecer, force a atualização no navegador com Ctrl+F5.

---

## Domínio próprio (opcional)

1. Registre o domínio no [registro.br](https://registro.br) (~R$ 40/ano para `.com.br`).
2. No DNS do registro.br, crie **4 registros A** apontando para:
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   e um **CNAME** de `www` para `SEU-USUARIO.github.io`.
3. No GitHub: **Settings → Pages → Custom domain**, digite o domínio e salve.
4. Espere o DNS propagar (de minutos a algumas horas) e marque **Enforce HTTPS**.

Depois disso, atualize no `index.html` a tag `og:url` e o link do `robots.txt`.

---

## Como o agendamento funciona

Ao concluir o formulário, duas coisas acontecem ao mesmo tempo:

1. **O pedido é registrado** — vira um e-mail para você e uma linha numa
   planilha do Google. Isso acontece **antes** de o WhatsApp abrir, então
   funciona mesmo que o cliente desista de enviar a mensagem.
2. **O WhatsApp abre** com o resumo já escrito, para o cliente enviar.

O item 1 exige uma configuração de 15 minutos, uma vez só:
**veja `backend/COMO-ATIVAR.md`**. Enquanto a constante `BOOKING_API` estiver
vazia em `assets/js/app.js`, só o item 2 funciona — e todo cliente que não
apertar enviar no WhatsApp some sem deixar rastro.

O número do WhatsApp fica em `assets/js/app.js`, na constante `WHATSAPP`
(código do país + DDD + número, sem símbolos).

**Limitação conhecida:** dois clientes diferentes podem pedir o mesmo período.
Você resolve respondendo no WhatsApp. Para ligar a trava de agenda de verdade,
mude `AGENDA_COMPARTILHADA` para `true` — mas só depois de confirmar que a
planilha está recebendo.

---

## Onde mexer em cada coisa

| O quê | Onde |
|---|---|
| Número do WhatsApp | `assets/js/app.js` → `WHATSAPP` |
| Taxa de deslocamento | `assets/js/app.js` → `TAXA_FORA_MARINGA` |
| Serviços, preços, o que está incluso | `assets/js/app.js` → `SERVICES` e `POLIMENTO` |
| Adicionais e preços | `assets/js/app.js` → `ADICIONAIS` |
| Períodos de atendimento | `assets/js/app.js` → `JANELAS` |
| Fotos | `assets/js/app.js` → `PHOTOS` (ver `IMAGENS.md`) |
| Enquadramento de uma foto | `assets/js/app.js` → `FOCO` |
| Cores e tipografia | `assets/css/styles.css` → bloco `:root` |
| Telefone e e-mail do rodapé | `index.html` |
| Aviso de privacidade | `assets/js/app.js` → `PRIVACIDADE` |
| Recebimento por e-mail e planilha | `assets/js/app.js` → `BOOKING_API` (ver `backend/`) |
| Quem recebe o e-mail | `backend/Codigo.gs` → `EMAILS` |
| Trava de agenda | `assets/js/app.js` → `AGENDA_COMPARTILHADA` |

## Arquivos

```
index.html                 página única
assets/css/styles.css      todo o visual
assets/js/app.js           dados, fotos, agendamento e privacidade
assets/img/                logos, serviços e galeria
_secao-resultados.html     seção antes/depois, desativada (ver o arquivo)
backend/Codigo.gs          script do Google que recebe as pré-reservas
backend/COMO-ATIVAR.md     passo a passo para ligar e-mail + planilha
IMAGENS.md                 mapa das fotos e o que ainda falta
LEIA-ME.md                 histórico técnico do projeto
.nojekyll                  impede o GitHub de processar os arquivos
robots.txt                 libera indexação
```

## Pendências antes de divulgar

- [ ] Ligar o recebimento por e-mail e planilha (`backend/COMO-ATIVAR.md`)
- [ ] Testar o envio no seu próprio celular, de ponta a ponta
- [ ] Conferir se a mensagem chega no número certo
- [ ] Atualizar o catálogo em PDF: limpeza de teto passou a R$ 80
- [ ] Fotos que faltam: `FAIXA-01`, `SRV-POLIMENTO-1/2/3`, `HERO-BG`
- [ ] Antes/depois, para reativar a seção Resultados
