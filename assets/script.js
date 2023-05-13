const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const horatexto = document.getElementById('horatexto');
const minutotexto = document.getElementById('minutotexto');
const segundotexto = document.getElementById('segundotexto');

const relogio = setInterval(function time() {
     let agora = new Date()
     let hr = agora.getHours()
     let min = agora.getMinutes()
     let sec = agora.getSeconds()

     horas.textContent = hr.toString().padStart(2, '0')
     minutos.textContent = min.toString().padStart(2, '0')
     segundos.textContent = sec.toString().padStart(2, '0')

     
     horatexto.textContent = (hr == 1) ? "Hora" : "Horas";
     minutotexto.textContent = (hr == 1) ? "Minuto" : "Minutos";
     segundotexto.textContent = (hr == 1) ? "Segundo" : "Segundos";

     document.body.style.background = (hr >= 6 && hr <= 17) ? "linear-gradient( 120deg, #ae0303, #d24b4b )" : "linear-gradient( 120deg, #0311ae, #03114b )";
})