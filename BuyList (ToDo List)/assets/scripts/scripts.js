
//
// FUNÇÃO PARA DESABILITAR BOTAO ATE DADOS SEREM DIGITADOS
//

var dadosCompletos = document.querySelectorAll("input[type=text]");
var item = document.getElementById("itens");
var valor = document.getElementById("valores");
var bot = document.getElementById("botao");

dadosCompletos.forEach(function(checkDados) {                 //criado função com variavel aleatoria chamada "checkDados"
    checkDados.addEventListener("keyup", function() {
                if(item.value !=="" && valor.value !==""){
                    bot.disabled = false;
                } else{
                    bot.disabled = true;
                }
            }
        )
    }
)

//
// FUNÇÃO PARA CAPTURAR DADOS DIGITADOS E ADICIONAR NO FORMULARIO
//

bot.addEventListener("click", enviarDados);
function enviarDados(){
    var capturarItem = item.value;
    var capturarValor = valor.value;
    var cb = document.createElement("input");
    cb.setAttribute("type", "checkbox");
    cb.setAttribute("id", "cb-id");
    cb.setAttribute("onchange", "func(this)");
    var label = document.createElement("label");
    label.setAttribute("for", "cb-id");
    label.setAttribute("id", "lb-id");
    label.innerHTML = " Juntado";
    tabela = document.getElementById("tabela");
    var linha = tabela.insertRow(-1);                        
    var coluna1 = linha.insertCell(0);
    coluna1.setAttribute("id", "cl1")
    var coluna2 = linha.insertCell(1);
    coluna2.setAttribute("id", "cl2")
    var coluna3 = linha.insertCell(2);
    coluna1.innerHTML = capturarItem;                        
    coluna2.innerHTML = capturarValor;
    coluna3.appendChild(cb);
    coluna3.appendChild(label);
    item.value = "";
    valor.value = "";
}

//
// FUNÇÃO PARA REMOVER ULTIMA LINHA TABELA
//

var botExcluirLinha = document.getElementById("bot-excluir-linha");
botExcluirLinha.addEventListener("click", removeLinha);
function removeLinha(){
tabela.deleteRow(-1);

}

//
// FUNÇÃO PARA RISCAR LABEL DE CHECKBOX CHECADO
//

function func(elem)
{
    if (elem.checked)
    {
        cl1.className = "line-through"
        cl2.className = "line-through"        
    }
    else
    {
        cl1.className = ""
        cl2.className = ""
    }
}