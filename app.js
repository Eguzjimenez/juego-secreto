let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if ( listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        if(numeroDeUsuario === numeroSecreto) {
            asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos ===1) ? 'vez' : 'vecez'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }else {
            // El usuario gana 
            if( numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento('p', 'El número es menor');
            } else {
                asignarTextoElemento('p', 'El número es mayor');
            }
            intentos++;
            limpiarCaja();
        }
    }
    
    return;
}

function limpiarCaja  () {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*10+1);
    // SI el numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado)
        return numeroGenerado;
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', 'Indica un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego() {
    // Limpiar la caja
    limpiarCaja();

    //Indica mansaje de intervalo de numeros
    //Generar el numero aleatorio
    // Iniciazar el numero de intentos 
    condicionesIniciales()

    //Dashabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}


condicionesIniciales();