const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const data = document.getElementById('data');
const mes = document.getElementById('mes');
const diaDaSemana = document.getElementById('dia-da-semana'); 

const diasDaSemana = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();
    let dat = dateToday.getDate();
    let me = dateToday.getMonth();
    let dia = diasDaSemana[dateToday.getDay()]; 

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (seg < 10) seg = '0' + seg;
    if (dat < 10) dat = '0' + dat;
    if (me < 9) me = '0' + (me + 1);

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
    data.textContent = dat;
    mes.textContent = me;
    diaDaSemana.textContent = dia;
});
