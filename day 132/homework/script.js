class smth {
    constructor(smth) {
      this.smth = smth;
    }
  
    wsp() {
      console.log("wsp");
    }
  }
  
  const x = new smth("hello man");
  
  console.log(x.smth); 
  
  smth.wsp();
  

class jigul {
    constructor(bestcar, modeljigul, isdrukdrives) {
      this.bestcar = bestcar;
      this.modeljigul = modeljigul;
      this.isdrukdrives = isdrukdrives;
    }
  
    f2() {
      console.log(`jigul best ${this.isdrukdrives} ${this.bestcar} ${this.modeljigul}`);
    }
  }
  
  const car1 = new jigul("jigula", "modeljigul", true);
  const car2 = new jigul("torola", "tortolamodel", false);
  
  console.log(car1.modeljigul);
  car1.f2();      
  
  console.log(car2.modeljigul); 
  car2.f2();     
  
  class human {
    constructor(name, age = 30) {
      this.name = name;
      this.age = age;
    }
  }
  

  const person1 = new human("nodo");
  console.log(`${person1.name} are ${person1.age} 20.`);
  
  const person2 = new human("arsena", 542);
  console.log(`${person2.name} and ${person2.age} 50 years.`); 