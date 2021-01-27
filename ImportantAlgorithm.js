                /* Anagram - Frequency counter--2*/
/*
Write a function to accept two string and return true if second array is anagram of
first. Anagram means from second array can we contruct the word of first or not.

Now again we can see that we are checking the frequecy of each item in string one is present in second or not.
only difference is the here we are not matching the exact frequecy of first and second array

exple: 
      str1= nmz; str2= mnz; --> true
      str1=lobe; str2= eboe --< false

Note: here unsorted string 
*/

function same (str1, str2){
    //if requirement is to have same frequeny then put legth condition if both string have same length
    // then only search else return false;
    let obj={};
    for(let value of str1){
      obj[value]= ++ obj[value] ||1;
    }
    for(let value of str2){
      if(obj[value]> 0){
         --obj[value];
      }
      else{
        console.log(value);
        return false;
      }
    }
    return true;
  }
  
  let a= 'cet';
  let b='ett';
  same(a,b);
  
  ///////////////////////////////////////////////////////////////
  
               ///Binary Search
                    /* Frequency counter--2*/
  /*
  Write a function to accept two string and return true if second array is anagram of
  first. Anagram means from second array can we contruct the word of first or not.
  
  Now again we can see that we are checking the frequecy of each item in string one is present in second or not.
  only difference is the here we are not matching the exact frequecy of first and second array
  
  exple: 
        str1= nmz; str2= mnz; --> true
        str1=lobe; str2= eboe --< false
  
  Note: here unsorted string 
  */
  
  function same (str1, str2){
    //if requirement is to have same frequeny then put legth condition if both string have same length
    // then only search else return false;
    let obj={};
    for(let value of str1){
      obj[value]= ++ obj[value] ||1;
    }
    for(let value of str2){
      if(obj[value]> 0){
         --obj[value];
      }
      else{
        console.log(value);
        return false;
      }
    }
    return true;
  }
  
  let a= 'cet';
  let b='ett';
  same(a,b);
  ////////////////////////////////////////////////////
                         //Binary Search-2
                    /* Frequency counter--2*/
  /*
  Write a function to accept two string and return true if second array is anagram of
  first. Anagram means from second array can we contruct the word of first or not.
  
  Now again we can see that we are checking the frequecy of each item in string one is present in second or not.
  only difference is the here we are not matching the exact frequecy of first and second array
  
  exple: 
        str1= nmz; str2= mnz; --> true
        str1=lobe; str2= eboe --< false
  
  Note: here unsorted string 
  */
  
  function same (str1, str2){
    //if requirement is to have same frequeny then put legth condition if both string have same length
    // then only search else return false;
    let obj={};
    for(let value of str1){
      obj[value]= ++ obj[value] ||1;
    }
    for(let value of str2){
      if(obj[value]> 0){
         --obj[value];
      }
      else{
        console.log(value);
        return false;
      }
    }
    return true;
  }
  
  let a= 'cet';
  let b='ett';
  same(a,b);
  ////////////////////////////////////////////
  
  
                 //BubbleSort
  
  function sort(arr){
  
    for(let i in arr){
      for(let j in arr){
        console.log(arr[i],arr[j]);
        if(arr[i] <arr[j]){
          let temp= arr[i];
          arr[i]=arr[j];
          arr[j]=temp;
        }
        console.log(arr);
        
      }
      console.log('#####done')
    }
    console.log(arr);
    return arr;
  }
  
  var arry=[3,1,4];
  //sort(arry);
  
  function sort2(a){
  
    for(let i=a.length; i>0; i--){
      let swap=false;
      for(let j=0; j<i-1;j++){
        if(a[j]>a[j+1]){
          swap=true;
          let temp= a[j];
          a[j]=a[j+1];
          a[j+1]=temp;
        }
      }
    if(!swap){
      break;
    }
    }
    return a;
  }
  console.log(sort2(arry));
  
  
  ////////////////////////////////////////////
  
                 //FindMaxPallindromeString
  
  function sort(arr){
  
    for(let i in arr){
      for(let j in arr){
        console.log(arr[i],arr[j]);
        if(arr[i] <arr[j]){
          let temp= arr[i];
          arr[i]=arr[j];
          arr[j]=temp;
        }
        console.log(arr);
        
      }
      console.log('#####done')
    }
    console.log(arr);
    return arr;
  }
  
  var arry=[3,1,4];
  //sort(arry);
  
  function sort2(a){
  
    for(let i=a.length; i>0; i--){
      let swap=false;
      for(let j=0; j<i-1;j++){
        if(a[j]>a[j+1]){
          swap=true;
          let temp= a[j];
          a[j]=a[j+1];
          a[j+1]=temp;
        }
      }
    if(!swap){
      break;
    }
    }
    return a;
  }
  console.log(sort2(arry));
  
  
  /////////////////////////////////////
  
                           //Find UniqueElementCount
  
  //....................Ist method....................
  let a=[];
  for(let i=0;i<900000;i++){   
   a.push(i);
    a.push(i);
     a.push(i);
  }
  
  /*
  first 900000 0
  FindUniqueElmentcount:45 2ndddd 900000 246.86500000098022
  FindUniqueElmentcount:72 third 900000 0.004999999873689376
  FindUniqueElmentcount:99 fourth 900000 0.004999999873689376
  */
  function findUniqueValueLength(arr) { 
    let length=0;
    let obj={};
    for(let value of arr){
      if(!obj[value]>0){
      obj[value]=  value;
      }
    }
   return Object.keys(obj).length;
  }
  let time1=performance.now();
  let time2=performance.now();
  console.log('first',findUniqueValueLength(a), time2-time1);
  
  
  
  //....................2nd method.........................
  
  //this is worst then all the solution almost same as 4rth
  let f=[];
  for(let i=0;i<900000;i++){   
   f.push(i);
    f.push(i);
     f.push(i);
  }
  
  let t8=performance.now();
  let data= [...new Set(f)]; 
  let t9=performance.now();
  
  console.log('2ndddd', data.length,t9-t8);
  
  
  //....................3rd method..........................
  let c=[];
  for(let i=0;i<900000;i++){   
   c.push(i);
    c.push(i);
     c.push(i);
  }
  
  
  // this is best solution of soreted array but less second best for unsorted array
  function findUnique(arr){ 
    let lengthwa=0;
      for (let index in arr){
      if(arr[index] !== arr[index-1]){
        lengthwa +=1;
      }
    }
    
    return lengthwa;
  }
  let time3=performance.now();
  
  let time4=performance.now();
  let thirdArr=[1,1,1,2,2];
  console.log('third',findUnique(c), time4 - time3);
  
  //.....................4th method..........................
  
  
  function unquieValue(arr){
    if(arr.length<1) return 0;
    let i=0;
    for(let index in arr){
      if(arr[i]!==arr[index]){
        i++;
        arr[i]=arr[index];
      }
    }
    return i +1;
  
  }
  let b=[];
  for(let i=0;i<900000;i++){   
   b.push(i);
    b.push(i);
     b.push(i);
  }
  
  let time6= performance.now();
  
  let time7=performance.now();
  console.log('fourth', unquieValue(b),time7- time6);
  
  ///////////////////////////////////////////////////
  
  ////////////////////frequency counter
  
                 // Frequency counter (uses object to keep the frequency of item)
  
  /*
  write a fucntion which accepts two array and true true if the second array contains the 
  square of the corresponding element of first array.The frequency of the number should be same for both.
  
  ex: arr1=[1,2,3] arr2= [4,1,9] //true
  
      arr1=[4,6,2,6] arr2= [16,4,36,12] //false frequency not matches here
  
      arr1=[1,2] arr2=[4,1,2] //false array length not same
  
     
  Note: here we are passing un sorted array;
  
  */
  
  function same2(arr1, arr2) {  // this is 2nd best solution
    let arr1Obj = {};
    let arr2Obj = {};
    if(arr1.length !== arr2.length){
      return false;
    }
    for (let value of arr1) {
      arr1Obj[value ** 2] = ++arr1Obj[value ** 2] || 1;
    }
    for (let value of arr2) {
      arr2Obj[value] = ++arr2Obj[value] || 1;
    }
    for (let key in arr1Obj) {
      if (!key in arr2Obj) { //here we are using in operator and checking key is there or not
        return false;
      }
      if (arr1Obj[key] !== arr2Obj[key]) { // here we are checking the value that we save as count
        console.log(arr1Obj[key],arr2Obj[key],key);
        return false;
      }
     
    }
     return true;
  }
  
  function same(arr1, arr2) { //this is 3rd best solution
    for (let value of arr1) {
      let index = arr2.indexOf(value ** 2);
      
      if (index < 0) {
        return false;
      }
      arr2.splice(index, 1);
    }
    return true;
  }
  function same3(newar,newar2){ //this is best then above two, permormace is also very high
   if(newar.length !== newar2.length){
     return false;
   }
   let obj={};
    for(let value of newar){
      obj [value **2] = ++obj[value **2] ||1;
    }
    for(let key of newar2){
      if(obj[key]>0){
       obj[key]= -- obj[key];
      }
      else{
        console.log(key,obj[key]);
       return false;
      }
    }
  
   return true;
  };
  
  let newar=[];
  let newar2=[];
  for(let i=0;i<205010; i++){
    newar.push(i);
    newar2.push(i **2);
  }
  
  
  let time1=performance.now();
  console.log(same3(newar,newar2));
  let time2= performance.now();
  console.log(time2-time1);
  
  
  /////////////////////////////////////////////////
   
                       //insertionSort
  
  function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
     let currentValue= arr[i];
   
      for(var j=i-1;j>=0 && arr[j] > currentValue;j--){
       arr[j+1]=arr[j];
      }
      arr[j+1]=currentValue;
    }
    return arr;
  }
  
  let array=[3,55,4,7,2,9];
  
  console.log(insertionSort(array));
  
  //////////////////////////////////////////////////////
  
                  //MutipleCounter
  
  function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
     let currentValue= arr[i];
   
      for(var j=i-1;j>=0 && arr[j] > currentValue;j--){
       arr[j+1]=arr[j];
      }
      arr[j+1]=currentValue;
    }
    return arr;
  }
  
  let array=[3,55,4,7,2,9];
  
  console.log(insertionSort(array));
  
  ////////////////////////////////////////////////////////
  
                        //Window Pattern
  function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
     let currentValue= arr[i];
   
      for(var j=i-1;j>=0 && arr[j] > currentValue;j--){
       arr[j+1]=arr[j];
      }
      arr[j+1]=currentValue;
    }
    return arr;
  }
  
  let array=[3,55,4,7,2,9];
  
  console.log(insertionSort(array));
  
  ///////////////////////////////////////////////////////////////
                  //WordMagazine
  function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
     let currentValue= arr[i];
   
      for(var j=i-1;j>=0 && arr[j] > currentValue;j--){
       arr[j+1]=arr[j];
      }
      arr[j+1]=currentValue;
    }
    return arr;
  }
  
  let array=[3,55,4,7,2,9];
  
  console.log(insertionSort(array));
  
  ///////////////////////////////////////////////////////
  
                    //Find Pattern
  function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
     let currentValue= arr[i];
   
      for(var j=i-1;j>=0 && arr[j] > currentValue;j--){
       arr[j+1]=arr[j];
      }
      arr[j+1]=currentValue;
    }
    return arr;
  }
  
  let array=[3,55,4,7,2,9];
  
  console.log(insertionSort(array));
  
  //////////////////////////////////////////////////////////
  
                       //findSubString
  
  
  function findLongSubString(str){
    let startWindow=0;
    let windowObj={};
    let maxLength=0;
    for(let i=0;i<str.length;i++){
     let char=str[i];
     if(windowObj[char]>=startWindow){
       startWindow = windowObj[char] +1;
     }
     windowObj[char]= i;
     maxLength= Math.max(maxLength, i - startWindow);
    }
  
    return maxLength;
  }
  findLongSubString('abcddfghrhiertyesloce');
  //here time complexity is o(n)
  //space complexity is o(min(m,n));
  
  /////////////////////////////////////////////////////
  
                   //glasshour
  
  function dime (){
     let arrayLength=6;
     let twoDim = new Array(arrayLength); 
    for (var i = 0; i < twoDim.length; i++) { 
      twoDim[i] = new Array(arrayLength); 
  } 
  
  for (var i = 0; i < arrayLength; i++) { 
      for (var j = 0; j < arrayLength; j++) { 
          twoDim[i][j] = j; 
      } 
  } 
  //console.log(twoDim);
       let maxSum=0;
  
      for(var i = 0; i < arrayLength-2; i++){
        let sum=0
          for(var j = 0; j < arrayLength-2; j++){
           
             sum = twoDim[i][j] + twoDim[i][j+1] + twoDim[i][j+2] + twoDim[i+1][j+1]+ twoDim[i+2][j]+ twoDim[i+2][j+1]+ twoDim[i+2][j+2];
             
          }
          maxSum=Math.max(sum,maxSum);
          }
  
    return maxSum;
  /*
  var arr = [], array=[], h = 0;
      for(arr_i = 0; arr_i < 6; arr_i++){
         arr[arr_i] = readLine().split(' ');
         arr[arr_i] = arr[arr_i].map(Number);
      }
      for(var i = 0; i < 4; i++){
          for(var j = 0; j < 4; j++){
              array[h] = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1]+ arr[i+2][j]+ arr[i+2][j+1]+ arr[i+2][j+2];
              h++;
          }}
   console.log(array.sort(function(a, b){return a-b})[15]);
  
  */
  }
  
  
  dime();
  
  ///////////////////////////////////////////////////
  
                           //groupAnagram
  function dime (){
     let arrayLength=6;
     let twoDim = new Array(arrayLength); 
    for (var i = 0; i < twoDim.length; i++) { 
      twoDim[i] = new Array(arrayLength); 
  } 
  
  for (var i = 0; i < arrayLength; i++) { 
      for (var j = 0; j < arrayLength; j++) { 
          twoDim[i][j] = j; 
      } 
  } 
  //console.log(twoDim);
       let maxSum=0;
  
      for(var i = 0; i < arrayLength-2; i++){
        let sum=0
          for(var j = 0; j < arrayLength-2; j++){
           
             sum = twoDim[i][j] + twoDim[i][j+1] + twoDim[i][j+2] + twoDim[i+1][j+1]+ twoDim[i+2][j]+ twoDim[i+2][j+1]+ twoDim[i+2][j+2];
             
          }
          maxSum=Math.max(sum,maxSum);
          }
  
    return maxSum;
  /*
  var arr = [], array=[], h = 0;
      for(arr_i = 0; arr_i < 6; arr_i++){
         arr[arr_i] = readLine().split(' ');
         arr[arr_i] = arr[arr_i].map(Number);
      }
      for(var i = 0; i < 4; i++){
          for(var j = 0; j < 4; j++){
              array[h] = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1]+ arr[i+2][j]+ arr[i+2][j+1]+ arr[i+2][j+2];
              h++;
          }}
   console.log(array.sort(function(a, b){return a-b})[15]);
  
  */
  }
  
  
  dime();
  
  ////////////////////////////////////////////////////
  
                            //Merge sort -Two sorted Array
  function dime (){
     let arrayLength=6;
     let twoDim = new Array(arrayLength); 
    for (var i = 0; i < twoDim.length; i++) { 
      twoDim[i] = new Array(arrayLength); 
  } 
  
  for (var i = 0; i < arrayLength; i++) { 
      for (var j = 0; j < arrayLength; j++) { 
          twoDim[i][j] = j; 
      } 
  } 
  //console.log(twoDim);
       let maxSum=0;
  
      for(var i = 0; i < arrayLength-2; i++){
        let sum=0
          for(var j = 0; j < arrayLength-2; j++){
           
             sum = twoDim[i][j] + twoDim[i][j+1] + twoDim[i][j+2] + twoDim[i+1][j+1]+ twoDim[i+2][j]+ twoDim[i+2][j+1]+ twoDim[i+2][j+2];
             
          }
          maxSum=Math.max(sum,maxSum);
          }
  
    return maxSum;
  /*
  var arr = [], array=[], h = 0;
      for(arr_i = 0; arr_i < 6; arr_i++){
         arr[arr_i] = readLine().split(' ');
         arr[arr_i] = arr[arr_i].map(Number);
      }
      for(var i = 0; i < 4; i++){
          for(var j = 0; j < 4; j++){
              array[h] = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1]+ arr[i+2][j]+ arr[i+2][j+1]+ arr[i+2][j+2];
              h++;
          }}
   console.log(array.sort(function(a, b){return a-b})[15]);
  
  */
  }
  
  
  dime();
  
  //////////////////////////////////////////////////////
  
                   //MergedSort-SingleUnsortedArray
  
  //write a function to merge one unsorted array
  function mergeSort(a){
    //the main idea is to break the array ito two seaprate array and 
    //do the check recursivly
   // console.log(a);
    if(a.length<=1) return a;
    let midIndex=Math.floor(a.length/2);
    let first = mergeSort(a.slice(0, midIndex));
    let second=  mergeSort(a.slice(midIndex));
      return sort(first,second);
  }
  function sort(arr, arr2){
    let result=[];
    let i =0;
    let j=0;
    while(i<arr.length && j<arr2.length){
      console.log(arr[i], arr2[j]);
      if(arr[i]<arr2[j]){
        result.push(arr[i]);
        i++;
      }
      else{
        result.push(arr2[j]);
        j++;
      }
    }
     while(i<arr.length){
   result.push(arr[i]);
   i++;
   }
    while(j<arr2.length){
      result.push(arr2[j]);
      j++
   }
  
    return result;
  }
  
  let arry=[2,90,4,80,5,12,1,3];
  console.log(mergeSort(arry));
  
  ///////////////////////////////////////////////////
  
                       //Pallindrome
  
  function isPallindrome(k){
   let i=0;
  
   let s= k.toLowerCase().replace(/[\W_]/g,"");
    let j=s.length-1;
   
   while(i<j){
     if(s[i]!==s[j]){
       return false;
     }
     i++;
     j--;
   }
   return true;
  }
  
  isPallindrome('lfol@oFl_');
  
  //////////////////////////////////////////////////////////
  
                       //Selection sort
  
  function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
      let smaller=i;
      for(let j=i+1;j<arr.length;j++){
        if(arr[smaller]>arr[j]){
          smaller=j;
        }
      }
      //now we will swipe here 
      if(smaller !==i){
        let temp=arr[i];
        arr[i]=arr[smaller];
        arr[smaller]=temp;
      }
    }
    return arr;
  }
  
  let array=[3,55,4,7,2,9];
  
  console.log(selectionSort(array));
  
  //////////////////////////////////////////////////////////
  
                             //sortDateArray
  
  function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
      let smaller=i;
      for(let j=i+1;j<arr.length;j++){
        if(arr[smaller]>arr[j]){
          smaller=j;
        }
      }
      //now we will swipe here 
      if(smaller !==i){
        let temp=arr[i];
        arr[i]=arr[smaller];
        arr[smaller]=temp;
      }
    }
    return arr;
  }
  
  let array=[3,55,4,7,2,9];
  
  console.log(selectionSort(array));
  
  
  //////////////////////////////////////////////////
  
                        //SumZero
  
  function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
      let smaller=i;
      for(let j=i+1;j<arr.length;j++){
        if(arr[smaller]>arr[j]){
          smaller=j;
        }
      }
      //now we will swipe here 
      if(smaller !==i){
        let temp=arr[i];
        arr[i]=arr[smaller];
        arr[smaller]=temp;
      }
    }
    return arr;
  }
  
  let array=[3,55,4,7,2,9];
  
  console.log(selectionSort(array));
  
  //////////////////////////////////////////////////////
  
                   //SwiftNumArray
  
  function rotLeft(a, d) {
      let length = a.length;
      let b=[];
      for (let index in a) {
          let swiftIndex = index - d;
          if (swiftIndex > length) swiftIndex = swiftIndex - length;
          else if (swiftIndex < 0) swiftIndex = swiftIndex + length;
         b[swiftIndex]=a[index];
      }
      return b;
  }
  
  let string=[1,2,3,4,5];
  rotLeft(string,4);
  
  
  /* Now for string we can do use the same logic with some change*/
  
  function rotLeft2(a, d) {
      let length = a.length;
      let b=[];
      for (let key in a) {
          let swiftIndex = key - d;
          if (swiftIndex > length) {
              swiftIndex = swiftIndex - length;
          }
          else if (swiftIndex < 0) {
              swiftIndex = swiftIndex + length;
              console.log(swiftIndex);
             
          }
          b[swiftIndex]=a[key];
      }
      return b.join("");
  }
  
  let string2='abcde';
  rotLeft2(string2,4);
/////////////////////////////////////////////////////////////////////////////////////////////////
Q : find the max number of occurence and print like this = 4 has max occurence 7
let a = [1,2,3,56,12,2,2,4,4,4,4,4,4,3,4];

Answer: function findMaxOccurence (a){
  let obj={};
  let maxNum;
  let maxVal;
  for(let v of a){
    obj[v] = ++obj[v] ||1;
    if(maxVal === undefined || obj[v] > maxVal){
      maxNum= v;
      maxVal= obj[v];
    }
    console.log(maxNum + 'has max value='. maxVal);
  }
 /////////////////////////////////////////////////////////////////////////////////////////////////////
 Q: Pallindrome
  let a= 'gorakhkarog;
  function isPallindrome(s){
    let word= s.toLowerCase();
    let length= word.length-1;
    let isPallindrome= true;
    for(let i=0;i<length/2;i++){
      isPallindrome=false;
      break;
    }
    return isPllindrome;
  }
console.log(isPallindrome(a));
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  Q: contains dublicates or not
  ans: function(arr){
    return num.some((item, i)=> num.indexOf(item)!==i);
  }
  
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  Q: merge two sorted array
  ans: function sort(a,b){
    let arr=[];
    let i=j=0;
    let first=a[i];
    let second=b[j];
    while(first|| second){
      if(!first || first> second){
        arr.push(second);
        j++;
        second=b[j];
      }
      else{
        arr.push(first);
        first= a[i];
        i++
      }
    }
  }
  //////////////////////////////////////////////////
  Q: MAxStock
  ans: function MaxStock(stock){
    let minPrice= stock[0];
    let maxDiff= stock[1] - stock[0];
    for(let v=0;v< stock.length;i++){
      let diff= stock[v+1] - stock[v];
      let m2= Math.max(diff, maxDiff);
      if(m2> maxDiff){
        minPrice= Math.min(stock[v],minPrice);
        maxDiff=stock[v+1];
      }
    }
    console.log(minPrice, maxDiff);
  }
  
