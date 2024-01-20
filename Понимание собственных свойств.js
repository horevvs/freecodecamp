// Понимание собственных свойств
// В следующем примере Birdконструктор определяет два свойства: nameи numLegs:

// function Bird(name) {
//   this.name = name;
//   this.numLegs = 2;
// }

// let duck = new Bird("Donald");
// let canary = new Bird("Tweety");
// nameи numLegsназываются собственными свойствами , поскольку они определены непосредственно в объекте экземпляра. Это означает, что каждый duckиз canaryних имеет свою отдельную копию этих свойств. Фактически каждый экземпляр Birdбудет иметь собственную копию этих свойств. duckСледующий код добавляет в массив все собственные свойства ownProps:

// let ownProps = [];

// for (let property in duck) {
//   if(duck.hasOwnProperty(property)) {
//     ownProps.push(property);
//   }
// }

// console.log(ownProps);
// Консоль отобразит значение ["name", "numLegs"].

// canaryДобавьте в массив собственные свойства ownProps.

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  
  
  
  
  for (let property in canary) {
    if(canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }
