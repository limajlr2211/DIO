
var bt1 = document.getElementById("bt1");
var bt2 = document.getElementById("bt2");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var arr = [];
var arrMod = [];
bt1.addEventListener("click",criaArray);
bt2.addEventListener("click",alteraArray);




function criaArray(){

    arr = [];
    arrMod = [];
    var elementos = prompt("INSIRA O NUMERO DE ELEMENTOS PARA O SEU ARRAY ALEATÓRIO\n\n")
    arr = Array.from({length: elementos}, () => Math.floor(Math.random() * 10));
    p1.innerHTML = "";
    p2.innerHTML = "";
    p1.innerHTML = arr;

    if (elementos == 0) {

        p1.innerHTML = -1;
        p2.innerHTML = -1;

    }else{

        for ( i = 0; i < arr.length; i++){
            if ((arr[i] % 2) == 0) {
                arrMod[i] = 0 
            } else {
                arrMod[i] = arr[i]
            }
        }
    }

}

function alteraArray(){
    
    p2.innerHTML = arrMod;

}