let salarioBruto = 4500;
let salarioINSS;
let salarioLiquido;
let descontoINSS;

if (salarioBruto <1556.95) {
    salarioINSS = salarioBruto - (salarioBruto * 0.08)
} else if (salarioBruto < 2594.92) {
    salarioINSS = salarioBruto - (salarioBruto * 0.09)
} else if (salarioBruto < 5189.82) {
    salarioINSS = salarioBruto - (salarioBruto * 0.11)
} else if (salarioBruto >5189.82) {
    salarioINSS = salarioBruto - 570,88
}
if (salarioINSS < 2826.65) {
    salarioLiquido = (salarioINSS - ((salarioINSS * 0.075) - 142.80))
} else if (salarioINSS < 3751.06) {
    salarioLiquido = (salarioINSS - ((salarioINSS * 0.15) - 354.80))
} else if (salarioINSS < 4664.69) {
    salarioLiquido = (salarioINSS - ((salarioINSS * 0.225) - 636.13))
} else if (salarioINSS) {
    salarioLiquido = (salarioINSS - ((salarioINSS * 0.275) - 869.36))
} else if (salarioINSS <1903.98){
    salarioLiquido = salarioINSS
}


console.log(salarioLiquido);
