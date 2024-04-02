const voltarButton = document.getElementById('botaoVoltar');

voltarButton.addEventListener("click", function(){

    event.preventDefault();

    const gamePage = 'index.html';

    window.location.href = gamePage;

});