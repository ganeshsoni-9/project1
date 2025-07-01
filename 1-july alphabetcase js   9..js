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
