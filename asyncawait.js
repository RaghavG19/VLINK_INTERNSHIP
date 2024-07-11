//ASYNCH WAIT
    //Defination
        // Async and Await in JavaScript are powerful keywords used to handle asynchronous operations with promises.
        // Async functions implicitly return promises, while Await pauses the execution until the promise is resolved. 
        //This simplifies asynchronous code and enhances readability by making it appear synchronous.

    // Asynch Function 
        //  Async Function
        // The async function allows us to write promise-based code as if it were synchronous.
        //This ensures that the execution thread is not blocked.

        // Promise Handling: Async functions always return a promise. If a value is returned that is not a promise,
        // JavaScript automatically wraps it in a resolved promise.
        // Async Syntax
        async function myFunction() {
        return "Hello";
        }


        const getData = async () => {
            let data = "Hello World";
            return data;
        }
        
        getData().then(data => console.log(data));
    // Await Key Word
        // The await keyword is used to wait for a promise to resolve. It can only be used within an async block.
        // Execution Pause: Await makes the code wait until the promise returns a result, allowing for cleaner and
        // more manageable asynchronous code.
        //The await keyword can only be used inside an async function.
        // Syntax
        // let value = await promise;
        const getData1= async () => {
            let y = await "Hello World";
            console.log(y);
        }
        
        console.log(1);
        getData();
        console.log(2);
        // Output
        // 1
        // 2
        // Hello World

        // The async keyword transforms a regular JavaScript function into an asynchronous function, causing it to 
        //return a Promise.
        // The await keyword is used inside an async function to pause its execution and wait
        // for a Promise to resolve before continuing.
        // The code runs console.log(1) first.
        // Then it calls the getData function, but pauses when it hits await.
        // While paused, console.log(2) runs.
        // Finally, getData resumes and prints "Hello World".