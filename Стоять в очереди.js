// Стоять в очереди
// В информатике очередь — это абстрактная структура данных , в которой элементы хранятся в порядке. Новые элементы могут быть добавлены в конец очереди, а старые элементы удалены из начала очереди.

// Напишите функцию nextInLine, которая принимает массив ( arr) и число ( item) в качестве аргументов.

// Добавьте число в конец массива, затем удалите первый элемент массива.

// Затем функция nextInLineдолжна вернуть удаленный элемент.

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    const removed = arr.shift();
    return removed;
   
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));