let peso = 95;// peso em kg
let altura = 1.74; // altura em metros
let imc = peso / (altura * altura);
console.log("Peso:" + peso + "kg");
console.log("Altura: " + altura + altura +"m");
console.log(" Seu IMC é: "+ imc.toFixed(2));

function calcularIMC(){
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let imc = peso/ (altura* altura);
    console.log ("Peso: " + peso + "kg");
    document.getElementById("resultado").value = "Seu IMC é: " + imc.toFixed(2);
}
let button = document.getElementById("calcular");
button.addEventListener("click", calcularIMC);