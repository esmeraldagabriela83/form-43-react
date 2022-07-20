console.log("hello from detartraj.js");

const contentDiv=document.getElementById("detartraj-content");

contentDiv.style.padding="3em";
contentDiv.style.border="3px solid red";
contentDiv.innerText="I am only a js file";

//------------------------------------------------difference between let and var
//var was in JS from the beginning//var has function scope
//var dies at the end of the function scope not at the end of the block code
//var gets hoisted


//let was introduced in ES6 //let has block scope//let will die at the end where the block is defined
//let does not get hoisted


//https://www.youtube.com/watch?v=oxoFVqetl1E
//Top 10 JavaScript Interview Questions

let x=function(){

if(true){

var v=2;
let l=1;

console.log("v inside if statement is : " , v);
console.log("l inside if statement is : " , l);

console.log("vAfterConsole inside if statement is : " , vAfterConsole);
// console.log("lAfterConsole inside if statement is : " , lAfterConsole);

var vAfterConsole=3;
let lAfterConsole=4;
}

console.log("v from outside if statement is : " , v);
// console.log("l is : " , l);

console.log("vAfterConsole inside if statement is : " , vAfterConsole);
// console.log("lAfterConsole inside if statement is : " , lAfterConsole);

}

//apel functie
x();

/////------------------------------------difference between == and ===
//bouth are comparison operators
// == compares only the value //it converts bouth to strings
// === compares value and type

if("22" == 22){
  console.log("string and number have the same value of 22 , because == operator converts bouth to the same type and value of 22");
}else if("66" === 66){
  console.log("string and number are different types of values");
}else{
  console.log(22*2);
}

if("77" === 77){
  console.log("string 77 and number 77 are different types of values");
}else{
  console.log(22*5 , " because string is diffrent from number ");
}

///difference between let and const keywords

let letVariable=100;
letVariable=101;

console.log("letVariable is : " , letVariable);

const constVariable=2000;
//constVariable=2005;

console.log("constVariable is : " , constVariable);
//detartraj.js:77 Uncaught TypeError: Assignment to constant variable.

// const constConst;
//
// constConst=5;

//console.log("constConst is : " , constConst);//Uncaught SyntaxError: Missing initializer in const declaration

//////////////////////////
const arrConst=[1 , 2 , 3 , "initial string"];
console.log("arrConst is : " , arrConst);

//can add a value inside the array , but can not be reassigned//reatribuit

arrConst.push(55 , "any string added");
console.log("arrConst after push  is : " , arrConst);

//arrConst=["new array" , 99 , 998, 889];

//console.log("arrConst after reassignment  is : " , arrConst);//detartraj.js:97 Uncaught TypeError: Assignment to constant variable.

const objConst={
  key1:"first value",
  key2:3,
  key3:["I M AN ARRAY"],
  key4:{
    k1:111,
    k2:"object inside obj"
  }
};

console.log("objConst is : " , objConst);
console.log("objConst.key3 is : " , objConst.key3);
console.log("objConst.key4 is : " , objConst.key4);
console.log("objConst.key4.k2 is : " , objConst.key4.k2);

objConst.key3=["I am another array"];

console.log("objConst.key3 after modification is : " , objConst.key3);
console.log("objConst.key4.k1 is : " , objConst.key4.k1);

objConst.key4.k1="string not number";
console.log("objConst.key4.k1 after modification is : " , objConst.key4.k1);
/////////////////////

const mePerson = {
  firstName: "Mihaela",
  lastName : "Aco",
  age     :  39
};

var meObj=document.getElementById("euObj");

meObj.style.border="3px dotted yellow";
meObj.style.padding="1em";
meObj.innerText=mePerson.firstName + " " + mePerson.lastName + ". My age is : " + mePerson.age
///////////////////

var totalName=document.getElementById("totalName");

totalName.innerHTML="My sister has " + (mePerson.age - 15) + " years old ."

//////////////////

const personJOHN = {
  firstName: "John",
  lastName : "Popescu",
  age:"67",
  id       : 123,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log("personJOHN.fullName is : " , personJOHN.fullName());

var john=document.getElementById("John");

john.innerText=personJOHN.fullName() + "and has the age of : " + personJOHN.age ;

console.log("typeof(55) is : " , typeof(55));
console.log("typeof(personJOHN) is : " , typeof(personJOHN));
console.log("typeof(arrConst) is : " , typeof(arrConst));
console.log(typeof("mystring your`s-string string"));


var h3cntent=document.querySelector(".h3content");
h3cntent.style.border="3px solid yellow";
h3cntent.style.padding="1em";
h3cntent.innerText=typeof(true);

var h5cntent=document.querySelector(".h5content");
h3cntent.style.border="3px dashed dimgray";
h3cntent.style.padding="2em";
h5cntent.innerText=typeof("I am a string from js");

//difference between null and undefined

//null and undefined are bouth empty values

//undefined is a placeholder for a variable which was not assigned , has no value assigned to it
console.log("undefined is : " , undefined);
console.log("null is : " , null);
///
console.log("typeof(undefined) is : " , typeof(undefined));
console.log("typeof(null) is : " , typeof(null));
var myUndefined;
console.log("myUndefined is : " , myUndefined);

//https://www.youtube.com/watch?v=oxoFVqetl1E
//Top 10 JavaScript Interview Questions

//functie de afisare
function show(){
  console.log("I`ll display in console");
  return "I`ll display on the page";
}
//apel functie
show();

var myFunctionShow=document.getElementById("functionShow");
myFunctionShow.style.border="3px dotted Aquamarine";
myFunctionShow.style.padding="1em";
myFunctionShow.innerText=show();
///////////

function show2(a){
  console.log("a * 10 is : " , a * 10);
  return a * 10;
}

var span2=document.getElementById("functionShow2");
span2.innerText=show2(543);

//apel functie
show2(35);

///////////
function returnFunction(a){
  return a + 5;
}

console.log("returnFunction(3) is : " , returnFunction(3));
console.log("returnFunction(67) is : " , returnFunction(67));

var myFunctionReturn=document.getElementById("functionReturn");

myFunctionReturn.style.border="3px solid magenta";
myFunctionReturn.style.padding="1.5em";
myFunctionReturn.innerText=returnFunction(45)
//////////////////////////////////////////////////////////////////////////////////////

var spanArr=document.querySelectorAll(".mySpan");
console.log("spanArr is : " , spanArr);

for(var i=0 ; i<spanArr.length ; i++){
  spanArr[i].style.color="DarkGreen";
  spanArr[i].innerText=returnFunction(i);
}
/////////////////////////////////////////////////////////////////////////////
////the use of arrow function
var getAclassic=function(m){
  return m + 0.5;
}
//apel functie
console.log("getAclassic(567.5) is : " , getAclassic(567.5));

var funClassic=document.querySelector(".classicFun");
funClassic.innerText=getAclassic(110);
funClassic.style.color="DarkViolet";
///
let getAarrow=m => m * 5;

var funArr=document.querySelector(".arrowFun");
funArr.innerText=getAarrow(11);
funArr.style.color="DarkSlateGray";
//
let square = p => p*p ;
console.log("square(3) is : " , square(3));
////////////

let square2= (p) =>{return p*p};
console.log("square2(5) is : " , square2(5));
///////////////////
var q=44;

let square3= () =>{return q*q};
console.log(" square3 is :" , square3());

//////////////////////

let multipy=(a , b) =>{return a*b};
console.log("multipy(22 , 55) is : " , multipy(22 , 55));

//why arrow function and not classic function
//https://www.youtube.com/watch?v=_pfXEv9cFGE&list=PL7pEw9n3GkoW5bYOhVAtmJlak3ZK7SaDf&index=12
//ES6 Arrow Functions in JavaScript tutorial ( Fat Arrow Function Expression es2015, ecma6)

var myx=function(){
  this.val=5;
  setTimeout(function(){
    this.val++ ;
    console.log(this.val)
  } , 3)
};
var myxx=new myx();//NaN NOT A NUMBER
//////////////
var myX=function(){

var that=this;

  this.val=5;
  setTimeout(function(){
    that.val++ ;
    console.log(that.val)
  } , 3)
};
var myXX=new myX();

//arrow function does not have its own this

var myXarrow=function(){

  this.val=55;
  setTimeout(() =>{
    this.val++ ;
    console.log(this.val)
  } , 10)
};
var myXXarrow=new myXarrow();

////////////////fat arrow function does not have arguments variables
var classicFunction=function(){
  console.log("arguments[0] from classic functions is : " , arguments[0]);
}

classicFunction(4477 , 45 , 46);
classicFunction(777 , 789 , 678 , 567);
/////////////////////////////arrow function with spread operator es6 // destructurare
//n actioneaza ca si un array
var arrowFunction=(...n) =>{
  console.log("n[0] from arrow function is : " , n[0])
}

arrowFunction(111 , 123 , 124);

///////////////////////arrowfunction is also called fat arrow
//https://www.youtube.com/watch?v=oxoFVqetl1E   Top 10 JavaScript Interview Questions
//
//LearnWebCode

const profile={
  firstName:"",
  lastName:"",
  setName:function(name){
    let splitName= (n) =>{
      let nameArray=n.split(" ");
      this.firstName=nameArray[0];
      this.lastName=nameArray[1];
    }
    //apel functie
    splitName(name);
  },
  showParagraph:function(){
    console.log("Full name is : " , profile.firstName + " " + profile.lastName);
    return "Full name is : " , profile.firstName + " " + profile.lastName ;
  }
}

profile.setName("Gheorghe Tanase");
console.log("profile.firstName is : " , profile.firstName);

var arrowParagraph=document.getElementById("arrow");
arrowParagraph.style.border="3px solid BurlyWood";
//////////////////////
profile.setName("Monalisa Marciuc");

arrowParagraph.innerText=profile.showParagraph("Monalisa Marciuc");
//arrow functions 15 04 2022 catalin

//FUNCTII SAGEATA
//ARROW FUNCTIONS sau FAT ARROW FUNCTIONS

function test() {
  console.log("THIS from classic function: ",this);
}
console.log("FEREASTRA");
//apel functie
test();
//////////////////////////
//arrow function
const arrow = () => {
    console.log("This from arrow function  is :",this);
}

//apel functie
arrow();

////////////////afer afterCurs
let liArr=document.querySelectorAll("div#afterCurs ul li");
console.log("liArr is : " , liArr);

for(var i=0 ; i<liArr.length ; i++){
  liArr[i].style.border="3px dotted Chartreuse";
    liArr[i].style.padding="0.5em";
  liArr[i].addEventListener("click" , test);
}

const objCurs = {
  prop:100,
  val:50,
  func:test
}

console.log("obiect curs");
//apel functie
objCurs.func();
console.log("objCurs.func is : " , objCurs.func);

/////////////////////

function Example(val){
  this.value = val;
  this.index = 0;
}

Example.prototype.func = test;

const ex1 = new Example(777777777);
console.log("ex1",ex1);
ex1.func();

console.log("------------------ARROW FUNCTION-----------------------------------")
arrow();

var afterArrow=document.querySelector(".after-arrow");
afterArrow.style.color="Brown";
afterArrow.style.fontWeight="bold";

afterArrow.addEventListener("click" ,arrow);

/////////////////

const objarrow = {
  prop:100,
  val:29,
  func:arrow
}

objarrow.func();
console.log(objarrow.func);

function ExampleMixed(val){
  this.value = val;
  this.index = 0;
  this.func = function(callback){
    console.log("this func",this);
    callback();
  };
}

const exarrow = new ExampleMixed(90);

console.log("exarrow func test:");
exarrow.func(test);
console.log("exarrow func arrow:");
exarrow.func(arrow)



//functia definit clasic cu function:
//!!!PASTREAZA CONTEXTUL IN CARE E ASOCIATA
//!!!this se refera la obiectul din CONTEXTUL


///functia sageata NU PASTREAZA contextul
///!!!IL PREIA pe this din locul oin care a fost definita
// !!!NU DIN CONTEXTUL in care a fost ASOCIATA



///NICIODATA NU FOLOSIM ARROW FUNCTION pe addEventListener

//constructor functions
var Students = function(mystudents) {
    this.names = mystudents;
  this.numberOfLetters = [];
  this.initialLetter=[];
  this.doiLetter=[];
};


Students.prototype.countLetters = function() {
    this.numberOfLetters = this.names.map((el) => {
      console.log("el is : " , el);
      return el.length;
    })
}

var students = new Students(["Mary", "Al", "Gregory"]);
students.countLetters();
console.log("students.numberOfLetters is : " , students.numberOfLetters);

var arrNames=new Students(["Alexandru" , "Maria" , "Cutare" , "mos-craciun"]);
//apel functie pt ca metoda este tot o functie
arrNames.countLetters();
console.log("arrNames.numberOfLetters" , arrNames.numberOfLetters);
///////////
Students.prototype.firstLetter= function(){
this.initialLetter=this.names.map((element) =>{
  console.log("element[0] is : " , element[0]);
  return element[0];
});
}
//apel functie pt ca metoda este tot o functie
students.firstLetter();
console.log("students.initialLetter is : " , students.initialLetter);
/////////////////
Students.prototype.secondLetter=function(){
this.doiLetter=this.names.map((elem) =>{
  console.log("elem[1] is : " , elem[1]);
  return elem[1];
});
}
//apel functie pt ca metoda este tot o functie
students.secondLetter();
console.log("students.secondLetter is : " , students.doiLetter);

var letterPersons=document.querySelectorAll(".arrowLetter");
console.log("letterPersons is : " , letterPersons);

for(var i=0 ; i<letterPersons.length ; i++){
letterPersons[i].style.border="3px solid DarkGoldenRod";
letterPersons[i].innerText=students.initialLetter;
}

//7.07.2022

///////////////////////////////exemplu didactic 13.04.2022
function testX(a , b){
  if(a > b){
    console.log("a > b");
    return function(){
      return a + x ;
    }
  }else{
    console.log("a < b");
    return function(){
        return b + x ;
    }
  }
}
//apel functie
var z=testX(2 , 4);
console.log("z is : " , z);

//apel functie
var zz=testX(5);
console.log("zz(5) is : " , zz);
//////////////////

function myTry(a , b){
  if(a > b){
    console.log("a > b");
    return a + b;
  }else{
    console.log("a < b");
    return a - b ;
  }
}

//apel function
myTry(34 , 5);
console.log("myTry(34 , 5) is : " , myTry(34 , 5));

var tryEx=myTry(10 , 330);
console.log("tryEx is : " , tryEx);
/////////////////////////////////////////////////////////////

/////////////https://www.youtube.com/watch?v=AfRHl3soLDg
///Javascript - How To Get And Set Input Text Value In JS [ with source code ]

//try interval
//crud curs 41 create ,read ,  update , delite
//https://www.youtube.com/watch?v=pcelNF8Ckhk    Complete CRUD Operation with IndexDB Database - JavaScript Project

//11 04 2022 discord

//js exam discord  — 11.04.2022
var sampleId=document.getElementById("sample_id");
sampleId.style.color="dimgray";

function getClass(elementSelected){

  return elementSelected.classList;
}
//apel functie
getClass(sample_id);
console.log("getClass(sample_id) is : " , getClass(sample_id));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var arrayLi=document.querySelectorAll(".exam-js-li");
console.log("arrayLi is: " , arrayLi);

function getInnerText(elements){
  var textsArr=[];
  for(var i=0 ; i<elements.length ; i++){
    textsArr.push(elements[i].innerText);

    elements[i].style.border="3px dotted cornflowerblue";
        elements[i].style.textAlign="center";
  }
  return textsArr;
}
//apel functie
getInnerText(arrayLi);
console.log("getInnerText(arrayLi) is : " , getInnerText(arrayLi));
//////////////////////////////////////////////////////////////////////////////////




























//
