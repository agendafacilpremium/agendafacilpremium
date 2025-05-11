const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();
const testRoute = require('./routes/testRoute');

app.use(express.json());
app.use('/api', testRoute);

app.get('/', (req, res) => {
  res.send('API Agenda Fácil Premium funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
