// Whenever this page is loaded search for the gameName in sessionStorage
let gameName = sessionStorage.getItem('gameName');

// Whenever this page is loaded retrieve the gameList in sessionStorage
let gameList = sessionStorage.getItem("gameList");
gameList = JSON.parse(gameList);

// Retrieve the data from the searched game by its name
let gameData = gameList.find(game => game.nomeJogo === gameName);

// Function to fill the images from the game into the carousel
const fillGameCarousel = function(images){
    let carouselItems = document.querySelectorAll(".carousel-item img");
    let index = 0;

    carouselItems.forEach((item) => {
        item.src = images[index];
        index++;
    });
};

// Fill the form and carousel with game's data
fillGameInfo(gameData);
fillGameCarousel(gameData.imagens);

// Function to fill the game info into the form
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

// Event to return to the main page
const voltarButton = document.getElementById('botaoVoltar');
voltarButton.addEventListener("click", function(){

    event.preventDefault();

    const gamePage = 'index.html';

    window.location.href = gamePage;

});
