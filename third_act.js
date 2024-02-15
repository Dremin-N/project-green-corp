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

//! Задача 1.4

let road = "15 km";
road = parseFloat(road);
console.log(road * 0.62);

//! Задача 1.5

let words = "Солнечная панель";
words = words.split(" ");
if (words.length > 1) {
  console.log("В строке больше одного слова");
} else {
  console.log("В строке одно слово");
}

//! Задача 1.6

let symbols = "Первый номер";

if (isFinite(symbols[0])) {
  console.log("Первый символ цифра");
} else {
  console.log("Первый символ не цифра");
}

//! Задача 1.7
symbols = "floor";
let sum_symbols = symbols.codePointAt(0) + symbols.codePointAt(1);
if (sum_symbols % 2 === 0) {
  console.log(String.fromCodePoint(sum_symbols));
} else {
  console.log("Символ обнаружить не удалось");
}

//! Задача 1.8
let phone = "+712:34567*8,90";

//* 1 метод
console.log(phone.match(/[+\d]/g).join(""));
//* 2 метод
console.log("+" + phone.replace(/[\D]/g, ""));

//! Задача 1.9

let emails = "example@ex.ru primer@primer.com email@com.ru";
console.log(emails.split(" "));

//! Задача 1.10 !!!!!!!!!

let ticket = "BM-12234567:RU";

console.log(ticket.match(/\w\w-\d\d\d\d\d\d\d\d/).join(""));
console.log(ticket.match(/\w\w-\d\d\d\d\d\d\d\d\d\d\d\d/));

//! Задача 2.1

const values = ["Строка", true, "Число", "Объект", "Не число", false];
for (let val of values) {
  console.log(val);
  if (val === true || val === false) {
    val = "Булевый тип";
    console.log(val);
    break;
  }
}
console.log(values);
