class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    // see the very top node
    return this.array[this.array.length - 1];
  }
  push(value) {
    // add a node to the top of the stack
    this.array.push(value);
    return this;
  }
  pop() {
    // remove from the top of the stack
    if (this.array) {
      this.array.pop();
    }
    return this;
  }
  isEmpty() {
    // check if the stack is empty
    if (!this.array) {
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
