const pictureSelectBox = document.querySelector("#pictureSelectBox"),
    picture = document.querySelector(".picture");



function changeImageAddress(ev) {
    let target = ev.currentTarget;
    picture.src = `image/meiji0${target.selectedIndex + 1}.jpg`;
}

function init() {
    pictureSelectBox.addEventListener("change", changeImageAddress);
}

init();