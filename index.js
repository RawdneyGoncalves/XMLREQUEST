const express = require("express");
const ejs = require("ejs");
const app = express();
const cookieParser = require("cookie-parser");

//middleware
app.set("view engine", "ejs");

app.use(express.json());
app.use(cookieParser());

// criando rota com funções de req, res

app.get("/login", (req, res) => {
  res.render("index");
});

//
app.get("/inicio", (req, res) => {
  res.render("inicio");
});

app.post("/inicio", (req, res) => {
  let token = req.body.token;
  console.log(` o token tá rodando aqui:  ${token}`);
});

// configuracao do servidor

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  res.status(5000)
});
