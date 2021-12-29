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
