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


// Creating objects 
// 1 object Literal

const person = {
    firstName: "R",
    lastName: "G",
    age: 20,
    fullName: function() {
      return this.firstName + " " + this.lastName;  //When used inside a method, this refers to the object that owns the method.
     
    }
  }; // if arrow function used no this key word 
  
  console.log(person.firstName); // Output: R
  console.log(person.fullName()); 
  // Output: R G

// 2 Object Constructor
const Person = new Object();
Person.firstName = "R";
Person.lastName = "G";
Person.age = 20;
console.log(Person.firstName); // Output: R
Person.fullname = function(){
    return this.firstName + " " + this.lastName;  
}
console.log(Person.fullName()); // Output: R G

// 3 Constructor Function
function Persons(Fn, LN, Age) {
    this.firstName = Fn;
    this.lastName = LN;
    this.age = Age;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    };
}

const P1 = new Persons("R", "G", 20);
const P2 = new Persons("S", "G", 20);

console.log(P1.fullName() + " Age " + P1.age); 
console.log(P2.fullName() + " Age " + P2.age);

// Adding and Deleting Properties
let car = {
    Brand: "Ford",
    model: "Mustang"
  };
  
  // Adding a new property
  car.year = 1976
  
  // Deleting a property
  delete car.model;
  
  console.log(car); 
  // Output: { make: "Ford", year: 1976 }

// Nested Objects
const company = {
    name: "Vlink",
    address: {
      street: "Phase 5",
      city: "Gurgaon",
      state: "Haryana"
    },
    employees: [
      { name: "Raghav", age: 20 },
      { name: "Shlok", age: 19 }
    ]
  };
  
  console.log(company.address.city); // Output: Gurgaon
  console.log(company.employees[1].name); // Output: Shlok
  
  // Object Methods
  // 1. Object.keys  method returns an array of the object's property names (keys).
  console.log(Object.keys(company)); 
  // Output: ['name', 'address', 'employees']
  
  // 2. Object.values  method returns an array of the object's property values.
  console.log(Object.values(company)); 
  // Output: ['Vlink', { street: 'Phase 5', city: 'Gurgaon', state: 'Haryana' }, [{ name: 'Raghav', age: 20 }, { name: 'Shlok', age: 19 }]]

  // 3. Object.enteries method returns an array of the object's key-value pairs.
  console.log(Object.entries(company)); 
  // Output: [["name", "Vlink"], ["address", { street: "Phase 5", city: "Gurgaon", state: "Haryana" }], ["employees", [{ name: "Raghav", age: 20 }, { name: "Shlok", age: 19 }]]]

  // 4. Obejct.freeze method freezes an object. A frozen object can no longer be changed; it prevents new properties from being added to it, and existing properties from being removed or changed.
  Object.freeze(company);
  // Attempting to modify the frozen object will not have any effect
  company.name = "New Name"; // This will not change the name property
  company.address.city = "New City"; // This will not change the city property
  console.log(company.name); // Output: "Vlink"
  console.log(company.address.city); // Output: "Gurgaon"

  

// Merging Vs Concat Objects
// Merging objects means combining two objects into one. The resulting object will have all the properties of
// both the objects. If there are duplicate properties, the last property will override the previous one. 
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { c: 5, d: 6 };

// Using Object.assign
const merged1 = Object.assign({}, obj1, obj2, obj3);
console.log(merged1); // Output: { a: 1, b: 3, c: 5, d: 6 }

// Using spread operator
const merged2 = { ...obj1, ...obj2, ...obj3 };
console.log(merged2); // Output: { a: 1, b: 3, c: 5, d: 6 }
// Feature	                  Object.assign	                                                    Spread Operator (...)
// Mutates Target Object   	Yes, mutates the target object if it's not an empty object        	No, always creates a new object
// Creates New Object     	Can create a new object if the target is an empty object          	Always creates a new object

 
let employee = [
  { name: "Alice", age: 25, salary: 12000 },
  { name: "Bob", age: 30, salary: 15000 },
  { name: "Charlie", age: 22, salary: 9000 },
  { name: "David", age: 28, salary: 11000 }
];

let filteredEmployees = [];

for (let i = 0; i < employees.length; i++) {
  let employee = employees[i];
  if (employee.salary > 10000 && employee.age > 20) {
      let filteredEmployee = {
          name: employee.name,
          age: employee.age,
          salary: employee.salary
      };
      filteredEmployees.push(filteredEmployee);
  }
}

// Displaying the filtered employees
for (let i = 0; i < filteredEmployees.length; i++) {
  let employee = filteredEmployees[i];
  console.log(`Name: ${employee.name}, Age: ${employee.age}, Salary: ${employee.salary}`);
}



let employe = [
  { name: "Alice", age: 25, salary: 12000 },
  { name: "Bob", age: 30, salary: 15000 },
  { name: "Charlie", age: 22, salary: 9000 },
  { name: "David", age: 28, salary: 11000 }
];

// Using filter, map, and forEach to create an array of employees
// with salary > 10000 and age > 20
let filteredEmployee = employees
  .filter(employee => employee.salary > 10000 && employee.age > 20)
  .map(employee => {
      return {
          name: employee.name,
          age: employee.age,
          salary: employee.salary
      };
  });

// Displaying the filtered employees using forEach
filteredEmployee.forEach(employee => {
  console.log(`Name: ${employee.name}, Age: ${employee.age}, Salary: ${employee.salary}`);
});

// The map method is used to create a new array of objects containing only the properties name, age, and salary of the filtered employees.
//The forEach method iterates over the filteredEmployees array and logs each employee's details to the console.