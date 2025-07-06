function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function getPrimes(arr) {
  return arr.filter(isPrime);
}

console.log(getPrimes([1, 2, 3, 4, 5, 6, 7])); // [2, 3, 5, 7]