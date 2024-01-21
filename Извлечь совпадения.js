// Извлечь совпадения
// До сих пор вы только проверяли, существует ли шаблон внутри строки. Вы также можете извлечь фактические совпадения, найденные с помощью этого .match()метода.

// Чтобы использовать этот .match()метод, примените его к строке и передайте регулярное выражение внутри круглых скобок.

// Вот пример:

// "Hello, World!".match(/Hello/);
// let ourStr = "Regular expressions";
// let ourRegex = /expressions/;
// ourStr.match(ourRegex);
// matchЗдесь вернется первый ["Hello"]и вернется второй ["expressions"].

// Обратите внимание, что .matchсинтаксис является «противоположным» методу, .testкоторый вы использовали до сих пор:

// 'string'.match(/regex/);
// /regex/.test('string');
// Примените .match()метод для извлечения строки coding.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line