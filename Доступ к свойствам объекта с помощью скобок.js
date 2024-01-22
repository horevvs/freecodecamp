// Доступ к свойствам объекта с помощью скобок
// Второй способ доступа к свойствам объекта — это обозначение скобок ( []). Если свойство объекта, к которому вы пытаетесь получить доступ, содержит пробел в имени, вам нужно будет использовать скобки.

// Однако вы по-прежнему можете использовать скобочные обозначения свойств объекта без пробелов.

// Вот пример использования скобочных обозначений для чтения свойства объекта:

// const myObj = {
//   "Space Name": "Kirk",
//   "More Space": "Spock",
//   "NoSpace": "USS Enterprise"
// };

// myObj["Space Name"];
// myObj['More Space'];
// myObj["NoSpace"];
// myObj["Space Name"]будет строка Kirk, myObj['More Space']будет строка Spockи myObj["NoSpace"]будет строка USS Enterprise.

// Обратите внимание, что имена свойств с пробелами должны быть в кавычках (одинарных или двойных).

// Прочтите значения свойств an entreeи the drinkзначений, testObjиспользуя скобочные обозначения, и присвойте их entreeValueи drinkValueсоответственно.

// Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  const entreeValue = testObj["an entree"];   // Change this line
  const drinkValue = testObj["the drink"];    // Change this line