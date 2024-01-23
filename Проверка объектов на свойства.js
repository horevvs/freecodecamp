// Проверка объектов на свойства
// Чтобы проверить, существует ли свойство данного объекта или нет, вы можете использовать этот .hasOwnProperty()метод. someObject.hasOwnProperty(someProperty)возвращает trueили falseзависит от того, обнаружено ли свойство на объекте или нет.

// Пример

// function checkForProperty(object, property) {
//   return object.hasOwnProperty(property);
// }

// checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
// checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false
// Первый checkForPropertyвызов функции возвращает результат true, а второй возвращает результат false.

// Измените функцию checkObj, чтобы проверить, содержит ли объект, переданный параметру функции, objконкретное свойство, переданное параметру функции checkProp. Если переданное свойство checkPropнайдено в obj, верните значение этого свойства. Если нет, вернитесь Not Found.

function checkObj(obj,checkProp) {




    // Only change code below this line
   if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    } else {
      return "Not Found";
    }
   
  
  
    // Only change code above this line
  }