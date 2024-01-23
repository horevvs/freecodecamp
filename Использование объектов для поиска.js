// Использование объектов для поиска
// Объекты можно рассматривать как хранилище ключей/значений, например словарь. Если у вас есть табличные данные, вы можете использовать объект для поиска значений, а не switchоператор или if/elseцепочку. Это наиболее полезно, когда вы знаете, что ваши входные данные ограничены определенным диапазоном.

// Вот пример объекта статьи:

// const article = {
//   "title": "How to create objects in JavaScript",
//   "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
//   "author": "Kaashan Hussain",
//   "language": "JavaScript",
//   "tags": "TECHNOLOGY",
//   "createdAt": "NOVEMBER 28, 2018"
// };

// const articleAuthor = article["author"];
// const articleLink = article["link"];

// const value = "title";
// const valueLookup = article[value];

// Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
  
  
  let lookup={
  "alpha":"Adams",
  "bravo":"Boston",
  "charlie":"Chicago",
  "delta":"Denver",
  "echo":"Easy",
  "foxtrot":"Frank",
   }
   
   result=lookup[val]
  
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");