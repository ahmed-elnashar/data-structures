myStack.pop = () => {
  if (!this.top) {
    return null;
  } else if (this.top === this.bottom) {
    this.bottom === null;
  } else {
    this.top = this.top.next;
    this.length--;
  }
  return this;
};

myStack.peek = () => {
  return this.bottom;
};

myStack.isEmpty = () => {
  if (!this.top && !this.bottom) {
    return null;
  }
};
