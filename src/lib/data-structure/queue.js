/**
 * This Class represents a node in the queue.
 */
class Node {
     /**
     * Create a node.
     * @param {*} value - The value of the node.
     */
    constructor(value) {
        this.value = value;
        this.next = undefined;
    }
}


/**
 * This Class represents a queue.
 * 
 * Space Complexity: O(n) - where n is the number of elements in the queue.
 */
class Queue {
        /**
     * Create a queue.
     */
    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }
    /**
     * Add an item to the queue.
     * 
     * Time Complexity: O(1) - Constant time complexity.
     * 
     * @param {*} item - The item to add to the queue.
     */
    enqueue(item) {
        const node = new Node(item);
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }
    /**
     * Remove an item from the queue.
     * 
     * Time Complexity: O(1) - Constant time complexity.
     * 
     * @returns {*} The item removed from the queue.
     */
    deque() {
        if (!this.head) {
            return undefined;
        }

        this.length--;

        const head = this.head;
        this.head = this.head.next;

        head.next = undefined;

        if (this.length === 0) {
            this.tail = undefined;
        }

        return head.value;
    }
    /**
     * return the first item from the queue.
     * 
     * Time Complexity: O(1) - Constant time complexity.
     * 
     * @returns {*}  The first element of the queue without removing it. 
     */
    peek() {
        return this.head ? this.head.value : undefined;
    }

    /**
     * Checks the queue if Empty.
     * 
     * Time Complexity: O(1) - Constant time complexity.
     * 
     * @returns {boolean} A boolean true or false
     */
    isEmpty(){
        return this.length === 0;
    }
}
module.exports = Queue;
