// Arrays
//JavaScript Arrays are global objects that store data. An array is a collection or list of zero or more data types and contains numbered indices starting with 0.
//An array is a special type of object. The different data types can be stored in an array
//A JavaScript Array is a dynamic, high-level, list-like object used to store ordered collections. Elements can be of any type and are accessed by their index. Arrays in JavaScript are mutable, allowing for operations like adding, removing, and altering elements using built-in methods.


//3 METHODS TO CREATE ARRAY 
//1. Array literal
//2. Array constructor
//3. Array.from() method


//Array literal
//The array literal is the most common way to create an array. It is a comma-separated list
//of values inside square brackets. The values can be of any type, including other arrays.
var emp=["A","B","C"];  
for (i=0;i<emp.length;i++){  
document.write(emp[i] + "<br/>"); }
//Output 
//A 
//B
//C

//Array constructor
//The Array constructor creates an array object. The constructor takes an optional argument that specifies the initial length
//of the array. If the argument is omitted, the initial length is 0.
var emp=new Array("A","B","C");
for (i=0;i<emp.length;i++){
    document.write(emp[i] + "<br/>"); }
 //Output
    //A
    //B
    //C

   
//Array.from() method
//The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object. 
//This is particularly useful when you need to convert other data structures to arrays, such as NodeList or arguments object.

Array.from()
// Converting a string to an array
var str = "hello";
var arrFromStr = Array.from(str);
console.log(arrFromStr); 
// Output: ['h', 'e', 'l', 'l', 'o']


// Array Methods
//Array methods are used to perform operations on arrays. 

// 1 Concat()
//The concat() method is used to merge two or more arrays. This method does not change the 
//existing arrays, but returns a new array containing the values of the joined arrays.
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let newArray = array1.concat(array2);
console.log(newArray); 
// Output: [1, 2, 3, 4, 5, 6]

// 2 copyWithin()
//The copyWithin() method copies a sequence of array elements within the array.
//The target position (pos) starts at the value of from, and the array elements are copied
//up to (but not including) to. Negative numbers count back from the last element.
let array = [1, 2, 3, 4, 5];
array.copyWithin(0, 3); // Copy elements from index 3 to the start
console.log(array); 
// Output: [4, 5, 3, 4, 5]

// 3 filters()
//The filter() method creates a new array with all elements that pass the test implemented by the provided
//function. The test function is called with each element of the array. If the function returns true
//for an element, the element is included in the new array. If the function returns false,
//the element is not included in the new array.
let Array = [1, 2, 3, 4, 5];
let even = array.filter(x => x % 2 === 0);
console.log(even);
// Output: [2, 4]

// 4 find()
//The find() method returns the value of the first element in the provided array that satisfies the provided    
//testing function. If no values satisfy the testing function, undefined is returned.
let Arrayfind = [1, 2, 3, 4, 5];
let found = array.find(x => x > 3);
console.log(found);
// Output: 4

// 5 Includes()
//The includes() method determines whether an array includes a certain value among its entries, returning true or
//false as appropriate.
let Arrayincludes = [1, 2, 3, 4, 5];
console.log(array.includes(3));
// Output: true
console.log(array.includes(6));
// Output: false

// 6 Join()
//The join() method creates and returns a new string by concatenating all of the elements in an
//array (or an array-like object), separated by commas or a specified separator string. If the
//array has only one item, then that item will be returned without using the separator.
let Arrayjoin = [1, 2, 3, 4, 5];
console.log(array.join());
// Output: 1,2,3,4,5
console.log(array.join(' '));
// Output: 1 2 3 4 5
console.log(array.join("+") );
// Output: 1+2+3+4+5

// 7 Pop
//The pop() method removes the last element from an array and returns that element. This method changes
//the length of the array.
let Arraypop = [1, 2, 3, 4, 5];
console.log(arraypop.pop());
// Output: 5
console.log(arraypop);
// Output: [1, 2, 3, 4]

// 8 Push ()
//The push() method adds one or more elements to the end of an array and returns the new
//length of the array.
let Arraypush = [1, 2, 3, 4, 5];
console.log(arraypush.push(6));
// Output: 6
console.log(arraypush);
// Output: [1, 2, 3, 4, 5, 6 ]



//Q1 Write a function that takes an array of numbers and returns a new array with the numbers in reverse order. java script
function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
    return reversedArr;
  }
  
  // Example usage:
  let numbers = [1, 2, 3, 4, 5];
  let reversedNumbers = reverseArray(numbers);
  console.log(reversedNumbers);
   // Output: [5, 4, 3, 2, 1]


// Q2 Bubble sort
let number = [5, 3, 8, 4, 2];
let n = numbers.length;

for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - 1 - i; j++) {
    if (numbers[j] > numbers[j + 1]) {
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

console.log(numbers); 
// Output: [2, 3, 4, 5, 8]

// Q3 Binary Search
let A = [1, 2, 3, 4, 5];
let target = 3;
let left = 0;
let right = A.length - 1;
let index = -1;

while (left <= right) {
  let mid = left + ((right - left) >> 1);  
  
  if (A[mid] === target) {
    index = mid;
    break;
  } else if (A[mid] < target) {  
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(index); 
// Output: 3
// Function to perform linear search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
          return i; // Return the index of the target element
      }
  }
  return -1; // Return -1 if the target element is not found
}

// Example usage:
const v = [4, 2, 9, 1, 5, 6];
const t = 5;

const i = linearSearch(v, t);
if (i !== -1) {
  console.log(`Element found at index ${i}`); // Output: Element found at index 4
} else {
  console.log('Element not found');
}


// Spread Vs Rest operator Arrays

// Spread operator 
//The spread operator (...) is used to expand elements of an iterable (like an array) 
//or properties of an object into individual elements.

// Merging Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// Copying array
const copiedArray = [...arr1];
console.log(copiedArray); // Output: [1, 2, 3]

//Spread in Function Calls
//The spread operator can be used to pass elements of an array as arguments to a function.
const ex = [1, 2, 3, 5, 6];

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(...ex)); // Output: 6 
// If the array has more than three elements, only the first three elements will be 
//passed to the function, and the remaining elements will be ignored.

// Rest operator
//The rest operator (...) is used to collect elements of an iterable (like an array)
//into a single array element. It is used in function parameters to represent a variable number of arguments
//The rest operator is similar to the spread operator, but it is used in a different context.
//The spread operator is used to expand elements of an iterable into individual elements, while the rest operator
//is used to collect elements of an iterable into a single array element.


// Rest in Function Parameters
//The rest operator can be used to collect all remaining arguments of a function into an array.
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);  // Accumulator  intial 
} // reduce iterates over each element in the array, accumulating the sum

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2, 3, 4, 5)); // Output: 15  

// Accumulator  intial 
// reduce iterates over each element in the array, accumulating the sum
//The reduce method takes a callback function and an initial value (0 in this case)
//The callback function (acc, num) => acc + num adds each element (num) to the accumulator (acc), starting from 0.



// Array Operations: Insertion, Deletion, Updation, Slice, Splice
let arr = [1, 2, 3];

// Insertion
// Inserttion using Push ()

arr.push(4);
console.log(arr); // Output: [1, 2, 3, 4]

// Insertion using Splice ()
arr.splice(2, 0, 3); // (index, deleteCount, item1, item2, ...)
console.log(arr); // Output: [1, 2, 3, 4]

// Deletion 
// Deletion using Pop ()

arr.pop();
console.log(arr);
// Output: [1, 2, 3]
arr.splice(1, 1); // // Remove 1 elements starting from index 1
console.log(arr); 
// Output: [1, 3]
arr.splice(2); // Remove all elements starting from index 2
console.log(arr); 
// Output: [1]

//Updation   
arr[1] = 5;
console.log(arr); 
// Output: [1, 5]
// In JavaScript, when you assign a value to an index in an array that does not
//  currently exist, JavaScript will dynamically expand the array to accommodate the new index.


// filter
// filter() creates a new array with all elements that pass the test implemented by the provided function.
// The filter() method does not execute the function for array elements without values.
// The filter() method does not change the original array.
let num = [1, 2, 3, 4, 5];

let evenNumbers = num.filter(function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]
 
// for each 
// The forEach() method calls a function once for each array element.
// The forEach() method does not have an index parameter.
// The forEach() method does not have a return value.
// The forEach() method does not change the original array.

num.forEach(function(num) {
  console.log(num); // Output: 1, 2, 3, 4,
  });

















  



