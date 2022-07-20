console.log("I am in functions.js");

////How to Understand Callbacks & Higher Order Functions (FULL VIDEO Parts 1-4)
//https://www.youtube.com/watch?v=viQz4nUUnpw

var sqare10=document.getElementById('sqare10');

sqare10.style.border="3px solid blue";
sqare10.style.padding="1em";

function squareFunc(){
  console.log("10*10 is : " , 10*10);
  return 10*10;
}

sqare10.innerText=squareFunc();
//////////////////////////////////////////////////////////////////////////////////////

var funcCreated=document.getElementById('funcCreated');

console.log("funcCreated is: " , funcCreated);
funcCreated.style.border="3px dotted MediumSlateBlue";
funcCreated.style.padding="1em";
//reusable function
function createNum(a){
  console.log("this function creates innerText");
  return funcCreated.innerText=a * a;
}
//apel functie
createNum(30);
createNum(70);
///////////////////////////////

function copyArrayAndMultiplyBy2(array){
  let output=[];

  for(let i=0 ; i<array.length ;i++){
      output.push( array[i] * 2);
  }
  return output;
}

const myArray=[1 , 2 , 3 , 4 , 5];
console.log("myArray is: " , myArray);
let result=copyArrayAndMultiplyBy2(myArray);
console.log("result is: " , result);

//
var allLiFunc=document.querySelectorAll(".textFromFunction");
console.log("allLiFunc is : " , allLiFunc);
console.log("allLiFunc.length is : " , allLiFunc.length);

for(let i=0 ; i<allLiFunc.length ; i++){
  console.log("each li");
  let k= i + 1;
      allLiFunc[i].innerText=k;
      console.log("each li innerText");
    allLiFunc[i].style.border="3px solid red";
      allLiFunc[i].style.margin="1em";
      allLiFunc[i].style.textAlign="center";
}
///////////////////////

function copyArrayAndDevideBy2(array){
  let output=[];

  for(let i=0 ; i<array.length ;i++){
      output.push( array[i] / 2);
  }
  return output;
}

const myArray2=[1 , 2 , 3 , 4 , 5];
console.log("myArray2 is: " , myArray2);
let result2=copyArrayAndDevideBy2(myArray2);
console.log("result2 is: " , result2);

/////////////////////////////////////////////////////////////////

function copyArrayAndAdd3(array){
  let output=[];

  for(let i=0 ; i<array.length ;i++){
      output.push( array[i] + 3);
  }
  return output;
}

const myArray3=[1 , 2 , 3 , 4 , 5];
console.log("myArray3 is: " , myArray3);
let result3=copyArrayAndAdd3(myArray3);
console.log("result3 is: " , result3);

////////////////////
function copyArrayAndSubtraction7(array ,Subtraction7Function){
  let output=[];
  for(let i=0 ; i<array.length;i++){
    output.push(array[i] - 7);
  }
  return output;
}

const myArray4=[1 , 2 , 3 , 4 , 5];
console.log("myArray4 is: " , myArray4);
let result4=copyArrayAndSubtraction7(myArray4);
console.log("result4 is: " , result4);

//what principle are we breaking  ?

//we could generalize our function so that we pass in our specific instruction only when we run the copyArrayAndManipulate function
//the callback functions sunt chemate pe rand(ca parametru real) in functia copyArrayAndManipulate in locul parametrului formal instructionFunction
function multiplyBy2(input){
  return input * 2;
}
/////////////

function divideBy2(input){
  return input / 2;
}
//////////////////////

function Add3(input){
  return input + 3;
}

function Subtraction7(input){
  return input - 7;
}

////////////the copyArrayAndManipulate function is a heigher-order function , is a hoast function pt ca primeste in ea alte functii callback
function copyArrayAndManipulate(array , instructionFunction){
  console.log("functia se executa pt diferite instructiuni");

let output=[];

for(let i=0 ; i<array.length ; i++){
  output.push(instructionFunction(array[i]));
}
  return output;
}

let resultMultiply=copyArrayAndManipulate([1 , 2 , 3 , 4 , 5] , multiplyBy2);
console.log("resultMultiply is : " , resultMultiply);
/////////
let resultDevide=copyArrayAndManipulate([1 , 2 , 3 , 4 , 5] , divideBy2);
console.log("resultDevide is : " , resultDevide);
//////////////
let resultAdd3=copyArrayAndManipulate([1 , 2 , 3 , 4 , 5] , Add3);
console.log("resultAdd3 is : " , resultAdd3);

//////////////
let resultSubtraction7=copyArrayAndManipulate([1 , 2 , 3 , 4 , 5] , Subtraction7);
console.log("resultSubtraction7 is : " , resultSubtraction7);

//https://www.youtube.com/watch?v=viQz4nUUnpw   How to Understand Callbacks & Higher Order Functions (FULL VIDEO Parts 1-4)

//how was that possible?

//Functions in javascript=first class objects

//they can co-exist with and can be treated like any other javascript object
//1. assignrd to variables and properties for other objects
//2.passed as arguments into Functions//3.returned as values from functions


//the function we pass in is a callback functions//the outer function that takes in the function (our callback) is a heigher-order function

//the callbacks and heiger order functions allow us to run asynchronous code




//
//JavaScript The Hard Parts: Object Oriented Programming   https://www.youtube.com/watch?v=aAAS9cEuFYI
//JavaScript the Hard Parts: Asynchronous JavaScript       https://www.youtube.com/watch?v=xTjx3q2Nm1w
