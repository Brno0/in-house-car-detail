# Como ativar o recebimento das pré-reservas

Ao final destes passos, toda pré-reserva feita no site vira:

- **um e-mail** para `inhousecardetail@gmail.com` e `torresbruno674@gmail.com`
- **uma linha numa planilha** do Google, que funciona como seu painel de controle

E isso acontece **mesmo que o cliente não envie a mensagem no WhatsApp**.

Tempo: cerca de 15 minutos, uma vez só. Custo: R$ 0.

> Faça tudo logado na conta Google que deve receber e ser dona da planilha.

---

## 1. Crie a planilha

1. Abra [sheets.new](https://sheets.new) — cria uma planilha em branco.
2. Dê um nome: **IN HOUSE — Agendamentos**.

Não crie abas nem colunas. O script faz isso sozinho.

## 2. Cole o código

1. Na planilha, menu **Extensões → Apps Script**.
2. Vai abrir um editor com um arquivo `Código.gs` contendo `function myFunction() {}`.
3. **Apague tudo** que estiver ali.
4. Abra o arquivo `Codigo.gs` desta pasta, copie o conteúdo inteiro e cole no editor.
5. Salve (ícone de disquete ou Ctrl+S).

Se quiser mudar quem recebe o e-mail, edite a linha do topo:

```javascript
const EMAILS = 'inhousecardetail@gmail.com,torresbruno674@gmail.com';
```

## 3. Teste antes de publicar

1. No editor, na lista de funções do topo, escolha **testar**.
2. Clique em **Executar**.
3. O Google vai pedir autorização. É esperado — o script precisa de permissão
   para escrever na planilha e enviar e-mail **em seu nome**.
   - Clique em **Revisar permissões** → escolha sua conta.
   - Vai aparecer "O Google não verificou este app". Clique em
     **Avançado** → **Acessar IN HOUSE (não seguro)**.
   - Esse aviso aparece porque o script é seu e não passou pela revisão pública
     do Google. Você está autorizando o seu próprio código.
   - Clique em **Permitir**.

**Confira:** a planilha deve ganhar a aba `Agendamentos` com uma linha de teste,
e os dois e-mails devem receber a mensagem. Se isso não acontecer, pare aqui —
não adianta seguir.

Depois de conferir, apague a linha de teste da planilha.

## 4. Publique o script

1. No editor, canto superior direito: **Implantar → Nova implantação**.
2. No ícone de engrenagem ao lado de "Selecionar tipo", escolha **App da Web**.
3. Preencha:
   - **Descrição:** site in house
   - **Executar como:** Eu (seu e-mail)
   - **Quem pode acessar:** **Qualquer pessoa** ← essencial
4. Clique em **Implantar** e autorize de novo, se pedir.
5. Copie a **URL do app da Web**. Ela termina em `/exec`.

> **"Qualquer pessoa" assusta, mas é o correto.** Significa que o site consegue
> enviar dados sem o visitante ter conta Google. O script só aceita gravação —
> ninguém consegue ler sua planilha por essa URL.

## 5. Ligue no site

1. Abra `assets/js/app.js`.
2. Lá no topo, na constante `BOOKING_API`, cole a URL entre as aspas:

```javascript
const BOOKING_API = 'https://script.google.com/macros/s/AKfy...SEU.../exec';
```

3. Salve e suba o arquivo para o GitHub.

## 6. Teste de verdade

Abra o site publicado **no celular**, preencha uma pré-reserva completa e envie.
Em segundos você deve ver a linha na planilha e o e-mail na caixa de entrada.

---

## A planilha como painel de controle

A coluna **Status** já vem com lista suspensa:
`Pendente · Confirmado · Concluído · Cancelado · Não compareceu`.

Toda pré-reserva entra como **Pendente**. Você muda conforme acontece.

Coisas úteis que a planilha faz de graça:

- **Filtrar:** menu Dados → Criar um filtro. Dá para ver só os pendentes, só os
  do próximo sábado, só os de fora de Maringá.
- **Somar faturamento:** numa célula vazia,
  `=SOMASE(C:C;"Concluído";L:L)` soma a coluna Estimativa de tudo que foi concluído.
- **Contar cancelamentos:** `=CONT.SE(C:C;"Cancelado")`
- **Serviço mais vendido:** selecione a coluna Serviço → Inserir → Gráfico.
- **No celular:** app Google Planilhas. Funciona bem para mudar status no lugar.

É o painel de ADM em versão gratuita. Quando isso apertar, a gente constrói o
painel de verdade — e a planilha vira a fonte da migração.

---

## Depois: trava de agenda

Hoje dois clientes conseguem pedir o mesmo período, e você resolve no WhatsApp.

Quando a planilha estiver recebendo direito e o volume justificar, mude em
`assets/js/app.js`:

```javascript
const AGENDA_COMPARTILHADA = true;
```

O site passa a consultar a planilha antes de mostrar os períodos e some com os
já ocupados. Períodos marcados como **Cancelado** voltam a ficar livres sozinhos.

Deixei desligado de propósito: se ligar antes de testar o envio, o site pode
ficar sem mostrar período nenhum.

---

## Limites e manutenção

- **Cota de e-mail:** conta Gmail comum envia até 100 destinatários por dia via
  script. Cada pré-reserva usa 2. Dá 50 por dia — muito acima da sua capacidade.
- **Planilha:** aguenta milhões de linhas. Não é preocupação.
- **Custo:** R$ 0, sem cartão.
- **Se mudar o código depois:** é preciso publicar de novo em
  **Implantar → Gerenciar implantações → editar (lápis) → Versão: Nova versão**.
  A URL continua a mesma. Se você criar uma implantação nova em vez de editar,
  a URL muda e o site para de enviar.

## Se parar de funcionar

1. Abra o Console do navegador no site (F12) e procure erro com `BOOKING_API`.
2. No editor do Apps Script: **Execuções** (menu lateral) mostra cada chamada
   recebida e o erro, se houver.
3. Confirme que a URL no `app.js` termina em `/exec` e não em `/dev`.
4. Confirme que "Quem pode acessar" continua em **Qualquer pessoa**.

Enquanto o backend estiver fora do ar, o site continua abrindo o WhatsApp
normalmente — você não perde o atendimento, só o registro automático.
