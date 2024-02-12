// let num_1 = "9";
// let num_2 = "7";

// console.log(Number(num_1) + Number(num_2));

// let size = "500.5%";
// console.log(parseFloat(size));

// // let a = "10px";
// // let b = "7px";
// // let c = "10px";

// // console.log(parseFloat(a) * parseFloat(b) * parseFloat(c));

// let age = 19;
// if (age >= 18) {
//   console.log("Вы совершеннолетний");
// } else {
//   console.log("Вы несовершеннолетний");
// }

// let speed = 80;
// if (speed >= 0 && speed <= 30) {
//   console.log("Вы едете слишком медленно");
// } else if (speed >= 31 && speed <= 70) {
//   console.log("Вы едете с нормальной скоростью");
// } else {
//   console.log("Вы едете слишком быстро, сбавьте скорость");
// }

// console.log(null || "hello" || true);

// let price = " рублей";
// price = parseInt(price);
// if (!isFinite(price)) {
//   console.log("Не число");
// } else if (price <= 0) {
//   console.log("Число некорректное");
// } else {
//   console.log(price);
// }

// let a = 32;
// let b = 5532;
// let c = 148;

// if (a > b && a > c) {
//   console.log(a);
// } else if (b > a && b > c) {
//   console.log(b);
// } else {
//   console.log(c);
// }

// console.log(Math.max(a, b, c));

// let temp = 23;
// let weather = "clear";
// let activity;

// if (temp >= 25 && weather === "clear") {
//   activity = "golf";
// } else if (temp >= 10 && temp < 25 && weather === "clear") {
//   activity = "bowling";
// } else {
//   activity = "hiking";
// }
// console.log(activity);

// let name = "Anatolii";
// let last_name = "Maksimov";
// let year = 32;

// let person = {};
// person.name = name;
// person.last_name = last_name;
// person.year = year;
// person.wife = {
//   name: "Liza",
//   age: 22,
// };
// console.log(person);
/*
let value = null;
if (value === null) {
  console.log(null);
} else {
  console.log(typeof value);
}

let myObj = {};
if (myObj.count === undefined) {
  myObj.count = 0;
}
myObj.count++;

console.log(myObj);

let word_1 = "машина";
let word_2 = "стол";

let maxlength = word_1.length > word_2.length ? word_1 : word_2;
console.log(maxlength);

let task = "удалить";

switch (task) {
  case "удалить":
    console.log("delete");
    break;

  case "переименовать":
    console.log("rename");
    break;

  case "редактировать":
    console.log("edit");
    break;

  default:
    break;
}

let price = 80000;

function priceMessage(x) {
  console.log(`Данный товар стоит ${x} рублей`);
}

priceMessage(price); */

function getRandomInt(min, max) {
  num = Math.floor(Math.random() * (max - min + 1) + 10);
}

getRandomInt(4, 1067);
console.log(num);

num = 11;

if (num % 10 == 1 && num % 100 != 11) {
  console.log(`По шоссе едет ${num} машина`);
} else if (
  num % 10 >= 2 &&
  num % 10 <= 4 &&
  (num % 100 < 11 || num % 100 > 14)
) {
  console.log(`По шоссе едет ${num} машины`);
} else {
  console.log(`По шоссе едет ${num} машин`);
}

let num_1 = 3;
let num_2 = 9;

function mult(x = 0, y = 1) {
  return x * y;
}
console.log(mult(num_1, num_2));

const someVariable = () => {
  return expression;
};

console.log(someVariable);

// function sleep() { // декларируемая функция
//   console.log('Я иду спать!')
// }

let sleep = function () {
  //! функциональное выражение
  console.log("Я иду спать!");
};

//! Задача 6.3

let digit = 2;

function square(n) {
  return n ** 2;
}
square(digit);

//! Задача 6.4
let result = "";
for (let i = 0; i < 3; i++) {
  digit = square(digit);
  result += digit + " "; // Можно использовать условие, что пока i === true добавляется в начале пробел " "
}

result.trim();
console.log(result);

//! Задача 6.5
let data = "1231321";

function getNumber(string) {
  if (isNaN(parseInt(string, 10))) {
    return 0;
  } else {
    return parseFloat(string);
  }
}

console.log(getNumber(data));

//! Задачча 6.6 Возвращает процент одного числа от другого

let value = 4;
let total = 80;

function getPercent(x, y) {
  return (x / y) * 100;
}

console.log(getPercent(value, total));

const basket = {
  12: {
    id: 12,
    title: "HDMI-кабель",
    cost: 1500,
    count: 2,
  },
  10: {
    id: 10,
    title: "Телевизор",
    cost: 50000,
    count: 1,
  },
};

let sum = 0;

for (let key in basket) {
  sum += basket[key].cost * basket[key].count;
}

console.log(sum);

// var obj = { a: 1 };

// function f2(o) {
//   o = { hello: 1 };
// }

// f2(obj);

// console.log(obj);

// let asdas = new Object();
// console.log(asdas);

// let array1 = [1, 2, 3];
// let array2 = array1;
// array2[0] = 2;

// console.log(array1);

// let array = [4, 5, 6];
// function f1(arr) {
//   arr[0] = "Oops!";
// }
// f1(array);

// console.log(array);

// let list = ["Груша", "Яблоко"];

// list.unshift("Яблоко");
// list.pop();
// list.push("Клубника");

// console.log(list);

function printArray(array) {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
}
printArray([
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]);

function compactArray(array) {
  const result = [];
  for (let value of array) {
    if (Boolean(value)) {
      result.push(value);
    }
  }
  console.log(result);
}

compactArray(["Вася", "Петя", undefined, "Иван"]);

//! задача 9.2

let list = ["Грegggff", "Яблоко"];
let newResult = "";
for (let el in list) {
  if (list[el].length > newResult.length) {
    newResult = list[el];
  }
}
console.log(newResult);

//! задача 9.3

// let list = [23, 163, 3];
// let summ = 0;
// for (let el in list) {
//   summ += list[el];
// }
// console.log(summ);

//! Задача 9.4

let list_1 = [12, 3],
  list_2 = [3, 33];

let task = [];

function newArr(arr) {
  for (let el in arr) {
    task.push(arr[el] ** 2);
  }
}
newArr(list_1);
newArr(list_2);
console.log(task);

//! Задача 9.5

let list_numb = [12, -99, 5, 39, 2];
let sum_list = 0;
for (let i = 0; i < list_numb.length; i++) {
  if (list_numb[i] >= 0) {
    sum_list += list_numb[i];
  }
}
console.log(sum_list);

//! Задача 9.6

let list_100 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100,
];

let sum_simple_digits = 0;
for (let i in list_100) {
  let counter = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      counter += 1;
    }
  }
  if (counter === 2) {
    sum_simple_digits += +i;
  }
}

console.log(sum_simple_digits);

//! Задача 9.7

let min_max_list = [2, 45, 3, 23, 6];

let min = min_max_list[0];
let max = min_max_list[0];

for (let i = 1; i < min_max_list.length; i++) {
  if (min_max_list[i] > max) {
    max = min_max_list[i];
  } else if (min_max_list[i] < min) {
    min = min_max_list[i];
  }
}

console.log(max + min);

//! Задача 9.8
//* 1 Метод
let list_9_8 = [2, 45, 3, 23, 6];

let new_list = [];

// for (let el in list_9_8) {
//   new_list.unshift(list_9_8[el]);
// }

// console.log(new_list);

//* 2 Метод
for (let i = list_9_8.length - 1; i >= 0; i--) {
  new_list.push(list_9_8[i]);
}
console.log(new_list);

//* Метод 3

console.log(list_9_8.reverse());

//! Задача 9.9

let sentence = "Завтра будет лучше чем вчера";

//* Метод 1
console.log(sentence.split(" "));

//* Метод 2
let list_sentence = [];
let word = "";
for (let el in sentence) {
  if (sentence[el] !== " ") {
    word += sentence[el];
  } else {
    list_sentence.push(word);
    word = "";
  }
}
list_sentence.push(word);
console.log(list_sentence);

//! Задача 9.10

let list_number = [2, 45, 3, 24, 6];

function count(list) {
  let counter = 0;
  for (let i in list) {
    if (Number(list[i]) % 2 === 0) {
      counter += 1;
    }
  }
  return counter;
}

console.log(count(list_number));

//! Задача 9.11

function average(list) {
  let sum = 0;
  for (let i in list) {
    sum += list[i];
  }
  return Math.round(sum / list.length);
}

console.log(average(list_number));

//! Задача 9.12

list_number = [2, 54, 2, 54, false, 2];
let sum_1 = 0;
for (let i in list_number) {
  if (Number.isFinite(list_number[i])) {
    sum_1 += list_number[i];
  } else if (list_number[i] === false) {
    break;
  }
}
console.log(sum_1);

//! Задача 9.13

new_list = [];

for (let i = 10; i <= 20; i++) {
  new_list.push(i);
}
console.log(new_list);
