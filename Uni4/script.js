/*console.log("Estou no inicio do script")

document.write("Esta é uma linha")
document.writeln("Esta é uma linha com quebra-espaço")
document.write("Outra linha")

window.location.reload()

console.log("Cheguei no fim so script")
*/ 

var canvas = document.getElementById("meu-canvas")
///DESENHANDO NO CANVAS-em duas dimensões(x,y)
var papel = canvas.getContext("2d")
///criando um objeto (incializando propriedades desse objeto)
var teclas = {
    Up: 38,
    Right: 39,
    Down: 40,
    Left: 37
}

///pontos iniciais
var x = 50
var y = 50
var movimento = 15

///var botao = document.getElementById("botao")
///Ouvir o evento com click do mouse
///botao.addEventListener("click", desenhaLinhaVermelha)
/*function desenhaLinhaVermelha(){
    desenho("red", x, y, 200, 200)
}
*/
///Ouvir evento com teclado
document.addEventListener("keydown", desenhaLinha)
function desenhaLinha(event){
    //console.log(event)
    switch(event.keyCode){
        case teclas.Down:
            desenho("green", x, y, x, y+movimento)
            y = y + movimento
        break
        case teclas.Up:
            desenho("green", x, y, x, y-movimento)
            y = y - movimento
        break
        case teclas.Right:
            desenho("green", x, y, x+movimento, y)
            x = x + movimento
        break
        case teclas.Left:
            desenho("green", x, y, x-movimento, y)
            x = x - movimento
        break
    }
}

///FUNÇÃO
function desenho(cor, xInicial, yInicial, xFinal, yFinal){
    papel.beginPath()
    papel.strokeStyle = cor
    papel.lineWidth = 3
    papel.moveTo(xInicial, yInicial)
    papel.lineTo(xFinal, yFinal)
    papel.stroke()
    papel.closePath()
}
