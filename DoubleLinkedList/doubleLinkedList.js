class node{
    constructor(val){
      this.val=val;
      this.next=null;
      this.prev=null;
    }
  }
  class doublyLinkedList{
    constructor(){
      this.head=null;
      this.tail=null;
      this.length=null;
    }
    push(val){
      var newNode= new node(val);
      if(!this.head){
        this.head=newNode;
        this.tail= this.head;
        
      }
      /**
       * Set the next property on the tail to be the node
       * set the previous property on the newly created node to be the tail
       * set the tail to the newly created tail
       * 
       */
      else{
        let oldtail= this.tail;
        this.tail= newNode;
        oldtail.next=newNode;
        newNode.prev=oldtail;
      }
      this.length++;
        return this;
    }
    pop(){
       if(!this.head){
        return false;
       }
       if(this.length ===1){
         this.head=null;
         this.tail=null;
       }
        /**
         * set the prev of the last tail to the new tail
         * and new tail next node will null
         */
        else{
          let old=this.tail;
          this.tail= this.tail.prev;
          this.tail.next=null;
          old.prev=null;
          this.length--;
        }
           return this;
      }
      /**
      remove first item from the list
  
      */
     shift(){
       if(!this.head) return undefined;
       if(this.length ===0){
         this.head=null;
         this.tail=null;
         return this;
       }
       //code reaches here means th elenth is greater than 1
       //n1---> n2
       //n1 : 
      let oldHead= this.head;
      this.head= oldHead.next
      this.head.prev=null;
      oldHead.next=null;//not require but if reruning the old head then we can make this emply also
      this.length--;
      return this;
      //n1-> n2 -> n3 -> n4
      // n2 ->n3
     }
     //add an item to top of the array
     unshift(val){
       var newNode= new node(val);
     if(!this.head){
      this.head=newNode;
      this.tail=newNode;
     }
     else{
     //now it means we have some other data
     //n1 ---> n2
    let oldHead= this.head;
     this.head=newNode;
     this.head.next=oldHead;
     oldHead.prev=this.head;
     /**
      * this.head.prev= newNode;
      *  newNode.next= this.head;
      * this.head= newNode;
      */
     }
     this.length++;
     return this;
  }
  //find the item for a given index
  get(index){
    if(index<0 ||index>= this.length)return undefined;
    let middle= Math.floor(this.length/2);
    if(index<=middle){
      let count=0;
       let current= this.head;
      while(count!==index){
       current=current.next;
       count++;
      }
      return current;
    }
    else{
      let count=this.length-1;
      let current =this.tail;
      while(count!==index){
       current= current.prev;
       count --;
      }
      return current;
    }
  }
  //need to update the list
  set(index,value){
     let newNode= this.get(index);
     if(newNode){
       newNode.val= value;
       return this;
     }
     return false;
  }
  insert(index,value){
    if(index<0 ||index>this.length)return undefined;
    if(index===0){
     return this.unshift(value);
    }
    if(index===this.length){
      return this.push(value);
    }
    let beforeNode= this.get(index-1);
    let newNode= new node(value);
    let oldNext=beforeNode.next;
  
    beforeNode.next=newNode;
    newNode.next=oldNext;
    newNode.prev=beforeNode;
    oldNext.prev=newNode;
    this.length++;
    return true;
    //n1-->n2-->n3
  }
  remove(index){
    if(index<0 || index>= this.length) return undefined;
     if(index===0){
     return this.shift(value);
    }
    if(index===this.length){
      return this.pop(value);
    }
    let beforeNode= this.get(index-1);
    let oldNext=beforeNode.next;
    beforeNode.next=oldNext.next;
    oldNext.next.prev=beforeNode;
    oldNext.next=null;
    oldNext.prev=null;
    /**
     * udemy solution 
     * var removedNode= this.get(index);
     * removed.prev.next= removedNode.next;
     * removedNode.next.prev= removedNode.prev;
     * removedNode.next= null;
     * removed.prev=null;
     */
    this.length --;
    return this;
  }
  }
  var double= new doublyLinkedList();
  
  double.unshift(1);
  double.push(2);
  double.push(3);
  double.push(4);
  double.push(5);
  double.remove(1);