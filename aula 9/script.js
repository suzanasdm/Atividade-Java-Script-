let somar1 = document.querySelector("#somar1");
let somar2 = document.querySelector("#somar2");
let somart = document.querySelector("#somart");
let h2Titulo = document.querySelector("#h2Titulo");

function somar() {
    let soma = number(somar1.value) + number(somar2.value);
    h2Titulo.textContent = soma;
}

somart.onclick = somar;
