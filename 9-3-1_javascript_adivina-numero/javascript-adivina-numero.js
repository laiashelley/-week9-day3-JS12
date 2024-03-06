// 1- ADIVINA EL NUMERO

// Se genera un número aleatorio del 1 al 10  (o del 1 al 20 si prefieres).

// En un bucle do...while:


// Te pregunta (puede ser un prompt) ‘qué número es’ ?.


// Y te sigue preguntando hasta que lo adivines.


// Cuando lo adivines, mensaje de “Felicidades, has acertado!”.



function numAleatorio(min,max){
    const numMinimo = Math.ceil(min);
    const numMaximo = Math.floor(max);
    return Math.floor(Math.random() * (numMaximo - numMinimo) + numMinimo);
}

let numeroCorrecto = numAleatorio(1,20);

do{
    numeroCorrecto = parseInt(prompt("Qué número es? (Introduce un numero del 1 al 20)"));
    if (numeroCorrecto === 15){
        document.write("Felicidades, has acertado!");
    }

} while (numeroCorrecto != 15){

}

