const landingImg = document.querySelector(".landingImg");

function handleClickEvent(){
    alert("여기는 친테퀘레 입니다");
}

function init() {
    landingImg.addEventListener("click", handleClickEvent);
}

init();