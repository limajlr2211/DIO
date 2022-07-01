
var incrementoBtn = document.getElementById('incremento');
var decrementoBtn = document.getElementById('decremento');
var number = document.getElementById('numero');
var incrementNumber = 0;

// function increment(){

//     incrementNumber = ++ incrementNumber;

//     if (incrementNumber < 0){
//         number.style.color = 'red';
//     } else{
//         number.style.color = 'black';
//     }

//     if(incrementNumber >= 10) {
//         incrementoBtn.disabled = true;
//     }
//     if(incrementNumber > -10) {
//         decrementoBtn.disabled = false;
//     }

//     number.innerHTML = incrementNumber;
// }

// function decrement(){

//     incrementNumber = -- incrementNumber;

//     if (incrementNumber < 0){
//         number.style.color = 'red';
//     } else{
//         number.style.color = 'black';
//     }

//     if(incrementNumber <= -10) {
//         decrementoBtn.disabled = true;
//     }
//     if(incrementNumber < 10) {
//         incrementoBtn.disabled = false;
//     }

//     number.innerHTML = incrementNumber;
// }

incrementoBtn.addEventListener('click', increment);

function increment(){

    incrementNumber = ++ incrementNumber;

    if (incrementNumber < 0){
        number.style.color = 'red';
    } else{
        number.style.color = 'black';
    }

    if(incrementNumber >= 10) {
        incrementoBtn.disabled = true;
    }
    if(incrementNumber > -10) {
        decrementoBtn.disabled = false;
    }

    number.innerHTML = incrementNumber;
}

decrementoBtn.addEventListener('click', decrement);

function decrement(){

    incrementNumber = -- incrementNumber;

    if (incrementNumber < 0){
        number.style.color = 'red';
    } else{
        number.style.color = 'black';
    }

    if(incrementNumber <= -10) {
        decrementoBtn.disabled = true;
    }
    if(incrementNumber < 10) {
        incrementoBtn.disabled = false;
    }

    number.innerHTML = incrementNumber;
}