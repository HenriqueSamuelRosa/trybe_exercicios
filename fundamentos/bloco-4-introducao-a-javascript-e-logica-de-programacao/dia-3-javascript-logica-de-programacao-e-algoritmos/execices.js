/* 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
Copiar
O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24
Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
*/
/*let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}

console.log(fatorial);*/

let fatorial = 1

for (let index = 2; index <= 10; index+=1) {
  fatorial = fatorial * index
}

console.log (fatorial);


/*2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. 
Por exemplo, a palavra "banana" seria invertida para "ananab". 
Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu 
algoritmo está funcionando corretamente.*/

let word = 'tryber';
let newWord = '';

for (let index = 0; index < word.length; index+= 1) {
  newWord += word[word.length - 1 - index] 
}
console.log(newWord);


//3- Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css',];
let maior = array[0]
let menor = array[0]

for (let index = 1; index < array.length; index+= 1) {
  if (array[index].length > maior.length) {
    maior = array[index]
  }
  if (array[index].length < menor.length) {
    menor = array[index]
  }
  
}


console.log(maior);
console.log(menor);


//4- Um número primo é aquele divisível apenas por 1 e por ele mesmo.
// Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let parada = 50;
let numerosPrimos = [1,]
let primo = true

for (let i = 2; i <= parada; index+= 1) {
    if (index % 2 == 0) {
      primo = false
      } else {
         numerosPrimos.push = index
      }
}
console.log(numerosPrimos);



let biggestPrimeNumber = 0;

for (let currentNumber = 0; currentNumber <= 15; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);