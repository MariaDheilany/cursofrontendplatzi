var botao = document.getElementById("botao")
///escuta pra um evento do tipo click
botao.addEventListener("click", executaFizzBuzz)

function executaFizzBuzz(){
    var numIteracoes = document.getElementById("numIteracoes").value
    var resultado = document.getElementById("resultado")

    //alert("O numero de iterações é: " + numIteracoes)

    var numero = 1
    while(numero <= numIteracoes){
        if(((numero % 5) == 0) && (numero % 3) == 0){
            //console.log("FizzBuzz")
            //USANDO O DIV
            resultado = document.writeln(numero + "- FizzBuzz" + "</br>")

        }else if((numero % 3) == 0){
            //console.log("Fizz")
            resultado = document.writeln(numero + "- Fizz" + "</br>")
        }else if((numero % 5) == 0){
            //console.log("Buzz")
            resultado = document.writeln(numero + "- Buzz" + "</br>")
        }else {
            //console.log(numero)
            resultado = document.writeln(numero + "</br>")
        }
        numero++
    }
}