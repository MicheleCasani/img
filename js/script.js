//creo le costanti 
const lampadina = document.getElementById('lamp')
const btnLampadina = document.getElementById('btn-lamp')

btnLampadina.addEventListener('click',function(){
    if(lampadina.src.includes('yellow')){
        lampadina.src = './img/white_lamp.png';
        btnLampadina.innerText = 'SPEGNI'
    }

    else{lampadina.src = './img/yellow_lamp.png'
         btnLampadina.innerText = 'ACCENDI'
    }
});