const originalArray = [1, 2, 3, 4, 5];

function clonedArray(arr) {
  return [...arr];
}

console.log(clonedArray(originalArray)); // [1, 2, 3, 4, 5]
