// Проверьте конструктор объекта с помощью экземпляра
// Каждый раз, когда функция-конструктор создает новый объект, этот объект называется экземпляром своего конструктора. JavaScript предоставляет удобный способ проверить это у instanceofоператора. instanceofпозволяет сравнивать объект с конструктором, возвращая значение trueили falseосновываясь на том, был ли этот объект создан с помощью конструктора. Вот пример:

// let Bird = function(name, color) {
//   this.name = name;
//   this.color = color;
//   this.numLegs = 2;
// }

// let crow = new Bird("Alexis", "black");

// crow instanceof Bird;
// Этот instanceofметод вернет true.

// Если объект создан без использования конструктора, instanceofпроверит, что он не является экземпляром этого конструктора:

// let canary = {
//   name: "Mildred",
//   color: "Yellow",
//   numLegs: 2
// };

// canary instanceof Bird;
// Этот instanceofметод вернет false.

// Создайте новый экземпляр конструктора House, вызвав его myHouseи передав несколько спален. Затем используйте instanceof, чтобы убедиться, что это экземпляр House.

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  
  let myHouse= new House(4)
  
  myHouse instanceof House;
  // Only change code below this line