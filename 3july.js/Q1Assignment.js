
function flattenArray(arr) {
  let result = [];
  for (let el of arr) {
    if (Array.isArray(el)) {
      result = result.concat(flattenArray(el));
    } else {
      result.push(el);
    }
  }
  return result;
}


function removeDuplicates(arr) {
  const result = [];
  for (let el of arr) {
    if (!result.includes(el)) {
      result.push(el);
    }
  }
  return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 1])); // [1, 2, 3]

