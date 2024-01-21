// Возврат логических значений из функций
// Возможно, вы помните из раздела «Сравнение с оператором равенства» , что все операторы сравнения возвращают логическое значение trueили falseзначение.

// Иногда люди используют if/elseоператор для сравнения, например:

// function isEqual(a, b) {
//   if (a === b) {
//     return true;
//   } else {
//     return false;
//   }
// }
// Но есть лучший способ сделать это. Поскольку ===возвращает trueили false, мы можем вернуть результат сравнения:

// function isEqual(a, b) {
//   return a === b;
// }
// Исправьте функцию isLessудаления if/elseоператоров.


function isLess(a, b) {
    // Only change code below this line
   return a <b
  
   
    // Only change code above this line
  }
  
  isLess(10, 15);