
var bot = document.getElementById("bot-inicio")


bot.addEventListener("click", calculadora);

function calculadora(){

    const operacao = prompt("Escolha a operação matematica desejada (numero):\n\n 1 - Adição (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)");

    var result;
    var n1;
    var n2;

    if(operacao < 1 || operacao > 6) {
    
        alert("OPERAÇÃO INVÁLIDA")
    
    }else{
        
        n1 = prompt("Digite o primeiro numero");
        n1 = parseInt(n1);
        n2 = prompt("Digite o primeiro numero");
        n2 = parseInt(n2);
    }

    function adicao(){
        result = n1 + n2
        alert("A sua operação foi: " + n1 + " + " + n2 + " = " + result)
    }
    function subtracao(){
        result = n1 - n2
        alert("A sua operação foi: " + n1 + " - " + n2 + " = " + result)
    }
    function multiplicacao(){
        result = n1 * n2
        alert("A sua operação foi: " + n1 + " * " + n2 + " = " + result)
    }
    function divisaoReal(){
        result = n1 / n2
        alert("A sua operação foi: " + n1 + " / " + n2 + " = " + result)
    }
    function divisaoInteira(){
        result = n1 % n2
        alert("A sua operação foi: " + n1 + " % " + n2 + " = " + result)
    }
    function potenciacao(){
        result = n1 ** n2
        alert("A sua operação foi: " + n1 + " ** " + n2 + " = " + result)
    }

    if(operacao == 1){
        adicao()

    }else if(operacao == 2){
        subtracao()
    
    }else if(operacao == 3){
        multiplicacao()
    
    }else if(operacao == 4){
        divisaoReal()
    
    }else if(operacao == 5){
        divisaoInteira()
    
    }else if(operacao == 6){
        potenciacao()
    
    }
}
