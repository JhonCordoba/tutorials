

const arrayToDivide = [1,2,3,4,5,6,7,8,9,10,11,12];


const BULK_SIZE = 5;

let numberOfIterations: number = Math.ceil(
  arrayToDivide.length / BULK_SIZE,
);

console.log({ numberOfIterations });

let topLimit = BULK_SIZE;
let bottomLimit = 0;



for (let i = 0; i < numberOfIterations; i++) {
  if (i) {
    bottomLimit = topLimit;
  }
  topLimit = (i + 1) * BULK_SIZE;

  if (topLimit > arrayToDivide.length) {
    topLimit = bottomLimit + (arrayToDivide.length - bottomLimit);
  }

  console.log({ topLimit });
  console.log({ bottomLimit });

  console.log(arrayToDivide.slice(bottomLimit, topLimit));


}