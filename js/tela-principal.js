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

btnCamadas.addEventListener('click', menuBoxCamadas);
function menuBoxCamadas(){
    lateralEsquerda.classList.toggle('active');
    boxCamadas.classList.toggle('active');

}


btnImagens.addEventListener('click', menuBoxImagens);
function menuBoxImagens(){
    lateralEsquerda.classList.toggle('active');
    boxImagens.classList.toggle('active');

}


btnComparar.addEventListener('click', menuBoxComparar);
function menuBoxComparar(){
    
    lateralEsquerda.classList.toggle('active');
    boxComparar.classList.toggle('active');

    

}


/** =========================================================================
 ** AÇÕES DO MENU ESQUERDO - BOTÃO FECHAR BOX
 ** ========================================================================*/
 const btnFechar = document.querySelector('#btnFechar');

 btnFechar.addEventListener('click', fecharBox);
 function fecharBox(){
     lateralEsquerda.classList.remove('active');
     boxCamadas.classList.remove('active');
     boxImagens.classList.remove('active');
     boxComparar.classList.remove('active');
     
 }


/** =========================================================================
 ** AÇÕES DO MENU ESQUERDO - BOTÃO EXIBIR SUB-MENU
 ** ========================================================================*/
const btnExibir = document.querySelector('#btnExibir');
const subMenuItem1 = document.querySelector('#camada-sub-menu-item1');

btnExibir.addEventListener('click', exibirSubMenu);

function exibirSubMenu(){
    subMenuItem1.classList.toggle('active');
}

const btnExibirSub2 = document.querySelector('#btnExibirSub2');
const subMenu2Item1 = document.querySelector('#camada-sub-menu2-item1-1');


btnExibirSub2.addEventListener('click', exibirSubMenu2);

function exibirSubMenu2(){
    subMenu2Item1.classList.toggle('active');
}




/** =========================================================================
 ** CAPTURA DA POSIÇÃO DO MOUSE NA TELA
 ** ========================================================================*/
let latitude = document.querySelector('#latitude');
let logitude = document.querySelector('#logitude');

document.querySelector('.corpo').addEventListener('mousemove', (event) => {
    latitude.innerHTML = event.clientX * 1245;
    logitude.innerHTML = event.clientY * 1245;
});

