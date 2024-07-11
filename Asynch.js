// Synchronous Programming
    // Definition:
        // Synchronous programming, also known as blocking or sequential programming, executes tasks in a predetermined order,
        // where each operation waits for the previous one to complete before proceeding.

    // Characteristics:

        // Sequential Execution: Tasks are performed one after another.
        // Blocking: Each operation waits until the previous one is completed, leading to potential delays if an operation takes a long time.

    // Advantages:

        // Simplicity: Straightforward and easier to implement. The execution flow is easy to follow and understand.
        // Ease of Debugging: Linear flow means fewer concurrency issues like race conditions or deadlocks.
        // Predictability: Ensures tasks are executed in a predictable order, which can be crucial for tasks requiring strict sequencing.

    // Disadvantages:

        // Inefficiency with I/O Operations: Can be inefficient for I/O-bound tasks, as operations like file reading
        // or network requests can block the entire thread until completion.
        // Reduced Responsiveness: Applications may become unresponsive if they involve time-consuming operations.




// Asynchronous Programming
    // Definition:
        // Asynchronous programming allows tasks to execute independently of one another, enabling concurrent execution and 
        //improved performance. Unlike synchronous programming, where each task waits for the previous one to complete,
        // asynchronous tasks can run concurrently.

    // Characteristics:

        // Concurrent Execution: Tasks can run concurrently, without waiting for each other to complete.
        // Non-Blocking: Operations can start and continue while waiting for other operations to complete.

    // Advantages:

        // Concurrency: Allows multiple tasks to run concurrently, improving performance and resource utilization, 
        //especially in I/O-bound and high-latency operations.
        // Responsiveness: Keeps applications responsive, which is important for user interfaces and real-time systems.
        // Scalability: Can handle a larger number of simultaneous operations, making it ideal 
        //for scalable web servers and networked applications.

    // Disadvantages:
        // Complexity: Implementing async code is more complex, requiring careful management of 
        //concurrency, which can lead to harder-to-find bugs and more challenging debugging processes.
        // Callback Hell: Nested callbacks can lead to difficult-to-read and maintain code.
    
    console.log("One");
    setTimeout(() => {
        console.log("Two");
        }, 4000);
    console.log("Three");
    // Output: One, Three, Two 
    // Explanation: The console.log("One") statement is executed first, followed by the console.log
    //("Three") statement. The setTimeout() function is executed after 4 seconds, resulting in
    //the console.log("Two") statement being executed last.


// Asynchronous Achieved
// 1. Callbacks
// 2. Promises
// 3. Async/Await
// 4. API

// 1.Callbacks
        // Definition
            // A callback is a function passed into another function as an argument, which is then invoked
            // inside the outer function to complete some kind of routine or action. 
    
    // Syntax
    function outerFunction(callback) {
        // BODY
        callback();
        }
        function innerFunction() {
            // BODY
            }

    
    function callbackFunction() {
        console.log("Callback executed");
    }

    function higherOrderFunction(callback) {
        console.log("Higher-order function starts");
        callback(); // Execute the callback function
        console.log("Higher-order function ends");
    }

    // Using the callback
    higherOrderFunction(callbackFunction);
    
    // output
        // Higher-order function starts
        // Callback executed
        // Higher-order function ends

    // Explanation:
        // The higherOrderFunction() function takes a callback function as an argument and
        //executes it inside the function. The callback function is executed after the higherOrderFunction()
        //function has started and ended, resulting in the output "Higher-order function starts", "Callback
        //executed", and "Higher-order function ends".

        function asyncOperation(callback) {
            console.log("Async operation started");
            setTimeout(function() {
                callback("Data received from async operation");
            }, 2000); // Simulating a delay of 2 seconds
        }
        
        function callbackFunction(data) {
            console.log("Callback executed with data:", data);
        }
        
        // Calling the async operation with a callback
        asyncOperation(callbackFunction);
        
        console.log("Main program continues to execute...");

        // Async operation started
        // Main program continues to execute...
        // Callback executed with data: Data received from async operation

        // Execution Flow:

        // asyncOperation(callbackFunction); initiates the asynchronous operation.
        // "Async operation started" is logged immediately.
        // The program continues executing (console.log("Main program continues to execute...");).
        // After 2 seconds, the callback function callbackFunction is executed with the data "Data received from async operation".
        // "Callback executed with data: Data received from async operation" is logged.
    
    // Callback Hell
    // The following code demonstrates a common problem with callbacks: callback hell.
    // In this code, we have a function that makes an asynchronous request to a server and then
    // calls a callback function with the response data. The problem is that the callback function
    // is nested inside the asynchronous request, which makes the code difficult to read and
    // maintain.
    asyncOperation1(function(result1) {
        asyncOperation2(result1, function(result2) {
            asyncOperation3(result2, function(result3) {
                // Further nesting continues...
            });
        });
    });
    
        

