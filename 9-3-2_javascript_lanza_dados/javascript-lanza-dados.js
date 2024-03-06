// 2- LANZAR LOS DADOS

// Dos jugadores, PLAYER1 y PLAYER2, se enfrentan a tirar los dados.

// PLAYER1: Se genera un número del 1 al 6 cuando el usuario aprieta el botón "lanzar dado". Se muestra el resultado en pantalla con innerHTML.

// PLAYER2: juega su turno

// Al final se dice quién de los dos  ha ganado ( o si ha empatado)

// Crear una página con presentación CSS, según tu tiempo e imaginación.

function numAleatorio(min, max) {
    const numMinimo = Math.ceil(min);
    const numMaximo = Math.floor(max);
    return Math.floor(Math.random() * (numMaximo - numMinimo) + numMinimo);
}

function lanzarDado1() {
    let player1 = document.getElementById("numero1"); 
    player1.value = numAleatorio(1, 7);
}

function lanzarDado2() {
    let player2 = document.getElementById("numero2");
    player2.value = numAleatorio(1, 7);
}

function ganador() {
    let ganadorTexto = document.getElementById("ganador-texto");
    let player1 = parseInt(document.getElementById("numero1").value);
    let player2 = parseInt(document.getElementById("numero2").value);

    if (player1 > player2) {
        ganadorTexto.innerHTML = "¡Ha ganado: Player 1!";
    } else if (player2 > player1) {
        ganadorTexto.innerHTML = "¡Ha ganado: Player 2!";
    } else {
        ganadorTexto.innerHTML = "¡Habéis empatado!";
    }
}
