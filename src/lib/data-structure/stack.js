/**
 * This Class represents a node in the stack.
 */
class Node {
         /**
     * Create a node.
     * @param {*} value - The value of the node.
     */
    constructor(value, prev = undefined) {
        this.value = value;
        this.prev = prev;
    }
}

/**
 * Class representing a Stack data structure.
 * 
 * Space complexity: O(n) - where n is the number of elements in the stack.
 * 
 * @class
 */
class Stack {
    /**
     * Create a Stack.
     */
    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    /**
     * Push an item onto the stack.
     * @param {*} item - The item to push onto the stack.
     */
    push(item) {
        const node = new Node(item);

        this.length++;
        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
    }

    /**
     * Pop an item off the stack.
     * @returns {*} The item that was popped off the stack.
     */
    pop() {
        this.length = Math.max(0, this.length - 1);

        if (this.length === 0) {
            const head = this.head;
            this.head = undefined;
            return head ? head.value : undefined;
        }

        const head = this.head;
        this.head = head.prev;

        return head.value;
    }

    /**
     * Peek at the top item of the stack without removing it.
     * @returns {*} The item at the top of the stack.
     */
    peek() {
        return this.head ? this.head.value : undefined;
    }

    /**
     * Check if the stack is empty.
     * @returns {boolean} True if the stack is empty, false otherwise.
     */
    isEmpty() {
        return this.length === 0;
    }
}

module.exports = Stack;