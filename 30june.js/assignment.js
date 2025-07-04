// //check alphabet cse single check whether it is upper case and it is loweer case

function checkCase(char) {
    if (char.length !== 1 || !/[a-zA-Z]/.test(char)) {
        return "Please enter a single alphabet character.";
    }

    if (char === char.toUpperCase()) {
        return "Uppercase letter";
    } else {
        return "Lowercase letter";
    }
}
// Example usage:
console.log(checkCase("A")); // Output: Uppercase letter
console.log(checkCase("z")); // Output: Lowercase letter




//check it is the programe is the alphabet , digit, special character
function checkCharacterType(char) {
    if (char.length !== 1) {
        return "Please enter a single character.";
    }

    if (/[a-zA-Z]/.test(char)) {
        return "Alphabet character";
    } else if (/[0-9]/.test(char)) {
        return "Digit";
    } else {
        return "Special character";
    }
}
// Example usage:
console.log(checkCharacterType("A")); // Alphabet character
console.log(checkCharacterType("8")); // Digit
console.log(checkCharacterType("@")); // Special character





//day of the week programe
let day =2;

if(day === 1){
    console.log("monday")
}

else if(day === 2){
    console.log("tuesday")
}

else if(day === 3){
    console.log("Wednesday")
}

else if(day === 4){
    console.log("thursday")
}

else if(day === 5){
    console.log("Friday")
}

else if(day === 6){
    console.log("Saturday")
}

else if(day === 7){
    console.log("Sunday")
}

else {
    console.log("invalid")
}




//divisible by 5 programe
let number = 90;

if(number % 5 === 0 && number % 11 === 0){
    console.log(number + "divisible by both 5 and 11");
}
 else {
    console.log(number + "both are divisible by 5 and 11")
}




//even and odd number programme
let number3 = 7;

if (number3 % 2 === 0) {
    console.log(number3 + "even")
} else {
    console.log(number3 + "odd")
}




//gratest of the number
let number1 = 20;
let number2 = 40;

if(number1 > number2) {
    console.log(number1 + "greater than" + number2);
} else if (number2 > number1) {
    console.log(number2 + "greater than" + number1);
    } else {
        console.log("both are equal");
    }




//leap year programe
let year = 2025; // Change this to any year you want to check

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}



//paas fail programe
let marks = 40 ;

if(marks >= 40){
    console.log("paas")
}
else{
    console.log("fail")
}




//positive, neagtive, zero
let number4 = 10;

if (number4 > 0){
    console.log(number4 + "positive")
} else {
    console.log(number4 + "negative")
}




//voting eligible programe
let age = 30;

if(age > 30){
    console.log("vote for eligible");
} else {
    console.log("vote for not  eligible");
}