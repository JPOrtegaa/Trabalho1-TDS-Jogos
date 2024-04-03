console.log('entrei na pag!');

function Game(nome, dev, data, categorias, descricao, imagens){
    this.nomeJogo = nome;
    this.nomeDesenvolvedor = dev;
    this.dataLancamento = data;
    this.categorias = categorias;
    this.descricao = descricao;
    this.imagens = imagens;
}

// sessionStorage.setItem('gameList', 'salve'); 

let gameList = sessionStorage.getItem('gameList') || [];
gameList
// console.log(conditionalList)

if(gameList.length === 0){
    console.log("nao criada!!");
    const game1 = new Game('Dead by Daylight', 'dev', '2024-10-05', ['RPG', 'Outros'], 'dbd', ['imagens/dbdlogo.jpg']);
    gameList.push(game1);
    sessionStorage.setItem('gameList', JSON.stringify(gameList));
    console.log(gameList);
}
else{
    // gameList = JSON.parse(conditionalList);
    gameList = JSON.parse(gameList);
    console.log(gameList);
}


// Evento para adicionar um novo jogo
const addGameButton = document.getElementById('addjogo');

addGameButton.addEventListener("click", function (event) {
    event.preventDefault();

    const registerPage = "cadastro.html";

    window.location.href = registerPage;

});


// // Evento para adicionar um novo jogo
// const addGameButton = document.getElementById('addjogo');

// addGameButton.addEventListener("click", function (event) {
//     event.preventDefault();

//     // const game1 = new Game(
//     //   "Dead by Daylight",
//     //   "dev",
//     //   "2024-10-05",
//     //   ["RPG", "Outros"],
//     //   "dbd",
//     //   ["imagens/dbdlogo.jpg"]
//     // );

//     // const gameList = [];
//     // gameList.push(game1);

//     // console.log(localStorage.getItem('nome'));
//     // console.log(gameList);

//     // // Create a new game div
//     // const newGameDiv = document.createElement("div");
//     // newGameDiv.classList.add("jogo");

//     // // Example: Add an image and text to the new game div
//     // const newGameImage = document.createElement("img");
//     // newGameImage.classList.add("capa");
//     // newGameImage.src = "imagens/dbdlogo.jpg"; // Add the source of your game image here
//     // newGameDiv.appendChild(newGameImage);

//     // const newGameTitle = document.createTextNode("Dead by Daylight"); // Change the text as needed
//     // newGameDiv.appendChild(newGameTitle);

//     // // Append the new game div to the game list
//     // const gameList = document.querySelector(".jogos");
//     // gameList.appendChild(newGameDiv);
// });


// Evento para pegar a info sobre o jogo clicado
const gameDiv = document.querySelector('.jogo');

gameDiv.addEventListener("click", function(event){

    event.preventDefault();

    const gamePage = 'jogo.html';

    window.location.href = gamePage;

});