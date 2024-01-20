// Локальная область действия и функции
// Переменные, объявленные внутри функции, а также параметры функции имеют локальную область видимости. Это означает, что они видны только внутри этой функции.

// Вот функция myTestс локальной переменной под названием loc.

// function myTest() {
//   const loc = "foo";
//   console.log(loc);
// }

// myTest();
// console.log(loc);
// Вызов функции myTest()отобразит строку fooв консоли. Строка console.log(loc)(вне myTestфункции) выдаст ошибку, поскольку locона не определена вне функции.

// В редакторе есть два console.logs, которые помогут вам увидеть, что происходит. Проверяйте консоль во время написания кода, чтобы увидеть, как она меняется. myVarОбъявите внутри локальную переменную myLocalScopeи запустите тесты.

// Примечание. На консоли по-прежнему будет отображаться ReferenceError: myVar is not defined, но это не приведет к сбою тестов.

function myLocalScope() {
    // Only change code below this line
  let myVar =22
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);