const { manipulateString } = require('../lib/string-manipulation/manipulateString');
describe('manipulateString', () => {
    test('should swap case and remove vowels', () => {
        expect(manipulateString('Hello World!')).toBe('hLL wRLD!');
        expect(manipulateString('JavaScript')).toBe('jVsCRPT');
    });

    test('should handle empty string', () => {
        expect(manipulateString('')).toBe('');
    });

    test('should handle string with no vowels', () => {
        expect(manipulateString('XYZ xyz')).toBe('xyz XYZ');
    });

    test('should handle string with all vowels', () => {
        expect(manipulateString('aEiOu')).toBe('');
    });

    test('should handle special characters', () => {
        expect(manipulateString('Hello! @World#')).toBe('hLL! @wRLD#');
    });

    test('should throw error for non-string input', () => {
        expect(() => manipulateString(123)).toThrow('Input must be a string');
        expect(() => manipulateString(null)).toThrow('Input must be a string');
        expect(() => manipulateString(undefined)).toThrow('Input must be a string');
    });
});