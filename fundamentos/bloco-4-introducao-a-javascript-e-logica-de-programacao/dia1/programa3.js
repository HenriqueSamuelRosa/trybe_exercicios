const number1 = 5456;
const number2 = 6551;
const number3 = 4232;
let maior;

if (number1 > number2 && number1 > number3) {
    maior = number1
} else if (number2 > number1 && number2 > number3){
    maior = number2
} else {
    maior = number3
};
console.log (maior)
