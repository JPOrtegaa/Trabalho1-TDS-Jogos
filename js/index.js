// document.addEventListener("DOMContentLoaded", function () {
//   const addGameButton = document.getElementById("addGameButton");

//   addGameButton.addEventListener("click", function (event) {
//     event.preventDefault();

//     // Create a new game div
//     const newGameDiv = document.createElement("div");
//     newGameDiv.classList.add("jogo");

//     // Example: Add an image and text to the new game div
//     const newGameImage = document.createElement("img");
//     newGameImage.classList.add("capa");
//     newGameImage.src = "imagens/placeholder.jpg"; // Add the source of your game image here
//     newGameDiv.appendChild(newGameImage);

//     const newGameTitle = document.createTextNode("New Game"); // Change the text as needed
//     newGameDiv.appendChild(newGameTitle);

//     // Append the new game div to the game list
//     const gameList = document.querySelector(".lista");
//     gameList.appendChild(newGameDiv);
//   });
// });

function Game(nome, dev, data, categorias, descricao, imagens){
    this.nomeJogo = nome;
    this.desenvolvedora = dev;
    this.dataLancamento = data;
    this.categorias = categorias;
    this.descricao = descricao;
    this.imagens = imagens;
}

const game1 = new Game('Dead by Daylight');

const addGameButton = document.getElementById('addjogo');

//   addGameButton.addEventListener("click", function (event) {
//     event.preventDefault();

//     console.log('cliquei');
//   });

addGameButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Create a new game div
    const newGameDiv = document.createElement("div");
    newGameDiv.classList.add("jogo");

    // Example: Add an image and text to the new game div
    const newGameImage = document.createElement("img");
    newGameImage.classList.add("capa");
    newGameImage.src = "imagens/dbdlogo.jpg"; // Add the source of your game image here
    newGameDiv.appendChild(newGameImage);

    const newGameTitle = document.createTextNode("Dead by Daylight"); // Change the text as needed
    newGameDiv.appendChild(newGameTitle);

    // Append the new game div to the game list
    const gameList = document.querySelector(".jogos");
    gameList.appendChild(newGameDiv);
});