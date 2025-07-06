// 🔁 1. Loop Basics

console.log("1. Numbers from 1 to 10 (for loop):");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("\n2. Numbers from 10 to 1 (while loop):");
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

console.log("\n3. Numbers from 1 to 5 (do...while loop):");
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);


// 🔁 2. Even, Odd, Multiples

console.log("\n4. Even numbers from 1 to 50:");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) console.log(i);
}

console.log("\n5. Odd numbers between 20 and 50:");
for (let i = 21; i < 50; i += 2) {
    console.log(i);
}

console.log("\n6. Numbers divisible by 3 from 1 to 30:");
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) console.log(i);
}


// ➕ 3. Summation & Product

console.log("\n7. Sum of numbers from 1 to 100:");
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

console.log("8. Product of numbers from 1 to 10:");
let product = 1;
for (let i = 1; i <= 10; i++) {
    product *= i;
}
console.log(product);

console.log("9. Sum of even numbers from 1 to 50:");
let evenSum = 0;
for (let i = 2; i <= 50; i += 2) {
    evenSum += i;
}
console.log(evenSum);

console.log("10. Sum of squares from 1 to 10:");
let squareSum = 0;
for (let i = 1; i <= 10; i++) {
    squareSum += i * i;
}
console.log(squareSum);


// 🧠 4. Conditionals Inside Loops

console.log("11. Numbers from 1 to 20 skipping multiples of 4:");
for (let i = 1; i <= 20; i++) {
    if (i % 4 === 0) continue;
    console.log(i);
}

console.log("12. Numbers from 1 to 10, stop at 7:");
for (let i = 1; i <= 10; i++) {
    if (i === 7) break;
    console.log(i);
}

console.log("13. Count numbers divisible by both 3 and 5 (1 to 100):");
let count = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) count++;
}
console.log(count);


// 🔂 5. Nested Loops (Without Patterns)

console.log("14. All pairs (i, j) from 1 to 3:");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`(${i}, ${j})`);
    }
}

console.log("15. All (a, b) such that a + b = 5 (1 ≤ a, b ≤ 4):");
for (let a = 1; a <= 4; a++) {
    for (let b = 1; b <= 4; b++) {
        if (a + b === 5) {
            console.log(`(${a}, ${b})`);
        }
    }
}


// 🧮 6. Logic-Based Tasks

console.log("16. Check if a number is prime:");
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log("Is 17 prime?", isPrime(17)); // true
console.log("Is 15 prime?", isPrime(15)); // false

console.log("\n17. Factorial of a number (6!):");
let factorial = 1;
let n = 6;
for (let i = 1; i <= n; i++) {
    factorial *= i;
}
console.log(`6! = ${factorial}`);

console.log("\n18. Reverse a number (123 → 321):");
let num = 123;
let reversed = 0;
while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
}
console.log(reversed);

console.log("\n19. Count digits in a number:");
let number = 987654;
let digits = 0;
while (number > 0) {
    digits++;
    number = Math.floor(number / 10);
}
console.log("Number of digits:", digits);

console.log("\n20. Check if a number is palindrome:");
let checkNum = 1331;
let original = checkNum;
let rev = 0;
while (checkNum > 0) {
    rev = rev * 10 + (checkNum % 10);
    checkNum = Math.floor(checkNum / 10);
}
console.log("Is palindrome?", original === rev);