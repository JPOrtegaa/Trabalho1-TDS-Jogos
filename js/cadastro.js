
let gameList = sessionStorage.getItem('gameList');
gameList = JSON.parse(gameList);

console.log(gameList);

const form = document.querySelector('.cadastro');
form.addEventListener('submit', function(event){

    event.preventDefault();

    const gameData = {};
    let categorias = [];
    let image;

    for(let field of form.elements){

        if(field.type == 'radio'){
            if(field.checked){
                categorias.push(field.value);
            }
        }
        else if(field.name != 'imagens'){
            gameData[field.name] = field.value;
        }
        else{
            gameData['imagens'] = image;
        }
    }

    let formData = new FormData(form);
    let imageFile = formData.get('imagens');
    console.log(imageFile);

    // arrumar leitura de imagens!!!!!
    if(imageFile){
        console.log('entrou!!');
        let reader = new FileReader();
        reader.onload = function(){
            let imageData = reader.result;
            console.log(imageData);
            image = imageData;
            // gameData['imagens'] = imageData;
            console.log(gameData);
        };
        reader.readAsDataURL(imageFile);
    }

    // fazer a mesma coisa de categorias para img tbm
    gameData['categorias'] = categorias;
    gameList.push(gameData);
    console.log(gameList);
    sessionStorage.setItem('gameList', JSON.stringify(gameList));

    alert('Cadastro realizado com sucesso!');
   // window.location.href = 'index.html';

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
