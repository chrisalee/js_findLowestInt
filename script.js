// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const solution = (array) => {
  const sortedA = array.sort((a, b) => a - b);
  let lowestInt = 1;
    console.log(sortedA);
    for(let i = 0; i < array.length; i++) {
      if(sortedA[i] < 0) {
        continue;
      } else if(sortedA[i] === lowestInt) {
        lowestInt++;
        console.log(lowestInt);
      } else if(sortedA[i] > lowestInt) {
        break;
      }
    }
  console.log(lowestInt);
  return lowestInt;
}

solution([1, 3, 6, 4, 1, 2]);
solution([1, 2, 3]);
solution([-1, -3])
