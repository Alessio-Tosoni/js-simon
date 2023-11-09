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
setTimeout(eraser, 30000)
//funzione prompt per reinseririrli e verifica di essi
setTimeout(function(){
    let numeriUtente = promptMaker()
    verifica(numeri)
},31000)





function  eraser(){
    numbers = document.getElementById("numbers")
    numbers.classList.add("none")
}
function promptMaker(){
    
    numeriUtente = []
    let inputnumero1 = parseInt(prompt("inserisci il primo numero"))
    numeriUtente.push(inputnumero1)
    let inputnumero2 = parseInt(prompt("inserisci il secondo numero"))
    numeriUtente.push(inputnumero2)
    let inputnumero3 = parseInt(prompt("inserisci il terzo numero"))
    numeriUtente.push(inputnumero3)
    let inputnumero4 =parseInt(prompt("inserisci il quarto numero"))
    numeriUtente.push(inputnumero4)
    let inputnumero5 = parseInt(prompt("inserisci il quinto numero"))
    numeriUtente.push(inputnumero5)
    return numeriUtente
}
function verifica(numeri){

    let punteggioTotale = 0
    for (i = 0; i < 5; i++){
        if (numeri.includes(numeriUtente[i])){
            alert("il numero è corretto")
            punteggioTotale += 1
        } else{
            alert("il numero è sbagliato")
        }  
    }
    alert("il tuo punteggio è " + punteggioTotale)
}
