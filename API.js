// API Application Programming Interface
// API helps two programs or applications to communicate with each other by providing them with the necessary tools and functions. 
//It takes the request from the user and sends it to the service provider and then again sends the result generated
// from the service provider to the desired user.

// All web services are APIs, but not all APIs are web services
// API is a set of functions and procedures that allow the creation of applications which access the features or
// data of an operating system, application, or other service.

// FETCH API
// Fetch API is a modern web API that allows us to make HTTP requests to a server. 
// It is a promise-based API, which means that it returns a promise that resolves to the response
// of the HTTP request. Fetch API is supported by all modern browsers, including Chrome, Firefox,
// Safari, and Edge. It is a part of the WHATWG (Web Hypertext Application Technology  Working Group) specification, which is a living standard that is constantly evolving and improving.



const URL = "https://cat-fact.herokuapp.com/facts"; // DUMMY API 

const getFacts = async () => {
  console.log("Getting data...");
  try {
    let response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    let data = await response.json();
    console.log(data); // Log the fetched data
    displayFacts(data); // Pass data to display function
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const displayFacts = (facts) => {
  const factsContainer = document.getElementById('cat-facts');
  facts.forEach(fact => {
    const factElement = document.createElement('p');
    factElement.textContent = fact.text;
    factsContainer.appendChild(factElement);
  });
};

// Call the function to fetch and display facts
getFacts();

// It uses Request and Response Object
// Request Object: It is used to create a request object that contains the details of the request,
// such as the URL, method, headers, and body. It is created using the new Request
// constructor and takes the URL and options as arguments. The options object can contain the method, headers
// , body, and other details of the request. The request object can be used to make the
// HTTP request using the fetch() method.

// Response Object: It is used to create a response object that contains the details of the response,
// such as the status code, headers, and body. It is created using the new Response constructor
// and takes the response body and headers as arguments. The response object can be used to access the
// response data using the json() method or the text() method.



// GET: Used to retrieve data from a server.
// POST: Sends data to the server to create a new resource.
// PUT: Updates an existing resource on the server.
// DELETE: Deletes a resource on the server.
// HEAD: Retrieves headers from a server for a given resource.
// OPTIONS: Describes the communication options for the target resource.
// PATCH: Applies partial modifications to a resource.

