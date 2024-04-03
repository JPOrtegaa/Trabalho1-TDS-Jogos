
let gameList = sessionStorage.getItem('gameList');
gameList = JSON.parse(gameList);

console.log(gameList);

const form = document.querySelector('.cadastro');
form.addEventListener('submit', function(event){

    event.preventDefault();

    const gameData = {};
    let categorias = [];

    for(let field of form.elements){

        if(field.type == 'radio'){
            if(field.checked){
                categorias.push(field.value);
            }
        }
        else{
            gameData[field.name] = field.value;
        }
    }

    // fazer a mesma coisa de categorias para img tbm
    gameData['categorias'] = categorias;
    gameList.push(gameData);
    sessionStorage.setItem('gameList', JSON.stringify(gameList));

    alert('Cadastro realizado com sucesso!');
    window.location.href = 'index.html';

})

const cancelarButton = document.getElementById('botaoCancelar');
cancelarButton.addEventListener('click', function(event){
    
    event.preventDefault();

    const result = confirm("Deseja cancelar o cadastro?")

    if(result){
        const menuPage = "index.html";
        window.location.href = menuPage;
    }
    
});
