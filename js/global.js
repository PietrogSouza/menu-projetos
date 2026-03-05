const btnP1 = document.querySelector('#inputP1');
const btnP2 = document.querySelector('#inputP2');
const btnP3 = document.querySelector('#inputP3');
const btnP4 = document.querySelector('#inputP4');

const verificaBotao = () => {
    if(btnP1){
        btnP1.addEventListener('click', () => window.location.href= './pages/projeto01.html');
        btnP2.addEventListener('click', () => window.location.href= './pages/projeto02.html');
        btnP3.addEventListener('click', () => window.location.href= './pages/projeto03.html');
        btnP4.addEventListener('click', () => window.location.href= './pages/projeto04.html');
    }
};

const criarBotaoVoltar = () =>{
    
    const btnVoltar = document.createElement('button');
    btnVoltar.innerText = 'Voltar';
    btnVoltar.style.marginTop = '20px';

    btnVoltar.addEventListener('click', () => {
        window.location.href = '../index.html';
    });

    document.body.appendChild(btnVoltar);
};

if (btnP1) {
    // Se o btnP1 existe, estamos na Index
    verificaBotao();

} else {
    /* Se não existe, assume-se que estamos em uma página de projeto
    Usando o método addEventlistener em vez da propriedade onload */

    window.addEventListener('load', () =>{
        criarBotaoVoltar();
    });
};
