let gameName = sessionStorage.getItem('gameName');
// console.log(gameName);

let gameList = sessionStorage.getItem("gameList");
gameList = JSON.parse(gameList);

console.log(gameList[0]);

let gameData = gameList.find(game => game.nomeJogo === gameName);

console.log(gameData);

fillGameInfo(gameData);
fillGameCarousel(gameData.imagens);

function fillGameCarousel(images){

    let carouselItems = document.querySelectorAll('.carousel-item img');
    let index = 0;

    carouselItems.forEach(item => {
        item.src = images[index];
        index++;
    });
}

function fillGameInfo(gameData){
    const nomeJogoInput = document.querySelector('#campo input[type="text"]');
    nomeJogoInput.value = gameData.nomeJogo;

    const desenvolvedoraInput = document.querySelector('.empresa input[name="nomeDesenvolvedor"]');
    desenvolvedoraInput.value = gameData.nomeDesenvolvedor;

    const dataLancamentoInput = document.querySelector('.fabricante input[name="dataLancamento"]');
    dataLancamentoInput.value = gameData.dataLancamento;

    const categoriaInputs = document.querySelectorAll('.categorias input[type="radio"]');
    categoriaInputs.forEach(input => {
        if (gameData.categorias.includes(input.value)) {
            input.checked = true;
        }
    });

    const descricaoTextarea = document.querySelector('#campodesc textarea[name="descricao"]');
    descricaoTextarea.value = gameData.descricao;
}

function getGameByName(gameList, gameName){
    gameList.forEach(game => {
        console.log(game.nomeJogo);
        console.log(gameName);
        if(game.nomeJogo === gameName){
            return game.nomeJogo;
        }
    });
}

const voltarButton = document.getElementById('botaoVoltar');
voltarButton.addEventListener("click", function(){

    event.preventDefault();

    const gamePage = 'index.html';

    window.location.href = gamePage;

});
