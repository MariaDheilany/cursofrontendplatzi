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
///pontos iniciais
var x = 50
var y = 50

desenho("violet", x, y, 200, 200)
desenho("blue", x+150, y, 200, 200)

function desenho(cor, xInicial, yInicial, xFinal, yFinal){
    papel.beginPath()
    papel.strokeStyle = cor
    papel.lineWidth = 3
    papel.moveTo(xInicial, yInicial)
    papel.lineTo(xFinal, yFinal)
    papel.stroke()
    papel.closePath()
}
