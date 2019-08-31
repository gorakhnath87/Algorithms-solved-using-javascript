//piece of data - val
//reference to next node -next

class Node{
    constructor(val){
      this.val=val;
      this.next=null;
    }
  }
  var first = new Node('hie');
  first.next= new Node('there');
  first.next.next= new Node('hoe');
  first.next.next.next= new Node('sdkjjd');
  ///now make clear..............
  
  class SinglyLinkedList{
    constructor(){
      this.head=null;
      this.tail=null;
     this.length=0;
    }
    push(val){
      /*  basic steps...............
      create a new node using that value.
      if there is no head means empty then set both head an tail to be the new;y craeated node
      otherwise set the next proprty on the tail to be the new node and set the tail proprty on the list to be newly created node.
      increment length by one
      */
    var newNode= new Node(val);
    if(!this.head){
      this.head=newNode;
      this.tail=this.head;
      this.length ++;
    }
    else{
      this.tail.next= newNode;
      this.tail=newNode;
      this.length ++;
    }
     return this;
    }
  
  //removing node form end
    pop(){
      /**
       * if no node in the list return undefined
       * loop through the list until you reach the tail
       * set the next proprty of the 2nd last node to null
       * set the tail to be 2nd last node
       * decrese the length
       * return
       */
      if(!this.head) return undefined;
      let current= this.head;
      let newTail= current;
      while(current.next){
        console.log('nexxx', current,current.next)
        newTail=current;
        current=current.next;
      }
      this.tail= newTail;
      this.tail.next= null;
      this.length --;
      if(this.length===0){
        this.head= null;
        this.tail=null;
      }
      return current;
    }
    shift(){
      /**
       * if no node return undefinde
       * store the current head proprtyin a variable
       * set the head propert to be the current heads next property
       * decrese the length by 1
       * return the value of the nod e removed
       */
      if(!this.head) return undefined;
      let currentHead= this.head;
      this.head= currentHead.next;
      this.length--;
      if(this.length ===0){
        return null;
    }
      return currentHead;
    }
    unshift(value){
      /**
       * creata a new node using the value passed to the fucntion
       * if there is no head property on the list set the head and tail to be the newly created node otherwise set the newly created nodes next proprty to the current head property on the list.
       * set he head popert on the lis t be that newly created node
       * increment the lengthreturn the linked list.
       */
      let newNode= new Node(value);
      if(!this.head){
        this.head=newNode;
        this.tail= this.head;
      }
      else{
        let oldHead= this.head;
        this.head=newNode;
        this.head.next=oldHead;
      }
      this.length ++;
      return this;
    }
    //get the item based on the position
  
    get(index){
      //if index is less then zero or more than the length retun null
      //loop throught the list until reach to the index.
     if(index<0 || index >= this.length)return null;
     let count=0;
     var current= this.head;
     while(count<index){
     current= current.next;
     count++;
    }
    return current;
  }
  //define a function which update the data to a given index
  set(index,val){
  /**
   * use get function to find the specific node.
   * if node not found return false
   * if node is found set the value of that node to be the the value passed to the fucntion nad return true
   */
  let oldValue= get(index);
  if(oldValue){
  oldValue.value=val;
  return true;
  
  }
  return false;
  
  }
  //adding newww item to a given index
  insert(index, val){
  /**
   * if the index is less then zero or greater than the length , return false
   * if the index is the same as the length, push a new node to the end of the list if the index is o, unshift a new node to start of the list
   * otherwise using ht eget methos , access the node at the index -1
   * set the next property on that node to be the new node
   * Set the next proprty ont he new node to be the previous next
   * increment the length
   * return true
   */
   if(index<0 || index > this.length)return;
   if(index===this.length)return !!this.push(val);
   if(index===0)return !!this.unshift(val);
  
   var newNode= new Node(val);
   var prev=this.get(index-1);
   var temp=prev.next;
   prev.next=newNode;
   newNode.next=temp;
  this.length++;
  return true;
  }
  Remove(index,vs){
    /**
   * if the index is less then zero or greater than the length , return false
   * if the index is the same as the length, pop a new node to the end of the list if the index is o, shift a new node to start of the list
   * otherwise using the get methods , access the node at the index -1
   * set the next property on that node to the next of the next node
   * Set the next proprty on that node to be next of the next node
   * decrement the length
   * return the value of the node removed
   */
   if(index<0 || index >= this.length)return;
   if(index===this.length-1)return !!this.pop(val);
   if(index===0)return !!this.shift(val);
   var previousNode= this.get(index-1);
   var removed= previousNode.next;
   previousNode.next= removed.next;
   this.length--;
   return removed;
  
  }
  //common question to interview
  reverse(){
    /**
     * swap head and tail
     * create a variale called next
     * create a varialble called prev
     * create a variable called node and initialize it to the head property
     * Loop throught the list
     * Set the next to be the next property on whatever prev isset prev to the vlsur of node variableset the node variable to be the value of the next variable
     */
    var node= this.head;
    this.head= this.tail;
    this.tail= node;
    var prev=null;
    var next;
    for(let i=0; i<this.length;i++){
      next= node.next;
      node.next=prev;
      prev=node;
      node=next;
    }
    return this;
  }
  }
  
  var list= new SinglyLinkedList();
  list.push('1');
  list.push('2');
  list.push(3);
  list.push(4);
  list.get(2);
  