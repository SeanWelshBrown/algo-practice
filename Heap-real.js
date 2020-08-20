class Heap {
  constructor() {
    this.heap = [];
  }


  insert(node) {
    // Inserting the new node at the end of the heap array
    this.heap.push(node);

    // Finding the correct position for the new node
    if (this.heap.length) {
      let current = this.heap.length - 1;
      let parent = Math.floor((current - 1) / 2);

      /*
      Traversing up the parent node until the current node (current) is greater than
      or less than the parent (for min or max heaps respectively)
      */
      while (current > 0 && this.heap[parent] > this.heap[current]) {

        // Swapping the two nodes by using the ES6 destructuring syntax
        [this.heap[parent], this.heap[current]] = [this.heap[current], this.heap[parent]];
        current = parent;
        parent = Math.floor((current - 1) / 2);
      }
    }
  }

  extract() {
    let smallest = this.heap[0];

    /*
    When there are more than one elements in the array, we put the tail element at the first position and start comparing nodes with the child nodes
    */
    if (this.heap.length > 1) {
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);

      let current = 0;
      let leftChildIndex = (current * 2) + 1;
      let rightChildIndex = (current * 2) + 2;
      // swap current with the smaller node
      while (this.heap[current] > this.heap[leftChildIndex] || this.heap[current] > this.heap[rightChildIndex]) {
        const indexToSwap = this.heap[rightChildIndex] < this.heap[leftChildIndex] ? rightChildIndex : leftChildIndex;
        [this.heap[current], this.heap[indexToSwap]] = [this.heap[indexToSwap], this.heap[current]];
        current = indexToSwap;
        // since current position change, let's update the left and right child indx
        leftChildIndex = current * 2 + 1;
        rightChildIndex = current * 2 + 2;
      }  
    } else if (this.heap.length === 1) {
      this.heap.splice(0, 1);
    } else {
      return null;
    }
    return smallest;
  }

  getMin() {
    return this.heap[0];
  }

  getSize() {
    return this.heap.length;
  }
}



// TESTS
let heap = new Heap();

heap.insert(7)
heap.insert(1)
heap.insert(6)
heap.insert(5)
heap.insert(2)
heap.insert(0)
heap.insert(8)

console.log(heap);
console.log(heap.getMin());
console.log(heap.getSize());
