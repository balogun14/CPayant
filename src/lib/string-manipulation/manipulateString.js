function manipulateString(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    // Single pass through the string
    return input.split('')
        .map(char => {
            // Skip vowels
            if (/[aeiouAEIOU]/.test(char)) {
                return '';
            }
            // Swap case for non-vowels
            return char === char.toLowerCase() ? 
                   char.toUpperCase() : 
                   char.toLowerCase();
        })
        .join('');
}

module.exports = { manipulateString };