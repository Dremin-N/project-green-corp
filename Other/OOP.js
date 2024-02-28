let redWoodTbl = {
  type: "Мебель",
  legCnt: 4,
  color: "red",
  material: "wood",
  variant: "pc",
  getInfo: function () {
    return `${this.color} ${this.material} ${this.variant} table with ${this.legCnt} table legs`;
  },
  show: () => {
    return `${this.color} ${this.material} table`;
  },
};

console.log(redWoodTbl.getInfo());
console.log(redWoodTbl.show());

// let pointA = {
//   x: 1,
//   y: 2,
// };
// let pointB = {
//   x: 1,
//   y: 2,
// };
// let pointC = {
//   x: 1,
//   y: 2,
// };
// let pointD = {
//   x: 1,
//   y: 2,
// };
// let pointE = {
//   x: 1,
//   y: 2,
// };
// let pointF = {
//   x: 1,
//   y: 2,
// };
// let pointG = {
//   x: 1,
//   y: 2,
// };

const getNumber = (max = 100, min = 0) =>
  Math.floor(Math.random() * (max - min) + min);

class Point {
  constructor(a, b) {
    this.x = a;
    this.y = b;
  }
  moveX(newX) {
    this.x = newX;
  }
  moveY(newY) {
    this.y = newY;
  }
}

class Point3d extends Point {
  constructor(a, b, c) {
    super(a, b);
    this.z = c;
    this.name = "Точка";
  }
  moveZ(newZ) {
    this.z = newZ;
  }
}
let d3 = new Point3d(1, 1, 1);
console.log(d3);

let points = [];
let cnt = 100;
while (cnt--) {
  points.push(new Point(getNumber(), getNumber()));
}
console.log(points);
// let pointH = new Point(4, 9);
// console.log(pointH);
// pointH.moveX(7);
// console.log(pointH);

/*
  Есть класс Reactangle с параметрами width height
  У прямоугольника есть методы 
  getPerimeter
  getArea
  getInfo

  Создать класс Square, наследуемый от прямоугольника и вывести информацию об объекте - экземрляре класса square
*/

class Reactangle {
  constructor(w, h) {
    this.width = w;
    this.height = h;
  }
  getPerimeter() {
    return this.width * 2 + this.height * 2;
  }

  getArea() {
    return this.width * this.height;
  }

  getInfo() {
    return `Прямоугольник ${this.width}x${
      this.height
    } с площадью ${this.getArea()} и периметром ${this.getPerimeter()}`;
  }
}

class Square extends Reactangle {
  constructor(side) {
    super(side, side);
  }
  getInfo() {
    return `Квадрат ${this.width}x${
      this.height
    } с площадью ${this.getArea()} и периметром ${this.getPerimeter()}`;
  }
}

let sq = new Square(200);
console.log(sq.getInfo());

// let map = new Map(55, 46, 18);

// map.getZoom(19);

// map._zoom = 15;

//! Задача 3.5

const employee = [
  ["firstName", "Ivan"],
  ["lastName", "Ivanov"],
  ["hireDate", "21.10.2015"],
];

//! Задача 4.4 В программе объявлен объект props, у которого задан набор свойств. Объявите функцию getValue(), которая выводит в консоль строку со всеми свойствами и их значениями (без методов). Привяжите объект props в качестве контекста функции getValue() и присвойте получившуюся функцию переменной getValue.

const props = {
  name: "Анатолий",
  age: 29,
  sayHi: () => "привет",
};

function getValue(o) {

  let keys = Object.keys(o);
  console.log(keys);
  let val = Object.values(o);
  console.log(val);
  let obj = {};
  val.forEach((el, i) => {
    console.log(typeof el);
    if (typeof el !== "function") {
      obj[keys[i]] = el;
    }
  });
  console.log(obj);
}
getValue(props);
