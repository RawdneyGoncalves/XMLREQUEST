const express = require('express');
const ejs = require('ejs');
const app = express();
const cookieParser = require('cookie-parser');

const {OAuth2Client} = require('google-auth-library');
CONST CLIENT_ID = ''
const client = new OAuth2Client(CLIENT_ID);

//middleware
app.set('view engine', 'ejs');

app.use(express.json());
app.use(cookieParser());

// criando rota com funções de req, res

app.get('/login', (req, res) => {
  res.render('index');
});

//
app.get('/inicio', (req, res) => {
  res.render('inicio');
});

app.post('/inicio', (req, res) => {
  let token = req.body.token;
  console.log(token);
});

// configuracao do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
