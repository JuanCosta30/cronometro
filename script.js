let intervalID;
let tempo = 0;
let pause = true;
let tempoAtual;
const cronometro = document.getElementById("cronometro");
const iniciar = document.getElementById("iniciar");
const pausar = document.getElementById("pausar"); 
const zerar = document.getElementById("zerar");

iniciar.addEventListener('click', iniciarCronometro);
pausar.addEventListener('click', pausarCronometro);
zerar.addEventListener('click', zerarCronometro);

cronometro.innerText = '00:00:00';

function iniciarCronometro(){
    
    if(pause){
        pause = false;
        intervalID = setInterval( function (){
            tempo++;
            tempoAtual = new Date(tempo * 250);
            cronometro.innerHTML = formatTime(tempoAtual);   
        }, 1);
    }
} 
    /* ----- função que inicia a hora, para e zera ------
    intervalID = setIntervalID(timer, 1000);
    function timer(){
        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
       
        minute = minute.toString().padStart(2, '0');
        second = second.toString().padStart(2, '0');

        cronometro.innerHTML = `${hour}:${minute}:${second}`;

        
    }
    */
function formatTime(date){

    let hora = date.getUTCHours();
    let minuto = date.getUTCMinutes();
    let segundo = date.getUTCSeconds();
        
    return `${hora < 10 ? "0" + hora : hora}:${minuto < 10 ? "0" + minuto : minuto}:${segundo < 10 ? "0" + segundo : segundo}`;
    
}
function pausarCronometro(){
    tempo = 0;
    if(!pause){
        pause = true;
        clearInterval(intervalID);
    }
}

function zerarCronometro(){
    clearInterval(intervalID);
    cronometro.innerHTML = '00:00:00'
}
