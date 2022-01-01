const usuario = document.querySelector('#login');
const senha = document.querySelector('#senha');

const btnAcessar = document.querySelector('#btnAcessar');

btnAcessar.addEventListener('click', () => {
    if(usuario.value !== '' && senha.value !== ''){
        window.location.href = './index.html'
    } else {
        alert('Preencha todos os campos!');
    }
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
        }, 75 * i);
    });

}

efeitoDigitacao(titulo);
