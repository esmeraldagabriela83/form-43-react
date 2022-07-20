console.log("------------!!!!!!!!!!!!------------------callbacks // I am in functions-and-callbackFunction.js");
//https://www.youtube.com/watch?v=exrc_rLj5iw   An Introduction to Functions, Execution Context and the Call Stack (FULL VIDEO - Parts 1-3)

//What happens when js executes (runs) my code?

const myNum=3;

function multiplyBy3(inputNumber){
  const result=inputNumber * 3;
  return result;
}
//apel functie
multiplyBy3(15);
console.log("multiplyBy3(15) is: " , multiplyBy3(15));

console.log("multiplyBy3(myNum) is: " , multiplyBy3(myNum));

const name="Will";

//as soon as we start running our code  , we create a GLOBAL EXECUTION CONTEXT in which our code will be interpreted
//GLOBAL MEMORY is a place where to store any data , our variables

//-thread of execution (parsing and executing the code line after line)

//-live memory of variables with data (knpwn as a Global Variable Environment)

//the thred in JavaScript:

//-single threaded(one thing at a time)
//-synchronous execution(for now)

////////---------------------------------------------------------------------------------------------------------------------
//Running // calling // invoking a functions//this is not the same as defining a function

function multiplyBy10(inputNumber){
  const result=inputNumber * 10;
  return result;
}

const output15=multiplyBy10(15);
console.log("output15 is : " , output15);

const output25=multiplyBy10(25);
console.log("output25 is : " , output25);

//when you execute a function you create a new execution context comprising:
//1. the thred of execution(we go through the code in the function line by line)
//2. a local memory("variable environment") where anything defined in the function is stored


//objects store data
//functions do stuff with that data

//JavaScript is the tool we use to write instructions to tell our web browser what to do

const myGrades = [50 , 75 , 100];

let sum = 0;

for(let i=0 ; i<myGrades.length ;i++){
   sum=sum + myGrades[i];
   console.log("sum from inside for loop is : " , sum);
}

let average=sum/myGrades.length;

console.log("average is : " , average);//average is :  75

//how can we execute code over and over again without writing it more than once?

function avgMyGrades(){
//when we create a function we create a LOCAL EXECUTION CONTEXT and a call stack
  const myGrades1 = [50 , 75 , 100];
  console.log("myGrades1 is : " , myGrades1);

let sum=0;

for(let i=0 ; i<myGrades1.length ; i++){
  sum = sum + myGrades1[i];
}
console.log("sum from inside avgMyGrades function is : " , sum);
return sum/myGrades1.length;

}
//apel functie
avgMyGrades();

const output1=avgMyGrades();
console.log("output1 is : " , output1);//output1 is :  75

const output2=avgMyGrades();
console.log("output2 is : " , output2);
//every time we run run this function we get the same output

//------------how can we make our function a bit more general so that it can calculate any list of grades?
//------------parameters //arguments

//grades is a parameter //and in this case is an array
//[50 , 75 , 100] is the argument

function avgMyGrades2(grades){

let sum = 0;

for(let i=0 ; i<grades.length ; i++){
  sum = sum + grades[i];
}
return sum/grades.length;
}

const output3=avgMyGrades2([50 , 75 , 100]);
console.log("output3 is : " , output3);
const output4=avgMyGrades2([20 , 75 , 1045 , 67 , 4]);
console.log("output4 is : " , output4);


























//
