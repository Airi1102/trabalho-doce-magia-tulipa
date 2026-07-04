const bolos = [
{
    nome: "Bolo de Chocolate",
    preco: 10,
    imagem: "./img/img-bolochocolate.jpg",
    descricao: "Bolo caseiro de chocolate.",
    nota: "⭐ 4.9"
},
{
    nome: "Bolo de Cenoura",
    preco: 10,
    imagem: "./img/bolo-de-cenoura.webp",
    descricao: "Bolo de cenoura com cobertura de chocolate.",
    nota: "⭐ 4.8"
},
{
    nome: "Bolo de Laranja",
    preco: 8,
    imagem: "./img/bolo-de-laranja.jpg",
    descricao: "Bolo leve de laranja.",
    nota: "⭐ 4.7"
},
{
    nome: "Bolo de Banana",
    preco: 8,
    imagem: "./img/bolo-de-banana.jpg",
    descricao: "Bolo de banana com canela.",
    nota: "⭐ 4.6"
}
];

let indiceAtual = 0;

function mostrarBolo(){

    const nome = document.querySelector(".bolo");
    nome.textContent = bolos[indiceAtual].nome;

    const preco = document.querySelector(".preco");
    preco.textContent = `R$ ${bolos[indiceAtual].preco},00`;

    const imagem = document.querySelector(".bolo-img");
    imagem.src = bolos[indiceAtual].imagem;

    const descricao = document.querySelector(".descricao");
    descricao.textContent = bolos[indiceAtual].descricao;

    const nota = document.querySelector(".avaliacao");
    nota.textContent = bolos[indiceAtual].nota;
}

document.addEventListener("DOMContentLoaded", function(){

    const btnProximo = document.querySelector("#btn-proximo");
    const btnAnterior = document.querySelector("#btn-anterior");

    btnProximo.addEventListener("click", function(){
        indiceAtual++;

        if(indiceAtual >= bolos.length){
            indiceAtual = 0;
        }

        mostrarBolo();
    });

    btnAnterior.addEventListener("click", function(){
        indiceAtual--;

        if(indiceAtual < 0){
            indiceAtual = bolos.length - 1;
        }

        mostrarBolo();
    });

    mostrarBolo();
});