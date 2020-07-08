const btn = document.querySelector(".btn"),
    afterBtn = document.querySelector(".answerBtn"),
    answer = document.querySelector(".answer"),
    bodyText = document.querySelector(".bodyText"),
    title = document.querySelector(".title");

function handleAfterBtnEvent(){
    bodyText.classList.remove("hide");
    title.classList.remove("hide");
    btn.classList.remove("hide");
    answer.classList.add("hide");
    afterBtn.classList.add("hide");
}

function handleClickEvent(){
    answer.classList.remove("hide");
    afterBtn.classList.remove("hide");
    answer.innerHTML = "한라산 입니다.";
    bodyText.classList.add("hide");
    title.classList.add("hide");
    btn.classList.add("hide");
}

function init() {
    btn.addEventListener("click", handleClickEvent);
    afterBtn.addEventListener("click", handleAfterBtnEvent);
}

init();