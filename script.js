let numMay = document.getElementById("numeroEsMayor");
let numMen = document.getElementById("numeroEsMenor");
let boton = document.getElementById("boton");
let input = document.getElementById("input");
let win = document.getElementById("ganaste")
let loose = document.getElementById("perdiste")
let numeroes = document.getElementById("numeroes")
let intentosRestantes = document.getElementById("intentosRestantes")
boton.addEventListener("click", adivinar);
let intentos = 7;
const numeroSecreto = Math.floor(Math.random() * 77) + 1;

numeroes.style.display = "none";
win.style.display = "none";
loose.style.display = "none";
numMay.style.display = "none";
numMen.style.display = "none";

intentosRestantes.innerText = "Intentos restantes: " + intentos;

function adivinar() {
    if (parseInt(input.value) === numeroSecreto) {
        console.log("Ganaste!")
        win.style.display = "block";
        loose.style.display = "none";
        numeroes.style.display = "block"
        numeroes.innerText = "el número es " + numeroSecreto;
        numMay.style.display = "none";
        numMen.style.display = "none";

        actualizarIntentos()
    } else if (parseInt(input.value) > numeroSecreto) {
        console.log("el numero secreto es menor");
        numMay.style.display = "none";
        numMen.style.display = "block";
        numeroes.style.display = "none";
        actualizarIntentos()
    } else if (parseInt(input.value) < numeroSecreto){
        console.log("el numero secreto es mayor")
        numMen.style.display = "none";
        numMay.style.display = "block";
        numeroes.style.display = "none";
        actualizarIntentos()
    }
    
}


function actualizarIntentos() {
    intentos--;
    intentosRestantes.innerText = "Intentos restantes: " + intentos;

    if (intentos === 0) {
        console.log("¡Lo siento! Has agotado tus 7 intentos. El número secreto era " + numeroSecreto);
        win.style.display = "none";
        loose.style.display = "block";
        numMen.style.display = "none";
        numMay.style.display = "none";
        numeroes.style.display = "block"
        numeroes.innerText = "el número es " + numeroSecreto;
    } else {
        console.log("Intentos restantes: " + intentos);
    }
}