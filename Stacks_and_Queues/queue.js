class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    // see the very top node
    return this.first;
  }
  enqueue(value) {
    // add a node to the top of the stack
    const newNode = new Node(value);
    // check if this is the very first item
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    // remove from the top of the stack

    // check if there's an item in the stack
    if (!this.first) {
      return null;
    } else if (this.first === this.last) {
      this.last = null;
    } else {
      const oldNode = this.first;
      this.first = this.first.next;
      this.length--;
      return oldNode;
      // or return this if you don't need the oldNode
    }
  }
  isEmpty() {
    // check if the stack is empty
    if (!this.first && !this.last) {
      return null;
    }
  }
}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
myQueue.dequeue();
myQueue.peek();
