// Сравнение с логическим оператором И
// Иногда вам нужно будет протестировать несколько вещей одновременно. Логический оператор и&& ( ) возвращает значение trueтогда и только тогда, когда операнды слева и справа от него истинны.

// Того же эффекта можно добиться, вложив один ifоператор в другой if.

// if (num > 5) {
//   if (num < 10) {
//     return "Yes";
//   }
// }
// return "No";
// Этот код вернет значение Yes, если numоно больше 5или меньше 10. Ту же логику можно записать с помощью логического оператора и .

// if (num > 5 && num < 10) {
//   return "Yes";
// }
// return "No";
// Замените два оператора if одним оператором, используя &&оператор, который вернет строку, Yesесли valменьше или равно 50и больше или равно 25. В противном случае вернет строку No.

function testLogicalAnd(val) {
    // Only change code below this line
  
   if (val <= 50 && val>= 25)
   { return "Yes";}
  
   
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10);