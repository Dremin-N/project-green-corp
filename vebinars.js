//!Задача 1.3
let firstDiv = "<div><p>Первый заголовок</p><p>Второй заголовок</p></div>";
let start = "<p>";
let end = "</p>";

//? 1 Метод
function find(str) {
  let index = firstDiv.indexOf(str);
  let lastIndex = firstDiv.lastIndexOf(str);
  // console.log(index);
  // console.log(lastIndex);
  return index !== lastIndex;
}

// console.log(find(start));
// console.log(find(end));
console.log(find(start) && find(end));

/* Задача 1.3*  */
firstDiv = "<p>Внешний пираграф<p>вфывфывфывфыыфвфыв</p></p>";

let flag = true;
let index;
n = 2;
while (n--) {
  index =
    index === 0
      ? firstDiv.indexOf(start)
      : firstDiv.indexOf(start, index + end.length);
  console.log(index);
  if (index === -1) {
    break;
  }
  index = firstDiv.indexOf(end, index + start.length);
  console.log(index);
  if (index === -1) {
    break;
  }
}

console.log(index);
console.log(index !== -1);

//! Задача 1.4

let road = "15.2 km";

road = +road.split(" km")[0];
road *= 0.62;
console.log(road.toFixed(1));

//! Задача 1.9

let emails = "example@ex.ru primer@primer.com email@com.ru";
let reg = /\S*@[a-z]+\.(com|ru)/g;
console.log(emails.match(reg) || [""]);

//! Задача 1.10

let ticket = "BM-1223456777:RU";

let concert = /^[a-z]+-[0-9]{8}:/i;
let theatre = /^[a-z]+-\d{12}:/i;

if (concert.test(ticket)) {
  console.log("Выбран билет на концерт");
} else if (theatre.test(ticket)) {
  console.log("Выбран билет в театр");
} else {
  console.log("Билет не определен");
}

//! Задача 2.3

let layout = "<p>10</p><p>14</p><p>23</p><p>43</p><p>98</p><p>101</p>";

layout = layout.match(/\d+/g);
console.log(layout);

console.log(layout ? layout.map((n) => (n % 2 === 0 ? n ** 2 : +n)) : []);

//! Задача 2.5

let values = ["Строка", true, "Числа", "Объект", "Не число", true, "Не объект"];

let start_1 = values.findIndex((el) => typeof el === "boolean");
// console.log(start_1);

let end_1 = values.findLastIndex((el) => typeof el === "boolean");
// console.log(end_1);

console.log(values.slice(start_1, end_1 + 1));

//! Задача 2.7

let digits = [10, 185, 11200, 980];

let i = digits.findIndex((el) => (el + "").length === 4);

if (i !== -1) {
  console.log(i);
} else {
  console.log("Искомый элемент не был найден");
}

//! Задача 2.13

let tickets = "Train: AV432, FS452, OE402. Airplane: DR578, JN1089, NDK140.";
tickets = tickets.split(".");
console.log(tickets);

tickets = tickets.reduce((acc, el) => {
  el = el.trim();
  if (el) {
    acc.push(el);
  }
  return acc;
}, []);

console.log(tickets);

let obj = {};

tickets.forEach((t) => {
  let arr = t.split(":");
  let name = arr[0].toLowerCase();
  arr[1] = arr[1].trim();
  arr.shift(0);
  console.log(arr);
  obj[name] = arr[0].split(", ");
});

console.log(obj);
