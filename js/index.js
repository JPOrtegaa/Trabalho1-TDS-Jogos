console.log('entrei na pag!');

function Game(nome, dev, data, categorias, descricao, imagens){
    this.nomeJogo = nome;
    this.nomeDesenvolvedor = dev;
    this.dataLancamento = data;
    this.categorias = categorias;
    this.descricao = descricao;
    this.imagens = imagens;
}

let gameList = sessionStorage.getItem('gameList') || [];

if(gameList.length === 0){
    console.log("nao criada!!");
    const game1 = new Game('Dead by Daylight', 'dev', '2024-10-05', ['RPG', 'Outros'], 'dbd', ['imagens/dbdlogo.jpg']);
    gameList.push(game1);
    sessionStorage.setItem('gameList', JSON.stringify(gameList));
    console.log(gameList);
    printListaJogos(gameList);
}
else{
    gameList = JSON.parse(gameList);
    console.log(gameList);
    printListaJogos(gameList);
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
        // Create a new game div
        const newGameDiv = document.createElement("div");
        newGameDiv.classList.add("jogo");
    
        // Example: Add an image and text to the new game div
        const newGameImage = document.createElement("img");
        newGameImage.classList.add("capa");
        newGameImage.src = game.imagens[0]; // Add the source of your game image here
        newGameDiv.appendChild(newGameImage);
        
        const newGameTitle = document.createTextNode(game.nomeJogo); // Change the text as needed
        newGameDiv.appendChild(newGameTitle);
        
        // Append the new game div to the game list
        const gameList = document.querySelector(".jogos");
        gameList.appendChild(newGameDiv);
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