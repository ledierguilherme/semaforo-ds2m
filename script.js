const img = document.getElementById( 'img' );
const buttons = document.getElementById( 'buttons' );
let colorIndex = 0;
let intervalId = null;

const trafficLight = ( event ) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeColor = () => {
    const colors = ['vermelho','amarelo','verde']
    const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval ( intervalId );
}

const turnOn = {
    'vermelho':      () => img.src = './img/vermelho.png',
    'amarelo':   () => img.src = './img/amarelo.png',
    'verde':    () => img.src = './img/verde.png',
    'automatico': () => intervalId = setInterval( changeColor, 1000 )
}

buttons.addEventListener('click', trafficLight );