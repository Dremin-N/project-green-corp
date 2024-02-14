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
