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

//! Задача 2.5 Сделал так чтобы не было ошибок при любом положении и при отсутствии булевого значения

const values_list = [
  true,
  "Строка",
  "Числа",
  true,
  "Объект",
  "Не число",
  false,
  "Не объект",
];
let min;
let max;
let result = [];
let find_true = values_list.findIndex((val) => val === true);
let find_false = values_list.findIndex((val) => val === false);

if (find_true !== -1 && find_false === -1) {
  min = find_true;
} else if (find_false !== -1 && find_true === -1) {
  min = find_false;
} else if (find_false < find_true) {
  min = find_false;
} else if (find_true < find_false) {
  min = find_true;
} else {
  min = -1;
}
console.log(min);
find_true = values_list.lastIndexOf(true);
find_false = values_list.lastIndexOf(false);

if (find_true > find_false) {
  max = find_true;
} else if (find_false > find_true) {
  max = find_false;
} else {
  max = values_list.length - 1;
}

if (min === max) {
  max = values_list.length - 1;
}

if (min !== -1) {
  for (let i = min; i <= max; i++) {
    result.push(values_list[i]);
  }
} else {
  result = "Нет булевого значения";
}

console.log(result);

//! Задача 2.6 В программе задана переменная values, которая хранит в себе массив. Элементы массива являются числами. Определите, находятся ли в заданном массиве элементы, которые содержат четырехзначные числа. Результат выведите в консоль в виде булевого значения (true, если содержит, и false, если нет). + Задача 2.7

let values_numbers = [10, 3032, 185, 11200, 980, 1002];

const four_digits = values_numbers.some((val) => val >= 1000 && val <= 9999);
let reg = /\d\d\d\d/;
if (four_digits === false) {
  console.log("Искомый элемент не был найден");
} else {
  let index = values_numbers.findIndex((num) => num >= 1000 && num <= 9999);
  console.log(index);
}

//! ЗАДАЧА 2.8 В программе задана переменная users, которая хранит в себе массив. Элементы данного массива являются объектами. Определите индекс элемента, значение свойства role которого содержит больше одного слова. Результат выведите в консоль разработчика.

let users_1 = [
  { login: "user1", role: "Admin" },
  { login: "user2", role: "Stateuser" },
  { login: "user3", role: "Moderator" },
];
let index_2 = users_1.findIndex((val) => val.role.split(" ").length === 2);
console.log(index_2);

//! Задача 2.9 В программе задана переменная array, которая хранит в себе двумерный массив. Его элементы — массивы, состоящие из чисел. Отсортируйте массив по количеству элементов вложенного массива по возрастанию. Результат выведите в консоль.

let array = [
  [1, 2, 3],
  [1, 2],
  [1, 2, 3, 4],
];

const sortBylength = (a, b) => {
  const aLength = a.length;
  const bLength = b.length;
  if (aLength == bLength) return 0;
  if (aLength < bLength) return -1;
  if (aLength > bLength) return 1;
};

array.sort(sortBylength);

console.log(array);

//! Задача 2.10 В программе задана переменная randValues, которая хранит в себе массив. Его элементы могут являться как строковыми, так и числовыми значениями. Отсортируйте массив следующим образом: В начале массива должны быть все числовые значения по возрастанию В конце все строковые, упорядоченные по алфавиту Результат выведите в консоль.
