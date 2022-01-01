const btnBoxUsuario = document.querySelector('#btnBoxUsuario');

function boxUsuario(){
    const boxUsuario = document.querySelector('#headerBoxUsuario');
    boxUsuario.classList.toggle('active');

}

btnBoxUsuario.addEventListener('click', boxUsuario);

/** =========================================================================
 ** CAPTURA DA POSIÇÃO DO MOUSE NA TELA
 ** ========================================================================*/
let latitude = document.querySelector('#latitude');
let logitude = document.querySelector('#logitude');

document.querySelector('.corpo').addEventListener('mousemove', (event) => {
    latitude.innerHTML = event.clientX * 1245;
    logitude.innerHTML = event.clientY * 1245;
});