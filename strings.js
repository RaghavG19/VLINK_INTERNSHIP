// STRINGS
//They are one of the primitive data types in JavaScript 
//and are used extensively for representing and manipulating textual data
//Strings are immutable, which means that once a string is created, it cannot be changed.
//Strings are created using single or double quotes.
//example
let str = "Hello World!"; // single quotes
let str2 = 'Hello World!'; // double quotes

// Creating string 
// By string literal
var sl="This is string literal";  
// By new keyword
var sn = new String("This is string object");
// By constructor
var sc = String("This is string constructor");

//String Length
// //The length of a string is found
// with the built-in length property
var txt = "windows";
var len = txt.length; 
// output 7


// String Methods
// The String object has a number of built-in methods that are used to manipulate the string.

// 1.CharAt(index)
// The charAt() method returns the character at the specified index.
console.log(str.charAt(1)); // Output: "e"

// 2. Concat
// The concat() method concatenates (joins) two or more strings.
// This method does not change the existing strings, but returns a new string containing the text of the
// two strings.
console.log(str.concat(" ", txt)); 
// Output: "Hello World! windows"

// 3. indexOf(searchValue, startIndex)
// The indexOf() method returns the position of the first occurrence of a specified value in a string.
// This method returns -1 if the value to search for never occurs.
console.log(str.indexOf("o")); // Output: 4
console.log(str.indexOf("o", 5)); // Output: 7
console.log(str.indexOf("a")); // Output: -1

// 4. replace(searchValue, replaceValue)
// The replace() method replaces a specified value with another value in a string.
// This method returns a new string with the replacement done, leaving the original string unchanged.
console.log(str.replace("World", "Everyone")); // Output: "Hello Everyone!"
console.log(str); // Output: "Hello World!" 

// 5. slice(start, end)
// The slice() method extracts a part of a string and returns a new string.
// This method returns the characters in a string between "start" and "end", not including "end" itself.
console.log(str.slice(3, 9)); // Output: "lo Wo"
console.log(str.slice(-6, -1)); // Output: "rld!"

// 6.substring
// The substring() method returns a subset of a string.
// The substring() method returns the characters in a string between "start" and "end", not including "end" itself.
console.log(str.substring(3, 9)); // Output: "lo Wo"
console.log(str.substring(-6, -1)); // Output: "rld!"

// 7. Touppercase
// The toUpperCase() method converts a string to uppercase letters.
console.log(str.toUpperCase()); // Output: "HELLO WORLD!"
console.log(str); // Output: "Hello World!"

// 8. to lowercase
// The toLowerCase() method converts a string to lowercase letters.
console.log(str.toLowerCase()); // Output: "hello world!"
console.log(str); // Output: "Hello World!"

// 9. trim()
// The trim() method removes whitespace from both sides of a string.
console.log(str.trim()); // Output: "Hello World!"



 







