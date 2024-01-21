// Знакомство с операторами Else
// Если условие оператора ifистинно, выполняется следующий за ним блок кода. А как насчет того, когда это условие ложно? Обычно ничего не происходит. С помощью elseоператора может быть выполнен альтернативный блок кода.

// if (num > 10) {
//   return "Bigger than 10";
// } else {
//   return "10 or Less";
// }
// Объедините ifутверждения в одно if/elseутверждение.

function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    } else{
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  testElse(4);