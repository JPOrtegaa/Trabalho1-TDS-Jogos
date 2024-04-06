console.log('entrei na pag!');

function Game(nome, dev, data, categorias, descricao, imagens, horas){
    this.nomeJogo = nome;
    this.nomeDesenvolvedor = dev;
    this.dataLancamento = data;
    this.categorias = categorias;
    this.descricao = descricao;
    this.imagens = imagens;
    this.horas = horas;
}

let gameList = sessionStorage.getItem('gameList') || [];

if(gameList.length === 0){
    console.log("nao criada!!");
    const game1 = new Game('Dead by Daylight', 'dev', '2024-10-05', ['RPG', 'Outros'], 'dbd', ['imagens/dbdlogo.jpg'], 255.5);
    gameList.push(game1);
    sessionStorage.setItem('gameList', JSON.stringify(gameList));
    console.log(gameList);
    printListaJogos(gameList);
    printJogosRecentes(gameList);
}
else{
    gameList = JSON.parse(gameList);
    console.log(gameList);
    printListaJogos(gameList);
    printJogosRecentes(gameList);
}


// Evento para adicionar um novo jogo
const addGameButton = document.getElementById('addjogo');

addGameButton.addEventListener("click", function (event) {
    event.preventDefault();

    const registerPage = "cadastro.html";

    window.location.href = registerPage;

});

function printListaJogos(gameList){

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

function printJogosRecentes(gameList){

    gameList.forEach(game => {
        const card = document.createElement('div');
        card.classList.add("card");
        card.style.width = "7rem";
        card.style.height = "12rem";

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

        const recentGames = document.getElementById('lista');

        const text = document.createTextNode(game.nomeJogo[1]);

        recentGames.appendChild(card);
    });

}


// Evento para pegar a info sobre o jogo clicado
const gameDivs = document.querySelectorAll('.jogo');
// console.log(gameDivs);

gameDivs.forEach(gameDiv => {
    gameDiv.addEventListener("click", function (event) {
      event.preventDefault();

      let gameName = event.target.textContent.trim();
      sessionStorage.setItem("gameName", gameName);

      const gamePage = "jogo.html";
      window.location.href = gamePage;
    });    
});