/*var colecao = [1, 5, "A", new Image(), 2]
//mostra a quantidade de elementos na colecao
console.log(colecao.length)
//'empurra', insere novos elementos para a colecao
colecao.push(10)
console.log(colecao.length)
//mostra acolecao inteira
console.log(colecao)
//remove elemento da colecao
colecao.pop()
console.log(colecao)
//assessa determinado elemento detro da colecao
console.log(colecao[0])
console.log(colecao[2])
//assessando o ultimo elemento
console.log(colecao[colecao.length-1])
*/ 


var cris = new Figura("Cristiane", "Brasil", "Atacante", "./imgs/cris.jpeg")
var marta = new Figura("Marta", "Brasil", "Meio de Campo", "./imgs/marta.jpg")
var debinha = new Figura("Debinha", "Brasil", "Atacante", "./imgs/debinha.jpg")
var thais = new Figura("Thais", "Brasil", "Meio de Campo", "./imgs/thais.jpg")
//CRIANDO UMA COLECAO VAZIA
var colecaoFiguras = []
//ADICIONANDO OS OBJETOS NA COLECAO
colecaoFiguras.push(cris)
colecaoFiguras.push(marta)
colecaoFiguras.push(debinha)
colecaoFiguras.push(thais)

for(var i = 0; i<colecaoFiguras.length; i++){
    colecaoFiguras[i].exibir()
}
