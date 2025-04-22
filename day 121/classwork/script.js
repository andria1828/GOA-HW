// name func
function x12(number) {
  if (number % 2 === 0) {
    console.log(`${number} is odd.`);
  } else {
    console.log(`${number} is even`);
  }
}

// anonymous func
const x12 = function(number) {
  if (number % 2 === 0) {
    console.log(`${number} is odd.`);
  } else {
    console.log(`${number} is even`);
  }
};

// arrow func
const x12 = (number) => {
  if (number % 2 === 0) {
    console.log(`${number} is odd.`);
  } else {
    console.log(`${number} is even`);
  }
};
