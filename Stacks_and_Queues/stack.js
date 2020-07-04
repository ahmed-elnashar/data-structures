class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    // see the very top node
    return this.top;
  }
  push(value) {
    // add a node to the top of the stack
    const newNode = new Node(value);
    // check if this is the very first item
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const oldNode = this.top;
      this.top = newNode;
      this.top.next = oldNode;
    }
    this.length++;
    return this;
  }
  pop() {
    // remove from the top of the stack

    // check if there's an item in the stack
    if (!this.top) {
      return null;
    } else if (this.top === this.bottom) {
      this.bottom = null;
    } else {
      const oldNode = this.top;
      this.top = this.top.next;
      this.length--;
      return oldNode;
    }
  }
  isEmpty() {
    // check if the stack is empty
    if (!this.top && !this.bottom) {
      return null;
    }
  }
}



const myStack = new Stack();
myStack.push('google');
myStack.push('Udemy');
myStack.push('Discord');
myStack.pop();
myStack.peek();
