function colorRandomizer() {
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function randomizerButton() {
    document.getElementById("colorChange").style.backgroundColor = colorRandomizer() ;

}