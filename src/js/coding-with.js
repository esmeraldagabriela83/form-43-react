console.log("----------------------------------------------------------------------------------coding-with.js");

let x=111;

function logX(){
  console.log("x is : " , x);
}
//apel functie
logX();
/////////////

var xx=222;

function logXX(){
  console.log("xx + 7 is : " , xx + 7);
  return xx + 3;
}
//apel functie
console.log("apel functie logXX() : ");
logXX();
console.log("logXX() is : " , logXX());

/////////////////////

var xxx=15;

function logXXX(a , b){
  console.log(xxx * a);
  return xxx * b;
}
//apel functie
logXXX(10 , 100);
console.log("logXXX(20 , 200) is : " , logXXX(20 , 200));


//5 Essential JavaScript Interview Questions
//https://www.youtube.com/watch?v=Ypp64J5KAKA&t=20s


///////////////////

//inside function variable
function funcInsideLet() {
  let a = 4;
  console.log("a from funcInsideLet is : " , a);
  return a * a;
}
//apel functie
funcInsideLet();
console.log("funcInsideLet() is : " , funcInsideLet());

//outside function variable
let b = 100 ;
console.log("variabila globala b : " , b);

function funcOutside(){
  let a = 50;
  console.log("variabila locala a : " , a);
  console.log("a + 10 from funcOutside" , a + 10);
  console.log("a + b from funcOutside" , a * b);
  return a + b;
}
//apel functie
funcOutside();
console.log("funcOutside() is : " , funcOutside());
//////////////////////interview questions
//1. what is a closure in js?
//https://www.w3schools.com/js/js_function_closures.asp
//closure
//Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.

function closureFunction() {
  a = 56;
  return a;
}
console.log("closureFunction() is : " , closureFunction());
console.log("a is : " , a);

var closureParagraph=document.getElementById('closure');
closureParagraph.style.border="3px solid yellowgreen";
closureParagraph.innerText= a * a;
/////////////////////////////////////////closure x , y sunt parameri formali ai functiei makeAdder
function makeAdder(x){
  return function(y){
    return x + y;
  }
}
const add5=makeAdder(15);
console.log("makeAdder(15) is : " , makeAdder(15));
console.log("add5(30) is a function  // add5(30) is : " , add5(30));
//////////////////////////////////////////////////////////////////////////////////////////////

//2. What is hoisting in js?
//let and const never get hoisting


//var get hoisted
//  function declaration get hoisted in js

//apel functie
foo();//hi there
function foo(){
  console.log("hi there");
}
///////////////////////
// = assignments do not get hoised in js

var fooVariable=function(){
  console.log("hi there from fooVariable function");
}

fooVariable();
///////////////////////////

const fooConst=function(){
  console.log("hi there from fooConst function");
}

fooConst();

// hoisted = not hoisted

//3. callback vs promise

//----------------callback function // call me me back when the burger is done//dupa ce s-a executat comanda
function getNumber(callback){

setTimeout( () =>{
  callback(10)
} , 1000)

}
//the callback function is the arrow function used as a : parametru formal al functiei getNumber
getNumber(number =>{
  console.log("-------------number after 1 second from callback is : " , number);
})

//-------------------promise
function getNumber2(callback){

setTimeout( () =>{
  callback(10)
} , 1000)

}

function getNumberPromise(){
  return new Promise( (resolve , reject) =>{
    getNumber2(resolve)
  } )
}

const  promise=getNumberPromise();
promise.then(n => console.log("-------------n from promise is " , n));

//4. how does "this" work
const person={
  name:"Gigel",
  sayName:function(){
    console.log("this.name is:" , this.name);
  }
}

person.sayName();
////////////////////////////////////
const person2={
  name:"Manuela",
  sayName:function(){
    console.log("this.name is:" , this.name);
  }
}

const bindSayName=person2.sayName.bind(person2);
//apel functie
bindSayName();

//5. what is the prototype in js?

const vehicle={
  drive:function(){
    console.log("the car is driving");
  }
};
////////////
const car={
  make:"Honda"
}
/////////////
Object.setPrototypeOf(car , vehicle);

car.drive();//the car is driving























//
