const Queue = require('../lib/data-structure/queue');

describe('Queue', () => {
    let queue;

    beforeEach(() => {
        queue = new Queue();
    });

    describe('constructor', () => {
        test('should initialize an empty queue', () => {
            expect(queue.length).toBe(0);
            expect(queue.head).toBeUndefined();
            expect(queue.tail).toBeUndefined();
        });
    });

    describe('enqueue', () => {
        test('should add an item to an empty queue', () => {
            queue.enqueue(1);
            expect(queue.length).toBe(1);
            expect(queue.head.value).toBe(1);
            expect(queue.tail.value).toBe(1);
        });

        test('should add multiple items to the queue', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);
            expect(queue.length).toBe(3);
            expect(queue.head.value).toBe(1);
            expect(queue.tail.value).toBe(3);
        });
    });

    describe('deque', () => {
        test('should return undefined from empty queue', () => {
            expect(queue.deque()).toBeUndefined();
        });

        test('should remove and return the first item', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            expect(queue.deque()).toBe(1);
            expect(queue.length).toBe(1);
            expect(queue.head.value).toBe(2);
        });

        test('should handle removing last item', () => {
            queue.enqueue(1);
            expect(queue.deque()).toBe(1);
            expect(queue.length).toBe(0);
            expect(queue.head).toBeUndefined();
            expect(queue.tail).toBeUndefined();
        });
    });

    describe('peek', () => {
        test('should return undefined for empty queue', () => {
            expect(queue.peek()).toBeUndefined();
        });

        test('should return first item without removing it', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            expect(queue.peek()).toBe(1);
            expect(queue.length).toBe(2);
        });
    });

    describe('isEmpty', () => {
        test('should return true for empty queue', () => {
            expect(queue.isEmpty()).toBe(true);
        });

        test('should return false for non-empty queue', () => {
            queue.enqueue(1);
            expect(queue.isEmpty()).toBe(false);
        });
    });
});