const museumLink = document.querySelector("#museumLinkId"),
    answerWarpper = document.querySelector(".answerWarpper");

let preAtagNum = 0;
let choice = 0;


function paintLink(ev) {
    const getPaintLink = ev.currentTarget;
    const aTag = document.createElement("a");

    // 이전 a 태그 삭제
    if (!(preAtagNum == 0)) {
        let node = document.getElementById(`aTagId${preAtagNum}`);
        answerWarpper.removeChild(node);
    }

    // 삭제를 위한 번호 저장
    preAtagNum = getPaintLink.selectedIndex;

    // 새로운 a 태그 추가 및 조건 처리 
    aTag.href = getPaintLink.value;
    aTag.innerHTML = getPaintLink.value;
    aTag.id = "aTagId" + getPaintLink.selectedIndex;
    aTag.target = "_blank"
    answerWarpper.appendChild(aTag);

    answerWarpper.classList.remove("hide");

}

function init() {
    museumLink.addEventListener("change", paintLink);

}

init();