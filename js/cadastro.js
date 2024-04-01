const form = document.querySelector('.cadastro');



form.addEventListener('submit', function(event){

    event.preventDefault();

    const gameData = {}

    for(let field of form.elements){
        if(field.tagName === 'INPUT' && field.tagName !== 'submit'){
            console.log(field);
            gameData[field.name] = field.value;

        }
    }

    console.log(gameData);

})
