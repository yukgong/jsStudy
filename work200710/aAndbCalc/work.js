const calcBtn = document.querySelectorAll(".calcBtn"),
    tableRow = document.querySelectorAll("tr");

function paintCalcResult(place) {


}

function handleCalc(ev) {
    let target = ev.currentTarget;
    let targetParent = target.parentNode.parentNode;
    let a = targetParent.querySelectorAll("td")[0].innerHTML;
    let b = targetParent.querySelectorAll("td")[1].innerHTML;

    const pTag = document.createElement("p");
    pTag.innerHTML = a * b;
    target.classList.add("hide");
    target.parentNode.appendChild(pTag);

}

function init() {
    for (let i = 0; i < calcBtn.length; i++) {
        calcBtn[i].addEventListener("click", handleCalc);
    }
}

init();