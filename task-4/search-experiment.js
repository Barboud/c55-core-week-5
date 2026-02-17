import generateBigArray from "./bigArray.js";

function getTargetByBinarySearch(array, target) {
  let left = 0,
    right = array.length - 1;
  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);
    if (array[middle] < target) {
      left = middle + 1;
    } else if (array[middle] > target) {
      right = middle - 1;
    } else {
      return middle;
    }
  }
  return false;
}

function getTargetByLinearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return false;
}

const array1k = generateBigArray(1000);
const array100k = generateBigArray(100000);
const array1M = generateBigArray(1000000);
const array10M = generateBigArray(10000000);

console.time("Linear Search 1k");
getTargetByLinearSearch(array1k, 999);
console.timeEnd("Linear Search 1k");

console.time("Linear Search 100k");
getTargetByLinearSearch(array100k, 90050);
console.timeEnd("Linear Search 100k");

console.time("Linear Search 1M");
getTargetByLinearSearch(array1M, 907000);
console.timeEnd("Linear Search 1M");

console.time("Linear Search 10M");
getTargetByLinearSearch(array10M, 9000500);
console.timeEnd("Linear Search 10M");

console.log("---");

console.time("Binary Search 1k");
getTargetByBinarySearch(array1k, 999);
console.timeEnd("Binary Search 1k");

console.time("Binary Search 100k");
getTargetByBinarySearch(array100k, 90070);
console.timeEnd("Binary Search 100k");

console.time("Binary Search 1M");
getTargetByBinarySearch(array1M, 900900);
console.timeEnd("Binary Search 1M");

console.time("Binary Search 10M");
getTargetByBinarySearch(array10M, 9008000);
console.timeEnd("Binary Search 10M");
