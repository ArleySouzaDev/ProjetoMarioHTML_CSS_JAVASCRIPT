const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');



const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump'); 

    },500    );
}


const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition =  +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if(pipePosition <= 100 && pipePosition > 0 && marioPosition < 80){     

        pipe.style.animation = 'nome';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'nome';
        mario.style.bottom = `${marioPosition}px`;

        mario.src ='./image/game-over.png';
        mario.style.width = '55px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
    }



}, 10);






document.addEventListener('keydown', jump);



/** --------------------------------
 * O código de baixo cria uma função de forma global,
 *  que não é uma boa prática, porém o mesmo funciona.**/


/*const mario = document.querySelector('.mario');

function jump() {
    mario.classList.add('jump');
}

document.addEventListener('keydown', jump);*/


