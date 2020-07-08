const checkBox = document.querySelectorAll(".checkBox"),
    sumBox = document.querySelector(".sumBox");


function getSumBoxValue() {
    let boxValue = parseInt(sumBox.value);
    if (isNaN(boxValue)) { boxValue = 0; }

    return boxValue;
}

function sumEvent(price) {
    let result = parseInt(getSumBoxValue()) + parseInt(price);

    return result;
}

function minusEvent(price) {
    let result = parseInt(getSumBoxValue()) - parseInt(price);

    return result;
}

function handleCheckEvent(ev) {
    let target = ev.currentTarget;
    let price = target.value;

    if (target.checked) {
        sumBox.value = sumEvent(price);
    } else {
        sumBox.value = minusEvent(price);
    }
}

function init() {
    for (let i = 0; i < checkBox.length; i++) {
        checkBox[i].addEventListener("click", handleCheckEvent);
    }
}

init();