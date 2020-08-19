class Heap {
  constructor(sortFunction) {
    this.sortFunction = sortFunction;
    this.heap = [];
  }


  insert(value) {
    this.heap.unshift(value);
    this.heap.sort(sortFunction);
  }

  extract() {
    if (this.heap.size === 0) return null;
    return this.heap.shift();
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}


// TESTS
let sortFunction = (a, b) => a - b
let minHeap = new Heap(sortFunction);

minHeap.insert(6)
minHeap.insert(2)
minHeap.insert(7)
minHeap.insert(3)
minHeap.insert(4)

console.log(minHeap.size());