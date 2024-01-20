// Понимание неопределенного значения, возвращаемого функцией
// Функция может включать этот returnоператор, но это не обязательно. В случае, если у функции нет returnоператора, при ее вызове функция обрабатывает внутренний код, но возвращаемое значение равно undefined.

// Пример

// let sum = 0;

// function addSum(num) {
//   sum = sum + num;
// }

// addSum(3);
// addSumэто функция без returnоператора. Функция изменит глобальную sumпеременную, но возвращаемое значение функции равно undefined.

// Создайте функцию addFiveбез аргументов. Эта функция добавляет 5 к sumпеременной, но ее возвращаемое значение равно undefined.



// // Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

// Only change code below this line


// Only change code above this line

addThree();
addFive();