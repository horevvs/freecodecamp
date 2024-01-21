// Возврат раннего шаблона для функций
// Когда returnоператор достигнут, выполнение текущей функции прекращается, и управление возвращается в вызывающую позицию.

// Пример

// function myFun() {
//   console.log("Hello");
//   return "World";
//   console.log("byebye")
// }
// myFun();
// Вышеупомянутое отобразит строку Helloв консоли и вернет строку World. Строка byebyeникогда не будет отображаться в консоли, поскольку функция завершается на этом returnоператоре.

// Измените функцию abTestтак, чтобы, если aили bменьше, 0функция немедленно завершала работу со значением undefined.

// Подсказка
// Помните, что undefinedэто ключевое слово , а не строка.

// Setup
function abTest(a, b) {
    // Only change code below this line
  
  if (a<0 || b<0 ) {
   
    return undefined
  } else {
      
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));  
  }
  
    // Only change code above this line
  
    
  }
  
  
  abTest(2,2);