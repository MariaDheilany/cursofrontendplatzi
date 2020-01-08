//codigo de servidor da biblioteca express para rodar na internet
var expressjs = require("express")
//criando a aplicacao inicializando a biblioteca express
var aplicacao = expressjs()
//disponibilizando a aplicacao na porta: 8989
//informando a porta

aplicacao.get("/", hello)
aplicacao.get("/cursos", cursos)
aplicacao.get("/hora", retornaHora)

function retornaHora(req, res){
    res.send("A hora atual é " + new Date().getHours())
}

function hello(req, res){
    res.send("<h1>Olá Tudo Bem?</h1>")
}

function cursos(req, res){
    res.send("<ul><li>Programação Básica</li><li>Programação Avançada</li></ul>")
}

aplicacao.listen(8989)
console.log("Aplicação em Execução...")