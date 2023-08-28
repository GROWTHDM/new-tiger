let btn = document.getElementById('btn');
let btnAnimated = document.getElementById('btnAnimated');
let btnStatic = document.getElementById('btnStatic');
let multVezes = document.getElementById('multVezes');
let timeRemaining = document.getElementById('timeRemaining');
let iconEntrada = document.getElementById('iconEntrada');
let iconValidade = document.getElementById('iconValidade');
let intro = document.querySelector('.intro');
let logoImg = document.querySelector('.logoImg');


window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoImg.classList.add('active');

    }, 400);


    setTimeout(() => {
        logoImg.classList.remove('active');
        logoImg.classList.add('fade');
    }, 2000);

    setTimeout(() => {
        intro.style.top = '-100vh';

    }, 3000);
})

function getRandomNumber(min, max) {
    let step2 = (Math.random() * (max - min + 1) + min);
    let result = Math.floor(step2);
    return result;

}


function updateTime() {
    let time = dayjs();
    let newTime = time.add(2, 'm');
    return (newTime.format("HH:mm"));
}


btn.addEventListener('click', () => {
    multVezes.innerText = "Multiplicador:" + " " + getRandomNumber(5, 10) + "X";
    timeRemaining.innerText = "Valido até:" + " " + updateTime();
    iconEntrada.style.display = 'block'
    iconValidade.style.display = 'block';
    btnStatic.style.display = 'none';
    btnAnimated.style.display = 'block';
    if (btnStatic.style.display === 'none') {
        setTimeout(() => {
            btnStatic.style.display = 'block';
            btnAnimated.style.display = 'none';
        }, 3000);
    }
});

let countdown = 40;

let countdownTimer = null;

const atualizarBotao = () => {
    --countdown;
    btn.innerText = countdown;
    if (countdown === 0) {
        finishCountdownTimer();
        btn.innerText = '';
    }
}

const finishCountdownTimer = () => {
    clearInterval(countdownTimer);
    btn.disabled = false;
    countdown = 40;
}

btn.addEventListener('click', function(e){
    e.preventDefault;
    btn.disabled = true;
    countdownTimer = setInterval(atualizarBotao, 1000)
})



