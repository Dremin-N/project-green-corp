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

let randValues = ["Банан", 3, "Апельсин", 2, "Вишня"];

// console.log(randValues.sort());
console.log(randValues);

//* 2 Метод

let numbers = [];
let strings = [];

randValues.forEach((e) => (isNaN(e) ? strings : numbers).push(e));

numbers = numbers.sort((a, b) => Number(a) - Number(b));
strings = strings.sort();

randValues = numbers.concat(strings);
console.log(randValues);

//! Задача 2.11 В программе задана переменная words, которая хранит в себе массив строковых значений. Напишите скрипт, который считает количество палиндромов и непалиндромов в массиве words. Результат должен представлять собой массив из двух элементов, где первое значение — количество палиндромов, а второе — непалиндромов.

const str = ["Заказ", "Такси", "Доход"];

let counter = 0;
function pal(pal) {
  let paliondrom = "";
  for (let i = pal.length - 1; i >= 0; i--) {
    paliondrom += pal[i];
  }
  if (pal.toLowerCase() === paliondrom.toLowerCase()) {
    counter += 1;
  }
}

for (let i = 0; i < str.length; i++) {
  pal(str[i]);
}

const result_paleo = [];
result_paleo.push(counter, str.length - counter);

console.log(result_paleo);

//! Задача 2.12 В программе задана переменная dates, которая хранит в себе строковое значение. В данной строке хранятся значения дат в формате ДД:ММ:ГГГГ, которые разделены пробелами. На основе значения переменной dates сформируйте новый массив, каждый элемент которого содержит одну дату переменной dates, преобразованную в формат ДД/ММ/ГГГГ. Выведите содержимое сформированного массива в консоль.

let dates = "23.04.1996 07.10.2002 15.08.1945";
const date = dates.split(" ");

for (let i = 0; i < date.length; i++) {
  let stringDate;
  stringDate = date[i].split(".").join("/");
  date[i] = stringDate;
}
console.log(date);

//! Задача 2.13 В программе задана переменная tickets, которая хранит в себе строковое значение. В этой переменной указаны номера билетов на поезд (после слова Train) и на самолет (после слова Airplane). Необходимо написать скрипт, который на основе строки из переменной tickets формирует объект. Он должен хранить в себе два ключа (train, airplane), а в качестве значений — массивы с номерами билетов для поезда и самолета соответственно.

let tickets = "Train: AV432, FS452, OE402. Airplane: DR578, JN1089, NDK140.";

let ticketss = tickets.split(".");
ticketss.pop();
console.log(ticketss);

//! Задача 2.14 В программе задана переменная numbers, которая хранит массив из чисел. Определите, какое максимальное количество элементов массива numbers (в порядке, который реализован в массиве) можно сложить, чтобы их итоговая сумма не превышала 50. Результат выведите в консоль.

numbers = [10, 20, 33, 55, 100];
let count_sum = 0;
const counter_max = numbers.reduce(function (acc, currentValue) {
  if (count_sum + currentValue <= 50) {
    count_sum += currentValue;
    return acc + 1;
  } else {
    return acc;
  }
}, 0);
console.log(counter_max);

//! Задача 2.15 В программе задана переменная values, которая хранит массив из строк. Определите математическую сумму всех элементов, которые при преобразовании в число не вернут значение NaN. Результат выведите в консоль.

let values_nums = ["100", "30", "Не число", "20", "Тоже не число"];

const sum_values = values_nums.reduce(function (acc, curr) {
  if (isNaN(curr)) {
    return acc;
  } else {
    return acc + Number(curr);
  }
}, 0);
console.log(sum_values);

//! ЗАдача 2.16 В программе заданы два массива array_1 и array_2, элементы которого являются числами. Значения внутри одного массива уникальные. Реализуйте функцию intersection, которая принимает в качестве аргументов два массива и возвращает новый массив. Он должен содержать значения, которые встречаются в обоих массивах-аргументах, и быть отсортирован по убыванию.

function intersection(array_1, array_2) {
  const includeElements = array_1.filter(function (element) {
    return array_2.includes(element);
  });

  includeElements.sort((a, b) => b - a); // Сортировка по убыванию

  return includeElements;
}

let array_1 = [2, 4, 7, 8, 1];

let array_2 = [2, 5, 11, 6, 1];

console.log(intersection(array_1, array_2));

//! Использование метода массива Array.from - возвращает новый массив через функцию
const filmsFromServer = [
  { viewed: false, title: "Назад в будущее", durationInMinutes: 116 },
  { viewed: false, title: "12 разгневанных мужчин", durationInMinutes: 96 },
  { viewed: true, title: "Мэри и Макс", durationInMinutes: 92 },
];

const putRating = (el) => {
  return el.viewed ? { ...el, rating: "Рейтинг не проставлен" } : el;
};

const filmsWithRating = Array.from(filmsFromServer, (el) => putRating(el));
console.log(filmsWithRating);

//* Объекты

let user = {
  name: "Иван",
  age: 25,
};
console.log(user.age);
user.country = "Russia";
console.log(user.country);

delete user.country;
console.log(user);

// let fruit = prompt("Какой фрукт купить?", "apple");
// let bag = {
//   [fruit]: 10, // имя свойства будет взято из переменной fruit
// };
// console.log(bag.apple);

//! Задача 3.1
const car = {
  model: "Audi",
  color: "white",
  weight: 1850,
  engine: "170 hp",
};

delete car.engine;
console.log(car);

//! Задача 3.2 В программе объявлена переменная goods, которая хранит объект со свойствами, описывающими товар. Сформируйте массив, который содержит в начале все названия свойств объекта, а потом все их значения. Результат выведите в консоль.

const goods = {
  title: "Самокат",
  price: 6000,
  good_id: 1,
};

const goods_array = Object.keys(goods).concat(Object.values(goods));
console.log(goods_array);

//! Задача 3.3 В программе заданы две переменные article и author, которые содержат объекты. Объект article содержит информацию о статье, а author — об авторе. Сформируйте новый объект, который содержит свойства объектов article и author. Результат выведите в консоль.

const article = {
  title: "Загадки дачного огурца",
  text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении",
};
const author = {
  name: "Ричард М.В.",
  age: 43,
};

const clone = Object.assign(article, author);
console.log(clone);
//* объявление именнованного массива ччерез Map
const arr = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
]);
console.log(arr.delete("key1"));
console.log(arr);

//! Задача 3.4 В программе задан массив array. Напишите функцию count(), которая считает количество элементов массива array и выводит в консоль сообщение, как в примере.

array = [true, 4, "word", "10n"];

function count(arr) {
  console.log("Количество элементов в массиве:", arr.length);
}
count(array);

//! Задача 3.5 В программе задан двумерный массив employee. Удалите у данного массива значение, у которого первый элемент hireDate, и добавьте новое значение ["jobName", "IT PROG"] в конец массива. Результат выведите в консоль.

const employee = [
  ["firstName", "Ivan"],
  ["lastName", "Ivanov"],
  ["hireDate", "21.10.2015"],
];

let indexToRemove = employee.findIndex((el) => el[0] === "hireDate");

if (indexToRemove !== -1) {
  employee.splice(indexToRemove, 1);
}

employee.push(["jobName", "IT PROG"]);
console.log(employee);

//! Задача 3.6 В программе задан двумерный массив array. Создайте и вызовите функцию countString(), которая считает количество значений массива array, у которых второй элемент является строкой. Функция countString() должна выводить в консоль сообщение, как в примере.

array = [
  ["boolean", true],
  ["number", "asda"],
  ["string", "word"],
  ["object", {}],
];
function countString(arr) {
  let count = 0;
  for (let val of arr) {
    console.log(val);
    if (typeof val[1] === "string") {
      count += 1;
    }
  }
  console.log(`Количество строковых элементов в массиве: ${count}`);
}

countString(array);

//* Ключевое слово this

// function move(newX, newY) {
//   this.x = newX;
//   this.y = newY;
// }

// function createHero(name, defaultX = 0, defaultY = 0) {
//   return {
//     name,
//     x: defaultX,
//     y: defaultY,
//     move,
//   };
// }

// const hero1 = createHero("dadad", 15, 30);
// console.log(hero1);

// hero1.move(10, 15);
// console.log(hero1);

// const hero = {
//   heroName: "Герой #1",
//   /* ... */
//   sayNormal(message) {
//     console.log(`${this.heroName}: ${message}`);
//   },
//   sayLouder(message) {
//     console.log(`${this.heroName}: ${message.toUpperCase()}`);
//   },
// };
// console.log(hero);

// function say(message, isLouder) {
//   let sayFn = isLouder ? hero.sayLouder : hero.sayNormal;
//   sayFn = sayFn.bind(hero);
//   sayFn("Привет!");
// }

// say("Привет!", false);

//! Задача 4.1 В программе объявлены объекты pet_1 и pet_2. Напишите функцию getName() и присвойте ее объектам pet_1 и pet_2 в качестве метода. При вызове метода getName() он должен вернуть имя и возраст питомца через пробел. Решить задачу необходимо с использованием this.

function getName() {
  return `${this.name} ${this.age}`;
}

const pet_1 = {
  name: "Шарик",
  age: 10,
};
const pet_2 = {
  name: "Жучка",
  age: 5,
};

pet_1.getName = getName;
pet_2.getName = getName;
console.log(pet_1.getName());
console.log(pet_2.getName());

//! Задача 4.2 В программе объявлен объект input и функция sayHi(), которая выводит в консоль сообщение из примера. Используя метод присвоения контекста, свяжите контекст объекта input с функцией sayHi() и вызовите функцию sayHi()

let input = {
  id: 1,
  value: "Добрый вечер",
  firstName: "Григорий",
  lastName: "Стрельников",
};

function sayHi() {
  console.log(`${this.value}, ${this.firstName} ${this.lastName}!`);
}

//ИЛИ const sayHiInputContext = sayHi.bind(input)
//sayHiInputContext

sayHi.call(input);

//! Задача 4.3 В программе объявлен объект pet со свойствами name и breed и функция getDescription(), которая выводит эту информацию, используя this. Привяжите к функции getDescription() контекст pet и присвойте получившуюся функцию переменной getDescription.

const pet = {
  name: "Диксон",
  breed: "Немецкая овчарка",
};

function getDescription() {
  console.log("Имя питомца: " + this.name + ", Порода: " + this.breed);
}

const getDescriptionBound = getDescription.bind(pet);

getDescriptionBound();

// const hero = {
//   name: "Герой #1",
//   pet: null,
//   createPet() {
//     const pet = {
//       name: "Бобик",
//       say() {
//         console.log(`${this.name}: Гав!`);
//       },
//     };

//     this.pet = pet;
//   },
// };

// hero.createPet();
// hero.pet.say();

//! Задача 4.4 В программе объявлен объект props, у которого задан набор свойств. Объявите функцию getValue(), которая выводит в консоль строку со всеми свойствами и их значениями (без методов). Привяжите объект props в качестве контекста функции getValue() и присвойте получившуюся функцию переменной getValue.

const props = {
  name: "Анатолий",
  age: 29,
  sayHi: () => "привет",
};

function getValue() {
  const filteredProps = Object.entries(this)
    .filter(([key, value]) => typeof value !== "function")
    .map(([key, value]) => `${key}: ${value}`);
  console.log(`Значения свойств объекта props (${filteredProps.join(", ")})`);
}
getValue = getValue.bind(props);
getValue();

//! Задача 4.5 В программе объявлен объект hero, свойства которого описывают информацию о герое. В объекте в том числе определен метод getPosition, который возвращает позицию героя в игре. Определите, почему вызов getPosition работает некорректно. Исправьте эту ошибку.

hero = {
  nick: "FirstHero",
  position: "Лагерь",
  getPosition: function () {
    console.log(`Позиция героя: ${this.position}`);
  },
};

hero.getPosition();

//! Задача 5.1 В программе объявлена переменная order, которая хранит объект. Объявите переменную descriptor, которая должна содержать значения всех атрибутов ключа totalPrice объекта orders в виде объекта. Результат выведите в консоль.

const order = {
  productName: "Велосипед",
  costomerName: "Саша",
  salesName: "Петя",
  totalPrice: 15000,
};

let descriptor = Object.getOwnPropertyDescriptor(order, "totalPrice");
console.log(descriptor);

//! Задача 5.2

const employees = {
  firstName: "Петя",
  lastName: "Иванов",
  ratePerDay: 2500,
  workingDays: 5,
  getSalary() {
    console.log(employees.ratePerDay * employees.workingDays);
  },
};

const propertyNames = Object.keys(employees)
  .filter((key) => typeof employees[key] !== "function")
  .join(", ");

console.log(propertyNames);

//! Задача 5.3 В программе объявлены переменные firstName и lastName. Создайте объект user со свойствами firstName и lastName и добавьте getter и setter fullName. Сеттер fullName должен принимать имя и фамилию пользователя через пробел, разделять и присваивать свойствам firstName и lastName соответственно. Геттер fullName должен формировать строку, состоящую из имени и фамилии через пробел.

const userSet = {
  firstName: "Александр",
  lastName: "Петров",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

console.log(userSet.fullName);
userSet.fullName = "Никита Михалков";

console.log(userSet.fullName);

//! Задача 5.4 В программе объявлены переменные name и phone, которые хранят строки. В name указано название заведения, а в phone — его номер телефона. Создайте класс Delivery со свойствами name и phone. Помимо описанных свойств, добавьте свойство validPhone, которое проверяет значение свойства phone на вхождение знака + в начале строки. Если знак отсутствует, свойство validPhone должно принять булевое значение false, в противном случае — true. Создайте экземпляр класса Delivery и в качестве аргументов конструктора укажите значения переменных name и phone. Получившийся экземпляр класса запишите в переменную deliveryName.

let market = "Pizza";
let phoneNum = "81234567890";

class Delivery {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
    this.validPhone = phone.startsWith("+");
  }
}

let deliveryName = new Delivery(market, phoneNum);
console.log(deliveryName.validPhone);

//! Задача 5.5 В программе создан класс Permissions, свойства которого описывают права пользователей на редактирование статей на сайте. Создайте новый класс User, который наследуется от класса Permissions. Дополнительно в классе User добавьте свойство name, значение которого класс принимает в качестве аргумента конструктора.

// class User extends Permissions {
//   constructor(name) {
//     super();
//     this.name = name;
//   }
// }

//! Задача 5.6 В программе задан массив array, элементы которого имеют численное значение, и переменная num, которая является числом. Реализуйте функцию queue(num, ...array), которая принимает в качестве аргументов множество значений списка array и значение переменной num. Функция должна найти минимальную сумму num элементов из значений массива array. Ответ выведите в консоль.

const arrNums = [2, 4, 7, 8, 3];
let numberArr = 2;

function queue(num, ...array) {
  array.sort((a, b) => a - b);
  let minNumbers = array.slice(0, num);
  let sum = minNumbers.reduce((acc, curr) => acc + curr, 0);
  return sum;
}

const resultNums = queue(numberArr, ...arrNums);
console.log(resultNums);
