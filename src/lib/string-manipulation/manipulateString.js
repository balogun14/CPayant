function manipulateString(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Convert all lowercase letters to uppercase and vice versa
    let swappedCaseString = input.split('').map(char => {
        if (char === char.toLowerCase()) {
            return char.toUpperCase();
        } else if (char === char.toUpperCase()) {
            return char.toLowerCase();
        }
        else {
            return char;
        }
    }).join('');

    // Remove all vowels from the string
    let resultString = swappedCaseString.replace(/[aeiouAEIOU]/g, '');

    return resultString;
}

module.exports = { manipulateString };