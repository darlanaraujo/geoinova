const usuario = document.querySelector('#login');
const senha = document.querySelector('#senha');

const boxMsg = document.querySelector('#box-msg');
const btnClose = document.querySelector('#btnClose');


const btnAcessar = document.querySelector('#btnAcessar');

btnAcessar.addEventListener('click', () => {
    if(usuario.value !== '' && senha.value !== ''){
        window.location.href = './index.html'
    } else {
        boxMsg.classList.add('active');
    }
});

btnClose.addEventListener('click', () => {
    boxMsg.classList.remove('active');
});

// ANIMAÇÃO TITULO
const titulo = document.querySelector('h1');

function efeitoDigitacao(elemento){

    const texto = elemento.innerHTML.split('');
    elemento.innerHTML = '';

    texto.forEach((letra, i) => {
        // console.log(letra);
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 60 * i);
    });

}

efeitoDigitacao(titulo);
