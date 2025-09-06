// 1 . declarar reais e cotacaoDolar
// 2. Calcular dólares(usd)= reias/cotacaodolar.
let reais = 95;
let cotacaoDolar = 5.20;
let dolares = reais / cotacaoDolar;
console.log("Valor em reais: reais");
console.log("Cotação do dólar:", cotacaoDolar);
console.log("Valor em dólares:",dolares.toFixed(2));

function convertermoeda(){
    let reais = parseFloat(document.getElementById("reais").value);
    let cotacaoDolar = parseFloat(document.getElementById("cotacao").value);
    let dolares = reais/ (cotacaoDolar);
    console.log ("reias: " +  "R$");
    document.getElementById("resultado").value = "valor=:" + cotacaoDolar.toFixed(2);
}
let button = document.getElementById("calcular");
button.addEventListener("click", convertermoeda);