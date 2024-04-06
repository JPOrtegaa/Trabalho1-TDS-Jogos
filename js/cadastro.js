// Whenever this page is loaded retrieve the gameList from sessionStorage
let gameList = sessionStorage.getItem('gameList');
gameList = JSON.parse(gameList);

// Event for retrieving the info from a game that is being registered
const form = document.querySelector('.cadastro');
form.addEventListener('submit', function(event){

    event.preventDefault();

    const gameData = {};
    let categorias = [];
    let imageNames = [];

    for(let field of form.elements){

        if(field.type == 'radio'){
            if(field.checked){
                categorias.push(field.value);
            }
        }
        else if (field.name == 'imagens') {
            const files = field.files;
            if (!files) return;

            console.log(files);

            for(let i = 0; i < files.length; i++){
                let imageName = 'imagens/' + files[i].name;
                imageNames.push(imageName);
            }

            console.log(imageNames);

            gameData[field.name] = imageNames;
        } else {
            gameData[field.name] = field.value;
        }
    }

    let formData = new FormData(form);
    let imageFile = formData.get('imagens');
    console.log(imageFile);

    gameData['categorias'] = categorias;
    gameData['horas'] = randomFloat(0, 500).toFixed(1);

    gameList.push(gameData);
    console.log(gameList);
    sessionStorage.setItem('gameList', JSON.stringify(gameList));

    alert('Cadastro realizado com sucesso!');
    window.location.href = 'index.html';
})

// Function for generating random floats (used to fill the hours played field)
const randomFloat = (min, max) => Math.random() * (max - min) + min;

// Event to cancel the operation of registering
const cancelarButton = document.getElementById('botaoCancelar');
cancelarButton.addEventListener('click', function(event){
    
    event.preventDefault();

    const result = confirm("Deseja cancelar o cadastro?")

    if(result){
        const menuPage = "index.html";
        window.location.href = menuPage;
    }
    
});
