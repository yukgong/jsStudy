const btn = document.querySelector(".btn"),
    diceImg = document.querySelectorAll(".diceImg");

function genRandomNum(){
    let randomNum = Math.floor((Math.random()*6)+1);
    return randomNum;
}

function handleDice(){
    diceImg[0].src = `img/dice_${genRandomNum()}.png`;
    diceImg[1].src = `img/dice_black_${genRandomNum()}.png`;
}

function init() {
    btn.addEventListener("click", handleDice);
}

init();