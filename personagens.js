const botao = document.querySelector('button');

gerarvalorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

function pegarPersonagens() {
    pegarPersonagem1();
    pegarPersonagem2();
    pegarPersonagem3();
}
botao.onclick = pegarPersonagens;
