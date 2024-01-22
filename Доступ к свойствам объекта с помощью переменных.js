// Другое использование скобок для объектов — доступ к свойству, которое хранится как значение переменной. Это может быть очень полезно для перебора свойств объекта или при доступе к таблице поиска.

// Вот пример использования переменной для доступа к свойству:

// const dogs = {
//   Fido: "Mutt",
//   Hunter: "Doberman",
//   Snoopie: "Beagle"
// };

// const myDog = "Hunter";
// const myBreed = dogs[myDog];
// console.log(myBreed);
// Строка Dobermanбудет отображаться в консоли.

// Обратите внимание: мы не заключаем имя переменной в кавычки при доступе к свойству, поскольку мы используем значение переменной , а не имя .

// Установите playerNumberпеременную на 16. Затем используйте переменную, чтобы найти имя игрока и присвоить его player.

// Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  const playerNumber = 16;  // Change this line
  const player = testObj[playerNumber];   // Change this line