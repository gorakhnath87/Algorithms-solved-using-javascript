/* Binary Heap */

/**
 * find left child = 2 * index +1
 * find rightchild = 2 * index +2
 * find parent     = (n-1)/2
 */

class PriorityQueue {
    constructor() {
      this.values = [];
    }
  
    enqueue(val, priority) {
    let newNode= new Node(val,priority);
    this.values.push(newNode);
    this.bubbleUp();
      return this.values;
    }
    /**
     * her ewe have to find the parent and do buuble up
     */
    bubbleUp() {
      let idx = this.values.length - 1;
      const element = this.values[idx];
      while (idx > 0) {//if index is zero means the top element
        let parentIdx = Math.floor((idx - 1) / 2);//(n-1)/2
        let parent = this.values[parentIdx];
        if (parent.priority >= element.priority) break;
        this.values[parentIdx] = element;
        this.values[idx] = parent;
        idx = parentIdx;
      }
    
    }
    /**
     * we have to find the left and right child and then we have to swap down
     */
    dequeue() {
      //take the first value and replace with last element
      const max = this.values[0];
      const end = this.values.pop();
      if (this.values.length > 0) {
        this.values[0] = end;
        this.sinkDown();
      }
      return this.values;
    }
    //[33,39,41,18,27,12]
    sinkDown() {
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
      while (true) {
        //lets find the left and right childreen
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
  
        let leftChild, rightChild;
        let swap = null;
  
        //lets start from left child
        if (leftChildIdx < length) {
          leftChild = this.values[leftChildIdx];
          if (leftChild.priority > element.priority) {
            swap = leftChildIdx;
          }
        }
        //right value
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (swap === null && rightChild.priority > element.priority ||
            swap !== null && rightChild.priority > leftChild.priority) {
            swap = rightChildIdx;
          }
        }
  
        if (swap === null) break;
  
        //now we have to swap
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
  
      }
  
    }
  }
  
  class Node{
    constructor(val,priority){
      this.val= val;
      this.priority= priority;
    }
  }