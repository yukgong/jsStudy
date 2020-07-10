const openBtn = document.querySelectorAll(".openBtn");

function openSite(ev) {
    let target = ev.currentTarget;
    let targetParent = target.parentNode.parentNode;

    // 테이블에서 siteAddress 값을 받아온다.
    let siteAddress = targetParent.querySelector("td").innerHTML;

    console.log(target);
    // 사이트 주소값을 받아와 해당 사이트로 이동시킨다.
    location.href = siteAddress;

}

function init() {
    for (let i = 0; i < openBtn.length; i++) {
        openBtn[i].addEventListener("click", openSite);

    }
}

init();