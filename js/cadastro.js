const form = document.querySelector('.cadastro');

let gameList = [];


form.addEventListener('submit', function(event){

    event.preventDefault();

    const gameData = {}

    for(let field of form.elements){

        if(field.type == 'radio'){
            if(field.checked)
                gameData[field.name] = field.value;
        }
        else{
            gameData[field.name] = field.value;
        }
    }

    gameList.push(gameData);
    console.log(gameList);

})
