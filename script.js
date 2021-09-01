const img = document.getElementById( 'img' );
const buttons = document.getElementById( 'buttons' );
let corIndex = 0;
let intervalId = null;

const mudançaCor = ( event ) => {
    parar();
    ligar[event.target.id]();
}

const nextIndex = () => corIndex = corIndex < 2 ? ++corIndex : 0;

const mudarCor = () => {
    const cores = ['vermelho','amarelo','verde']
    const cor = cores[ corIndex ];
    ligar[cor]();
    nextIndex();
}

const parar = () => {
    clearInterval ( intervalId );
}

const ligar = {
    'vermelho':      () => img.src = './img/vermelho.png',
    'amarelo':   () => img.src = './img/amarelo.png',
    'verde':    () => img.src = './img/verde.png',
    'automatico': () => intervalId = setInterval( mudarCor, 100 )
}

buttons.addEventListener('click', mudançaCor );