// Сравнение с оператором неравенства
// Оператор неравенства ( !=) является противоположностью оператора равенства. Это означает «не равно» и возвращает falseтуда, где возвращалось бы равенство true, и наоборот . Как и оператор равенства, оператор неравенства преобразует типы данных в значения при сравнении.

// Примеры

// 1 !=  2    // true
// 1 != "1"   // false
// 1 != '1'   // false
// 1 != true  // false
// 0 != false // false
// !=Добавьте в оператор оператор неравенства if, чтобы функция возвращала строку, Not Equalне valэквивалентную 99.

// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);