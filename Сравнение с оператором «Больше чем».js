// Сравнение с оператором «Больше чем»
// Оператор «больше чем» ( >) сравнивает значения двух чисел. Если число слева больше числа справа, возвращается true. В противном случае он возвращается false.

// Как и оператор равенства, оператор «больше» преобразует типы данных в значения при сравнении.

// Примеры

// 5   >  3  // true
// 7   > '3' // true
// 2   >  3  // false
// '1' >  9  // false
// Добавьте оператор «больше» в указанные строки, чтобы операторы возврата имели смысл.

function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
  
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);