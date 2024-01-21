// Выбор из множества вариантов с помощью операторов Switch
// Если вам нужно сопоставить одно значение со многими параметрами, вы можете использовать оператор переключения . Оператор switchсравнивает значение с операторами case , которые определяют различные возможные значения. Любые допустимые операторы JavaScript могут выполняться внутри блока case и будут выполняться с первого совпадающего caseзначения до тех пор, пока breakне встретится a.

// Вот пример заявления switch:

// switch (fruit) {
//   case "apple":
//     console.log("The fruit is an apple");
//     break;
//   case "orange":
//     console.log("The fruit is an orange");
//     break;
// }
// caseзначения проверяются со строгим равенством ( ===). Приказывает breakJavaScript прекратить выполнение операторов. Если breakопущено, будет выполнен следующий оператор.

// Напишите оператор переключения, который проверяет valи устанавливает answerследующие условия:
// 1- alpha
// 2- beta
// 3- gamma
// 4-delta

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
  switch (val) {
    case 1:
        answer = "alpha";
      break;
       case 2:
        answer = "beta";
      break;
       case 3:
        answer = "gamma";
      break;
       case 4:
        answer = "delta";
      break;
  }
  
  
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);