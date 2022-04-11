let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1
console.log('Exercicio 1:');
console.log(numbers);

//2

let resultado = 0;

for (let index = 0; index < numbers.length; index+=1) {
    resultado = resultado + numbers[index] 
}
console.log('Exercicio 2:');
console.log(resultado);

//3
let media = resultado / numbers.length;
console.log('Exercicio 3:');
console.log(media);

//4

console.log('Exercicio 4:');
if (media > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

//5
 let maior = numbers[0]

 for (var index =1; index < numbers.length; index +=1) {
     if (maior < numbers[index]) {
         maior = numbers[index] 
     }
}
    console.log('Exercicio 5:');
    console.log(maior);

//6

let impar = 0;

for (var i = 0; i < numbers.length; i +=1){
    if (numbers[i] % 2 != 0){
        impar = impar +=1
    }
}
console.log('Exercicio 6:')
if (impar <= 0) {
    "nenhum valor ímpar encontrado"
}else {
console.log(impar);
}

//7

let menor = numbers[0];

for (let index = 1; index < numbers.length; index+=1) {
    if (numbers[index] < menor) {
        menor = numbers[index]
    } 
}
console.log('Exercicio 7:')
console.log (menor)

//8
let numeros = [];

for (let index = 0; index < 25; index++) {
   numeros[index] = index +1 
}
console.log("exercicio 8:");
console.log(numeros);

//9
console.log("exercicio 9:");
for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index] / 2);
}

