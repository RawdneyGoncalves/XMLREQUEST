const express = require("express");
const ejs = require("ejs");
const app = express();
const cookieParser = require("cookie-parser");
app.set("view engine", "ejs");
app.use(express.json());
app.use(cookieParser());

app.get("/login", function (req, res) {
  res.render("index");
});

app.get("/inicio", function (req, res) {
  res.render("inicio");
  // console.log(inicio)
});
app.post("/inicio", function (req, res) {
  let token = req.body.token;
  console.log(` o token tá rodando aqui:  ${token}`);
  
});
// configuracao
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});
