let math = Number(prompt("enter your math grade"))
let english = Number(prompt("enter your english grade"))
let music = Number(prompt("enter your music grade"))

let avrg = (math + english + music) / 3 

let answer = (avrg < 90)? "A" :
          (avrg < 70)? "B" :
          (avrg < 50)? "C" :
          (avrg < 25)? "D" : 
          "წადი ისწავლე და მერე მოდი";

console.log(answer);