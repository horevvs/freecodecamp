// Замена цепочек If Else на Switch
// Если у вас есть много вариантов выбора, switchнаписать оператор может быть проще, чем множество связанных операторов if/ else if. Следующее:

// if (val === 1) {
//   answer = "a";
// } else if (val === 2) {
//   answer = "b";
// } else {
//   answer = "c";
// }
// можно заменить на:

// switch (val) {
//   case 1:
//     answer = "a";
//     break;
//   case 2:
//     answer = "b";
//     break;
//   default:
//     answer = "c";
// }

function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
  
    switch (val) {
      case "bob":
        answer = "Marley";
        break;
      case 42:
        answer = "The Answer";
        break;
        case 1:
        answer = "There is no #1";
        break;
         case 99:
        answer = "Missed me by this much!";
        break;
        case 7:
        answer = "Ate Nine";
        break;
    }
  
  
  
  
    // Only change code above this line
    return answer;
  }
  
  chainToSwitch(7);