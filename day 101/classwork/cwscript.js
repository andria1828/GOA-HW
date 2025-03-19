let goa = {
    name: 'goa',
    courses: ['JavaScript', 'Python', 'HTML & CSS'],
    socialLink: 'htpsgoa',
    rev: {
      rv1: {
        name: 'nodar',
        status: 'bejana',
        review: 'batumeli.'
      },
      scnd: {
        name: 'ala',
        status: 'hakbar',
        review: 'xonodar'
      },
      thrd: {
        name: 'sjji',
        status: 'nos',
        review: 'norevv'
      },
      fort: {
        name: 'Andria',
        status: 'child',
        review: 'norev'
      }
    }
};

console.log(Object.entries(goa));

console.log(Object.keys(goa));

console.log(Object.values(goa));


console.log(goa.hasOwnProperty('fssdf')); 
console.log(goa.hasOwnProperty('fsdssf'));

const ds = { member: 'Gold boi' };
const dasd = { ...goa, ...ds };
console.log(dasd);

Object.freeze(goa);

console.log(Object.isFrozen(goa)); 
