
var dadosCompletos = document.querySelectorAll("input[type=text]");
var aluno = document.getElementById("aluno");
var media = document.getElementById ("media");
var bt = document.getElementById("btGrava");
bt.addEventListener("click", mandaDados);

var entrada = [];
var reprovado = [];
var aprovado = [];


dadosCompletos.forEach(function(checkDados) {                  //criado função com variavel aleatoria chamada "checkDados"
checkDados.addEventListener("keyup", function() {
                if(aluno.value !=="" && media.value !==""){
                    bt.disabled = false;
                } else{
                    bt.disabled = true;
                }
            }
        )
    }
)


function mandaDados() {
  var aln;
  var nt;

  entrada.push({
    nomeAluno: aluno.value,
    mediaAluno: media.value, 
  })

  entrada.forEach(item => {

    aln = item.nomeAluno        
    nt = item.mediaAluno  
  })

  if (nt >=7){

    aprovado.push({
      nomeAluno: aln,
      mediaAluno: nt,
          
    })

    var tabela1 = document.getElementById("alunoApr");
    var linha = tabela1.insertRow(-1);                        
    var coluna1 = linha.insertCell(0);
    coluna1.setAttribute("id", "cl11")
    var coluna2 = linha.insertCell(1);
    coluna2.setAttribute("id", "cl21")
    coluna1.innerHTML = aln;                        
    coluna2.innerHTML = nt;

  }else{

    reprovado.push({
      nomeAluno: aln,
      mediaAluno: nt,      
    })

    var tabela2 = document.getElementById("alunoRep");
    var linha = tabela2.insertRow(-1);                        
    var coluna1 = linha.insertCell(0);
    coluna1.setAttribute("id", "cl12")
    var coluna2 = linha.insertCell(1);
    coluna2.setAttribute("id", "cl22")
    coluna1.innerHTML = aln;                        
    coluna2.innerHTML = nt;

  }

/*   console.log(entrada)  
  console.log(aprovado)
  console.log(reprovado) */
}

//
// FUNÇÃO PARA REMOVER ULTIMA LINHA TABELA
//

var botExcluirLinhaApr = document.getElementById("btRemoveApr");
botExcluirLinhaApr.addEventListener("click", removeLinhaApr);
function removeLinhaApr(){
var tabela1 = document.getElementById("alunoApr");
tabela1.deleteRow(-1);
}

var botExcluirLinhaRep = document.getElementById("btRemoveRep");
botExcluirLinhaRep.addEventListener("click", removeLinhaRep);
function removeLinhaRep(){
var tabela2 = document.getElementById("alunoRep");
tabela2.deleteRow(-1);
}