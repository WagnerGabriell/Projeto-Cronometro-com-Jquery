iniciarCronometro = (segundos, minutos, horas) => {
    segundos=0;
    minutos=0;
    horas=0;
    cronometroSegundos = setInterval(() =>{  
        segundos++;
        $("#contador").html(`${horas}:${minutos}:${segundos}`);
    },1000);
    cronometroMinutos = setInterval(() => {  
        minutos++;
        segundos=0;
        $("#contador").html(`${horas}:${minutos}:${segundos}`);
    },60000);
    cronometroHoras = setInterval(() => {  
        horas++;
        minutos=0;
        $("#contador").html(`${horas}:${minutos}:${segundos}`);
    },3600000);
}
pausarCronometro = () =>{
    clearInterval(cronometroSegundos);
    clearInterval(cronometroMinutos);
    clearInterval(cronometroHoras);
}
resetaCronometro = (segundos, minutos, horas) => {
    clearInterval(cronometroSegundos);
    clearInterval(cronometroMinutos);
    clearInterval(cronometroHoras);
    segundos=0;
    minutos=0;
    horas=0;
    $("#contador").html(`${horas}:${minutos}:${segundos}`);
}

$(document).ready(() =>{

let horas = 0;
let minutos = 0;
let segundos = 0;

$("#contador").html(`${horas}:${minutos}:${segundos}`);


$("#btnIniciar").click (iniciarCronometro);
$("#btnPausar").click (pausarCronometro);
$("#btnResetar").click (resetaCronometro);

});