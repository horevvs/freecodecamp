// Доступ к свойствам объекта с помощью точечной записи
// Существует два способа доступа к свойствам объекта: запись через точку ( .) и запись в скобках ( []), аналогичную массиву.

// Точечная нотация — это то, что вы используете, когда заранее знаете имя свойства, к которому пытаетесь получить доступ.

// Вот пример использования точечной записи ( .) для чтения свойства объекта:

// const myObj = {
//   prop1: "val1",
//   prop2: "val2"
// };

// const prop1val = myObj.prop1;
// const prop2val = myObj.prop2;
// prop1valбудет иметь значение строки val1и prop2valбудет иметь значение строки val2.

// Прочитайте значения свойств, testObjиспользуя точечную запись. Установите переменную, hatValueравную свойству объекта, hatи установите переменную, shirtValueравную свойству объекта shirt.

// Setup
const testObj = {
    hat: "ballcap",
    shirt: "jersey",
    shoes: "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObj.hat;      // Change this line
  const shirtValue = testObj.shirt;    // Change this line