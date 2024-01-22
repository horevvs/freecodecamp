// Обновление свойств объекта
// После создания объекта JavaScript вы можете обновить его свойства в любое время так же, как и любую другую переменную. Для обновления можно использовать обозначение через точку или скобку.

// Например, давайте посмотрим ourDog:

// const ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"]
// };
// Поскольку он особенно счастливый пес, давайте заменим его имя на строку Happy Camper. Вот как мы обновляем свойство name его объекта: ourDog.name = "Happy Camper";или ourDog["name"] = "Happy Camper";Теперь, когда мы оцениваем ourDog.name, вместо получения Camperмы получаем его новое имя Happy Camper.

// Обновите myDogсвойство имени объекта. Давайте изменим ее имя с Coderна Happy Coder. Вы можете использовать обозначение через точку или скобку.

// Setup
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // Only change code below this line
  myDog.name='Happy Coder'