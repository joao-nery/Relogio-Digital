const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');



setInterval(relogio, 100);

function relogio(){
    const d = new Date();
    hours.innerHTML = d.getHours().toString().padStart(2, '0');
    minutes.innerHTML = d.getMinutes().toString().padStart(2, '0');
    seconds.innerHTML = d.getSeconds().toString().padStart(2, '0');
}

