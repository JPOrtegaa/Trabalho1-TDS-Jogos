// Object for Game
function Game(nome, dev, data, categorias, descricao, imagens, horas){
    this.nomeJogo = nome;
    this.nomeDesenvolvedor = dev;
    this.dataLancamento = data;
    this.categorias = categorias;
    this.descricao = descricao;
    this.imagens = imagens;
    this.horas = horas;
}

// Any time the page is reloaded checks in sessionStorage for the gameList
let gameList = sessionStorage.getItem('gameList') || [];

// Case there is no gameList
if(gameList.length === 0){
    const game1 = new Game(
      "Dead by Daylight",
      "Behaviour Interactive Inc.",
      "2016-06-14",
      ["Estratégia", "Outros"],
      "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught and killed.",
      ["imagens/1dbdlogo.jpg", "imagens/2dbd.jpg", "imagens/3dbd.jpg"],
      255.5
    );
    gameList.push(game1);
    sessionStorage.setItem('gameList', JSON.stringify(gameList));
    printGamesList(gameList);
    printRecentGames(gameList);
}
else{ // Otherwise
    gameList = JSON.parse(gameList);
    printGamesList(gameList);
    printRecentGames(gameList);
}


// Event to search for a game in your library
const searchBar = document.getElementById('buscarJogo');
searchBar.addEventListener('keypress', function(event){
    if (event.key === 'Enter') {
        event.preventDefault();
        let gameSearch = searchBar.value;

        if(gameSearch !== ''){
            let game = gameList.find((game) => game.nomeJogo === gameSearch);
            if(typeof game != 'undefined'){
                printRecentGames([game]);
            }
        }
        else{
            printRecentGames(gameList);
        }
    }
});


// Event to add a new game
const addGameButton = document.getElementById('addjogo');

addGameButton.addEventListener("click", function (event) {
    event.preventDefault();

    const registerPage = "cadastro.html";

    window.location.href = registerPage;

});

// Function to output html tags of games
function printGamesList(gameList){

    gameList.forEach(game => {
        const newGameDiv = document.createElement("div");
        newGameDiv.classList.add("jogo");

        const icon = document.createElement('i');
        icon.classList.add('bi', 'bi-dash');
        newGameDiv.appendChild(icon);
    
        
        const newGameImage = document.createElement("img");
        newGameImage.classList.add("capa");
        newGameImage.src = game.imagens[0];
        newGameDiv.appendChild(newGameImage);
        
        const newGameTitle = document.createTextNode(game.nomeJogo);
        newGameDiv.appendChild(newGameTitle);
        
        const gameList = document.querySelector(".jogos");
        gameList.appendChild(newGameDiv);
    });


}

// Function to output html tags of recent games
function printRecentGames(gameList){

    const recentGames = document.getElementById("lista");
    recentGames.innerHTML = '';

    gameList.forEach(game => {
        const card = document.createElement('div');
        card.classList.add("card");
        card.style.width = "7rem";
        card.style.height = "10rem";

        const newGameImage = document.createElement('img');
        newGameImage.classList.add('card-img-top');
        newGameImage.src = game.imagens[0];
        card.appendChild(newGameImage);

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        cardBody.style.padding = '0';

        const gameName = document.createTextNode(game.nomeJogo);
        const strongTag = document.createElement('strong');
        strongTag.appendChild(gameName);
        cardBody.appendChild(strongTag);

        const info = document.createElement('div');
        info.classList.add('info');

        const btPlay = document.createElement('a');
        btPlay.classList.add('btn', 'btn-primary');

        const btPlay2 = document.createElement('i');
        btPlay2.classList.add('bi', 'bi-play-circle');
        btPlay.append(btPlay2);
        
        info.appendChild(btPlay);

        const playedHours = document.createTextNode(game.horas + ' horas');
        info.appendChild(playedHours);

        cardBody.appendChild(info);

        card.appendChild(cardBody);

        recentGames.appendChild(card);
    });

    generateRecentGameEventListener();

}

// Generate the click event listeners for each recentGame when the list is updated
function generateRecentGameEventListener(){
    const recentGameDivs = document.querySelectorAll(".card");

    recentGameDivs.forEach((gameDiv) => {
        gameDiv.addEventListener("click", function (event) {
        event.preventDefault();

        let gameName = event.currentTarget.querySelector("strong").textContent;
        sessionStorage.setItem("gameName", gameName);

        const gamePage = "jogo.html";
        window.location.href = gamePage;
        });
    });
}


// Evento para pegar a info sobre o jogo clicado
const gameDivs = document.querySelectorAll('.jogo');

gameDivs.forEach(gameDiv => {
    gameDiv.addEventListener("click", function (event) {
      event.preventDefault();

      let gameName = event.currentTarget.textContent.trim();
      sessionStorage.setItem("gameName", gameName);

      const gamePage = "jogo.html";
      window.location.href = gamePage;
    });    
});