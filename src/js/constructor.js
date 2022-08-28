console.log("constructor.js file");
//https://www.codegrepper.com/search.php?q=constructor
//https://www.w3schools.com/js/js_object_constructors.asp

//https://www.programiz.com/javascript/constructor-function

//In JavaScript, a constructor function is used to create objects. For example,

// constructor function
function Person1 () {
    this.name = 'Ana Maria',
    this.age = 40
}

// create an object
const person1 = new Person1();
console.log("--- person1 object created by constructor function is : " , person1);//Person1 {name: 'Ana Maria', age: 40}
console.log("person1.name is : " , person1.name);

const personX=new Person1();
console.log("--- personX is : " , personX);//--- personX is :  Person1 {name: 'Ana Maria', age: 40}
console.log("personX.name is : " , personX.name);



































//
