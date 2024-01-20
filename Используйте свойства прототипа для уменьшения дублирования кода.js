// Используйте свойства прототипа для уменьшения дублирования кода
// Поскольку, numLegsвероятно, оно будет иметь одно и то же значение для всех экземпляров Bird, у вас по сути есть дублированная переменная numLegsвнутри каждого Birdэкземпляра.

// Это может не быть проблемой, если имеется только два экземпляра, но представьте, что их миллионы. Это будет много дублирующихся переменных.

// Лучшим способом является prototypeиспользование Bird. Свойства в файле prototypeявляются общими для ВСЕХ экземпляров Bird. Вот как добавить numLegsк Bird prototype:

// Bird.prototype.numLegs = 2;
// Теперь все экземпляры Birdимеют это numLegsсвойство.

// console.log(duck.numLegs);
// console.log(canary.numLegs);
// Поскольку все экземпляры автоматически имеют свойства prototype, воспринимайте a prototypeкак «рецепт» создания объектов. Обратите внимание, что prototypefor duckи canaryявляются частью Birdконструктора как Bird.prototype.

// Добавить numLegsнедвижимость в prototypeсписокDog

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 2;
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");