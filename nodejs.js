// Node js
//Node.js is an open-source, cross platform JavaScript runtime environment that is built on Chrome's V8 JavaScript engine

// Why node js
//1. Asynchronous programming-
//2. Fast executio with V8 engine
//3. NPM
//4. Crossplatform
//5. Scalabale
//6. Event driven
//7. Single threaded

// Node JS = Runtime environemnt + Js library

// What Node.js can do?
// • Node.js can generate dynamic page content.
// • Node.js can create, open, read, write, delete, and close files on the server.
// • Node.js can collect form data.
// • Node.js can perform CRUD operations on your database.

// Datatypes in Node.js
// Node.js contains various types of data types similar to JavaScript.
// Boolean
// Undefined
// Null
// String
// Number
//We use the var and let keywords in Node.js declare any type of variable.

var http = require('http');

http.createServer(function (req, res) {
  res.write('Hello World!');
  res.end();
}).listen(8082, function() {
  console.log('Server listening on port 8082');
});

// Node js modules
//1. Core Modules
//2. Local Modules
//3. Third Party Modules
 

// File System Module
// The Node.js fs (File System) module is a key part of the Node.js API, providing a wide array of functionalities to 
//interact with the file system on a computer. 
// This module can be used for reading from and writing to files, as well as handling directories, streams,
// and more, directly from Node.js scripts.
// Before you can use the fs module in your Node.js application, you need to import it. This is typically done using the require function.
// var fs = require('fs');

// Common use for the File System module:
// 1. Read files
// 2. Create files
// 3. Update files
// 4. Delete files
// 5. Rename files

// Synchronous approach: 
//They are called blocking functions as it waits for each operation to complete, only after that, it executes the next operation, 
//hence blocking the next command from execution.

// Asynchronous approach: 
//They are called non-blocking functions as it never waits for each operation to complete, rather it executes all operations
//in the first go itself. The result of each operation will be handled once the result is available i.e. each command 
//will be executed soon after the execution of the previous command. 

// OPEN A FILE
// The fs.open() method opens a file and returns a file descriptor.
// fs.open(path, flags[, mode], callback)

// Parameters
// path - string having file name including path.
// flags - Flag tells the behavior of the file to be opened. 
// mode - This sets the file mode permission. It defaults to 0666, readable and writeable.
// callback - This is the callback function which gets two arguments err, fd.
// r 	Open file for reading. An exception occurs if the file does not exist.
// r+ 	Open file for reading and writing. An exception occurs if the file does not exist.
// rs 	Open file for reading in synchronous mode.
// rs+ 	Open file for reading and writing, telling the OS to open it synchronously. 
// w 	Open file for writing. The file is created if it does not exist or truncated if it exists.
// wx 	Like 'w' but fails if path exists.
// w+ 	Open file for reading and writing. The file is created if it does not exist or truncated if it exists.
// wx+ 	Like 'w+' but fails if path exists.
// a 	Open file for appending. The file is created if it does not exist.
// ax 	Like 'a' but fails if path exists.
// a+ 	Open file for reading and appending. The file is created if it does not exist.
var fs = require("fs");

console.log("Opening file!");
fs.open("D:\\RAGHAV GANDHI\\Vliink\\JS\\DEMO.txt", 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully");	 
});


// READING

//fs.read(fd, buffer, offset, length, position, callback)

//fd - 	This is the file descriptor returned by file fs.open method.
// buffer - This is the buffer that the data will be written to.
// offset - This is the offset in the buffer to start writing at.
// length - This is an integer specifying the number of bytes to read.
// position - This is an integer specifying where to begin reading from in the file. If position is null, data will be read from the current file position.
// callback - This is the callback function which gets the three arguments, err, bytesRead, buffer.
var fs = require("fs");
var buf = Buffer.alloc(512);  // Correct way to create a buffer in recent Node.js versions

console.log("Opening file!");
fs.open("D:\\RAGHAV GANDHI\\Vliink\\JS\\DEMO.txt", 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully!");

    // Read file
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
        if (err){
            console.log(err);
        }
        console.log(bytes + " bytes read");
        
        // Print the content of the buffer as a string
        console.log(buf.slice(0, bytes).toString());
    });
});

// Writing File

// fs.writeFile(filename, data[, options], callback)

// This method will over-write the file if file already exists. 
// path - This is string having file name including path.
// data - This is the String or Buffer to be written into the file.
// options - The third parameter is an object which will hold {encoding, mode, flag}. By default encoding is utf8, mode is octal value 0666 and flag is ‘w’.
// callback - This is the callback function which gets a single parameter err and used to to return error in case of any writing error.

var fs = require("fs");

// File path
var filePath = "D:\\RAGHAV GANDHI\\Vliink\\JS\\DEMO.txt";

// Text to write to the file
var newText = "I am writing using Node.js!";

// Reading previous data
fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log("Previous data:");
        console.log(data);

        // Append new text to existing data
        var newData = data + "\n" + newText;

        // Writing to file
        fs.writeFile(filePath, newData, function(err) {
            if (err) {
                console.error("Error writing file:", err);
            } else {
                console.log("Data written successfully!");

                // Printing new data
                console.log("New data:");
                console.log(newData);
            }
        });
    }
});

// Closing File

// fs.close(fd, callback)

// fd - This is the file descriptor returned by file fs.open method.
// callback - This is the callback function which gets no arguments other than a possible exception are given to the completion callback.






