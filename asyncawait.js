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
        // Syntax
        // let value = await promise;
        