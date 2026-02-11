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

console.time("Linear Search 1k");
getTargetByLinearSearch(generateBigArray(1000), 10540640);
console.timeEnd("Linear Search 1k");

console.time("Linear Search 100k");
getTargetByLinearSearch(generateBigArray(100000), 10540640);
console.timeEnd("Linear Search 100k");

console.time("Linear Search 1M");
getTargetByLinearSearch(generateBigArray(10000000), 10540640);
console.timeEnd("Linear Search 1M");

console.time("Linear Search 10M");
getTargetByLinearSearch(generateBigArray(10000000), 10540640);
console.timeEnd("Linear Search 10M");

console.log("---");

console.time("Binary Search 1k");
getTargetByBinarySearch(getTargetByBinarySearch(1000), 10540640);
console.timeEnd("Binary Search 1k");

console.time("Binary Search 100k");
getTargetByBinarySearch(generateBigArray(100000), 10540640);
console.timeEnd("Binary Search 100k");

console.time("Binary Search 1M");
getTargetByBinarySearch(generateBigArray(10000000), 10540640);
console.timeEnd("Binary Search 1M");

console.time("Binary Search 10M");
getTargetByBinarySearch(generateBigArray(10000000), 10540640);
console.timeEnd("Binary Search 10M");
