
var bot = document.getElementById("bot");

bot.addEventListener("click", inverter);

function inverter(){
    var entrada = document.getElementById("entrada1").value
    var entrada1 = document.getElementsByName("entrada1");
    var valor = entrada1.item(0).value.toString().split("");
    var inverso = valor.reverse().join("");


    if(entrada === inverso){

        alert("PALAVRA OU TEXTO INSERIDO: " + entrada + "\n\n" + "PALAVRA OU TEXTO INVERTIDO: " + inverso + "\n\n" + "A PALAVRA/FRASE É UM POLINDROMO!!!");
    
    }else{

        alert("PALAVRA OU TEXTO INSERIDO: " + entrada + "\n\n" + "PALAVRA OU TEXTO INVERTIDO: " + inverso + "\n\n" + "A PALAVRA/FRASE NÃO É UM POLINDROMO!!!");

    }


}




