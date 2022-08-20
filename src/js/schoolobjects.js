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
//rest
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

//------------------------------------------------------------------------------
const allliRestName=document.querySelectorAll(".liRestName");
for(let i=0 ; i<allliRestName.length ; i++){
  allliRestName[i].style.border="3px dotted purple";
  allliRestName[i].style.padding="0.5em";
  allliRestName[i].style.margin="0.5em";
}

function restMeNames(a, b , ...args){
  console.log("a is : " , a);
    console.log("b is : " , b);
      console.log("args is : " , args);
      return allliRestName[0].innerText=a , allliRestName[1].innerText=b , allliRestName[2].innerText=args;
}

//apel functie
restMeNames("Aurel" , "Costel" , "Gigel" , "Maria" , "Ramona" , "Mirabela");

//------------------------------------------------------------------------------
//este let pt ca va fi modificat cu push
let dogNames=["grivei" , "cutu" , "catel" , "caine" , "lupusoru"];
console.log("dogNames is : " , dogNames);

const newDogsNames=[...dogNames];
console.log("newDogsNames is : " , newDogsNames);

function setDogNames(...dogArgs){
  console.log("dogArgs is : " , dogArgs);
dogArgs.forEach(el =>{
  //dogNames ramane neschimbat , doar newDogsNames va fi modificat cu push()
  newDogsNames.push(el);
})
}

//apel functie
setDogNames("catel1" , "catel2" , "catel3");

console.log("dogNames is : " , dogNames);//(5) ['grivei', 'cutu', 'catel', 'caine', 'lupusoru'] a ramas nemodificat
console.log("newDogsNames is : " , newDogsNames);//(8) ['grivei', 'cutu', 'catel', 'caine', 'lupusoru', 'catel1', 'catel2', 'catel3']
//ATENTIE ATENTIE ATENTIE --- MAP ARE RETURN
const doglis=newDogsNames.map(el =>{
  let dogli=document.createElement("li");
  dogli.style.border="3px dotted red";
  dogli.style.padding="0.5em";
  dogli.style.margin="0.5em";
  dogli.innerText=el;
  dogli.style.textAlign="right";
  return dogli;
})

const dogUl=document.createElement("ul")
dogUl.className="allDogUl";
dogUl.id="ulId";

doglis.forEach(el =>{
//ATENTIE ATENTIE ATENTIE --- forEach nu are return
  dogUl.appendChild(el)
})

document.getElementById("section12").appendChild(dogUl);

//------------------------------------------------------------------------------

console.log("after ex 3 discord 19 04 2022");
let cats=[
  {
    "catName":"soficu",
    "aspect":"dungulite",
    "id":1
  },
  {
    "catName":"firutu",
    "aspect":"gri",
    "id":2
  },
  {
    "catName":"pit",
    "aspect":"alb-portocaliu",
    "id":3
  }
];
console.log("cats is : " , cats);
// cats is :
// (3) [{…}, {…}, {…}]
// 0: {catName: 'soficu', aspect: 'dungulite', id: 1}
// 1: {catName: 'firutu', aspect: 'gri', id: 2}
// 2: {catName: 'pit', aspect: 'alb-portocaliu', id: 1}
// length: 3


//afiseaza in pag doar pisicile din cats array
const alllicat=document.querySelectorAll(".licat");
for(let i=0 ; i<alllicat.length ; i++){
  alllicat[i].style.border="3px dotted magenta";
  alllicat[i].style.padding="0.5em";
  alllicat[i].style.margin="0.5em";
  alllicat[i].innerText=cats.map((el , index) =>{
    return el.catName + " has this aspect " + el.aspect + " and has id : " + el.id;
  })[i];
}
//spread aplicat pt a copia array
const newCats=[...cats];
console.log("newCats is : " , newCats);//newCats is :  (3) [{…}, {…}, {…}]
//rest se aplica la parametri formali
function setCatName(...argsCat){
  console.log("argsCat is : " , argsCat);
  argsCat.forEach(el =>{
    //el este fiecare pisica noua adaugata prin apel functie
    newCats.push(el);
  })
}

//apel functie
setCatName(
  {
    "catName":"pisic4",
    "aspect":"culoare4",
    "id":4
  },
  {
    "catName":"pisica5",
    "aspect":"culoare5",
    "id":5
  },
  {
    "catName":"pisica6",
    "aspect":"culoare6",
    "id":6
  }
);

//alt apel functie
setCatName(
  {
    "catName":"pisica7",
    "aspect":"culoare7",
    "id":7
  }
)

console.log("cats is : " , cats);//cats is :  (3) [{…}, {…}, {…}]
console.log("newCats after apel functie care modifica array-ul initial cu push() is " , newCats);
// newCats after apel functie care modifica array-ul initial cu push() is
// (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0: {catName: 'soficu', aspect: 'dungulite', id: 1}
// 1: {catName: 'firutu', aspect: 'gri', id: 2}
// 2: {catName: 'pit', aspect: 'alb-portocaliu', id: 3}
// 3: {catName: 'pisic4', aspect: 'culoare4', id: 4}
// 4: {catName: 'pisica5', aspect: 'culoare5', id: 5}
// 5: {catName: 'pisica6', aspect: 'culoare6', id: 6}
// 6: {catName: 'pisica7', aspect: 'culoare7', id: 7}
// length: 7

//afiseaza toate pisicile in pag
const catLis=newCats.map((el , index) =>{
  //el este fiecare pisica obiect din newCats
  let catLi=document.createElement("li");
  catLi.style.border="3px dotted blue";
  catLi.style.padding="0.5em";
  catLi.style.margin="0.5em";
  catLi.innerText=el.catName + " has aspect : " + el.aspect + " and id : " + el.id;
  catLi.style.textAlign="center";
  return catLi;
})

const catUl=document.createElement("ul");
catUl.style.border="3px dashed green";

catLis.forEach(el =>{
  //el este fiecare catLi
  catUl.appendChild(el);
})

document.getElementById("section13").appendChild(catUl);
//------------------------------------------------------------------------------
//19 04 2022 discord
const myStr="Mihaela Gabriela Acornicesei";
console.log("myStr is : " , myStr);

let myResult=[...myStr].map((el , index) => index %2 === 0 ? el.toUpperCase() : el.toLowerCase()).join(" ");
console.log("myResult is : " , myResult);

//------------------------------------------------------------------------------
const standardArr=["a" , "b" , 2 , 4 , 5];
//spread
const copyStandardArray=[...standardArr];

standardArr.push("added element");
console.log("after modification standardArr is : " , standardArr);
//after modification standardArr is :  (6) ['a', 'b', 2, 4, 5, 'added element']
console.log("after modification copyStandardArray is : " , copyStandardArray);
//after modification copyStandardArray is :  (5) ['a', 'b', 2, 4, 5]

//-------------------------
const standardObj={
    "id":1,
  "prop1":"value1",
  "prop2":"value2",
  "prop3":"value3"
};
//spread aplicat pt a copia obj
const standardObj2={
  ...standardObj,
    "prop3":"value33",
    "prop4":"value4",
    "prop5":"value5"
}
console.log("--- standardObj2 is : " , standardObj2);
//--- standardObj2 is :  {id: 1, prop1: 'value1', prop2: 'value2', prop3: 'value33', prop4: 'value4', …}

//------------------------------------------------------------------------------
const stanObj={
  "id":2,
  "property1":"val1",
  "property2":"val2",
  "property3":"val3"
};

const copyStanObj={...stanObj};
const alwaysCopyStanObj=stanObj;

stanObj.property1="micu-pisicu";
stanObj.property2="lupusoru";

console.log("stanObj after modification is : " , stanObj);
// stanObj after modification is :
// {id: 2, property1: 'micu-pisicu', property2: 'lupusoru', property3: 'val3'}
// id: 2
// property1: "micu-pisicu"
// property2: "lupusoru"
// property3: "val3"

console.log("copyStanObj tre sa ramana neschimbat : " , copyStanObj);
// copyStanObj tre sa ramana neschimbat :
// {id: 2, property1: 'val1', property2: 'val2', property3: 'val3'}
// id: 2
// property1: "val1"
// property2: "val2"
// property3: "val3"



console.log("alwaysCopyStanObj e modificat ca si array-ul initial: " , alwaysCopyStanObj);
// alwaysCopyStanObj e modificat ca si array-ul initial:
// {id: 2, property1: 'micu-pisicu', property2: 'lupusoru', property3: 'val3'}
// id: 2
// property1: "micu-pisicu"
// property2: "lupusoru"
// property3: "val3"


//------------------------------------------------------------------------------
const myBrother="Alexandru Acornicesei";

document.getElementById('paragraph14').innerText=myBrother;
document.getElementById('paragraph14').style.color="IndianRed";
document.getElementById('paragraph14').style.textShadow="2px 2px gray";
document.getElementById('paragraph14').style.fontWeight="bold";

const copyBrother=[...myBrother];

const changeNameBtn=document.getElementById('changeNameBtn');
changeNameBtn.style.border="3px dashed yellow";
changeNameBtn.addEventListener("click" , changeBrotherNameFunc);
function changeBrotherNameFunc(event){
  event.preventDefault();
  console.log("this is : " , this);
  console.log("you clicked the change name of brother");
  this.previousElementSibling.style.backgroundColor="LightBlue";
  this.parentElement.style.backgroundColor="Khaki";
  this.style.border="3px solid black";
  return document.getElementById('paragraph14').innerText=copyBrother.map((el , index) => index %2 === 0 ? el.toUpperCase() : el.toLowerCase()).join(" / ");
}

//show obj on page

const woman={
  "id":1,
  "eyeColor":"blue",
  "tall":"1,75 m",
  "cloth":"pink dress",
  "age":45
}

const womanParagraph=document.getElementById('womanParagraph');
womanParagraph.style.border="3px dotted orange";
womanParagraph.innerText=Object.keys(woman).join(" , ") + Object.values(woman).join(" , ");

const allLiWom=document.querySelectorAll(".liWom");
console.log("-----allLiWom is arr : " , allLiWom);

for(let i=0 ; i<allLiWom.length ; i++){
  allLiWom[i].style.border="3px dashed yellow";
  allLiWom[i].style.padding="0.5em";
  allLiWom[i].style.margin="0.5em";
  allLiWom[i].innerText=Object.keys(woman)[i] + " : " +  Object.values(woman)[i];
}

//------------------------------------------------------------------------------
const animalsArr=["pig" , "girafa" , "cal" , "caprita" , "gaina"];

const animalParagraph=document.getElementById('animalParagraph');
animalParagraph.innerText=animalsArr.join(" , ");
//
const allliAnimal=document.querySelectorAll(".liAnimal");
for(let i=0 ; i<allliAnimal.length ; i++){
  allliAnimal[i].style.border="3px dashed yellow";
  allliAnimal[i].innerText=animalsArr[i];
  allliAnimal[i].style.textAlign="right";
}
//
const arrWithObjBirds=[
  {
    "name":"bird1",
    "color":"blue",
    "fly":"in the sky"
  },
  {
    "name":"bird2",
    "color":"yellow",
    "fly":"on the roof"
  },
  {
    "name":"bird3",
    "color":"green",
    "fly":"on the window"
  }
];
console.log("--- arrWithObjBirds is : " , arrWithObjBirds);
// --- arrWithObjBirds is :
// (3) [{…}, {…}, {…}]
// 0: {name: 'bird1', color: 'blue', fly: 'in the sky'}
// 1: {name: 'bird2', color: 'yellow', fly: 'on the roof'}
// 2: {name: 'bird3', color: 'green', fly: 'on the window'}
// length: 3

const allLiBird=document.querySelectorAll(".liBird");
for(let i=0 ; i<allLiBird.length ;i++){
  allLiBird[i].style.border="3px dotted indigo";
  allLiBird[i].innerText=arrWithObjBirds.map((el , index) =>{
    return el.name + " has color :  " + el.color + " and fly : " + el.fly + ".";
  })[i];
}

//--------or----------------------------------------------------------------------

const birdLis=arrWithObjBirds.map((el , index) =>{
  //el este fiecare obj bird din arrWithObjBirds arr
  const birdLi=document.createElement("li");
  birdLi.style.border="3px dashed orange";
  birdLi.innerText=el.name + " has color :  " + el.color + " and fly : " + el.fly + ".";
  return birdLi;
})

const birdUl=document.createElement("ul");
birdUl.style.border="3px solid gray";

birdLis.forEach(el =>{
  //el reprezinta fiecare birdLi
  birdUl.appendChild(el);
})

document.getElementById('section17').appendChild(birdUl);

//------------------------------------------------------------------------------TEMPLATE STRINGS

//TEMPLATE STRINGS (Sabloane pentru sir de caractere);

let name = "Gigel";
let surname = "Popovici";

const template1=`Name: ${name}\nPrenume: ${surname}`;
console.log("template1 is : " , template1);

const template1Paragraph=document.getElementById('template1Paragraph');
template1Paragraph.innerText=template1;
//-----
const template2=`Full name : ${name} ${surname}`;
console.log("template2 is : " , template2);

const template2Paragraph=document.getElementById('template2Paragraph');
template2Paragraph.innerText=template2;
//------------------------------------------------------------------------------

const template3=`Name: ${name.toUpperCase()} Surname: ${surname.split(" ").join("|")}`;
console.log("template3 is : " , template3);

const template3Paragraph=document.getElementById('template3Paragraph');
template3Paragraph.innerText=template3;

//------------------------------------------------------------------------------
const photoTemplate=document.getElementById('photo-template');
console.log("photoTemplate is : " , photoTemplate);
photoTemplate.src="../../assets/images/cake.jpg";
photoTemplate.style.height="300px";

//!!!DECI CODUL PUS INTRE ${cod javascript} VA FI EVALUAT NORMAL
///!!!OBSERVATIE: ce punem intre ${cod js} trebuie sa fie CONVERTIBIL la string

//-------------------------------------------------------------------------------
const arrStringsItems=["scaun" , "plomba" , "gard" , "patura" , "perdea"];

const templateArr = `first item is :${arrStringsItems[0]} and second item is :${arrStringsItems[1]}`;
console.log("templateArr is : ",templateArr);

const templateArr2=`third item: ${arrStringsItems[2]} and fourth item is: ${arrStringsItems[3].split("").join("|")}`;

const paragraphTemplateArray=document.getElementById('paragraphTemplateArray');
paragraphTemplateArray.innerText=templateArr2;

//------------------------------------------------------------------------------
//discord 19 04 19042022
const personEx = {
  name: "Vlad",
  lastName: "Popescu",
  yearOfBirth: 1431,
  proffesion: "Lord of Wallachia",
  srcObj:"../../assets/images/ginger.png",
  heightImg:"300px",
  borderObj:"3px solid yellowgreen"
};

const allLiPersonEx=document.querySelectorAll(".liPersonEx");
console.log("allLiPersonEx is an array : " , allLiPersonEx);

for(let i=0 ; i<allLiPersonEx.length ; i++){
  allLiPersonEx[i].style.border="3px solid pink";
  allLiPersonEx[i].style.padding="0.5em";
  allLiPersonEx[i].style.margin="0.5em";
}
allLiPersonEx[0].innerText=personEx.name;
allLiPersonEx[1].innerText=personEx.lastName;
allLiPersonEx[2].innerText=`Person ${personEx.name} ${personEx.lastName} was born in ${personEx.yearOfBirth} and has the proffesion of ${personEx.proffesion}`;

const exPersonImg=document.getElementById('exPersonImg');
exPersonImg.style.border=personEx.borderObj;
exPersonImg.style.height=personEx.heightImg;
exPersonImg.src=personEx.srcObj;

//------------------------------------------------------------------------------
const personsEx = [
  personEx ,
  {
    name: "Mircea",
    lastName: "Cel Batran",
    yearOfBirth: 1231,
    proffesion: "Jemcher"
  },
  {
    name: "Stefan",
    lastName: "Cel mare",
    yearOfBirth: 1430,
    proffesion: "Lord of Moldova"
  }
];
console.log("personsEx is : " , personsEx);//(3) [{…}, {…}, {…}]
console.log("personsEx.length is : " , personsEx.length);//3

//functia primeste ca parametru formal un obiect

function whoAreYou(eachPersonObj){
  return ` My name is ${eachPersonObj.name} ${eachPersonObj.lastName} .
  I am ${(new Date()).getFullYear() - eachPersonObj.yearOfBirth} .
  My profession is ${eachPersonObj.proffesion} .`
}

console.log("get full year shows : " , (new Date()).getFullYear());

console.log(whoAreYou(personEx));
// My name is Vlad Popescu .
//  I am 591 .
//  My profession is Lord of Wallachia .

//pt afisare in pagina folosesc functia de afisare forEach , nu are return

personsEx.forEach(el =>{
  //el este fiecare obiect din arrayul personsEx
  console.log(whoAreYou(el));
})

//------------------------------------------------------------------------------

const foodsArr=[
  {
    "index":1,
    "name":"food1",
    "color":"DarkBlue",
    "srcFoodObj":"../../assets/images/health.jpg",
    "height":"300px",
    "border":"3px solid pink"
  },
  {
    "index":2,
    "name":"food2",
    "color":"BlueViolet ",
    "srcFoodObj":"../../assets/images/healthy-food.jpg",
    "height":"300px",
    "border":"3px solid red"
  },
  {
    "index":3,
    "name":"food3",
    "color":"DarkCyan",
    "srcFoodObj":"../../assets/images/milk.jpg",
    "height":"300px",
    "border":"3px solid green"
  }
];
console.log("foodsArr is : " , foodsArr);//foodsArr is :  (3) [{…}, {…}, {…}]
console.log("foodsArr.length is : " , foodsArr.length);//3

const foodLis=foodsArr.map((el , index) =>{
  //foodLi este un li ce va primi cate un obiect(unele proprietati si valori) din foodsArr
  let foodLi=document.createElement("li");
  foodLi.style.margin="0.5em";
  foodLi.style.padding="0.5em";
  foodLi.style.backgroundColor=el.color;
  foodLi.style.border=el.border;
  foodLi.innerText=`The name of this dish is ${el.name} and the index is : ${el.index}`;
  //map are return
  return foodLi;
});

const foodUl=document.createElement("ul");
foodUl.style.border="3px solid yellowgreen";

foodLis.forEach(el =>{
  //el reprezinta fiecare foodLi
  foodUl.appendChild(el);
})

//map are return
const foodIMAGINI=foodsArr.map((el , index) =>{
  let foodImg=document.createElement("img");
  foodImg.src=el.srcFoodObj;
  foodImg.alt=`alt-${el.index}-img`;
  foodImg.style.height=el.height;
  foodImg.style.border=el.border;
  return foodImg;
})

document.getElementById('section20').appendChild(foodUl);

foodIMAGINI.forEach(el =>{
  //el reprezinta fiecare im
  foodUl.appendChild(el);
})

//------------------------------------------------------------------------------


const foodsArr2=[
  {
    "index":4,
    "name":"food4",
    "color":"LimeGreen",
    "backgroundDivObj":"url(../../assets/images/image-right1.jpg)",
    "height":"300px",
    "border":"3px solid IndianRed"
  },
  {
    "index":5,
    "name":"food5",
    "color":"yellow",
    "backgroundDivObj":"url(../../assets/images/onion.png)",
    "height":"300px",
    "border":"3px solid Khaki "
  },
  {
    "index":6,
    "name":"food6",
    "color":"orange",
    "backgroundDivObj":"url(../../assets/images/tomatoes.png)",
    "height":"300px",
    "border":"3px solid LawnGreen"
  },
  {
    "index":7,
    "name":"food7",
    "color":"yellowgreen",
    "backgroundDivObj":"url(../../assets/images/sugar.jpg)",
    "height":"300px",
    "border":"3px solid red"
  }
];

console.log("foodsArr2 is : " , foodsArr2);
console.log("foodsArr2.length is : " , foodsArr2.length);

const foodArticles=foodsArr2.map((el , index) =>{

  let divSingle=document.createElement("div");
  divSingle.style.border=el.border;
  divSingle.style.backgroundImage=el.backgroundDivObj;
  divSingle.style.padding="1em";
  divSingle.style.margin="0.5em calc(50% - 200px)";
  divSingle.style.height=el.height;
  divSingle.style.width="400px";
  divSingle.style.backgroundSize="cover";
  divSingle.style.backgroundPosition="center";
  divSingle.style.backgroundRepeat="no-repeat";
  divSingle.innerText=`Name of dish is ${el.name}.
                       The  index is ${el.index}.`;
  divSingle.style.color="black";

  return divSingle;
})

const divFood=document.createElement("div");
      divFood.style.border="3px dashed red";
      divFood.style.padding="0.5em";


foodArticles.forEach((el , index) =>{
  //el reprezinta fiecare divSingle
    divFood.appendChild(el);
})


document.getElementById('section21').appendChild(divFood);

//19 04 19042022 andrei

const button = {
  text: "Send message",
  id: "sendMsg",
  width: 100,
  padding: 20
};

function sendMsg(button) {
  return `This is a button.\nIt is ${button.width} wide.\nThe text on it says ${button.text}.`;
}
//se afiseaza in consola cu console.log() pt ca functia are return , nu are console.log()
console.log("sendMsg(button) is : " , sendMsg(button));

const andreiMessage=document.getElementById('andreiMessage');
andreiMessage.innerText=sendMsg(button);
andreiMessage.style.border="3px dotted orange";



















/////////////////////////
// let foodParagraph=document.createElement("p");
// foodParagraph.style.border="3px dotted indigo";
// foodParagraph.style.padding="0.5em";
// foodParagraph.style.margin="0.5em";
// foodParagraph.innerText=`Name of dish is ${el.name}.
//                          The  index is ${el.index}.`;
//
// let imgFood=document.createElement("img");
//     imgFood.style.height=el.height;
//     imgFood.style.border=el.border;
//     imgFood.style.padding="1em";
//     imgFood.src=el.srcFoodObj;
//     imgFood.alt=`img-${el.index}-food`;
//
//     return  foodParagraph , imgFood;
