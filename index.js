//Дз 1 
function factorialRecursive(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorialRecursive(n - 1);
    }
}
  
const number = 5;
const factorial = factorialRecursive(number);
console.log(`Факториал ${number} равен ${factorial}`);

//Дз 2
const text = "My name 457 is Alex";
const nonDigitChars = text.replace(/\d/g, '');
console.log(nonDigitChars);

//Дз 3
const text2 = "Hello\tWorld\nTest";
const whitespaceChars = text.match(/\s/g);
console.log(whitespaceChars);

//Доп дз
function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
}
  
const result = countChar('loremipsumdolor', 'o');
console.log(result);
  