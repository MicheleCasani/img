//creo le costanti 
const lampadina = document.getElementById('lamp')
const btnLampadina = document.getElementById('btn-lamp')
//aggiungiamo l'eventualità del click
btnLampadina.addEventListener('click', function () {
    //qua gli diciamo che se l'immagine contiene la dicitura "yellow" allora la lampadina si "spegne" e si aggiorna la scritta su "SPEGNI" sul bottone
    if (lampadina.src.includes('yellow')) {
        lampadina.src = './img/white_lamp.png';
        btnLampadina.innerText = 'SPEGNI'
    }
    //altrimenti gli diciamo che se l'immagine non contiene la dicitura "yellow" l'immagine torna "normale" e appare la dicitua "ACCENDI" sul bottone

    else {
        lampadina.src = './img/yellow_lamp.png'
        btnLampadina.innerText = 'ACCENDI'
    }
});