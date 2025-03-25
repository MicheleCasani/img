//creo le costanti 
const lampadina = document.getElementById('lamp')
const btnLampadina = document.getElementById('btn-lamp')

btnLampadina.addEventListener('click',function(){
    if(lampadina.includes('yellow')){
        lampadina = './img/white_lamp.png';
    }

    else(lampadina = './img/yellow_lamp.png')
});