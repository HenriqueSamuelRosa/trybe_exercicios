const custo = 80;
const venda = 120;
let custoTotal = custo +(custo * 0.2);
let lucro = venda - custoTotal;
let lucroTotal = lucro * 1000;

if (custo < 0 || venda < 0) {
    console.log("ERRO! Valor inválido, Tente Novamente");   
} else {
    console.log(lucroTotal);
}


