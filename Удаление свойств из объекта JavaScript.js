// Удаление свойств из объекта JavaScript
// Мы также можем удалять свойства объектов следующим образом:

// delete ourDog.bark;
// Пример:

// const ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"],
//   "bark": "bow-wow"
// };

// delete ourDog.bark;
// После последней строки, показанной выше, ourDogэто выглядит так:

// {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"]
// }
// Удалить tailsсвойство из myDog. Вы можете использовать обозначение через точку или скобку.


// Setup
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  
  // Only change code below this line
  delete myDog.tails