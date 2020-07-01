/*
* Linked List:
!    Head
?    apples
?    9848 ---> grapes
?              9483 ---> pears
?                        9483 ---> null
!                        Tail

H{v:a} -> N{v:b} -> N{v:c} -> T{v:c} -> null

*/

/*
append algorithm:
  if tail.next === null
  this.head.next = this.tail;
  this.tail ={
    value: value,
    next: null
  }

*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    // check param
    if (index >= this.length) {
      return this.append(value);
    }

    let newNode = new Node(value);
    let leader = this.traverseToIndex(index - 1);
    let oldNode = leader.next;
    // or
    // let oldNode = this.traverseToIndex(index);
    leader.next = newNode;
    newNode.next = oldNode;
    this.length++;

    return this;
  }

  remove(index) {
    // check params
    let leader = this.traverseToIndex(index - 1);
    let removed = leader.next;
    leader.next = removed.next;
    this.length--;
    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  reverse() {
    // check
    if (!this.head.next) {
      return this;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}
// 1-->10-->5-->16
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(190);
myLinkedList.append(14);
myLinkedList.prepend(1);
myLinkedList.prepend(2);
myLinkedList.prepend(3);
myLinkedList.insert(2, 99);
myLinkedList.printList();
myLinkedList.remove(2);
myLinkedList.reverse();
myLinkedList.printList();
