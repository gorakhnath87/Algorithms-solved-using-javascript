class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  class BST {
    constructor() {
      this.root = null;
    }
  
    /*
             10
          5      13
        2   7  11   16
    */
  
    push(val) {
      let newNode = new Node(val);
      if (!this.root) {
        this.root = newNode;
        return this;
      }
      else {
        var current = this.root;
        while (true) {
          if (val === current.val) return undefined;
          if (val < current.val) {
            if (current.left === null) {
              current.left = newNode;
              return this;
            }
            current = current.left;
          }
          else {
            if (current.right === null) {
              current.right = newNode;
              return this;
            }
            current = current.right;
          }
        }
      }
    }
    //  search(val){
    //      if(this.root ===null) return false;
    //      var current= this.root;
    //      while(true){
    //        if(val===current.val) return undefined;
    //        if(val<current.val){
  
    //          if(current.left===null){
    //            return false;
    //          }
    //          else{
    //            if(current.left.val===val){
    //              return true
    //            }
    //            current= current.left;
    //          }
    //        }
    //        else {
    //          if(current.right===null){
    //            return false;
    //          }
    //          else{
    //            if(current.right.val===val){
    //              return true
    //            }
    //            current= current.left;
    //          }
    //        }
    //      }
    //   }
    /** above method we can simply like this */
    find(val) {
      if (!this.root) return false;
      let current = this.root;
      let isAvailable = false;
      while (current && !isAvailable) {
        if (val < current.val) {
          current = current.left;
        }
        else if (val > current.val) {
          current = current.right;
        }
        else {
          isAvailable = true;
        }
      }
      return isAvailable;
    }
    //Breadth first serach
    BFS() {
      var data = [],
        queue = [],
        node = this.root;
      queue.push(node);
      while (queue.length) {
        node = queue.shift();
        data.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      return data;
  
    }
  
    DFSPreOrder() {
      /**
       * current--. root the store of 
       */
      var data = [];
      function traverse(node) {
        data.push(node.val);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
      }
      traverse(this.root);
      return data;
    }
  
    DFSPostOrder() {
      var data = [];
      function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        data.push(node.val);
      }
      traverse(this.root);
  
      return data;
    }
    DFSInOrder() {
      if (node.left) traverse(node.left);
       data.push(node.val)
      if (node.right) traverse(node.right);
      traverse(this.root);
  
      return data;
    }
     /*
      Check wheather two binary tree is same or not
     */
     sameBinaryTree(p, q) {
      let isSame=true;
     
      function helper(node1,node2){
          if(!node1 && !node2)return;
          if(!node1 || !node2){
              isSame=false;
              return;
          }
          if(node1.val!==node2.val){
              isSame=false;
              return;
          }
          
        
         helper(node1.left, node2.left);
          
        helper(node1.right,node2.right);
        
      }
      helper(p,q);
      return isSame;
      
  };
  /*
  check whether the given array is binary tree or not
  */
     ISBST(root) {
      let validate=true;
      function transverse(node,min,max){
          if(!node) return;
          
          if((min!=null && min>=node.val) ||(max!=null && max<=node.val)){
              validate= false;
              return;
          }
          
          transverse(node.left,min,node.val);
          transverse(node.right,node.val,max);
      }
      transverse(root,null,null);
     return validate;
  };
   invertTree(root) { 
      function helper(node){
      if(!node)return[]
      let temp=node.right;
      node.right=node.left;
      node.left=temp;
      helper(node.left);
      helper(node.right);
      }
      
      helper(root);
      return root;
  };
  
  /*find max depth of binary tree*/
  findMaxDepth(root) {
      let width=0;
       function transverse(a,depth){
          if(!a){
              width=Math.max(width,depth);
              return;
          }
            
           transverse(a.left,depth+1);
           transverse(a.right, depth+1);
           return width;
       }
      transverse(root,0);
      return width;
  };
  }
  