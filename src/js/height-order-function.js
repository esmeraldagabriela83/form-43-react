console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@I am in height-order-function.js");

//http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/jsref_sort.asp.html#gsc.tab=0

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("fruits" , fruits);//fruits (4) ['Banana', 'Orange', 'Apple', 'Mango']
// fruits.sort();
// console.log("fruits after sort method is: " , fruits);//fruits after sort method is:  (4) ['Apple', 'Banana', 'Mango', 'Orange']
///

var demoFruits=document.getElementById('demoFruits');
demoFruits.style.border="3px solid MediumBlue";
demoFruits.style.padding="0.5em";
demoFruits.style.margin="0.5em";

var fruitsFunctionBtn=document.getElementById("fruitsFunction");
fruitsFunctionBtn.style.border="3px solid MediumBlue";
fruitsFunctionBtn.style.padding="0.5em";
fruitsFunctionBtn.style.margin="0.5em";

function sortFruitsFunc(event){

  console.log("fruits after sort method is: " , fruits.sort());
  demoFruits.innerHTML=fruits.sort();
}

fruitsFunctionBtn.addEventListener("click" , sortFruitsFunc);

///////-------------------------------------------------------------------------------

var vegetables = ["castraveti", "ardei", "telina", "bostan"];
  // console.log("fruits after sort method is: " , fruits.sort());

var sortedVegetables=vegetables.sort();
  console.log("###sortedVegetables  are: " , sortedVegetables);

var allLiVegetables=document.querySelectorAll(".eachVegetable");
console.log("allLiVegetables are : " , allLiVegetables);

var vegetablesFunctionBtn=document.getElementById("vegetablesFunction");
vegetablesFunctionBtn.style.border="3px solid MediumBlue";
vegetablesFunctionBtn.style.padding="0.5em";
vegetablesFunctionBtn.style.margin="0.5em";

function sortVegetablesFunc(event){

for(let i=0 ; i<allLiVegetables.length ; i++){
allLiVegetables[i].style.border="3px solid gold";
allLiVegetables[i].innerText=sortedVegetables[i];
}

}

vegetablesFunctionBtn.addEventListener("click" , sortVegetablesFunc);
////////////////////////////////////////////////////////////////////////////////

//https://www.youtube.com/watch?v=O9lMynNdka4
//Higher Order Functions: A JavaScript Strong Point

//sort()method for arrays , primeste ca argument un callback function si atunci
//sort() devine height-order function

let things=["Building" , "Pisicu" , "car" , "bicycle" , "automobile" , "Tree" ,"Micu" , "house"];

console.log("things is : " , things);
//console.log("///////////////things.sort() is : " , things.sort());
/////////////////things.sort() is :  (8) ['Building', 'Micu', 'Pisicu', 'Tree', 'automobile', 'bicycle', 'car', 'house']

things.sort(function(a , b){
  let x = a.toLowerCase();
  let y = b.toLowerCase();
  if(x < y){ return -1 ;}
  if(x > y){ return  1 ;}
  return 0;
});

console.log("things after sort is : " , things);
//things after sort is :  (8) ['automobile', 'bicycle', 'Building', 'car', 'house', 'Micu', 'Pisicu', 'Tree']

//---------------------------------------------------------------------------------------------------------------------------------------

//must try
//https://www.youtube.com/watch?v=zCO3nv7idJw   JavaScript Fundamentals: Functions are Objects
//functions are objects // they can be passed around

//apel functie inainte de a declara functia pt ca nu are =
helloWorld1();

function helloWorld1(){
  console.log("hello world 1 and have a good day !");
}
//dupa declarare
helloWorld1();

/////////////////////////////////////////

var helloWorld2=function(){
  console.log("hello world 2 and have a good day !");
}

helloWorld2();

////////////////////////////////////////////

var helloWorld3=function(valName){
  console.log( `from ${valName} to everyone:` + " hello world 3 and have a good day !");
}

helloWorld3("Gigel");

//----------------------------------------------------------------------------------------------------------------------------------------
//Higher Order Functions - JavaScript Tutorial
//https://www.youtube.com/watch?v=0aKZvNNf8BA

//anonymous Functions which have no name but to which I assign to it a variable

const sayHello=function(){
  return "-------------Hello from js file" ;
}

console.log(sayHello());

//callback functions (are anonimus functions) which are passed to another functions

setTimeout(function(){
  console.log("--------------I show in console in 3 seconds");
} , 3000);

//named Functions ex: constructor function
function Person(anyName){
  this.name=anyName,
  this.canTalk=function(){
    console.log("bla bla bla");
  }
}
const person1=new Person("Gigel1");
console.log("person1 is : " , person1);//person1 is :  Person {name: 'Gigel1'}
console.log("person1.name is : " , person1.name);//person1.name is :  Gigel1

//apel functie , metoda
person1.canTalk();//bla bla bla
console.log("person1.canTalk is : " , person1.canTalk);//person1.canTalk is :  ƒ (){
  //   console.log("bla bla bla");
  // }

//object methods
const meMih={
  sayHelloMih(){
    console.log("Mih says Hello");
  }
}
//apel functie , metoda
meMih.sayHelloMih()

//------------------------------transformare in arrow functions--------------------------------------
//classic function
const sayHelloClassic=function(){
  console.log("classic Hello");
  return "classic function says hello!";
}
//apal functie afiseaza doar stringul din console.log()
sayHelloClassic("Andrei");//classic Hello Andrei
console.log(sayHelloClassic("Costel"));//afiseaza si ceea ce este in console.log si ceea ce intoarce return


const sayHelloClassicWithParameter=function(namePerson){
  console.log("classic Hello " , namePerson);
  return `Hello classic ${namePerson}`;
}
sayHelloClassicWithParameter("Margareta");//classic Hello  Margareta
console.log(sayHelloClassicWithParameter("Georgeta"));
//classic Hello  Georgeta
//Hello classic Georgeta
//arrow function is always an anonimus function and I have to assign it to a variable like const ES6 const and let
const sayHelloArrow=() => {
  console.log("arrow Hello");
  return "arrow function says hello!";
}
sayHelloArrow();//arrow Hello
console.log("sayHelloArrow() is : " , sayHelloArrow());//afiseaza si ceea ce este in console.log si ceea ce intoarce return
//
const sayHelloArrow2=(personName)=>{
  console.log("Ce mai faci , " , personName , " ?");
  return `Ce mai faci , ${personName}  ?`;
}
sayHelloArrow2("Ionela");
console.log(sayHelloArrow2("Gabi"));
////////////////

var functionContent=document.getElementById("functionContent");
functionContent.style.border="3px solid magenta";
functionContent.style.padding="1em";
functionContent.innerText=sayHelloArrow2("Mihaela");

function changeName(){
  functionContent.innerText=sayHelloArrow2("Gabriela");
}

setTimeout(changeName , 3000);
///////////////////////////////////////////////////////////////////

//arrow function cu 2 parametri

const saySalut=(firstName , lastName) =>{
  return ` Hello ${firstName} ${lastName} `;
}

var fname=document.getElementById("fname");
fname.style.color="white";
fname.style.backgroundColor="black";

var lname=document.getElementById("lname");
lname.style.color="pink";
lname.style.backgroundColor="Purple";
lname.style.outline="none";

var salutPersonBtn=document.getElementById("salutPersonBtn");
salutPersonBtn.style.border="3px solid red";

var salutPersonParagraph=document.getElementById("salutPersonParagraph");
salutPersonParagraph.style.border="3 dashed crimson";
salutPersonParagraph.style.padding="1em";

function showUserName(event){
salutPersonParagraph.innerText=saySalut(fname.value  , lname.value);
}

salutPersonBtn.addEventListener("click" , showUserName);
////////////////////////////////////////////////////////////////////////////////////
//arrow functions don`t get arguments by default //Arrow Functions JavaScript Tutorial - What NOT to do!!!
//https://www.youtube.com/watch?v=ajTvmGxWQF8&t=1032s
//setTimeout este height order function pt ca primesteo functie aninima callback in interiorul ei
setTimeout(function(){
  console.log("classic text after 3 seconds");
}, 3000);

setTimeout(() =>{
    console.log("arrow text after 3 seconds");
} , 3000);

//////////////////////////////////////////////////////////////////////////////////////////

var add=document.getElementById("add");
add.style.border="3px solid salmon";
add.style.padding="1em";
add.innerText="add1";

setTimeout(function(){
  add.innerText="add2";
},5000);

setTimeout( () =>{
    add.innerText="add3";
} , 10000)

var clearAdd=document.getElementById("clearAdd");
clearAdd.style.border="3px dashed gold";

function removeAddvetisingFuncCallback(event){
      add.innerText="";
}

clearAdd.addEventListener("click" , removeAddvetisingFuncCallback);
//////////////////////////////////////////////////////////////////////////////////////////////
function PersonClassic(n){
  this.name=n;
}
const angela=new PersonClassic("Angela");
console.log(angela.name);

////////---------------------------------------------------------------------
//object method

const me={
  talk:function(){
    console.log("nu stiu ce sa zic");
    return "I don`t know what to say";
  }
}
me.talk();//nu stiu ce sa zic
console.log("me.talk() is: " , me.talk());
//nu stiu ce sa zic
//me.talk() is:  I don`t know what to say

const you={
  talk:() =>{
    console.log("Tu intotdeauna stii ce sa zici");
    return "You always have the right words";
  }
}
you.talk();//Tu intotdeauna stii ce sa zici
console.log("you.talk() is: " , you.talk())
//Tu intotdeauna stii ce sa zici
//you.talk() is:  You always have the right words

const tanti={
  thinkPROP:() =>"She thinks she knows best",
  nameProp:"Maria"
}
console.log("tanti.thinkPROP() is: " , tanti.thinkPROP());
console.log("tanti.nameProp is: " , tanti.nameProp);

////////////////////////////////////////////////////////////
//keyword this isi schmba sensul in arrow function

const objMe={
  name:"Sina",
  talkClassic:function(){
    return this;
  },
  talkArrow:() =>{
    return this;
  }
}

console.log("objMe.name is: " , objMe.name)
console.log(objMe.talkClassic());//objMe
console.log(objMe.talkArrow());//window

//daca trebuie folosit cuvantul this se foloseste functia clasica ca metoda intr-un obiect

const objCat={
  name:"micuPisicu",
  talkClassic:function(){
    return this.name;
  }
}

console.log("objCat.name is: " , objCat.name);//objCat.name is:  micuPisicu
console.log(objCat.talkClassic());//micuPisicu

////////////////////////
const meTutorial={
  name:"Sina1",
  canta:function(){
    console.log("Aaaaaaaaaaaaaaaaaaaaaa")
  },
  sings:function(){
    setTimeout(() =>{
      console.log(this.name);
    })
  }
}

meTutorial.sings();//Sina1
meTutorial.canta();//Aaaaaaaaaaaaaaaaaaaaaa

//https://www.youtube.com/watch?v=ajTvmGxWQF8&t=1032s
//Arrow Functions JavaScript Tutorial - What NOT to do!!!

function PersonTutorial(n , m){
  this.name=n,
  this.surname=m,
  this.eat=function(){
    console.log("Person " ,this.name , " "  , this.surname , "eats vegetables .");
    return `${this.name} ${this.surname} lives longer because she eats vegetables`;
  },
  this.drink=function(p){
    console.log("Person " , this.name , " " , this.surname , "drinks " , p ,".");
    return `${this.name} ${this.surname} drinks ${p} every day.`
  }
}

const personM=new PersonTutorial("Marcica" , "Tudorache");
console.log("personM is: " , personM);

personM.eat();//Person  Marcica   Tudorache eats vegetablres .
console.log("personM.eat() is:" , personM.eat());
//personM.eat() is: Marcica Tudorache lives longer because she eats vegetables

personM.drink("water");//Person  Marcica   Tudorache drinks  water .
console.log(personM.drink("fanta"));
//Person  Marcica   Tudorache drinks  fanta .
//Marcica Tudorache drinks fanta every day.

///////////////////////////////////////////////////////////////////////////////////////////////

function PersonT(n , m){
  this.name=n,
  this.surname=m
}

PersonT.prototype.talkClassic=function(){
  return this;
}

PersonT.prototype.talkArrow=() =>{
  return this;
}

const meT=new PersonT("Aurel" , "Popescu") ;
console.log("meT is: " , meT);
console.log("-----------meT.talkClassic() is: " , meT.talkClassic());//meT
console.log("-----------meT.talkArrow() is: " , meT.talkArrow());//window

//---------------------------------------------------------------------------------------------------------------
//eventListeners are not to be used with arrow function
//DON`T USE ARROW FUNCTIONS FOR:
//-OBJECT methods
//-PROTOTYPES
//-CONSTRUCTORS
//EVENT HANDLERS

//----------------------------------HEIGHT-ORDER FUNCTIONS AND ARRAYS----------------------------------------------------------------------------------------------
//https://www.youtube.com/watch?v=rRgD1yVwIvE&t=1224s
//JavaScript Higher Order Functions & Arrays

const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

console.log("------------------------companies.length is : " , companies.length);

let compArr=[];

console.log("---------compArr before for loop is : " , compArr);

for(let i=0 ; i<companies.length ; i++){
  console.log(companies[i].name);
  compArr.push(companies[i].category);
}

console.log("----------compArr after for loop is : " , compArr);

//forEach

companies.forEach(function(company , index , companies){
  console.log("company.category is : " , company.category);
});

///map
let endsMap=companies.map(company => company.end);
console.log("------------startsMap is : " , endsMap);

var companiesParagraph=document.getElementById("companies");
companiesParagraph.style.border="3px solid GreenYellow";
companiesParagraph.style.padding="0.5em";
companiesParagraph.innerText=endsMap.join(" , ");


let startsMap=companies.map(company => company.start);
console.log("------------startsMap is : " , startsMap);

//

const alleachCompanyStart=document.querySelectorAll(".eachCompanyStart");
for(let i=0 ; i<alleachCompanyStart.length ; i++){
  alleachCompanyStart[i].style.border="3px solid Fuchsia ";
  alleachCompanyStart[i].style.padding="0.5em";
  alleachCompanyStart[i].innerText=startsMap[i];
}

//forEach

const numbersSchool = [65, 44, 12, 4];
console.log("numbersSchool before forEach is : " , numbersSchool);
numbersSchool.forEach(schoolFunction);
console.log("numbersSchool after forEach is : " , numbersSchool);

function schoolFunction(item, index, arr){
  return arr[index]= item + 100;
}

let mySchoolNr=document.getElementById("mySchoolNr");
mySchoolNr.style.border="3px solid indigo";
mySchoolNr.style.padding="0.5em";
mySchoolNr.innerText=numbersSchool.join(" / ");

////
companies.forEach(function(company , index , companies){
  console.log("company.start is : " , company.start * 1000);
});
//get the array elements I want from each object inside companies array
let categoryLength=companies.map(company => company.category.length);
console.log("-----length category-------categoryLength is : " , categoryLength);

categoryLength.forEach(plusLength);
console.log("-----length category after forEach-------categoryLength is : " , categoryLength);

function plusLength(item, index, arr){
  return arr[index] = item + 50;
}

const allEachPlusLength=document.querySelectorAll(".eachPlusLength");

for(let i=0 ; i<allEachPlusLength.length ; i++){
  allEachPlusLength[i].style.border="3px solid blue";
  allEachPlusLength[i].style.padding="0.5em";
  allEachPlusLength[i].innerText=categoryLength[i];
}

//

const numbersSch = [4, 9, 16, 25];
console.log("numbersSch before is:" , numbersSch);
let newNrSch=numbersSch.map(Math.sqrt);
console.log("newNrSch after map is " , newNrSch);

//https://www.youtube.com/watch?v=rRgD1yVwIvE&t=1224s
//JavaScript Higher Order Functions & Arrays
//filter

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const agesSquare=ages.map(age =>Math.sqrt(age))
console.log("agesSquare is : " , agesSquare);

const agesTimesTwo=ages.map(age =>age * 2);
console.log("agesTimesTwo is : " , agesTimesTwo);
console.log("agesTimesTwo.length is : " , agesTimesTwo.length);

const allageLi=document.querySelectorAll(".ageLi");
console.log("allageLi is : " , allageLi);
for(let i=0 ; i<allageLi.length ; i++){
  allageLi[i].style.border="3px dotted red";
  allageLi[i].style.padding="0.5em";
  allageLi[i].style.textAlign="right";
  allageLi[i].innerText=agesTimesTwo[i];
}

///////////////
const mapAges=ages.map(age =>age + 100).map(age =>age * 3);
console.log("------------mapAges is : " , mapAges);
//
const mapAgesParagraph=document.getElementById("mapAgesParagraph");
mapAgesParagraph.style.border="3px dotted red";
mapAgesParagraph.style.padding="0.5em";
mapAgesParagraph.innerText=mapAges.join(" / ");

////////////////https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_map3

const personsWithAge = [
  {firstname : "Malcom", lastname: "Reynolds" , age:67},
  {firstname : "Kaylee", lastname: "Frye" , age:34},
  {firstname : "Jayne", lastname: "Cobb" , age:5}
];
//
const ageArrFromOBJ=personsWithAge.map(person =>person.age);
console.log("ageArrFromOBJ is : " , ageArrFromOBJ);

const allPersAge=document.querySelectorAll(".persAge");
console.log("allPersAge is : " , allPersAge);

for(let i=0 ; i<allPersAge.length ; i++){
  allPersAge[i].style.border="3px dotted red";
  allPersAge[i].style.padding="0.5em";
  allPersAge[i].innerText=ageArrFromOBJ[i];
}
//
const firstnameArr=personsWithAge.map(person =>person.firstname);
console.log("firstnameArr is : " , firstnameArr);

const allFirstName=document.getElementById("allFirstName");
allFirstName.style.border="3px dotted yellow";
allFirstName.style.padding="0.5em";
allFirstName.innerText=firstnameArr.join(" , ");

//sort

const fruitsSort=["banane" , "caise" , "portocale" , "andive" , "zmeura"];
console.log("----------fruitsSort is : " , fruitsSort);
fruitsSort.sort();
console.log("--------------fruitsSort after sort is : " , fruitsSort);
fruitsSort.reverse();
console.log("--------------fruitsSort after reverse is : " , fruitsSort);

///////////////////------------------------------------------------------------------------

const points = [40, 100, 1, 5, 25, 10];
console.log("---points is : " , points);
points.sort(function(a, b){
  return a - b;
});
console.log("---points after sort is : " , points);// [1, 5, 10, 25, 40, 100]

const points2 = [40, 100, 1, 5, 25, 10];
points2.sort(function(a,b){
  return b - a;
})
console.log("---points2 after sort" , points2);

/////////-----------------------------------------------------------------------------------------

const companies2= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];
//sort companies by start year
const sortedCompanies2=companies2.sort(
  function(c1 ,c2){
    if(c1.start > c2.start){
      return 1;
    }else{
      return -1;
    }
  }
);

console.log("sortedCompanies2 is : " , sortedCompanies2);
//sort companies by start year
//use sort and operator ternar

const sortedTernarCompanies=companies2.sort((c1 , c2) =>(c1.start > c2.start ? 1 : -1));
console.log("sortedTernarCompanies is : " , sortedTernarCompanies);

//reduce
const ages2 = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

let ageSum=0;
for(let i = 0 ; i < ages2.length ; i++){
  ageSum = ageSum + ages2[i];
}
console.log("----ageSum is : " , ageSum);

//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const ageSumReduce=ages2.reduce(function(total , currentValue){
  return total=total + currentValue;
},0);
console.log("------ageSumReduce is : " , ageSumReduce);

////
const ageSumReduceOneLINE=ages2.reduce((total , currentValue) => total + currentValue , 0);
console.log("------ageSumReduceOneLINE is : " , ageSumReduceOneLINE);

const totalStrartYears=companies2.reduce((total , currentValue) =>total + currentValue.start ,0);
console.log("!!!!!!!!!!!!---------------totalStrartYears is : " , totalStrartYears);

const totalEndYears=companies2.reduce(function(total , currentValue){
  return total=total + currentValue.end;
} , 0);
console.log("!!!!!!!!!!!!---------------totalEndYears is : " , totalEndYears);

//GET TOTAL YEARS FOR ALL COMPANIES

const totalYears=companies2.reduce(function(total , currentValue){
  return total=total + (currentValue.end - currentValue.start);
} , 0);
console.log("!!!!!!!!!!!!---------------totalYears is : " , totalYears);

const totalYearsOneLine=companies2.reduce((total , currentValue) =>total + (currentValue.end - currentValue.start) ,0);
console.log("!!!!!!!!!!!!---------------totalYearsOneLine is : " , totalYearsOneLine);

//combine methods
const ages3 = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const combined=ages3
.map(age =>age * 2)
.filter(age =>age >= 40)
.sort((a , b) =>a - b)
.reduce((a ,b) =>a + b,0);

console.log("combined is : " , combined);

//https://www.w3schools.com/js/js_array_sort.asp
//Sorting ascending:
const points1Arr = [40, 100, 1, 5, 25, 10];
console.log("points1Arr is : " , points1Arr);
console.log("points1Arr.length is : " , points1Arr.length);

const points1heighestNR=document.getElementById("points1heighestNR");
points1heighestNR.style.border="3px dotted forestgreen";
points1heighestNR.style.padding="0.5em";

const points1Paragraph=document.getElementById("points1");
points1Paragraph.style.border="3px dotted gold";
points1Paragraph.style.padding="0.5em";
points1Paragraph.innerText=points1Arr.join(" , ");

const points1Btn=document.getElementById("points1Btn");
points1Btn.style.border="3px dotted red";
points1Btn.style.backgroundColor="gold";
points1Btn.style.color="white";
points1Btn.style.padding="0.5em";
points1Btn.addEventListener("click" , cbFuncSort);

function cbFuncSort(event){
return points1heighestNR.innerText=points1Arr.sort(function(a , b){
  return a - b;
})[5];
};
//
const points1NRLow=document.getElementById("points1NRLow");
points1NRLow.style.border="3px dotted green";
points1NRLow.style.padding="0.5em";

const points1BtnLow=document.getElementById("points1BtnLow");
points1BtnLow.style.border="3px dotted red";
points1BtnLow.style.backgroundColor="indigo";
points1BtnLow.style.color="white";
points1BtnLow.style.padding="0.5em";
points1BtnLow.addEventListener("click" , cbFuncReverse);

function cbFuncReverse(event){
  return points1NRLow.innerText=points1Arr.reverse(function(a , b){
    return b - a;
  })[5]
};

//
const mycars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

const allDisplayCarInitial=document.querySelectorAll(".display-car-initial");
console.log("-!-allDisplayCarInitial is : " , allDisplayCarInitial);

for(let i=0 ; i<allDisplayCarInitial.length ; i++){
  allDisplayCarInitial[i].style.border="3px solid yellow";
  allDisplayCarInitial[i].style.padding="0.5em";
  allDisplayCarInitial[i].innerText=mycars.map(el =>el.type)[i] + " " + mycars.map(el =>el.year)[i];
}
//

const displayAllMyCars=document.getElementById("displayAllMyCars");
displayAllMyCars.style.border="3px solid deeppink";
displayAllMyCars.style.padding="0.5em";



function displayCar(){
displayAllMyCars.innerHTML=
mycars[0].type + " " + mycars[0].year + "<br>" +
  mycars[1].type + " " + mycars[1].year + "<br>" +
  mycars[2].type + " " + mycars[2].year;
}
//apel functie pt afisare pe ecran
displayCar();

//https://www.w3schools.com/js/js_array_sort.asp
//https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_object1

const myCats = [
  {type:"cat1", year:2005},
  {type:"cat2", year:2003},
  {type:"cat3", year:2001},
  {type:"cat4", year:2006},
  {type:"cat5", year:2002},
  {type:"cat6", year:2004}
];

var allCatLi=document.querySelectorAll(".catLi");
console.log("allCatLi is : " , allCatLi);

for(let i=0 ; i<allCatLi.length ; i++){
  allCatLi[i].style.border="3px solid red";
  allCatLi[i].style.padding="0.5em";
  allCatLi[i].style.margin="0.5em";
  allCatLi[i].innerText=myCats.map(el =>el.year).sort(function(a ,b){
    return a - b;
  })[i];
}
////////////////https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_object2

const myDogs = [
  {type:"dog1", year:2005},
  {type:"dog2", year:2003},
  {type:"dog3", year:2001},
  {type:"dog4", year:2006},
  {type:"dog5", year:2002},
  {type:"dog6", year:2004}
];

const allDogLi=document.querySelectorAll(".dogLi");
console.log("allDogLi is : " , allDogLi);

for(let i=0 ; i < allDogLi.length ; i++){
  allDogLi[i].style.border="3px solid Crimson";
  allDogLi[i].style.padding="0.5em";
  allDogLi[i].style.margin="0.5em";
  allDogLi[i].innerText=myDogs.map(el =>el.year)[i] + " " + myDogs.map(el =>el.type)[i];
}

const sortBtn=document.getElementById("sortBtn");
sortBtn.style.border="3px solid Crimson";
sortBtn.style.padding="0.5em";

sortBtn.addEventListener("click" , sortFunc);

function sortFunc(event){
  for(let i=0 ; i < allDogLi.length ; i++){
    allDogLi[i].style.border="3px solid cornflowerblue";
    allDogLi[i].style.padding="0.5em";
    allDogLi[i].style.margin="0.5em";
    allDogLi[i].innerText=myDogs.map(el =>el.year).sort(function(a , b){
      return a - b;
    })[i] + " " + myDogs.map(el =>el.type)[i];
  }
}
///////////https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_object2

const birds = [
  {type:"PasareOne", year:2016},
  {type:"PasareAlba", year:2001},
  {type:"GALBENPASARE", year:2010},
  {type:"BIRD", year:2010},
];

const demoBird=document.getElementById("demoBird");
demoBird.style.border="3px solid cornflowerblue";
demoBird.style.padding="0.5em";
demoBird.style.margin="0.5em";
demoBird.innerText=birds.map(el =>el.type).join(" / ");

const sortTypeBtn=document.getElementById("sortTypeBtn");
sortTypeBtn.style.border="3px solid yellow";
sortTypeBtn.style.padding="0.5em";
sortTypeBtn.style.margin="0.5em";
sortTypeBtn.addEventListener("click" , sortBirdsFunc);

function sortBirdsFunc(event){

demoBird.innerText=birds.sort(function(a , b){
  let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
})
  demoBird.innerText=birds.map(el =>el.type).join(" / ");
}




























//
