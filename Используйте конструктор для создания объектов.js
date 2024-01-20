

// Используйте конструктор для создания объектов
// Вот Birdконструктор из предыдущего задания:

// function Bird() {
//   this.name = "Albert";
//   this.color  = "blue";
//   this.numLegs = 2;
// }

// let blueBird = new Bird();
// ПРИМЕЧАНИЕ. this Внутри конструктора всегда имеется ссылка на создаваемый объект.

// Обратите внимание, что newоператор используется при вызове конструктора. Это сообщает JavaScript о необходимости создания нового экземпляра Birdвызываемого blueBird. Без newоператора thisвнутренний конструктор не указывал бы на вновь созданный объект, что давало бы неожиданные результаты. Теперь blueBirdвсе свойства определены внутри Birdконструктора:

// blueBird.name;
// blueBird.color;
// blueBird.numLegs;
// Как и любой другой объект, к его свойствам можно получить доступ и изменить:

// blueBird.name = 'Elvira';
// blueBird.name;
// Используйте Dogконструктор из прошлого урока, чтобы создать новый экземпляр Dog, присвоив его переменной hound.

function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Only change code below this line
  
  
  
  let hound=new Dog();