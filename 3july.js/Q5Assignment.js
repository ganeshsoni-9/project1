function countOccurrences(arr) {
  const count = {};
  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
  }
  return count;
}

console.log(countOccurrences([1, 2, 2, 3, 1, 1])); // {1: 3, 2: 2, 3: 1}