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
    let me = dateToday.getMonth() + 1; // Corrige para 1-12
    let dia = diasDaSemana[dateToday.getDay()];

    // Formatação com dois dígitos
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (seg < 10) seg = '0' + seg;
    if (dat < 10) dat = '0' + dat;
    if (me < 10) me = '0' + me; // Formata o mês para ter dois dígitos

    // Atualiza os elementos do DOM
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
    data.textContent = dat;
    mes.textContent = me;
    diaDaSemana.textContent = dia;
});
