/** =========================================================================
 ** AÇÕES DO MENU DO USUÁRIO
 ** ========================================================================*/
const btnBoxUsuario = document.querySelector('#btnBoxUsuario');

function boxUsuario(){
    const boxUsuario = document.querySelector('#headerBoxUsuario');
    boxUsuario.classList.toggle('active');

}

btnBoxUsuario.addEventListener('click', boxUsuario);

/** =========================================================================
 ** AÇÕES DO MENU ESQUERDO
 ** ========================================================================*/
const btnCamadas = document.querySelector('#btnCamadas');
const btnImagens = document.querySelector('#btnImagens');
const btnComparar = document.querySelector('#btnComparar');

const lateralEsquerda = document.querySelector('#lateralEsquerda');
const boxCamadas = document.querySelector('#boxCamadas');
const boxImagens = document.querySelector('#boxImagens');
const boxComparar = document.querySelector('#boxComparar');


function menuBoxCamadas(){
    lateralEsquerda.classList.toggle('active');
    boxCamadas.classList.toggle('active');

    // boxImagens.classList.remove('active');
    // boxComparar.classList.remove('active');
}

btnCamadas.addEventListener('click', menuBoxCamadas);

function menuBoxImagens(){
    lateralEsquerda.classList.toggle('active');
    boxImagens.classList.toggle('active');

    // boxCamadas.classList.remove('active');
    // boxComparar.classList.remove('active');
}

btnImagens.addEventListener('click', menuBoxImagens);

function menuBoxComparar(){
    
    lateralEsquerda.classList.toggle('active');
    boxComparar.classList.toggle('active');

    // boxCamadas.classList.remove('active');
    // boxComparar.classList.remove('active');
}

btnComparar.addEventListener('click', menuBoxComparar);

/** =========================================================================
 ** AÇÕES DO MENU ESQUERDO - BOTÃO EXIBIR SUB-MENU
 ** ========================================================================*/
const btnExibir = document.querySelector('#btnExibir');



function exibirSubMenu(){
    const subMenuItem1 = document.querySelector('#sub-menu-item1');
    subMenuItem1.classList.toggle('active');
    console.log(subMenuItem1);
    console.log('Clicou');
}

btnExibir.addEventListener('click', exibirSubMenu());


/** =========================================================================
 ** CAPTURA DA POSIÇÃO DO MOUSE NA TELA
 ** ========================================================================*/
let latitude = document.querySelector('#latitude');
let logitude = document.querySelector('#logitude');

document.querySelector('.corpo').addEventListener('mousemove', (event) => {
    latitude.innerHTML = event.clientX * 1245;
    logitude.innerHTML = event.clientY * 1245;
});

