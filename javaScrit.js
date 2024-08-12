const imagens = document.querySelectorAll('.imagem');
const botoes = document.querySelectorAll('.botao');
const informacoes = document.querySelectorAll('.informacoes');

let imagemAtual = 0;

function mostrarImagem(index) {
    // Remove a classe 'ativa' de todas as imagens, botões e informações
    imagens.forEach((img) => img.classList.remove('ativa'));
    botoes.forEach((botao) => botao.classList.remove('selecionado'));
    informacoes.forEach((info) => info.classList.remove('ativa'));

    // Adiciona a classe 'ativa' para a imagem, botão e informação correspondentes ao índice
    imagens[index].classList.add('ativa');
    botoes[index].classList.add('selecionado');
    informacoes[index].classList.add('ativa');
}

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        mostrarImagem(index);
        imagemAtual = index; // Atualiza a imagem atual
    });
});

// Função para alternar automaticamente entre as imagens a cada 5 segundos
function alternarImagem() {
    imagemAtual = (imagemAtual + 1) % imagens.length;
    mostrarImagem(imagemAtual);
}
