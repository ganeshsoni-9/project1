//print the number from 1 to 10 using for loop
for (let i = 1 ; i <= 10 ; i++){
    console.log(i)
}//

//print the number from 10 to 1 using for loop
for(let i=10 ; i>=1 ; i--){
    console.log(i)
}

//print even number between 1 to 20 for loop
for (let i=1 ; i<=20 ; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

//print all divisible by 5 from 1 to 50

for (let i = 1 ; i <= 50 ; i++){
    if(i % 5 === 0){
        console.log(i)
    }
}

//print the sum of number form 1 to 100 
let sum = 0
for(let i=0 ; i<=100 ; i++){
sum += i;
}
console.log("sum from 1 to 100", sum)


//find the product of the number form 1 to 100
let product = 1n;
for (let i=1n ; i <= 100n ; i++){
    product *= i; 
}
console.log("product of the numbrt from 1 to 100:" , product.toString())


// print the count th number is divisiblr by 3
for (let i=1 ; i<= 30 ; i++){
    if(i % 3 === 0){
        console.log(i)
    }
}


// find the multiplication table of the  7(seven)
for(let i=1 ; i <= 70 ; i++){
    if(i % 7 === 0){
        console.log(i)
    }
}

// find the factorial number form 1 to 5 ----
for (let n = 1 ; n <= 5 ; n++){
    let factorial = 1; 
    for(let i = 1 ; i <= n ; i++){
        factorial *= i;
    }
    console.log(`factorial of ${n} is: ${factorial}`);
}


// print the triangle in 5 rows
let rows = 10;

for(let i = 1 ; i <= 20 ; i++){
    let pattern ='';
for(j = 1 ; j <= i ; j++){
    pattern += '*';
}
console.log(pattern);
}

// print the number from 1 to 20 , but skip multiples of 4 using continue 
for (let i = 1 ; i <= 20 ; i++){
    if(i % 4 === 0){
        continue;
    }
    console.log(i)
}

// print the number from 1 to 20 , but skip multiples of 4 using break  
for (let i = 1 ; i <= 20 ; i++){
    if(i % 13 === 0){
        break;
    }
    console.log(i)
}


//print all the number of the square from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(`Square of ${i} is ${i * i}`);
}


//print the number is reversed of the 123   to    321
  let num = 123;
let reversed = 0;

while (num !== 0) {
  let digit = num % 10;        
  reversed = reversed * 10 + digit; 
  num = Math.floor(num / 10);  
}

console.log("Reversed number:", reversed);


//check if a number is prime using a loop

