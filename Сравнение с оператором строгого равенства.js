// Строгое равенство ( ===) является аналогом оператора равенства ( ==). Однако в отличие от оператора равенства, который пытается преобразовать оба сравниваемых значения в общий тип, оператор строгого равенства не выполняет преобразование типов.

// Если сравниваемые значения имеют разные типы, они считаются неравными, и оператор строгого равенства вернет значение false.

// Примеры

// 3 ===  3  // true
// 3 === '3' // false
// Во втором примере — 3это Numberтип и '3'есть Stringтип.

// Используйте в инструкции оператор строгого равенства if, чтобы функция возвращала строку, Equalесли valона строго равна 7.
// Setup
function testStrict(val) {
    if (val===7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);