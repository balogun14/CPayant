const Stack = require('../lib/data-structure/stack');

describe('Stack', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    describe('constructor', () => {
        test('should initialize an empty stack', () => {
            expect(stack.length).toBe(0);
            expect(stack.head).toBeUndefined();
        });
    });

    describe('push', () => {
        test('should add an item to empty stack', () => {
            stack.push(1);
            expect(stack.length).toBe(1);
            expect(stack.head.value).toBe(1);
        });

        test('should add multiple items to stack', () => {
            stack.push(1);
            stack.push(2);
            expect(stack.length).toBe(2);
            expect(stack.head.value).toBe(2);
            expect(stack.head.prev.value).toBe(1);
        });
    });

    describe('pop', () => {
        test('should return undefined from empty stack', () => {
            expect(stack.pop()).toBeUndefined();
        });

        test('should remove and return the top item', () => {
            stack.push(1);
            stack.push(2);
            expect(stack.pop()).toBe(2);
            expect(stack.length).toBe(1);
            expect(stack.head.value).toBe(1);
        });

        test('should handle removing last item', () => {
            stack.push(1);
            expect(stack.pop()).toBe(1);
            expect(stack.length).toBe(0);
            expect(stack.head).toBeUndefined();
        });
    });

    describe('peek', () => {
        test('should return undefined for empty stack', () => {
            expect(stack.peek()).toBeUndefined();
        });

        test('should return top item without removing it', () => {
            stack.push(1);
            stack.push(2);
            expect(stack.peek()).toBe(2);
            expect(stack.length).toBe(2);
        });
    });

    describe('isEmpty', () => {
        test('should return true for empty stack', () => {
            expect(stack.isEmpty()).toBe(true);
        });

        test('should return false for non-empty stack', () => {
            stack.push(1);
            expect(stack.isEmpty()).toBe(false);
        });
    });
});