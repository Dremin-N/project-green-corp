//! Задача 1.4
var elements = document.getElementsByClassName("target");

var lastElement = elements[elements.length - 1];

console.log(lastElement.tagName.toLocaleLowerCase());

//! Задача 1.5 В HTML-документе существует тег с классом price и числовым значением. Напишите скрипт, который увеличивает в теге значение цены в два раза.

let price = document.querySelector(".price");

price.innerHTML = !isNaN(Number(price.innerHTML) * 2)
  ? price.innerHTML * 2
  : price.innerHTML;

//! Задача 1.6 В HTML-документе есть тег <p> c классом links. Внутри этого элемента указана просто текстовая ссылка без тега <a>. Напишите скрипт, который заменит этот текст на тег <a>, а в качестве содержимого тега <a> укажет изначальный текст.

var element = document.querySelector(".links");
console.log(element.innerHTML);

text = element.innerHTML;

element.innerHTML = `<a href='https://${text}'>${text}</a>`;
console.log(element.innerHTML);
