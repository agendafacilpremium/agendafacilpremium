PASSO A PASSO - BACKEND AGENDA FÁCIL PREMIUM

1. Extraia a pasta 'agenda-facil-backend'.
2. Suba essa pasta para um novo repositório no GitHub.
3. Instale o Node.js (https://nodejs.org) se ainda não tiver.
4. No terminal, entre na pasta e digite:
   npm install
   npm start

5. Crie conta no https://render.com, clique em "New Web Service" e conecte com o GitHub.
6. Adicione as variáveis de ambiente no painel do Render, com base no .env.example.

-- Como pegar o TOKEN do Mercado Pago:
1. Acesse https://www.mercadopago.com.br/developers/panel
2. Copie seu ACCESS_TOKEN de PRODUÇÃO
3. Cole em uma variável chamada MP_ACCESS_TOKEN

-- Como usar o WhatsApp automático (gratuito):
1. Vá em https://ultramsg.com ou https://z-api.io (cadastro simples)
2. Pegue seu Instance ID e Token de API
3. No .env, use:
   WHATSAPP_INSTANCE_ID=seu_id
   WHATSAPP_TOKEN=seu_token

Depois de colar tudo no Render e clicar em Deploy, o sistema estará online e funcionando.