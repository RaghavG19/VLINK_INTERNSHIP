// Some of the Issues with RDBMS were:

// Scalability:
// 	 Difficult to scale millions of millions of data.
// 	Data stored in multiple tables is difficult to scale.

// 2. Flexibility:
// 	Fixed Data Structure are difficult to modify.
// 	Spending hours on designing database before development.
// 	Requires constant restructuring. 

//     MongoDB is a popular open-source NoSQL database known for its high performance, high availability, and easy scalability. 

//     It uses a document-oriented data model, and stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time. 
//     Key Features of MongoDB:

//     Document-Oriented Storage (Flexible Schema): Unlike relational databases, MongoDB allows you to have a flexible schema. This means that the structure of documents can change over time, and similar data can be stored in different ways.
    
//     Data Format: MongoDB stores data in BSON format (Binary JSON) which extends the JSON model to provide additional data types, ordered fields, and efficiency in encoding and decoding within different languages.
    
//     Horizontal Scalability: MongoDB can handle large volumes of data by distributing data across multiple machines through a process known as sharding.
    
//     4. Replication: MongoDB provides high availability with replica sets, that maintain the same data set. Replica sets provide redundancy and increase data availability.

//     5. Rich Query Language: MongoDB supports a rich query language that allows you to filter and sort by fields within documents, supporting both simple queries and complex aggregations.
    
//     6. Aggregation Framework: MongoDB provides an aggregation framework that allows you to perform complex data analysis and transformation directly in the database. This can be particularly useful for operations like data summarization, transaction grouping, or calculating averages.

//     Managing Database Connections, and Performing basic operations 
//     Managing database connections and performing basic operations in Node.js with MongoDB is typically handled using the official MongoDB Node.js driver. 

//     This setup allows you to interact with your MongoDB database using JavaScript, which is a natural fit for Node.js applications.
    