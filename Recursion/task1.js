// Виведення у консоль або через document.write
// function reverseString(inputString) {
//     // Розділяємо строку на масив символів, обетаємо та об'єднуємо
//     let reversedString = inputString.split('').reverse().join('');
//     //console.log(reversedString);
//     document.write("Обернена строка: " + reversedString);
// }

// // Ввести слово
// let input = prompt("Введіть слово:");

// // Викклик функції
// reverseString(input);


// Виведення у консоль за допомогою модуля ReadLine
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function reverseString(inputString) {
//   let reversedString = inputString.split('').reverse().join('');
//   console.log(reversedString);
//   rl.close(); 
// }

// rl.question("Введіть слово:", function(userInput) {
//   reverseString(userInput);
// });