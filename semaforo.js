const semaforo = document.getElementById("semaforo")
let idInterval

function amarelo() {
    semaforo.src = "img/amarelo.png" 
}

function verde() {
    semaforo.src = "img/verde.png" 
}

function vermelho() {
    semaforo.src = "img/vermelho.png" 
}

function desligada() {
    semaforo.src = "img/desligado.png"
}

function pararPiscar() {
    clearInterval(idInterval)
}

function trocarImagem() {
    if(semaforo.src.includes("desligado")){
        semaforo.src = "img/vermelho.png"
    }
    else if(semaforo.src.includes("vermelho")){
        semaforo.src = "img/amarelo.png" 
    }
    else if(semaforo.src.includes("amarelo")){
        semaforo.src = "img/verde.png" 
    } 
}

function auto() {
    const auto = document.getElementById("auto")
    if(setInterval(trocarImagem, 1000)) {
        pararPiscar()
    }   
}

document.getElementById("amarelo")
    .addEventListener("click", amarelo)

document.getElementById("verde")
    .addEventListener("click", verde)

document.getElementById("vermelho")
    .addEventListener("click", vermelho)

document.getElementById("auto")
    .addEventListener("click", auto)




