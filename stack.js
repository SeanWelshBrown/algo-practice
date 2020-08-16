class Stack {

  constructor() {
    this.items = [];
  }


  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length -1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printStack() {
    return this.items.forEach( item => {
      console.log(item);
    })
  }

}




// TESTS
const stack = new Stack();

console.log(stack.isEmpty());

stack.push(1);
stack.push(2);
stack.push(3);

stack.printStack();

console.log(stack.peek());

stack.pop();

stack.printStack();

