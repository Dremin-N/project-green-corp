//! Задача 1.4
var elements = document.getElementsByClassName("target");

var lastElement = elements[elements.length - 1];
console.log(lastElement.nodeName);
console.log(lastElement.nodeType);
console.log(lastElement.firstChild.nodeValue);
console.log(lastElement.tagName.toLowerCase());

//! Задача 1.5 В HTML-документе существует тег с классом price и числовым значением. Напишите скрипт, который увеличивает в теге значение цены в два раза.

// let price = document.querySelector(".price");

// price.innerText = !isNaN(Number(price.innerHTML) * 2)
//   ? price.innerText * 2
//   : price.innerText;

//! Задача 1.6 В HTML-документе есть тег <p> c классом links. Внутри этого элемента указана просто текстовая ссылка без тега <a>. Напишите скрипт, который заменит этот текст на тег <a>, а в качестве содержимого тега <a> укажет изначальный текст.

var element = document.querySelector(".links");
console.log(element.innerHTML);

let text = element.innerText;

element.innerHTML = `<a href='https://${text}'>${text}</a>`;

//! Задача 1.7 В HTML-документе есть тег с классом content, внутри него есть тег <p>. Напишите скрипт, который заменит этот тег <p> на тег <b>, сохранив текст внутри этого тега.

let content = document.querySelector(".content");
let contentElement = content.querySelector("a");
let newElement = document.createElement("b");

newElement.textContent = contentElement.textContent;

content.replaceChild(newElement, contentElement);
console.log(content.innerHTML);

//! Задача 1.8 В HTML-документе заданы элементы с числовым значением с классом price. Напишите скрипт, который считает общую сумму значений всех элементов с классом price и выводит в консоль.

let price = document.querySelectorAll(".price");
console.log(price);

function priceSum(arr) {
  let sum = 0;
  arr.forEach((el) => {
    sum += Number(el.innerText);
  });
  return sum;
}

console.log(priceSum(price));

//! Задача 1.9  В HTML-документе заданы теги с числовым значением с классом numeric. Напишите скрипт, который оборачивает в тег <b> все значения тега с классом numeric, которые меньше нуля.

let nums = document.querySelectorAll(".numeric");

function strongNum(arr) {
  arr.forEach((el) => {
    let value = parseFloat(el.textContent);

    if (value < 0) {
      let boldElement = document.createElement("b");
      boldElement.textContent = el.textContent;
      el.parentNode.replaceChild(boldElement, el);
    }
  });
}

strongNum(nums);

//! Задача 1.10 Исправьте скрипт таким образом, чтобы в результате его работы в переменной result была сумма значений тегов с классом numeric.

let result = 0;
nums.forEach((el) => {
  result += parseFloat(el.textContent);
});

console.log(result);

//! Задача 1.11 В HTML-документе задан тег <ul> c классом cars. Внутри этого тега есть несколько тегов <li>. Реализуйте скрипт, который считывает содержимое этих элементов <li>, формирует из них массив и сохраняет в переменной cars.

let elem = document.querySelector("#cars").querySelectorAll("li");

const cars = [];

elem.forEach((el) => {
  cars.push(el.innerText);
});
console.log(cars);
