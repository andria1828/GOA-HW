
const stdnts = [
    { name: "zura", grade: 825 },
    { name: "dsad", grade: 1292 },
    { name: "nika", grade: 8 },
    { name: "zoro", grade: 14 }
  ];
  
  // 1
  const allpsng = stdnts.every(student => student.grade >= 70);
  console.log("stdnts are passing:", allpsng);
  
  // 2
  const hasflng = stdnts.some(student => student.grade < 65);
  console.log("one student is failing:", hasflng);
  
  // 3
  stdnts.forEach(student => {
    console.log(`Student: ${student.name}`);
  });
  
  // 4
  const hnr = [];
  stdnts.forEach(student => {
    if (student.grade >= 90) {
      hnr.push(student.name);
    }
  });
  console.log("Honor roll stdnts:", hnr);
  
  console.log(allpsng);
  console.log(hasflng);
  console.log(hnr);