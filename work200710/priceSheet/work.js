const table = document.querySelector("table");

let priceA = 0;
let priceB = 0;
let priceC = 0;
let count = 0;

function paintTable() {
    const tableRow = document.createElement("tr");
    const tableHeader = document.createElement("th");
    const tableDataA = document.createElement("td");
    const tableDataB = document.createElement("td");
    const tableDataC = document.createElement("td");

    // 로우 추가
    table.appendChild(tableRow);

    // 테이블 헤더 추가
    count += 1;
    tableHeader.innerHTML = count;
    tableRow.appendChild(tableHeader);

    // 테이블 데이터 추가
    priceA += 300;
    tableDataA.innerHTML = priceA + "원";
    tableRow.appendChild(tableDataA);

    priceB += 450;
    tableDataB.innerHTML = priceB + "원";
    tableRow.appendChild(tableDataB);

    priceC += 520;
    tableDataC.innerHTML = priceC + "원";
    tableRow.appendChild(tableDataC);
}

function init() {
    for (let i = 0; i < 10; i++) {
        paintTable();
    }
}

init();