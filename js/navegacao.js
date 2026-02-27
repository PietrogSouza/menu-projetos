// 1. Lógica das páginas de Projeto
function criarBotaoVoltar(){
    // 1. Criar o elemento botão
    const btnVoltar = document.createElement('button');

    // 2. Definir o estilo do botão
    btnVoltar.innerText = 'Voltar';
    btnVoltar.style.marginTop = '20px'

    // 3. lógica do click
    btnVoltar.addEventListener('click', function(){
        window.location.href = '../index.html'
    });

    // 4. Adicionar o botão no final do body
    document.body.appendChild(btnVoltar);

};

window.onload = criarBotaoVoltar();