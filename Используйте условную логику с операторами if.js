// Используйте условную логику с операторами if
// ifоператоры используются для принятия решений в коде. Ключевое слово ifсообщает JavaScript, что код в фигурных скобках должен выполняться при определенных условиях, определенных в круглых скобках. Эти условия известны как Booleanусловия, и они могут быть только trueили false.

// Когда условие оценивается как true, программа выполняет оператор внутри фигурных скобок. Если логическое условие имеет значение false, оператор внутри фигурных скобок не будет выполнен.

// Псевдокод

// if ( условие истинно ) {
//   оператор выполняется
// }
// Пример

// function test(myCondition) {
//   if (myCondition) {
//     return "It was true";
//   }
//   return "It was false";
// }

// test(true);
// test(false);
// test(true)возвращает строку It was trueи test(false)возвращает строку It was false.

// Когда testвызывается со значением true, ifоператор оценивает myCondition, так оно trueили нет. Поскольку это так true, функция возвращает значение It was true. Когда мы вызываем testзначение false, myConditionэто не так true , и оператор в фигурных скобках не выполняется, и функция возвращает значение It was false.

// Создайте ifоператор внутри функции, который будет возвращать значение Yes, that was trueпараметра, и возвращать его в противном случае.wasThatTruetrueNo, that was false


function trueOrFalse(wasThatTrue) {
    // Only change code below this line
  
  
  if (wasThatTrue) {
      return "Yes, that was true";
    }
    return "No, that was false";
  
    // Only change code above this line
  
  }