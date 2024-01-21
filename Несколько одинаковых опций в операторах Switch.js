// Несколько одинаковых опций в операторах Switch
// Если breakоператор опущен в switchоператоре case, следующие caseоператоры выполняются до тех пор, пока breakне встретится a. Если у вас есть несколько входов с одним и тем же выходом, вы можете представить их в switchследующем операторе:

// let result = "";
// switch (val) {
//   case 1:
//   case 2:
//   case 3:
//     result = "1, 2, or 3";
//     break;
//   case 4:
//     result = "4 alone";
// }
// Случаи 1, 2 и 3 дадут одинаковый результат.

// Напишите оператор переключения, который будет установлен answerдля следующих диапазонов:
// 1-3- Low
// 4-6- Mid
// 7-9-High

// Примечание. Вам понадобится caseзаявление для каждого числа в диапазоне.

function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
   switch (val) {
      case 1:
      case 2:
      case 3:
        answer = "Low";
      break;
      case 4:
      case 5:
      case 6:
         answer = "Mid";
           break;
      case 7:
     
      case 8:
       
      case 9:
        answer = "High";
        break;
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(1);