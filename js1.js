// VARIABLE AND DATATYPES
// ------------------
var express = require('express'); // what its doing ? ans : it is importing the express module. 
var app = express();    // creating an instance of the express server.
var bodyParser = require("body-parser");
console.log("RAGHAV")
fname="Raghav";
console.log(fname);
let myname="Raghav"; //use this convention
console.log(myname);
typeof myname; //return string
let x ;
typeof x; //return undefined 
//objects is a collection of value 
//student have name (string) , nummer (marks )
// key:value
// object declared with const
const student ={
    fullname : "Raghav Gandhi" ,
    age : 20

} 
console.log(student.fullname + "is "+ student.age+ " years old");
//accessing the property using dot operator
//student["fullname"]
//addition of two properties in an object
student["fullname"];
//access obejct  fullname=key
//obj.key   
//obj["key"]
//console.log(obj.key)
//console.log(obj["key"])
//to change the variable  we use let or var and we inside object  we can also do it by using []
//student ["fullname"] ="Raghav Sharma";
//console.log(student.fullname);
//for adding new element to existing object we should  

//Q1 create a const obect called product to store the information
//of a product .It should contain title,price and description

//OPERATORS AND CONDIIONAL STATEMNT
//Operators
//Arithmetic  operators
//modulus , exponentaition,increamnet,decrement 
let  a =5;
let b =3 ;
console.log("a+b" , a+b);                        // addition
console.log(a-b);                         // substraction
console.log(a*b);                          // multiplication
console.log(a/b);                           // division
console.log(a%b);                            // modulus i.e remainder after division
console.log(a**b);                          // exponentiation
++a                                       // increment ++a
--a                                      // decrement --a
console.log(a++)                             // post increment   a++ then print a
console.log(a--)                              //post decrement a-- then print a
//Assignment operator
// =, +=,-=, *= /= %= **= <<= >>= >>>= &= ^= |= "<<=" is used for bitwise left shift operation"

//Logical Operator
//&& (AND), || (OR), ! (NOT)
// console.log(true && true );               // output will be true
// console.log(false && false )                //output will be false
// console.log(true || false )                 //output will be true
// console.log(!true)                          //output will be false
//Equality operator
// == vs === , != vs !==
// console.log(5=='5')                     //output will be true because js convert data type of operands while comparing       
//comparison operators
//equal to , not equal to , greater than , less than , greater than equal to ,
//comparison operators < > == != === !==
//----------------------

// CONDITIONAL STATEMNTS 
/* if else statement */
let age=24;
if(age>18)
{
    console.log('You are an adult'); 

} 
else 
{
     console.log('you are a minor');
}
// Ternary operator
let AGE =9 ;
 let result = AGE>18?"adult" : "not adult" ; 
console.log (result); // output  will be adult as the expression AGE>1

/* switch case statement */ 
switch(AGE){    
    case 18:
        console.log("You are eligible for voting");
        break;
        case 16:
            console.log("You can start driving ")
         default:
             console.log("Invalid Age")
 }  




/*4.Which of the following elements in HTML5 defines video or movie content?
(1 Point)

<video>

<movie>

<audio>

<media>
ANSWER 4 is  <video> reason :Because it is used to embed video content on web pages.

5.Which of the following are the CSS Extension Prefixes for Webkit?
(1 Point)

-chrome

-web

-o-

-webkit
ANSWER -webkit because it stands for "WebKit" which was originally a C++ library that powers Google Chrome browser

6.Which of the following is the property that is triggered in response to JS errors?
(1 Point)

onclick

onerror

onmessage

onexception
Answer : onerror because this event occurs when an error occurs while a script is executing.


7.Which of the following CSS property is used to make the text bold?
(1 Point)

text-decoration: bold

font-weight: bold

font-style: bold

text-align: bold

Answer : font-weight: bold because  this property makes the text bold.

8.Which of the following is the correct syntax to link an external style sheet in the HTML file?
(1 Point)

<link rel=”stylesheet” href=”style.css” />

<link rel=”stylesheet” src=”style.css” />

<style rel=”stylesheet” src=”style.css” />

<style rel=”stylesheet” link=”style.css” />

ANswer  : <link rel="stylesheet" href="style.css"> This is the correct syntax to link an external style sheet in the HTML file.

9.Among the following, which is the HTML paragraph tag?
(1 Point)

<p>

<pre>

<hr>

<a>
answer is  <p> </p>

10.Which of the following HTML tag is used to create an unordered list?
(1 Point)

<ol>

<ul>

<li>

<ll>
Answer   is <ul></ul>  how  to use ul for creating an unordered list</s> 

11.What is CSS?
(1 Point)

CSS is a style sheet language

CSS is designed to separate the presentation and content, including layout, colors, and fonts

CSS is the language used to style the HTML documents

All of the mentioned
ANSWER   IS: CSS is the language used to style the HTML documents 

12.What is the basic difference between JavaScript and Java?
(1 Point)

Functions are considered as fields

Functions are values, and there is no hard distinction between methods and fields

Variables are specific

There is no difference
13.Which of the following tag is used to embed css in html page?
(1 Point)

<css>

<!DOCTYPE html>

<script>

<style>
14.Which of the following can be used to call a JavaScript Code Snippet?
(1 Point)

Function/Method

Preprocessor

Triggering Event

RMI
15.Which of the following CSS selectors are used to specify a group of elements?
(1 Point)

tag

id

class

both class and tag
16.What will be the output of the following JavaScript code?

function printArray(a)  {      var len = a.length, i = 0;      if (len == 0)         console.log("Empty Array");      else       { // do-while loop in javascript          do           {              console.log(a[i]);          } while (++i < len);      } }


(1 Point)

Prints “Empty Array”

Prints 0 to the length of the array

Prints the numbers in the array in order

Prints the numbers in the array in the reverse order
17.What is DOM in HTML?
(1 Point)

Language dependent application programming

Hierarchy of objects in ASP.NET

Application programming interface

Convention for representing and interacting with objects in html documents
18. What will be the output of the following JavaScript function?

<p id="demo"></p> <script> function javascript()  { // javacript abs() method     document.getElementById("demo").innerHTML = Math.abs(-7.25); } </script>



(1 Point)

-7.25

7.25

-7

7
19.Which of the following CSS selector is used to specify a rule to bind a particular unique element?
(1 Point)

tag

id

class

both class and tag
20.Why JavaScript Engine is needed?
(1 Point)

Both Compiling & Interpreting the JavaScript

Parsing the javascript

Interpreting the JavaScript

Compiling the JavaScript
21.Which of the following CSS framework is used to create a responsive design?
(1 Point)

django

rails

larawell

bootstrap
22.Which of the following object is the main entry point to all client-side JavaScript features and APIs?
(1 Point)

Position

Window

Standard

Location
23. In which part of the HTML metadata is contained?
(1 Point)

head tag

title tag

html tag

body tag
24.Which of the following is used to read an HTML page and render it?
(1 Point)

Web server

Web network

Web browser

Web matrix
25.Where is Client-side JavaScript code is embedded within HTML documents?
(1 Point)

A URL that uses the special javascript:code

A URL that uses the special javascript:protocol

A URL that uses the special javascript:encoding

A URL that uses the special javascript:stack
26.Which of the following has introduced text, list, box, margin, border, color, and background properties?
(1 Point)

HTML

PHP

CSS

Ajax
27.Where is Client-side JavaScript code is embedded within HTML documents?
(1 Point)

A URL that uses the special javascript:code

A URL that uses the special javascript:protocol

A URL that uses the special javascript:encoding

A URL that uses the special javascript:stack
28.Which of the following CSS style property is used to specify an italic text?
(1 Point)

style

font

font-style

@font-face
29.Which of the following function defines a linear gradient as a CSS image?
(1 Point)

gradient()

linear-gradient()

grayscale()

image()
30.Which of the following CSS property sets the shadow for a box element?
(1 Point)

set-shadow

box-shadow

shadow

canvas-shadow
31.Which of the following CSS property specifies the look and design of an outline?
(1 Point)

outline-style

outline-format

outline-font

none of the mentioned
32. What is the correct syntax of doctype in HTML5?
(1 Point)

</doctype html>

<////doctype html>

<doctype html!>

<!doctype html>
33.Which of the following is not the property of the CSS box model?
(1 Point)

margin

color

width

height
34.Which of the following CSS property can be used to set the image as a border instead of the border style?
(1 Point)

background-image-source

background-image

border-image-source

border-image
35.Will the following JavaScript code work?

var js = (function(x) {return x*x;}(10));

(1 Point)

Exception will be thrown

Memory leak

Error

Yes, perfectly
36.What will be the output of the following JavaScript code?

function height() {	     var  height = 123.56;     var type = (height>=190) ? "tall" : "short";     return type; }


(1 Point)

short

123.56

tall

190
37.Which of the following scoping type does JavaScript use?
(1 Point)

Sequential

Segmental

Lexical

Literal
38.Consider the following JavaScript statement containing regular expressions and check if the pattern matches.

var text = "testing: 1, 2, 3";  var pattern = /d+/g;
(1 Point)

text.check(pattern)

pattern.test(text)

text.equals(pattern)

text==pattern*/





// Loops and strings 
for ( let i =1  ;i<=5 ;i++)  {
    console.log ("The value of I is:" + i );
} // output  will be The value of I is: 1, The value of I is: 2,  The value of I is: 3, The value of I is: 4, 

