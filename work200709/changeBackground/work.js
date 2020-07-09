const btn = document.querySelectorAll(".btn"),
    body = document.querySelector("body");

let preBgColorNum = 0;

function handleBgChangeEvent(ev) {
    let target = ev.currentTarget;

    // body의 classList가 비어있지 않으면 
    // preBgColorNum과 동일한 숫자의
    // body의 bgColor클래스를 삭제한다.
    if (!(body.classList.length == 0)) {
        body.classList.remove(`bgColor-${preBgColorNum}`);
    }

    // 버튼을 클릭할때마다 이전 색상을 지워주기 위해
    // preBgColorNum에 이전 색상의 번호를 저장해준다.
    preBgColorNum = target.alt;

    // 클릭할때마다 body에 버튼의 고유값과 동일한 
    // bgColor 클래스를 추가한다.
    body.classList.add(`bgColor-${target.alt}`);
}

function init() {

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", handleBgChangeEvent);

    }
}

init();