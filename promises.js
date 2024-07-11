// PROMISES
    //Defination
        //Promises provide a cleaner, more manageable way to handle asynchronous operations,
        // allowing chaining of asynchronous tasks and easier error handling.

    // Creating
    let operationWasSuccessful = true; // this should be your actual condition

    let promise = new Promise(function(resolve, reject) {
        if (operationWasSuccessful) {
            resolve("Success!");   // fulfill the promise
        } else {
            reject("Failure!");   // reject the promise
        }
    });
    
    promise.then(function(result) {
        console.log(result); // logs "Success!" if operation was successful
    }).catch(function(error) {
        console.error(error); // logs "Failure!" if operation was not successful
    });
    
        // The Promise constructor takes a function as an argument.
        // This function is called an executor function, and it is invoked immediately by the Promise constructor.
        // The executor function is passed two arguments: resolve and reject.
        // The executor function is responsible for producing the result of the promise.
        // If the result is available immediately, the executor function can call resolve with the result.
        // If an error occurs while computing the result, the executor function can call reject with the error as an argument.
        // When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:
        // resolve(value) — if the job is finished successfully, with result value.
        // reject(error) — if an error has occurred, error is the error object.
            


    //Question:

        // Imagine you are a top singer and you have a list of fans eagerly waiting for your upcoming song. 
        //You decide to send them the song when it is ready. Write a JavaScript program using Promises to simulate this scenario.

        // Create a Promise called songPromise that simulates the production of the song. Use setTimeout to mimic a delay of 2 seconds. 
        //If the production is successful, resolve the Promise with a message "The song is ready!". 
        //If it fails, reject the Promise with a message "There was an error producing the song.".
        // Subscribe to the Promise using .then(), .catch(), and .finally() methods to handle the successful production,
        // failure, and completion of the song production process, respectively.

        // The output should be:
        // If successful: "The song is ready!" followed by "Song production process is complete."
        // If failed: "There was an error producing the song." followed by "Song production process is complete."

    // Solution 
        const songPromise = new Promise(function(resolve, reject) {
            // Simulate producing the song
            setTimeout(function() {
                const success = true; // Simulate the condition for success or failure
                if (success) {
                    resolve("The song is ready!"); // The song is ready
                } else {
                    reject("There was an error producing the song."); // Something went wrong
                }
            }, 2000); // Simulate a delay
        });
        
        songPromise
            .then(function(message) {
                console.log(message); // "The song is ready!"  //then method takes up to two arguments: callback functions for the fulfilled and rejected cases.
            })
            .catch(function(error) {
                console.error(error); // "There was an error producing the song." // The catch method is a shorthand for then with only a rejection handler.
            })
            .finally(function() {
                console.log("Song production process is complete."); // Always executed
            }); // The finally method executes a callback once the promise is settled, regardless of its outcome.
                // Working 
                // set time out being executed after 2 sec if condintion is checcked resolve call back is called 
                //passing string parameter to then printing message 
                //Output
                // The song is ready!
                // Song production process is complete.

    // Chaining Promises
        // You can chain multiple promises together by using the .then() method.
        // The .then() method returns a new promise, which you can use to chain another .
        //then() method to it. This allows you to create a chain of promises that are executed
        // sequentially, with each promise depending on the previous one.
        function fetchUserData(userId) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const userData = {
                        id: userId,
                        username: 'john_doe',
                        email: 'john.doe@example.com'
                    };
                    resolve(userData); // Simulate fetching user data
                }, 1000); // Simulate delay
            });
        }
        
        function fetchUserPosts(userId) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const posts = [
                        { id: 1, title: 'Post 1' },
                        { id: 2, title: 'Post 2' }
                    ];
                    resolve(posts); // Simulate fetching user posts
                }, 1500); // Simulate delay
            });
        }
        
        fetchUserData(123)
            .then(user => {
                console.log('User data:', user);
                return fetchUserPosts(user.id); // Chain to fetch posts
            })
            .then(posts => {
                console.log('User posts:', posts);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        
