try {
    variable1 = 10; 
  } catch (x) {
    console.log(x.message);
  }
  
  "use strict";
  try {
    // let x = 5;
    // let x = 10; 
  } catch (f) {
    console.log(f.message);
  }
  
  "use strict";
  try {
    const obj = {};
    Object.defineProperty(obj, "dsfs", { num: 42, bool: false });
    obj.x = 2931; 
  } catch (g) {
    console.log(g.message);
  }
  
  function funcn1() {
    "use strict";
    try {
      fdf = 2342342454501;
    } catch (hshd) {
      console.log(hshd.message);
    }
  }
  
  function func1(x, y) {
    "use strict";
  }
  try {
        func1(1, 2);
  } catch (asda) {
    console.log(asda.message);
  }
  
  function func3() {
    "use strict";
    console.log(this); 
  }
  