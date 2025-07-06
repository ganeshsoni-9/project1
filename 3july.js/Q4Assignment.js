function secondLargest(arr) {
  let max = -Infinity;
  let second = -Infinity;
  for (let num of arr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num > second && num !== max) {
      second = num;
    }
  }
  return second;
}

console.log(secondLargest([10, 5, 8, 1, 9])); // 9