var canvas = document.getElementById("meu-canvas")
var papel = canvas.getContext("2d")
///objeto jason
var fundo = {
    url:"./img/fundo.png"
}

var vaca = {
    url:"./img/vaca.png"
}

var porco = {
    url:"./img/porco.png"
}

var galinha = {
    url:"./img/galinha.png"
}

fundo.imagem = new Image()
fundo.imagem.src = fundo.url

vaca.imagem = new Image()
vaca.imagem.src = vaca.url

porco.imagem = new Image()
porco.imagem.src = porco.url

galinha.imagem = new Image()
galinha.imagem.src = galinha.url

fundo.imagem.addEventListener("load", carregaFundo)
vaca.imagem.addEventListener("load", carregaVaca)
porco.imagem.addEventListener("load", carregaPorco)
galinha.imagem.addEventListener("load", carregaGalinha)

function carregaFundo(){
    ///para desenhar uma imagem no canvas
    papel.drawImage(fundo.imagem, 0, 0)
}

function carregaVaca(){
    var numeroVaca = numeroAleatorio(2, 10)

    for(var i=0; i<numeroVaca; i++){
        var xA = numeroAleatorio(100, 400)
        var yA = numeroAleatorio(100, 400)
        papel.drawImage(vaca.imagem, xA, yA)
    }
}

function carregaPorco(){
    var numeroPorco = numeroAleatorio(3, 8)

    for(var i=0; i<numeroPorco; i++){
        var xA = numeroAleatorio(50, 250)
        var yA = numeroAleatorio(50, 250)
        papel.drawImage(porco.imagem, xA, yA)
    }
}

function carregaGalinha(){
    var numeroGalinha = numeroAleatorio(3, 15)

    for(var i=0; i<numeroGalinha; i++){
        var xA = numeroAleatorio(10, 300)
        var yA = numeroAleatorio(10, 300)
        papel.drawImage(galinha.imagem, xA, yA)
    }
}

function numeroAleatorio(x, y){
    return Math.floor(Math.random() * (y-x) + 1) + x
}

///gerando x ou z numeros aleatorios
var z = 10
for(var i=0; i<z; i++){
    console.log(numeroAleatorio(100, 200))
}