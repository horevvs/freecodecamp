// Добавление параметра по умолчанию в операторы Switch
// В switchоператоре вы не сможете указать все возможные значения как caseоператоры. Вместо этого вы можете добавить defaultоператор, который будет выполняться, если соответствующие caseоператоры не найдены. Думайте об этом как о последнем elseутверждении в if/elseцепочке.

// Заявление defaultдолжно быть в последнюю очередь.

// switch (num) {
//   case value1:
//     statement1;
//     break;
//   case value2:
//     statement2;
//     break;
// ...
//   default:
//     defaultStatement;
//     break;
// }
// Напишите оператор переключения, который будет устанавливать answerследующие условия:
// a- apple
// b- bird
// c- cat
// default-stuff

function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
  
    switch (val) {
      case 'a':
          answer = "apple";
        break;
         case 'b':
          answer = "bird";
        break;
         case 'c':
          answer = "cat";
        break;
        default:
        answer = "stuff";
    }
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff(1);