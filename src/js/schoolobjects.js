console.log("welcome inside school objects js");
//https://www.w3schools.com/js/js_classes.asp
//https://softhunt.net/top-10-es6-features-by-example/
//
//https://www.w3schools.com/js/js_object_constructors.asp
//https://www.w3schools.com/jsref/jsref_constructor_class.asp
//https://www.programiz.com/javascript/constructor-function
//https://softhunt.net/top-10-es6-features-by-example/


//https://www.w3schools.com/js/js_objects.asp
// You have already learned that JavaScript variables are containers for data values.
//
// This code assigns a simple value (Fiat) to a variable named car:

// Create and display a variable:
let car = "Fiat";
console.log("car variable value is :" , car);
console.log(typeof(car));//string

const fiatEmVariable=document.getElementById('fiatEm');
fiatEmVariable.style.border="3px solid red";
fiatEmVariable.style.padding="0.5em";
fiatEmVariable.style.margin="0.5em";
//fiatEmVariable.innerText=car;
fiatEmVariable.innerText=`My car is : ${car}`;

//------------------------------------------------------------------------------

const car1 = {
  type:"Fiat",
  model:"500",
  color:"white"
};
console.log("car1 is : " , car1);
console.log(typeof(car1));//object

const fiatStrong=document.getElementById('fiatStrong');
fiatStrong.style.border="3px solid yellow";
fiatStrong.style.padding="0.5em";
fiatStrong.style.margin="0.5em";
fiatStrong.innerText=`My car type is ${car1.type} , the model is ${car1.model} and the  color is ${car1.color} .`
//
const demo1=document.getElementById('demo1');
demo1.style.border="3px solid pink";
demo1.style.padding="0.5em";
demo1.style.margin="0.5em";
demo1.innerText="The car type is " + car1.type + " .";
//
document.getElementById('demo2').innerHTML = "The car model is " + car1.model;

//-----------------------------------------Spaces and line breaks are not important. An object definition can span multiple lines:
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
console.log("person1 is : " , person1);

const personParagraph1=document.getElementById('personParagraph1');
personParagraph1.style.border="3px solid orangered";
personParagraph1.style.padding="0.5em";
personParagraph1.style.margin="0.5em";
personParagraph1.innerText=person1.firstName + " " + person1.lastName + " is " + person1.age + " years old .";

document.getElementById('personEYEcolor').innerText=`His eyes color is ${person1.eyeColor} .`;

document.getElementById('demoFullName').innerText=person1.firstName + " " + person1.lastName;

//------------------------------------------------------------------------------

const person2 = {
  firstName: "Cristi",
  lastName : "Popescu",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  },
  talkMethod:function(){
    return this.firstName + " " + "talks like the radio.";
  },
  eatMethod:function(val){
    return this.lastName + " eats " + val + " at dinner."
  },
  singArrowMethod:(val) =>{
    console.log(person2.firstName + " sings la la la");
    return `He sings ${val}`;
  }
};

console.log("person2 is : " , person2);

document.getElementById('fullName2').innerText=person2.firstName + " " + person2.lastName;
document.getElementById('fullNameMethod').innerText="Method fullName : " + person2.fullName();
document.getElementById('talkMethodFunc').innerText="Method talkMethod : " + person2.talkMethod();
document.getElementById('eatMethodFunc').innerText="Method eat : " + person2.eatMethod("tomatoes");
document.getElementById('singMethodFunc').innerText="Method sing : " + person2.singArrowMethod("Amin");

const singParagraph=document.getElementById('singParagraph');
singParagraph.style.border="3px solid DarkRed";
singParagraph.style.padding="0.5em";
singParagraph.style.margin="0.5em";
singParagraph.innerText=person2.eatMethod("castraveti");

const showBtn=document.getElementById('showBtn');
showBtn.style.border="3px solid red";
showBtn.addEventListener("click" , changeFunc);

function changeFunc(event){
  event.preventDefault();
  console.log("this is : " , this);
  console.log("you clicked show another food btn");
  singParagraph.innerText=person2.eatMethod("struguri");
}

//https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_objects2
const person3 = {
  firstName: "John",
  lastName: "Doe",
  country: "Romania"
};

console.log(person3.firstName + " " + person3.lastName + " lives in " + person3.country);

//discord 15 04 2022
var Students = function(students) {
    this.names = students;
  this.numberOfLetters = [];
};

var Students = function(students) {
    this.names = students;
  this.numberOfLetters = [];
};

Students.prototype.countLetters = function() {
    this.numberOfLetters = this.names.map( el => el.length);
}

var students = new Students(["Mary", "Al", "Gregory"]);
students.countLetters();
console.log("students.numberOfLetters is : " , students.numberOfLetters);

//https://www.w3schools.com/js/js_object_constructors.asp
//https://www.w3schools.com/jsref/jsref_constructor_class.asp
//https://www.programiz.com/javascript/constructor-function
//https://softhunt.net/top-10-es6-features-by-example/

//15 04 2022
//IIFE <=> Imediately Invoked Function Expression
console.log((function(param){
  return param + 10;
})(5));

console.log((a => a + 100)(20));

//------------------------------------------------------------------------------

/**
  Ia elementele 2 cate 2
  calculeaza ce vrem noi
  daca intorc valoare mai mare decat 0
  inseamna ca elementele trebuie interschimbate
*/
//METODA SORT MODIFICA ARRAY-ul PE CARE E APLICATA
const myArr=[1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];
myArr.sort(function(a,b){
  return b - a;
});
console.log("myArr is : " , myArr);

const myArr1=[1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ,0];

let evenArr=[];
let oddArr=[];

myArr1.sort(function(el){
  if( el % 2 === 0){
     evenArr.push(el);
     return evenArr;
  }else if(el % 2 !== 0){
    oddArr.push(el);
    return oddArr
  }else{
    console.log("el is string : "  , el);
  }
})
console.log(evenArr);
console.log(oddArr);
console.log(myArr1);
//------------------------------------------------------------------------------
const strs = ["abc","a","bc","accc","bc"];
console.log("strs before is : " , strs);
//ordonare dupa lungime
strs.sort((a,b) => a.length - b.length);
console.log("strs after is " , strs);//['a', 'bc', 'bc', 'abc', 'accc']

//discord 15 04 2022
function randomize(p1,p2,callback){
    if(typeof callback === 'function') {
      var n = p1 + Math.floor(Math.random()*(p2-p1));
      callback(n);
    } else {
      console.log("callback is not a function!")
    }

}

randomize(100,750,function(n){
  console.log("Acesta este n = ", n);
})

randomize(250,150,function(n){
  console.log("second Acesta este n = ", n);
})

//------------------------------------------------------------------------------
const links = [
  "https://onet.com",
  "https://wp.com",
  "https://facebook.com",
  "https://google.com",
  "https://gmail.com",
];

console.log("links is : " , links);
console.log(typeof(links));

//map are return primeste array si intoarce array

const lis=links.map(el =>{
  let li=document.createElement("li");
  li.style.border="3px solid red";
  li.style.padding="0.5em";
  li.style.margin="0.5em";

  let a=document.createElement("a");
  a.style.border="3px solid green";
  a.href=el;
  a.innerText=el.replace("https://" , " ");

  li.appendChild(a);
  return li;
})

const myul=document.createElement("ul");
myul.style.border="3px solid blue";
myul.style.padding="0.5em";
myul.style.margin="0.5em";

myul.className="list";
myul.id="createdUl";

lis.forEach(el =>{
  myul.appendChild(el);
});

document.getElementById('section4').appendChild(myul);

//------------------------------------------------------------------------------

//https://www.w3schools.com/react/react_es6_spread.asp

const numbersOne = [1, 2, 3];
console.log("numbersOne is : " , numbersOne);
console.log(typeof(numbersOne));

const numbersTwo = [4, 5, 6];
console.log("numbersTwo is : " , numbersTwo);

const numbersCombined=[...numbersOne, ...numbersTwo];
console.log("numbersCombined is : " , numbersCombined);
//
const nrLis=numbersCombined.map(el =>{
  let nrLi=document.createElement("li");
  nrLi.style.border="3px solid brown";
  nrLi.style.padding="0.5em";
  nrLi.style.margin="0.5em";
  nrLi.innerText=el;

  return nrLi;
})

const nrUl=document.createElement("ul");
nrUl.className="nrList";
nrUl.id="createdUl";
nrUl.style.display="flex";
nrUl.style.wrap="flex-wrap";

nrLis.forEach(el =>{
  nrUl.appendChild(el);
})

document.getElementById('section5').appendChild(nrUl);
//
document.getElementById('paragraphNRS').innerText=numbersCombined.join(" , ");

const alleachNr=document.querySelectorAll(".eachNr");
for(let i=0 ; i<alleachNr.length ; i++){
  alleachNr[i].style.border="3px solid gray";
  alleachNr[i].style.padding="0.5em";
  alleachNr[i].style.margin="0.5em";
  alleachNr[i].innerText=numbersCombined[i];
  alleachNr[i].style.textAlign="right";
}
//------------------------------------------------------------------------------SPREAD OPERATOR CLONARE ARRAY SI OBJECT 19 04 DISCORD
//React ES6 Spread Operator
//https://www.w3schools.com/react/react_es6_spread.asp

const spreadNumbers = [11, 21, 31, 41, 51, 61];
console.log("spreadNumbers before is : " , spreadNumbers);
const [one, two, ...rest] = spreadNumbers;
console.log("spreadNumbers after spread is : " , spreadNumbers);

console.log("one is : " , one);
console.log("two is : " , two);
console.log("rest is : " , rest);

document.getElementById('onePar').innerText=one;
document.getElementById('twoPar').innerText=two;
document.getElementById('restPar').innerText=rest;

//

const allsingleLi=document.querySelectorAll(".singleLi");
for(let i=0 ; i<allsingleLi.length ; i++){
  allsingleLi[i].innerText=spreadNumbers[i];
  allsingleLi[i].style.border="3px solid deeppink";
  allsingleLi[i].style.padding="0.5em";
  allsingleLi[i].style.margin="0.5em";
}

//
const spreadLis=spreadNumbers.map(el =>{
  let nrLi=document.createElement("li");
  nrLi.style.border="3px solid cornflowerblue";
  nrLi.style.padding="0.5em";
  nrLi.style.margin="0.5em";
  //el este fiecare nr din array spreadNumbers
  nrLi.innerText=el;
  return nrLi;
})

const spreadul=document.createElement("ul");
spreadul.style.border="3px dotted orange";

spreadLis.forEach(el =>{
  //el este fiecare nrLi creiat adineauri
  spreadul.appendChild(el);
})

document.getElementById('section7').appendChild(spreadul);
document.getElementById('section7').style.display="flex";
document.getElementById('section7').style.wrap="flex-wrap";

//-----------------------------------------------------------------------------------
//REST
const spreadNumbers2 = [12, 22, 32, 42, 52, 62];
const [one2 , two2 , ...rest2]=spreadNumbers2;

const allthreeLi=document.querySelectorAll(".threeLi");

allthreeLi[0].innerText=one2;
allthreeLi[1].innerText=two2;
allthreeLi[2].innerText=rest2;

for(let i=0 ; i<allthreeLi.length ; i++){
  allthreeLi[i].style.border="3px solid skyblue";
  allthreeLi[i].style.padding="0.5em";
  allthreeLi[i].style.margin="0.5em";
}

//---------------------------------------------------------------------------------

const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

var keys=Object.keys(myVehicle);
console.log("keys is : " , keys);
//keys is :  (3) ['brand', 'model', 'color']

for(let i=0 ; i<keys.length ; i++){
  console.log(myVehicle[keys[i]])
}

// Ford
// schoolobjects.js:382 Mustang
// schoolobjects.js:382 red

const updateMyVehicle = {
  type: 'car',
  year: 2021,
  color: 'yellow'
}

var values=Object.values(updateMyVehicle);
console.log("values is : " , values);//['car', 2021, 'yellow']

for(let i=0 ; i<values.length ; i++){
  console.log(values[i]);
}

// car
// schoolobjects.js:401 2021
// schoolobjects.js:401 yellow

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
console.log("myUpdatedVehicle is : " , myUpdatedVehicle);
//{
// brand: 'Ford',
//  model: 'Mustang',
//   color: 'yellow',
//    type: 'car',
//     year: 2021
// }

const allvehicleLi=document.querySelectorAll(".vehicleLi");

for(let i=0 ; i<allvehicleLi.length ; i++){
  allvehicleLi[i].innerText=Object.keys(myUpdatedVehicle)[i] + " : " + Object.values(myUpdatedVehicle)[i];
  allvehicleLi[i].style.border="3px solid orange";
}

///differit de concat()-----------------------------------------------------------------------------

let text1 = "sea";
let text2 = "food";
let result = text1.concat(text2);
console.log("result is : " , result);
//
let arr1=["dhfhg" , "fvgukhuk" , "gjgj" , "ghh"];
let arr2=["ffff", "ddd" , "ttt"];
let resultArr=arr1.concat(arr2);
console.log("resultArr is : " , resultArr);//['dhfhg', 'fvgukhuk', 'gjgj', 'ghh', 'ffff', 'ddd', 'ttt']

//----------------------------------------------------------------------------------
//discord 19042022
const arr3 = [1,2,3,4];
const arr4 = ['a','b','c'];
//spread operator
const arr34 = [...arr3,...arr4];
console.log("arr34 is : " , arr34);
const arr5 = arr3.concat(arr4)
console.log("arr5 is : " , arr5);

console.log([-1,0,...arr3,5,6]);

///-----------------------------------------------------------------------------
const arrx=[1 , 22 , 33 , 44 , 555];
const arry=arrx;
console.log("arry is : " , arry);

arrx.push("l-am stricat");
console.log("arry after arrx was modified is : " , arry);
console.log("arrx after modification is : " , arrx);

///------------------------------------------------------------------------------

const arrx2=[1 , 22 , 33 , 44 , 555];
const arry2=[...arrx2];

console.log("arry2 is : " , arry2);// [1, 22, 33, 44, 555]

arrx2.push("NU L-AM STRICAT");
console.log("arrx2 after modification is : " , arrx2)
console.log("arry2 is : " , arry2);

//--------OBIECTE----//

const obj1 = {
  a:1,
  b:2,
  c:3
}
console.log("obj1",obj1);//obj1 {a: 1, b: 2, c: 3}

const obj2 = {
  ...obj1,
  c:4,//suprascrie c:3 fiindca vine dupa
  d:5
}
console.log("obj2",obj2);//obj2 {a: 1, b: 2, c: 4, d: 5}


//CLONARE OBIECTE

//ASA NU
const obj3 = obj1;
console.log("obj3 is : ",obj3);
obj1.a = 'asa nu';
console.log("obj1 is : " , obj1);
console.log("obj3 is : ",obj3);

//ASA DA

const myObj={
  a: 1,
  b: 2,
  c: 4,
  d: 5
}
console.log("--- myObj is : " , myObj);

const cloneOnj={...myObj};
console.log("--- cloneOnj is : " , cloneOnj);

myObj.a="asa da";

console.log("--- myObj after modification  is : " , myObj);
console.log("--- cloneOnj after modification is : " , cloneOnj);

//--------------------------------------------------------------------------------DISCORD 19 04 2022 REST OPERATOR
const restLiAll=document.querySelectorAll(".restLi");
for(let i=0 ;i<restLiAll.length ; i++){
  restLiAll[i].style.border="3px dotted pink";
  restLiAll[i].style.padding="0.5em";
  restLiAll[i].style.margin="0.5em";
}
//operatorul REST (...) !!! Restrange

//UNDE SE APLICA
//LA PARAMETRI FORMALI AI FUNCTIILOR
//INGADUIE DEFINIREA DE FUNCTII CU NUMAR NEDETERMINAT DE PARAMETRI
//RESTrange parametri formali din coada intr-un array cu nume dat

//args e nume dat de programator
function restMe(a,b,...args) {
    console.log("a",a);
    console.log("b",b);
    console.log("args",args);
    //return a , b , args;
    return restLiAll[0].innerText=a , restLiAll[1].innerText=b , restLiAll[2].innerText=args;
}
//apel functie
restMe(1,2,3,4,5,6,7,8);
//!!!operatorul REST se aplica doar la "ultimul" parametru
//
const restArr=["Mihai" , "Gabriel" , "Alex" , "Nicolae" , "Ghe" , "Viorel"];
const [name1 , name2 , ...argsNames]=restArr;

console.log("name1 is : " , name1);
console.log("name2 is : " , name2);
console.log("argsNames is : " , argsNames);

const restParagraph=document.getElementById('restParagraph');
restParagraph.style.border="3px dashed orangered";
restParagraph.innerText=restArr.join(" , ");

const allrestLiName=document.querySelectorAll(".restLiName");
for(let i=0 ; i<allrestLiName.length ; i++){
  allrestLiName[i].style.border="3px dotted green";
}

allrestLiName[0].innerText=name1;
allrestLiName[1].innerText=name2;
allrestLiName[2].innerText=argsNames;

//------------------------------------------------------------------------------
//atentia la cobinarea cu parametri optionali
function restMe2(a,b = 10,...args) {
    console.log("a",a);
    console.log("b",b);
    console.log("args",args);
}

restMe2(11,22,33,44,55);


//REST SE APLICA la parametri formali
//( ...) - paranteze rotunde = REST
//[...],{...} - acolade sau paranteze patrate = SPREAD

//------------------------------------------------------------------------------
//rest
let namesA = ["Zosia", "Marcin", "Kamil"];
let namesB = ["Ala", ...namesA, "Jan", "Karol" ];
console.log("namesB is : " , namesB);//(6) ['Ala', 'Zosia', 'Marcin', 'Kamil', 'Jan', 'Karol']

//------------------------------------------------------------------------------

console.log("exercise 03");
let people = [{
    person: "Kim Yoo Suk",
    profession: "vaulter"
  },
  {
    person: "Sue Yoo",
    profession: "lawyer"
  },
  {
    person: "Dr. Alden Cockburn",
    profession: "urologist"
  },
  {
    person: "Rusty Kuntz",
    profession: "coach"
  }
];
console.log("people array original is : " , people);
/////////////////
const newPeople = [...people];
console.log("new people array is : ", newPeople);

function setFunnyName(...args) {
  console.log("my args : ", args);//my args :  (3) [{…}, {…}, {…}] it is an array with objects
//   0: {person: 'a', profession: 'b'}
// 1: {person: 'c', profession: 'd'}
// 2: {person: 'e', profession: 'f'}
// length: 3
  console.log("type of args is : " , typeof(args));//object console.log(pe orice array) => object
  args.forEach(element => {
    newPeople.push(element);
  });
}
//apel functie
setFunnyName({
  person: "a",
  profession: "b"
}, {
  person: "c",
  profession: "d"
}, {
  person: "e",
  profession: "f"
});
console.log("new people array after function call is : ", newPeople);
// (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0: {person: 'Kim Yoo Suk', profession: 'vaulter'}
// 1: {person: 'Sue Yoo', profession: 'lawyer'}
// 2: {person: 'Dr. Alden Cockburn', profession: 'urologist'}
// 3: {person: 'Rusty Kuntz', profession: 'coach'}
// 4: {person: 'a', profession: 'b'}
// 5: {person: 'c', profession: 'd'}
// 6: {person: 'e', profession: 'f'}






































/////////////////////////
