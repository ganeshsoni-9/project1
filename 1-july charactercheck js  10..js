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
