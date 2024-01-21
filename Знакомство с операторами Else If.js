// Знакомство с операторами Else If
// Если у вас есть несколько условий, которые необходимо устранить, вы можете объединить ifоператоры вместе с else ifоператорами.

// if (num > 15) {
//   return "Bigger than 15";
// } else if (num < 5) {
//   return "Smaller than 5";
// } else {
//   return "Between 5 and 15";
// }
// Преобразуйте логику в else ifоператоры использования.

function testElseIf(val) {
    if (val > 10) {return "Greater than 10"; }
    else if (val < 5) { return "Smaller than 5";} 
    else {return "Between 5 and 10";}
  }
  
  testElseIf(7);