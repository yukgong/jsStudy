const bgImage = document.querySelectorAll(".bgImage");



function paintColor(ev) {
    let target = ev.currentTarget;
    target.classList.remove("makeGrayscale");
}


function setGrayscale() {
    for (let i = 0; i < bgImage.length; i++) {
        bgImage[i].classList.add("makeGrayscale");
    }
}

function init() {
    setGrayscale();
    for (let i = 0; i < bgImage.length; i++) {
        bgImage[i].addEventListener("mouseenter", paintColor);
        bgImage[i].addEventListener("mouseleave", setGrayscale);
    }
}

init();