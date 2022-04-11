const angulo1 = 30;
const angulo2 = 100;
const angulo3 = 50;

let trianguloValido = true;
let somaAngulos = angulo1 + angulo2 + angulo3;
if (angulo1 < 0 || angulo2 < 0 || angulo3 <0) {
    console.log("ERRO!!! Existe um angulo não Válido!")
}else if (somaAngulos == 180) {
    trianguloValido = true
    console.log (trianguloValido)
} else {
    trianguloValido = false
    console.log (trianguloValido)
}