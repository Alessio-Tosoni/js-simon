//creo i numeri e gli inserisco in p
numeri = []
for (let i = 0; i < 5; i++) {
    z = (Math.floor(Math.random() * 99) +1)
    console.log(z)
    if (numeri.includes(z)){
        i--
    } else{
        numeri.push(z)
    }
    document.getElementById('numbers').innerHTML = numeri  
 }
//gli do un timer
setTimeout(eraser, 3000)
//prompt per reinseririrli
setTimeout(promptMaker,4000)
//verifica numeri inseriti da utente

function  eraser(){
    numbers = document.getElementById("numbers")
    numbers.classList.add("none")
}
function promptMaker(){
    let inputUtente = []
    let inputBrowser = prompt("inserisci i numeri che riesci a ricordarti separati da una virgola")
    inputUtente = inputBrowser
    let aInputUtente = Array.from(inputUtente)
    console.log(aInputUtente)
}