const botao = document.querySelector('button');

gerarValorAleatorio1 = () => {
    return Math.floor(Math.random() * 671);
}

function pegarPersonagens() {
    pegarPersonagem1();
    pegarPersonagem2();
    pegarPersonagem3();
}

const pegarPersonagem1 = () => {

const especieDoPersonagem1 = document.querySelector('#especie1');
const estaVivo1 = document.querySelector('#vivo1');
const imagem1 = document.querySelector('#img1');
const nomeDoPersonagem1 = document.querySelector('#nome1');
    
    let numeroAleatorio = gerarValorAleatorio1();
    if (numeroAleatorio == 0){
        numeroAleatorio = numeroAleatorio + 1
    }else if (numeroAleatorio == 672){
        numeroAleatorio = numeroAleatorio - 1
    }else return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}` , {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response1) => response1.json()).then((data) => {
        console.log(data)
        especieDoPersonagem1.innerHTML = ("Espécie: ") + data.species;
        estaVivo1.innerHTML = ("Está vivo ou morto: ") + data.status;
        imagem1.src = data.image;
        imagem1.alt = data.name;
        nomeDoPersonagem1.innerHTML = ("Nome: ") + data.name;
       
    });
}

const pegarPersonagem2 = () => {

const especieDoPersonagem2 = document.querySelector('#especie2');
const estaVivo2 = document.querySelector('#vivo2');
const imagem2 = document.querySelector('#img2');
const nomeDoPersonagem2 = document.querySelector('#nome2');

    let numeroAleatorio = gerarValorAleatorio1();
  
     fetch(`https://rickandmortyapi.com/api/character/${(numeroAleatorio)}` , {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
         }
    }).then((response) => response.json()).then((data) => {
        console.log(data);
        especieDoPersonagem2.innerHTML = ("Espécie: ") + data.species;
        estaVivo2.innerHTML = ("Está vivo ou morto: ") + data.status;
        imagem2.src = data.image;
        imagem2.alt = data.name;
        nomeDoPersonagem2.innerHTML = ("Nome: ") + data.name;
        
    });
}

const pegarPersonagem3 = () => {

const especieDoPersonagem3 = document.querySelector('#especie3');
const estaVivo3 = document.querySelector('#vivo3');   
const imagem3 = document.querySelector('#img3');
const nomeDoPersonagem3 = document.querySelector('#nome3');

    let numeroAleatorio = gerarValorAleatorio1();

    return fetch(`https://rickandmortyapi.com/api/character/${(numeroAleatorio)}` , {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
         }
    }).then((response) => response.json()).then((data) => {
        console.log(data);
        especieDoPersonagem3.innerHTML = ("Espécie: ") + data.species;
        estaVivo3.innerHTML = ("Está vivo ou morto: ") + data.status;
        imagem3.src = data.image;
        imagem3.alt = data.name;
        nomeDoPersonagem3.innerHTML = ("Nome: ") + data.name;
        
    });
}
botao.onclick = pegarPersonagens;
