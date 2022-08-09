console.log("my new tutorial");

//13 04 2022

//exemplu didactic

function testX(a,b){
  if( a > b) {
    return function(x){
      return a + x;
    }
  } else {
    return function(x){
      return b + x;
    }
  }
}
var z = testX(2,4);


console.log("ZZZ = ",z,z(5));
//map()

console.log("elena ex lecturer");
var cities = ["Krakow", "Olsztyn", "Szczecin", "Ostrow Wielkopolski"];
console.log("cities is : " , cities);
console.log("cities.length is : " , cities.length);

var citiesAfterMap=cities.map(function(el , index){
  return `name of town is : ${el} and it has the length ${el.length} . ` ;
});
console.log("citiesAfterMap is : " , citiesAfterMap);

var alleachCity=document.querySelectorAll(".eachCity");
console.log("alleachCity is : " , alleachCity);
for(let i=0 ; i<alleachCity.length ; i++){
  alleachCity[i].style.border="3px solid red";
  alleachCity[i].style.padding="0.5em";
  alleachCity[i].style.margin="0.5em";

    // alleachCity[i].innerText=cities[i] + " " +  cities[i].length;
    alleachCity[i].innerText=`${cities[i]} ${cities[i].length}`;
}
//--------------------forEach() pt afisare in consola  and map() pt return
var animals = ["cat", "shrimp", "giraffe"];
animals.forEach(function(el , index , arr){
  console.log(el , index);
})

var allforEachAnimal=document.querySelectorAll(".forEachAnimal");
for(let i=0 ; i<allforEachAnimal.length ; i++){
  allforEachAnimal[i].style.border="3px solid red";
  allforEachAnimal[i].style.padding="0.5em";
  allforEachAnimal[i].style.margin="0.5em";
  allforEachAnimal[i].innerText=animals.map(el =>el)[i] + " , " + animals.map((el , index) => index)[i] + " , " +  animals.map(function(currentElem, index){
    return currentElem.length;
  })[i];
}

//---
//ex 3
//With an array with years at your disposal, create a new array that will contain the age
// of the person born in a given year. Display the new array.
var yearsClassic = [1995, 1856, 2014, 1987];
console.log("yearsClassic is : " , yearsClassic);
//classic: imperativ  method with function , primeste ca parametru formal un array pt ca vreau sa obtin un array cu varstele reale;

//o functie numita measureAge !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var measureAge=function(arr){
let personAgeArray=[];

for(let i=0 ; i<arr.length ; i++){
    personAgeArray.push(2022 - arr[i]);
}
return personAgeArray;
}

console.log("measureAge(yearsClassic) is : " , measureAge(yearsClassic));

//functional method with map and arrow function
var yearsFunctional = [1995, 1856, 2014, 1987];
//
var getAgeArr = yearsFunctional.map(function(el){
   return 2022 - el ;;
})
console.log("getAgeArr is : " , getAgeArr);
var mapAgeParagraph=document.getElementById('mapAgeParagraph');
mapAgeParagraph.style.border="3px solid indigo";
mapAgeParagraph.innerText=getAgeArr.join(" , ");
//
var getAgeArrOneLine=yearsFunctional.map(el =>2022 - el);
console.log("getAgeArrOneLine is : " , getAgeArrOneLine);

var liAgeAll=document.querySelectorAll(".liAge");
for(let i=0 ; i<liAgeAll.length ; i++){
  liAgeAll[i].style.border="3px solid red";
  liAgeAll[i].style.padding="0.5em";
  liAgeAll[i].style.margin="0.5em";
  liAgeAll[i].innerText=getAgeArrOneLine[i];
}
//-------------------15 04 2022

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
//---------------15 04 2022

var ConstructorStudents=function(arrStudent){
  this.names=arrStudent;
  this.nrOfLetters=[];
}

ConstructorStudents.prototype.countLetters=function(){
  return this.nrOfLetters=this.names.map((el , index) =>{
    console.log("el is : " , el , " and index is : " , index);
    return el.length;
  })
}

var students = new ConstructorStudents(["Mary", "Al", "Gregory"]);
console.log("students is : " , students);
//apel functie metoda fara de care nu se afiseaza in consola sau in pagina
students.countLetters();
console.log("students.countLetters is : " , students.countLetters);

console.log("students.nrOfLetters is : " , students.nrOfLetters);

var allStudentsAge=document.getElementById("allStudentsAge");
allStudentsAge.style.border="3px solid darkred";
allStudentsAge.innerText=students.nrOfLetters + " " + students.names;
//---------------15 04 2022

var alleachStudent=document.querySelectorAll(".eachStudent");
for(let i=0 ; i<alleachStudent.length ; i++){
  alleachStudent[i].style.border="3px solid red";
  alleachStudent[i].style.padding="0.5em";
  alleachStudent[i].style.margin="0.5em";
  alleachStudent[i].innerText=students.nrOfLetters[i] + " , " + students.names[i];
}
//------------------

var ConstructorPersons=function(arrPersons){
  this.names=arrPersons;
  this.nrOfLetters=[];
}

ConstructorPersons.prototype.countLetters=function(){
  //OBSERVATII
    //1. Cand functia sageata are un singur parametru
    //   nu mai sunt necesare paranteze in jurul lui
    //2. Cand functia sageata face un singur calcul pe o singura linie
    //   nu mai e necesar return

    this.nrOfLetters=this.names.map(el => el.length);
}

var myPersons=new ConstructorPersons(["Alex" , "Ion" , "Al" , "Mihaela Gabriela"]);
//apel functie metoda fara de care nu se afiseaza in consola sau in pagina
myPersons.countLetters();
console.log("myPersons.nrOfLetters is : " , myPersons.nrOfLetters);

var allStudentsAgeOneLine=document.getElementById("allStudentsAgeOneLine");
allStudentsAgeOneLine.style.border="3px solid green";
allStudentsAgeOneLine.innerText=myPersons.names + " , "  + myPersons.nrOfLetters;

var alllineMapPerson=document.querySelectorAll(".lineMapPerson");
for(let i=0 ; i<alllineMapPerson.length ; i++){
  alllineMapPerson[i].style.border="3px solid red";
  alllineMapPerson[i].style.padding="0.5em";
  alllineMapPerson[i].style.margin="0.5em";
  alllineMapPerson[i].innerText=myPersons.nrOfLetters[i] + " , " + myPersons.names[i];
}

//---15 04 2022-----------------------------------------------------------------------------
/// PARAMETRI IMPLICITI AI FUNCTIILOR
//js Clasic
function test(a,b,c) {
  a = a === undefined ? 0 : a;
  b = b === undefined ? 0 : b;
  c = c === undefined ? 0 : c;
  console.log("a:",a,"b:",b,"c:",c);
  console.log(a+b+c);
}
//es6
function testEs6(a = 0,b = 0,c = 0){
  console.log("a:",a,"b:",b,"c:",c);
  console.log("a+b+c : " , a+b+c);
}

test(1,2,3);
test(4,5);
test(6)
test();
console.log("----------ES6----");
testEs6(1,2,3);
testEs6(4,5);
testEs6(6)
testEs6();

//classic function Before:
const classicHello=function(){
  console.log("Hello world classic !");
  return "return Hello world classic !";
}

var demoCassisFunc=document.getElementById('demoCassisFunc');
//apel functie
demoCassisFunc.innerText=classicHello();
demoCassisFunc.style.border="3px solid magenta";
demoCassisFunc.style.padding="0.5em";
demoCassisFunc.style.margin="0.5em";

///arrow function 15 04 2022 discord
const arrowHello= () =>{
console.log("Hello world arrow !");
return "Return arrow Hello World !";
}

var demoArrow1=document.getElementById('demoArrow1');

demoArrow1.innerText=arrowHello();
demoArrow1.style.border="3px solid BlueViolet";
demoArrow1.style.padding="0.5em";
demoArrow1.style.margin="0.5em";

//

helloArrowONEline = () => "return arrow one line Hello World!";

var demoArrowOneLine=document.getElementById("demoArrowOneLine");
demoArrowOneLine.innerText=helloArrowONEline();
demoArrowOneLine.style.border="3px solid Chartreuse";
demoArrowOneLine.style.padding="0.5em";
demoArrowOneLine.style.margin="0.5em";
//------------------------------------------------------------------------------

const addClassic=function(a , b){
  console.log(a , b , a + b);
  return a + b;
}
console.log("addClassic(10 , 45) is : " , addClassic(10 , 45));

var addClassicParagraph=document.getElementById("addClassicParagraph");
addClassicParagraph.style.border="3px solid yellowgreen";
addClassicParagraph.style.padding="0.5em";
addClassicParagraph.style.margin="0.5em";
addClassicParagraph.innerText=addClassic(25 , 25);

document.getElementById("addClassicParagraphSec").innerText=`this is another paragraph : ${addClassic(3 , 7)}`;
//arrow one line
let multiplyFunctionArrow = (a, b) => a * b;
console.log("multiplyFunctionArrow(4 , 5) is : " , multiplyFunctionArrow(4 , 5));

document.getElementById('multiplyArrowParagraph').innerText=multiplyFunctionArrow(3 , 70);
document.getElementById("multiplyArrowParagraphSec").innerText=`this is a second paragraph : ${multiplyFunctionArrow(6,9)}`;

//discord 15 08 2022

function xDiscord(a=1){
  console.log("a * 5 is : " , a * 5);
  return a * 3;
}
//apel functie
xDiscord();
console.log("---xDiscord(15) is : " , xDiscord(15));

var discordX=document.getElementById('discordX');
discordX.innerText=xDiscord(200);
document.getElementById('discordXspan').innerText=`I am span text : ${xDiscord(400)} !`;
//------------------------------------------------------------------------------
//if ternar 15 04 2022
function biggest(a=0 , b=0){
  return a >= b ? console.log("a is : " , a) : console.log("b is : " , b);
}
biggest(3 , 5);
biggest(100);
//
//if ternar
function myBiggest(a=0 , b=0){
  return a >= b ? a : b;
}
console.log("myBiggest(7 , 15) is : " , myBiggest(7 , 15));
console.log("myBiggest(11) is : " , myBiggest(11));

document.getElementById("spanMyBiggest").innerText=myBiggest(34 , 78);
document.getElementById('spanMyBiggest2').innerText=`my biggest functin : ${myBiggest(56 , 6)}`;

//15 04 2022 with arrow function
//exercise 4
var points = [40, 100, 1, 5, 25, 10];
console.log("points before sort is : " , points);
points.sort(function(a, b){return a-b});
console.log("points after sort is : " , points);

console.log("points[points.length - 2] is : " , points[points.length - 2]);

//

let getSecondMaxNumber = (array) => {

array.sort((a , b) => a - b);

  return array[array.length - 2];
}

var arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
console.log("arr1 is : " , arr1);
console.log("---getSecondMaxNumber(arr1) is : " , getSecondMaxNumber(arr1));
//
var arr2 = [4 , 67 , 78 , 2299 , 608 , 3 , 7];
console.log("arr2 is : " , arr2);
document.getElementById('getSecondNrSpan').innerText=getSecondMaxNumber(arr2);

//classic

function hello(val){
  console.log("Salut " , val);
  return "Salutare " + val + " !";
}

hello("Gigel");
console.log(hello("Andreea"));

document.getElementById('helloClassicParagraph').innerText=hello("Petrica");

//arrow Hello

helloArrow = (val) =>"Salutare arrow " + val +" !";

document.getElementById('helloArrowParagraph').innerText=helloArrow("Ana");

//arrow

helloArrow2 =(val) =>{
  console.log(val , " is going to the market !");
  return val + " is coming back from the market !";
}

document.getElementById('helloArrowParagraph2').innerText=helloArrow2("Ioana");

//sort() method

var myfruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("myfruits before sort is : " , myfruits);
// myfruits.sort();
// console.log("myfruits after sort is : " , myfruits);

var myfruitsParagraph=document.getElementById('myfruitsParagraph');
myfruitsParagraph.style.border="3px solid red";
myfruitsParagraph.style.padding="0.5em";
myfruitsParagraph.style.margin="0.5em";
myfruitsParagraph.innerText=myfruits;

var sortFruitsBtn=document.getElementById('sortFruitsBtn');
sortFruitsBtn.style.border="3px dotted pink";
sortFruitsBtn.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("this is : " , this);
  console.log("you clicked sort fruits btn");

  this.previousElementSibling.innerText=myfruits.sort();
});

// not working properly

//// Sort the numbers in the array in descending order
// The first item in the array (points[0]) is now the highest value
var points2 = [40, 100, 1, 5, 25, 10];

var sortNrParagraph=document.getElementById("sortNrParagraph");
sortNrParagraph.innerText=points2.join(" , ");

var sortNrBtn=document.getElementById('sortNrBtn');
sortNrBtn.style.border="3px dashed indigo";
sortNrBtn.addEventListener("click" , mySortFunc);

function mySortFunc(event){
  event.preventDefault();
  console.log("this is : " , this);
  console.log("you clicked sort numbers btn");

  sortNrParagraph.innerText=points2.sort((a , b) =>b - a);
}

//sort sortNrBtnAscending
//http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/jsref_sort.asp.html#gsc.tab=0

var pointsAscend = [400 , 26,  100, 1, 77, 250, 10];

var sortNrParagraph2=document.getElementById('sortNrParagraph2');
sortNrParagraph2.style.border="3px dotted magenta";
sortNrParagraph2.innerText=pointsAscend.join(" , ");

var sortNrBtnAscending=document.getElementById('sortNrBtnAscending');
sortNrBtnAscending.style.border="3px dotted yellowgreen";
sortNrBtnAscending.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("this is : " , this);
  console.log("you clicked ascending sort numbers btn");

  sortNrParagraph2.innerText=pointsAscend.sort(function(a , b){
    console.log(a , b , a - b);
    return a - b;
  })
})

//------------------------------------------------------------------------------

//reverse
//http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/jsref_reverse.asp.html#gsc.tab=0
var fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log("fruits2 is : " , fruits2);

var reverseFruitsParagraph=document.getElementById('reverseFruitsParagraph');
reverseFruitsParagraph.style.border="3px solid yellow";
reverseFruitsParagraph.style.padding="0.5em";
reverseFruitsParagraph.style.margin="0.5em";
reverseFruitsParagraph.innerText=fruits2.join(" , ");

var reverseFruitsBtn=document.getElementById('reverseFruitsBtn');
reverseFruitsBtn.style.border="3px dotted Coral";
reverseFruitsBtn.addEventListener("click" , myReverseFunc);

function myReverseFunc(event){
  event.preventDefault();
  console.log("this is : " , this);
  console.log("you clicked reverse fruits btn");

this.previousElementSibling.innerText=fruits2.reverse();
}

///reverse for numbers
const arrRev=[34 , 67 , 89 , 6 , 100 , 5 , 3];
console.log("arrRev before reverse is : " , arrRev);


console.log("arrRev.reverse() is : " , arrRev.reverse());//(7) [3, 5, 100, 6, 89, 67, 34]
//
const arrRev2=[3 , 67 , 598 , 97 , 54, 23 , 7];
console.log("arrRev2 is : " , arrRev2);

// const newarrRev2=arrRev2.reverse((a , b) => a - b);
// console.log("newarrRev2 is : " , newarrRev2);
//(7) [7, 23, 54, 97, 598, 67, 3]

const reverseNrParagraph=document.getElementById("reverseNrParagraph");
reverseNrParagraph.style.border="3px solid crimson";
reverseNrParagraph.innerText=arrRev2.join(" , ");

const reverseNrBtn=document.getElementById('reverseNrBtn');
reverseNrBtn.style.border="3px dotted deeppink";
reverseNrBtn.addEventListener("click" , myReverseNrFunc);

function myReverseNrFunc(event){
  event.preventDefault();
  console.log("this is : " , this);
  console.log("you clicked reverse nr btn");

  reverseNrParagraph.innerText="reverse nr are : " + arrRev2.reverse((a , b) => a - b).join(" , ");
}

//https://www.codegrepper.com/code-examples/javascript/sort+ascending+array+w3+schools

var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

console.log("items is : " , items);
//items is :  (6) [{…}, {…}, {…}, {…}, {…}, {…}]

var itemsNames=items.map((el , index) => el.name);
console.log("itemsNames is : " , itemsNames);

var itemsValues=items.map((el , index) => el.value);
console.log("itemsValues is : " , itemsValues);
//get sum of values using forEach
let sumValue=0;
items.forEach((item , index , arr) =>{
  console.log(index , item.value , sumValue);
sumValue=sumValue + item.value;
});

console.log("sumValue is : " , sumValue);
////get sum of values using reduce

var sumValues=items.reduce((acc , item , index , array) =>{
  console.log(index , item.value , acc);
  return acc + item.value;
} , 0);
console.log("sumValues is : " , sumValues);
//get product of values using reduce

var productValues=items.reduce((acc , item , index , array) =>{
  console.log(index , item.value , acc);
  return acc * item.value;
} , 1);
console.log("productValues is : " , productValues);
//productValues is :  -201817980

//get product of values using forEach

let productValue=1;

items.forEach((item , index , arr) =>{
    console.log(index , item.value , productValue);
    return productValue=productValue * item.value;
});
console.log("productValue is : " , productValue);
//productValue is :  -201817980

//sort items by values
const sortedValue=items.sort(function(a , b){
  return a.value - b.value;
});
console.log("sortedValue is : " , sortedValue);
//(6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 0: {name: 'The', value: -12}
// 1: {name: 'Magnetic', value: 13}
// 2: {name: 'Edward', value: 21}
// 3: {name: 'Sharpe', value: 37}
// 4: {name: 'Zeros', value: 37}
// 5: {name: 'And', value: 45}
// length: 6

// sort by name
const sortedNames=items.sort(function(a , b){
  var nameA=a.name.toUpperCase();
  var nameB=b.name.toUpperCase();
  if(nameA < nameB){
    return -1;
  }else if(nameA > nameB){
    return 1;
  }else{
    return 0;
  }
})
console.log("sortedNames is : " , sortedNames);

// (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 0: {name: 'And', value: 45}
// 1: {name: 'Edward', value: 21}
// 2: {name: 'Magnetic', value: 13}
// 3: {name: 'Sharpe', value: 37}
// 4: {name: 'The', value: -12}
// 5: {name: 'Zeros', value: 37}
// length: 6
//---
var items1 = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// const sortedValue1=items1.sort((a , b) => a.value - b.value);
// console.log("sortedValue1 is : " , sortedValue1);

const alleachITEMli=document.querySelectorAll(".eachITEMli");
for(let i=0 ; i<alleachITEMli.length ; i++){
  alleachITEMli[i].style.border="3px solid yellowgreen";
  alleachITEMli[i].style.padding="0.5em";
  alleachITEMli[i].style.margin="0.5em";
  alleachITEMli[i].innerText="obj.value is : " + items1[i].value;
}

const sortValuesBtn=document.getElementById("sortValuesBtn");
sortValuesBtn.style.border="3px dotted red";
sortValuesBtn.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("this is : " , this);
  console.log("you clicked sort values btn");

  for(let i=0 ; i<alleachITEMli.length ; i++){
    alleachITEMli[i].style.border="3px solid magenta";
    alleachITEMli[i].innerText="obj.value is : " + items1.sort((a , b) => a.value - b.value)[i].value;
  }
});
//15 04 2022 discord
//arrow function
//https://www.codegrepper.com/code-examples/javascript/javascript+arrow+function

// arrow function shorten way to write function
//it make easy to write callback function
const mynames=["Adelina" , "Al" , "Alex" , "Mihaela Gabi" , "Gheorghe" , "Ana" , "Jeni"];
console.log("mynames is : " , mynames);
//
const arrowFuncNamesLength=mynames.map((el , index) =>el.length <6 ? "short name" : "long name");
console.log("arrowFuncNamesLength is : " , arrowFuncNamesLength);
//(5) ['long name', 'short name', 'short name', 'long name', 'long name']
//
const arrowFuncNamesLengthReturn=mynames.map((el , index) =>{
  return el.length < 5 ? "Salut " + el : "Hello " + el;
})
console.log("arrowFuncNamesLengthReturn is : " , arrowFuncNamesLengthReturn);
//(7) ['Hello Adelina', 'Salut Al', 'Salut Alex', 'Hello Mihaela Gabi', 'Hello Gheorghe', 'Salut Ana', 'Salut Jeni']
//array.map => array

//classic function
function hello1(val){
  console.log("hello1 " , val);
}
//apel functie
hello1("Costel");//hello1  Costel
//----
//classic function
function hello2(val){
  return "hello2 " + val + " !";
}
//apel functie cu console.log() pt ca contine Return
console.log("hello2 is : " , hello2("Popescu"));

//classic function
const hello3=function(val1 , val2){
  return val1 + " is " + val2 + " years old .";
}
console.log("hello3 is : " , hello3("Anisoara" , 40));
//hello3 is :  Anisoara is 40 years old .

//arrow function
let arrowHello1 = () => {
  return "--- Hello World Arrow!";
}
//apel functie doar cu console.log() pt ca are return
console.log("arrowHello1() is : " , arrowHello1());

//arrow function with parameter
let greet=x => console.log(x);
greet("Buna ziua");//Buna ziua
greet(456789);//456789

let arrowFunc=x =>console.log(x + 10);
arrowFunc(55);//65

let arrowFuncName=x => console.log("Salut " , x ,  " !");
arrowFuncName("Gigel");//Salut  Gigel  !

////arrow function without parameter
let arrowSimpleFunc=() =>"I return a string";
console.log("arrowSimpleFunc is : " , arrowSimpleFunc());//arrowSimpleFunc is :  I return a string

let arrowWithParameters1=(a , b) => a * b +100;
console.log("arrowWithParameters1 is : " , arrowWithParameters1(3 , 5));

let arrowWithParameters2=(a , b) =>{
  return a < b ? "a este mai mic ca  b" : "a este mai mare ca b";
}
console.log("arrowWithParameters2 is : " , arrowWithParameters2(33 , 55));
console.log("arrowWithParameters2 is : " , arrowWithParameters2(44 , 11));

let arrowWithParameters3=(a , b) =>{
  if(a > b){
    let sum=a + b;
    console.log("sum" , sum);
    return "a + b is : " + sum + " , ";
  }else if(a < b){
    let sutraction=a - b;
    console.log("sutraction is : " , sutraction);
    return " a - b is : " + sutraction + " , ";
  }else{
    return " a = b " + a;
  }
}

document.getElementById("arrow1").innerText=arrowWithParameters3(15 , 7);
document.getElementById("arrow2").innerText=arrowWithParameters3(5 , 35);
document.getElementById("arrow3").innerText=arrowWithParameters3(45 , 45);

// function expression
let xFunc = function(x, y) {
   return x * y;
}
console.log("xFunc is : " , xFunc(20 , 5));//xFunc is :  100

//https://www.codegrepper.com/code-examples/javascript/node+js+arrow+function
multiplyfunc = (a, b) => { return a * b};
console.log("multiplyfunc is : " , multiplyfunc(30 , 5));//multiplyfunc is :  150

let mynumbers = (x, y, z) => (x + y + z) * 2;
console.log("mynumbers is : " , mynumbers(3, 5, 9));//mynumbers is :  34
//arr.map() => returns always back an arr
let myNumere=[3 , 5 , 9];
console.log("myNumere is : " , myNumere);
let myNrMap=myNumere.map((el , index) => el * 2);
console.log("myNrMap is : " , myNrMap);

//------------------------------------arrow function es6------------------------
//https://www.codegrepper.com/code-examples/javascript/arrow+function+in+es6

// The usual way of writing function
const magicClassic = function() {
  return new Date();
};
console.log("magicClassic is : " , magicClassic());

const allmymagic=document.querySelectorAll(".mymagic");
for(let i=0 ; i<allmymagic.length ; i++){
  allmymagic[i].style.border="3px dotted red";
  allmymagic[i].style.padding="0.5em";
  allmymagic[i].style.margin="0.5em";
}

document.querySelector(".magic1").innerText=magicClassic();

// Arrow function syntax is used to rewrite the function
const magicArrow = () => {
  return new Date();
};

document.querySelector(".magic2").innerText=magicArrow();
//arrow function one line
const magicArrowOneLine = () => new Date();
document.querySelector(".magic3").innerText=magicArrowOneLine();

//------------------------------------------------------------------------------

// Arrow functions with a single argument
const checkWeight = weight => {
  console.log(`---Baggage weight : ${weight} kilograms.`);
};
checkWeight(25); // Prints: Baggage weight : 25 kilograms.
//// Arrow functions with two arguments
const checkBox=(weight , height) =>{
  console.log(`weight is : ${weight} and height is : ${height} .`);
  return `My box is ${weight} wide and ${height} hight.`;
};

document.getElementById("boxCheck").innerText=checkBox(20 , 70);
document.getElementById("boxCheck2").innerText=checkBox(4 , 8);
//------------------------------------------------------------------------------
//1 option
const myPower=(base , exponent) =>{
  let result=1;
  for(let count = 0 ; count < exponent ; count++){
    result= result * base;
  }
  return result;
};
console.log("myPower is : " , myPower(3 , 2));//9
console.log("myPower is : " , myPower(2 , 3));//8

//------------------------------------------------------------------------------
//2 option but base=exponent
const myPower2=(x) =>{return x * x};
console.log(myPower2(3));
console.log(myPower2(5));

//3 option but base=exponent
const myPower3=x => x * x;
console.log(myPower3(4));
console.log(myPower3(7));

//https://www.w3schools.com/jsref/jsref_sqrt.asp

let a = Math.sqrt(0);
console.log("a is : " , a);
let b = Math.sqrt(1);
console.log("b is : " , b);
let c = Math.sqrt(9);
console.log("c is : " , c);
let d = Math.sqrt(49);
console.log("d is : " , d);
let e = Math.sqrt(-9);
console.log("e is : " , e);


//more examples and exercises
//https://softhunt.net/top-10-es6-features-by-example/

//w 3 school JSON
//https://www.w3schools.com/js/js_json.asp
//
