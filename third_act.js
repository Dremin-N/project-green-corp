//! Задача 1.1

let message = "ПРИветствую вас";

let word = "привет";

if (message.toLowerCase().startsWith(word)) {
  console.log("true");
} else {
  console.log("false");
}

//! Задача 1.2

let greetings =
  "Приветствую, username! Сегодня вы получили два сообщения от username.";

word = "username";

console.log(greetings.length);
console.log(greetings.lastIndexOf(word));

//! ЗАдача 1.3

let firstDiv = "<div><p>Первый заголовок<p>Второй заголовок</p></div>";

let openDiv = "<p>";
let closeDiv = "</p>";

if (firstDiv.includes(openDiv) && firstDiv.includes(closeDiv)) {
  console.log("true");
} else {
  console.log("false");
}

//! Задача 2.1
//* Метод 1
const values = ["Строка", true, "Число", "Объект", "Не число", false];

// for (let i = 0; i < values.length; i++) {
//   if (values[i] === true || values[i] === false) {
//     values[i] = "Булевый тип";
//     break;
//   }
// }
// console.log(values);

//* Метод 2

for (let i = 0; i < values.length; i++) {
  if (values[i] === true || values[i] === false) {
    values.splice(i, 1, "Булевый тип");
    break;
  }
}
console.log(values);

// Метод слайс
let example = values.slice(1, 5);
console.log(example);

//! Задача 2.2
const partNumbers = ["ER1234COM", "FIV987451ru", "GE123JO", "P4321NO"];
//? Через регулярные выражения
const goodNumbers = [];
let regexp = /\d\d\w\w/i;
for (let i = 0; i < partNumbers.length; i++) {
  let string = partNumbers[i].slice(-4);
  if (string.search(regexp) !== -1) {
    goodNumbers.push(partNumbers[i]);
  }
}
console.log(goodNumbers);
