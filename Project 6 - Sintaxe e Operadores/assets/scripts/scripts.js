
var nDigitados = document.querySelectorAll("input[type=number]");
var n1 = document.getElementById("v1");
var n2 = document.getElementById("v2");
var bt = document.getElementById("bt1");
var r1 = document.getElementById("p1");
var r2 = document.getElementById("p2");

//
//  CRIA FUNÇÃO PARA ATIVAR BOTAO APOS DIGITAR DADOS EM V1 E V2
//

nDigitados.forEach(function(checkDados) {                 //criado função com variavel aleatoria chamada "checkDados"
    checkDados.addEventListener("keyup", function() {
                if(n1.value !=="" && n2.value !==""){
                    bt.disabled = false;
                } else{
                    bt.disabled = true;
                }
            }
        )
    }
)

//
//  CRIA FUNÇÃO PARA COMPARAR VALORES
//

bt.addEventListener("click", func);

function func(){
    
    var num1 = n1.value;
    var num2 = n2.value;
    var soma = parseInt(num1) + parseInt(num2);

    if (num1 === num2){

        r1.innerHTML = ""
        r1.innerHTML = "Os numeros " + num1 + " e " + num2 + " são iguais."

    }else{

        r1.innerHTML = ""
        r1.innerHTML = "Os numeros " + num1 + " e " + num2 + " são diferentes."
    }

    if(soma < 10) {

        r2.innerHTML = ""
        r2.innerHTML = "Sua soma é " + soma + ", que é menor que 10."
        
    
    }else if(soma > 20){

        r2.innerHTML = ""
        r2.innerHTML = "Sua soma é "+ soma + ", que é maior que 20."

    }else if(soma === 20){

        r2.innerHTML = ""
        r2.innerHTML = "Sua soma é "+ soma + "."

    }else if(soma === 10){

        r2.innerHTML = ""
        r2.innerHTML = "Sua soma é "+ soma + "."
    
    }else{

        r2.innerHTML = ""
        r2.innerHTML = "Sua soma é "+ soma +", que é maior que 10 e menor que 20."

    }       
}

// (n1 === n2) ? (r1.innerHTML = "Os numeros ", n1, " e ", n2," são iguais.") : (r1.innerHTML = "Os numeros ", n1, " e ", n2," diferentes.")