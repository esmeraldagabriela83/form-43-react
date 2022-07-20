console.log("---------------mapFilterReduce.js");
//map() method height order function which receive callback function
//array.map(function(currentValue, index, arr), thisValue)

const numbers1 = [4, 9, 16, 25];
const newArr1 = numbers1.map(Math.sqrt);

console.log("numbers1 is : " , numbers1);
console.log("newArr1 is :" , newArr1);
///////////////////////////////////////////////////////////
const demo1=document.getElementById("demo1");
demo1.style.border="3px solid DarkViolet";
demo1.style.padding="0.5em";
demo1.innerText=newArr1;
//////////////////////////////

const numbers1Invers = [25, 16, 9, 4];
const newArr1Invers = numbers1Invers.map(Math.sqrt);

console.log("numbers1Invers is:" , numbers1Invers);
console.log("newArr1Invers is : " , newArr1Invers);
///////////////////////////////////////////////////////////
const demoInvers=document.getElementById("demoInvers");
demoInvers.style.border="3px solid DodgerBlue ";
demoInvers.style.padding="0.5em";
demoInvers.innerHTML=newArr1Invers;

/////////----------------------------------------------------------------------------------
const myArr=[1 , 55 , 7 , 89 , 4];

var add50=function(num){
  return num + 50;
}

const newMyArr=myArr.map(el =>{
  return add50(el)
});
console.log("myArr is: " , myArr);
console.log("newMyArr is: " , newMyArr);

const myLiArr=document.querySelectorAll(".myLi");
console.log("myLiArr is : " , myLiArr);

for(let j=0 ; j<myLiArr.length ; j++){
  myLiArr[j].style.border="3px solid gold";
  myLiArr[j].style.padding="0.5em";
myLiArr[j].innerText=newMyArr[j];
}
////////////////////////////////////////////////////////////////////////////////////////
const numbers2 = [65, 44, 12, 4];
//arr => arr
const newNumbers1=numbers2.map(myFunction2);

function myFunction2(num){
  return num * 10;
}

console.log("numbers2 is: " , numbers2);
console.log("newNumbers1 is : " , newNumbers1);
////////////////////////////////////////////////////////////////////////////
const number22= [65, 44, 12, 4];
//arr => arr
function myFunction22(num){
  return num * 200;
}

const newNumbers22=number22.map(el =>{
  return myFunction22(el)
})

console.log("number22 is: " , number22);
console.log("newNumbers22 is : " , newNumbers22);
//////////////////////////////////////////////////////////////////////////////////////////////////////

//array.join(separator)
//http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/jsref_join.asp.html#gsc.tab=0

var fruits = ["Banana", "Orange", "Apple", "Mango"];
//arr => string
var joinFruits=document.getElementById("joinFruits");
joinFruits.style.border="3px solid gold";
joinFruits.style.padding="0.5em";
joinFruits.innerHTML=fruits.join(" , ");

//////////////////

var vedges=["zmeura" , "portocale" , "alune" , "grau"];

var joinVedges=document.getElementById("joinVedges");
joinVedges.style.border="3px solid red";
joinVedges.style.padding="0.5em";

var joinVedgesBtn=document.getElementById("joinVedgesBtn");
joinVedgesBtn.style.border="3px solid red";
joinVedgesBtn.style.padding="0.5em";

function presentVedges(event){
  joinVedges.innerHTML=vedges.join(" // ");
}


joinVedgesBtn.addEventListener("click" , presentVedges);
//////////////////////////////////////////////////////////////////////////////////////////////////
//https://www.w3schools.com/jsref/jsref_map.asp
//Get the full name for each person:
//arr => string
const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

var demoPesons=document.getElementById("demoPesons");
demoPesons.style.border="3px solid Maroon";
demoPesons.style.padding="0.5em";

function getPerson(objPerson){
  return [objPerson.firstname , objPerson.lastname].join(" ");
}

demoPesons.innerHTML=persons.map(getPerson);
/////////////////////////////////////////////////////////////////////////////////////////////////////
//JavaScript Array forEach()
//array.forEach(function(currentValue, index, arr), thisValue)

//forEach al carei callback function primeste 2 parametri : item(fiecare el din array) si index
//arr => string
let textFruits = "";//string

const fruitsForEach = ["apple", "orange", "cherry"];

fruitsForEach.forEach(showFruit);

function showFruit(item , index){
 return textFruits += index + ": " + item + "<br>";
}

var demoForEach=document.getElementById("demoForEach");
demoForEach.style.border="3px solid MediumAquaMarine";
demoForEach.style.padding="0.5em";
demoForEach.innerHTML=textFruits;

//--------------------------------------------------------------------------------------------------------

var nr1=document.getElementById("nr1");
nr1.style.border="3px solid green";

var nr2=document.getElementById("nr2");
nr2.style.border="3px solid blue";

var nr3=document.getElementById("nr3");
nr3.style.border="3px solid yellow";

var sumParagraph=document.getElementById("sumParagraph");
sumParagraph.style.border="3px solid magenta";

var sumBtn=document.getElementById("sumBtn");
sumBtn.style.border="3px solid skyblue";

function addFunction(event){
  var t1=parseFloat(nr1.value);
  var t2=parseFloat(nr2.value);
  var t3=parseFloat(nr3.value);
  total=t1 + t2 +t3;
  console.log("t1 , t2 , t3 , total is: " , t1 , t2 , t3 , total);
  return sumParagraph.innerText=total ;
}

sumBtn.addEventListener("click" , addFunction);
///////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////-------------------------------------------suma nr dintr-un array

//forEach al carei callback function primeste 1 parametru : item(fiecare el din array) si intoarce un numar sum
//arr => arr
let numArr = [3 , 7 , 5 , 15 , 5];
let sum = 0;//number

function addEl(item){
  return sum += item;
}

numArr.forEach(addEl);
console.log("numArr is : " , numArr);
console.log("sum is : " , sum);
var sumArrNum=document.getElementById("sumArrNum");
sumArrNum.innerText=sum;
//

let numArrSec = [3 , 7 , 5 , 15 , 5];
let sumSec = 0;

function addElSec(item){
  return sumSec=sumSec + item;
}

numArrSec.forEach(addElSec);
console.log("sumSec" , sumSec);

var sumArrNumSec=document.getElementById("sumArrNumSec");
sumArrNumSec.innerText=sumSec;
///////////////////////////////////////////////////////////////////////////////
//the callback function from inside  forEach has 3 parameters : item, index, arr
let justNum=[3 , 5 , 7 , 9];
console.log("initial justNum is: " , justNum);
//apel callbackFunc pt ca nu este scrisa cu =
justNum.forEach(callbackFunc);
console.log("justNum after forEach is: " , justNum);

function callbackFunc(item , index , array){
  console.log("item * 10 is : " , item * 10);
  return array[index]=item * 10;
}

var stringFroArray=document.getElementById("stringFroArray");
stringFroArray.innerHTML=justNum;

//////////////////////////////
let justStrings=["fdgfghjgjhl" , "gg" , "jkg" , "fgkhgk"];
console.log("initial justStrings is : " , justStrings);

//apel callbackFunc pt ca nu este scrisa cu =
justStrings.forEach(cbF);
console.log("justStrings after forEach is : " , justStrings);

function cbF(item , index , array){
  console.log("array[index].length is : " , array[index].length);
  return array[index]=array[index].length;
}

var strNR=document.getElementById("strNR");
strNR.style.border="3px dashed green";
strNR.innerText=justStrings;
///------------------------------------------------------------------------------------

const nrsForLi= [2 , 3 , 4 , 5];
console.log("nrsForLi is : " , nrsForLi);

nrsForLi.forEach(liContentFcb);
///ATENTIE LA ORDINEA CORECTA A PARAMETRILOR FORMALI IN CALLBACK FUNCTION : item, index, array
function liContentFcb(item, index, array){
  console.log("item * 50 is : " , item * 50);
  return array[index]=item * 50;
}

console.log("nrsForLi after forEach is : " , nrsForLi);

const allLiNr=document.querySelectorAll(".liNr");
console.log("allLiNr is : " , allLiNr);

for(let i=0 ; i<allLiNr.length ; i++){
  allLiNr[i].style.border="3px dotted red";
  allLiNr[i].style.padding="0.5em";
  allLiNr[i].style.margin="0.5em";
  allLiNr[i].innerText=nrsForLi[i];
}

///
var toateNrArr=document.getElementById("toateNrArr");
console.log("toateNrArr is : " , toateNrArr);
toateNrArr.style.border="3px solid DeepPink ";
toateNrArr.style.padding="0.5em";
toateNrArr.innerHTML=nrsForLi;

///-----------------w 3 school mapFilterReduce
///--------------------https://www.w3schools.com/howto/howto_js_filter_elements.asp
///--------------------Filter DIV Elements

//---------------------https://www.w3schools.com/jsref/jsref_filter.asp
//array.filter(function(currentValue, index, arr), thisValue)
const ages = [32, 33, 16, 40];
console.log("-------------ages is : " , ages);

const demoFilter=document.getElementById("demoFilter");
demoFilter.style.border="3px dashed red";
demoFilter.style.padding="0.5em";
demoFilter.innerHTML=ages.filter(checkAdult);

function checkAdult(age) {
  console.log("age >= 18 are : " , age >= 18);
  return age >= 18;
}

////----------------------------------------------

const ages2 = [32, 33, 16, 40 , 10 , 5 , 8 , 3];
console.log("-------------ages2 is : " , ages2);

var demoFilter2=document.getElementById("demoFilter2");
demoFilter2.style.border="3px dashed DarkRed ";
demoFilter2.style.padding="0.5em";
demoFilter2.innerHTML=ages2.filter(under18cbf);

function under18cbf(currentValue, index, arr){
  let under18ages=[];
  if(currentValue < 18){
    console.log("currentValue < 18 are : " , currentValue < 18);
    return under18ages.push(currentValue);
  }
}
///////////////////////////////my try small and big strings
//https://www.w3schools.com/go/go_comparison_operators.php
//https://www.w3schools.com/js/js_operators.asp

const myStrings=["asd" , "nm" , "6" , "34e" , " asddff" , "dhgfhjgk" , "sdgfgkkkkkk kkkkkk"];
//<= 3 letters in the string
const presentStrings=document.getElementById("presentStrings");
presentStrings.style.border="3px dashed magenta";
presentStrings.style.padding="0.5em";
presentStrings.innerText=myStrings.join(" // ");
///

const smallStringsParagraph=document.getElementById("smallStringsParagraph") ;
smallStringsParagraph.style.border="3px solid black";
///
var smallStringsBtn=document.getElementById("smallStringsBtn");
smallStringsBtn.style.backgroundColor="yellow";
smallStringsBtn.style.color="DarkOliveGreen";

function cbFuncLess3(event){
smallStringsParagraph.innerHTML=myStrings.filter(checkStrings3);
}
//si pt tag p si pt ul
function checkStrings3(currentValue){
  console.log("currentValue <= 3 are : " , currentValue <= 3);
  return currentValue.length <= 3;
}

smallStringsBtn.addEventListener("click" , cbFuncLess3);
/////////////
const smallStringsBtnUl=document.getElementById("smallStringsBtnUl");
smallStringsBtnUl.style.backgroundColor="blue";
smallStringsBtnUl.style.color="floralwhite";

const smallStringAll=document.querySelectorAll(".smallString");

function cbFuncLess33(event){
  for(let i=0 ; i<smallStringAll.length ;i++){
    smallStringAll[i].style.border="3px dashed gray";
    smallStringAll[i].style.padding="0.5em";
  smallStringAll[i].innerText=myStrings.filter(checkStrings3)[i];
  }
}

smallStringsBtnUl.addEventListener("click" , cbFuncLess33);
//--------------------------------
//>= 3 letters in the string

const bigStringsParagraph=document.getElementById("bigStringsParagraph") ;
bigStringsParagraph.style.border="3px solid yellowgreen";
///
var bigStringsBtn=document.getElementById("bigStringsBtn");
bigStringsBtn.style.backgroundColor="DarkOliveGreen";
bigStringsBtn.style.color="yellow";
bigStringsBtn.addEventListener("click" , cbFuncLessMore3);

function cbFuncLessMore3(event){
  bigStringsParagraph.innerText=myStrings.filter(checkStringsMore3);
}

////si pt tag p si pt ul
function checkStringsMore3(currentValue, index, arr){
  let result=[];
  if(currentValue.length > 3){
    console.log("currentValue >3 are : " , currentValue >3);
  return  result.push(currentValue);
  }

}

///------
const bigStringsBtnUl=document.getElementById("bigStringsBtnUl");
bigStringsBtnUl.style.border="3px solid yellow";

const allbigString=document.querySelectorAll(".bigString");
console.log("allbigString is : " , allbigString);

bigStringsBtnUl.addEventListener("click" , bigStringCBFun);

function bigStringCBFun(event){
  for(let i=0 ; i<allbigString.length ; i++){
allbigString[i].style.border="3px dashed yellowgreen";
allbigString[i].style.padding="0.5em";
allbigString[i].innerText=myStrings.filter(checkStringsMore3)[i];
  }
}

///////////////////---------------------------------------------------------------------------
//https://www.w3schools.com/jsref/jsref_filter.asp
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_filter2

const nrToCheck=document.getElementById("nrToCheck");
nrToCheck.style.border="3px dashed yellowgreen";
nrToCheck.style.padding="0.5em";
nrToCheck.style.outline="none";

const nrToCheckBtn=document.getElementById('nrToCheckBtn');
nrToCheckBtn.style.border="3px dashed DarkTurquoise";
nrToCheckBtn.style.padding="0.5em";

const nrOverInputValueParagraph=document.getElementById("nrOverInputValueParagraph");
nrOverInputValueParagraph.style.border="3px dashed indigo";
nrOverInputValueParagraph.style.padding="0.5em";

//////////
const displayArrNumbers=document.getElementById("displayArrNumbers");
displayArrNumbers.style.border="3px dashed indigo";
displayArrNumbers.style.padding="0.5em";

const displayArrNumbersLength=document.querySelector(".displayArrNumbersLength");
displayArrNumbersLength.style.border="3px dashed red";
displayArrNumbersLength.style.padding="0.5em";

const nrOverInputValueParagraphLength=document.querySelector(".nrOverInputValueParagraphLength");
nrOverInputValueParagraphLength.style.border="3px dashed darkred";
nrOverInputValueParagraphLength.style.padding="0.5em";

const nrs = [32, 5 , 17, 4, 33, 12, 40 , 70, 56 , 3 , 10 , 20];

displayArrNumbers.innerText=nrs.join(" , ");
displayArrNumbersLength.innerText=nrs.length;
////////////////

function showBiggerNrs(event){
nrOverInputValueParagraph.innerText=nrs.filter(checkNrs);
nrOverInputValueParagraphLength.innerText=nrs.filter(checkNrs).length;
}

function checkNrs(currentValue, index, arr){
let resultNrs=[];
if(currentValue > nrToCheck.value){
  resultNrs.push(currentValue);
  console.log("resultNrs is : " , resultNrs);
  return resultNrs;
}

}

///////////
nrToCheckBtn.addEventListener("click" , showBiggerNrs);
/////////---------------

//https://www.w3schools.com/jsref/jsref_reduce.asp
//Syntax
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const numereLike=[1 , -1 , 2 , 3];
  let mySum = 0;
for(let i=0 ; i<numereLike.length ; i++){

  mySum = mySum + numereLike[i];
  console.log("mySum inside for loop is: " , mySum);
}
console.log("mySum outside for loop is : " , mySum);

var reduceLike=document.getElementById("reduceLike");
reduceLike.style.border="3px solid green";
reduceLike.innerText=mySum;
////---------------------------------------------

var reduceLikeFromFunc=document.getElementById('reduceLikeFromFunc');
reduceLikeFromFunc.style.border="3px solid red";

const numereLikeSec=[1 , -1 , 2 , 3];

function nrSum(arr){
  let mySumSec=0;
  for(let i=0 ; i<arr.length ; i++){
    mySumSec = mySumSec + arr[i];
    console.log("mySumSec is : " , mySumSec);
  }
  return mySumSec;
}

reduceLikeFromFunc.innerText=nrSum(numereLikeSec);
//---------- 464 ----- 450 ---------------------------------------with forEach() line 176---------------------

//https://www.youtube.com/watch?v=g1C40tDP0Bk
//JavaScript Array Reduce

//myArr.reduce(callbackFunction with 2 parameters: accumulator and current value)

const myArrayReduce=[1 , -1 , 2 , 3];

var reduce=document.getElementById("reduce");
reduce.style.border="3px solid magenta";
reduce.innerText=myArrayReduce.reduce((accumulator , currentValue) =>{
  return accumulator + currentValue;
}, 0);

///----------------------------------------------------------------------------
const myArrayReduce2=[1 , -1 , 2 , 3];

function callbackFuncReduce(accumulator , currentValue){
  console.log("accumulator is: " , accumulator);
  return accumulator = accumulator + currentValue;
}

var reduce2=document.getElementById("reduce2");
reduce2.style.border="3px solid yellow";
reduce2.innerText=myArrayReduce2.reduce(callbackFuncReduce , 0);

////-----------------------callback function din int lui reduce este o arrow function : () =>{}--------------------------------------------------------

const moshNrs=[1 , -1 , 2 , 3];

const moshSum=moshNrs.reduce((accumulator , currentValue) =>{
  return accumulator + currentValue;
} , 0);

console.log("moshSum is : " , moshSum);

var mosh1=document.getElementById("mosh1");
mosh1.style.border="3px solid cornflowerblue";
mosh1.innerText=moshSum;
///---------------reduce in one line callback arrow function
const moshNrs2=[1 , -1 , 2 , 3];

const moshSum2=moshNrs2.reduce((accumulator , currentValue) =>accumulator + currentValue ,0);
console.log("moshSum2 is : " , moshSum2);

var mosh2=document.getElementById("mosh2");
mosh2.style.border="3px solid orange";
mosh2.innerText=moshSum2;

//-------------------------------------------------------------------------------
//https://www.w3schools.com/jsref/jsref_min.asp
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_min

var demoMin=document.getElementById("demoMin");
demoMin.style.border="3px solid Cyan";
demoMin.style.padding="0.5em";
demoMin.innerText=Math.min(78 , 43);
//-------------------------------------------------------------------------------

var demoMin2=document.getElementById("demoMin2");
demoMin2.style.border="3px solid Cyan";
demoMin2.style.padding="0.5em";
demoMin2.innerText=Math.min(78 , 43 , 7 ,-3 * 100, 68 , -78);
//-------------------------------------------------------------------------------
var demoMax=document.getElementById("demoMax");
demoMax.style.border="3px solid magenta";
demoMax.style.padding="0.5em";
demoMax.innerText=Math.max(78 , 43);
//-------------------------------------------------------------------------------
var demoMax2=document.getElementById("demoMax2");
demoMax2.style.border="3px solid magenta";
demoMax2.style.padding="0.5em";
demoMax2.innerText=Math.max(78 , 43 , 7 ,3 * 100, 68 , -78);

//https://www.youtube.com/watch?v=kC3AasLEuBA&t=136s
//The Magic of the reduce Array Method

const scores=[90 ,30 , 20 , 75 , 85 , 95 , 0 , 55 , 60 , 40];

var totalTutorial=scores.reduce((accumulator , currentValue) => accumulator + currentValue ,0);
console.log("totalTutorial is : " , totalTutorial);

var minMax=scores.reduce((accumulator , currentValue) =>[Math.min(accumulator[0] , currentValue) , Math.max(accumulator[1] , currentValue)] ,[100 ,0]);
console.log("minMax is : " , minMax);

///////////////--------------------
//https://www.youtube.com/watch?v=kC3AasLEuBA&t=136s
//The Magic of the reduce Array Method

const tutorialStudents=[
  {
    userId:"oneStudent",
   name:"Steven",
   passFail:true
 },
 {
   userId:"twoStudent",
  name:"Debbie",
  passFail:true
},
{
  userId:"threeStudent",
 name:"Max",
 passFail:false
}
];

var studentObj=tutorialStudents.reduce(function(acc , person){
  return {...acc , [person.userId]:person}
} , {});

console.log("studentObj is : " , studentObj);
console.log(typeof(studentObj));//object

console.log("tutorialStudents.oneStudent is : " , studentObj.oneStudent);
console.log("tutorialStudents.oneStudent.name is : " , studentObj.oneStudent.name);

///Reduce: 10 Different Examples. JavaScript Fundamentals.
///https://www.youtube.com/watch?v=NiLUGy1Mh4U

const people=[
  {id:"one" , name:"Leigh" , age:35},
  {id:"two" , name:"Jenny" , age:30},
  {id:"three" , name:"Heather" , age:28},
];

//1 , count the number of people in this Array
const nrOfPeople=people.length;
console.log("nrOfPeople is : " , nrOfPeople);//3
//sau folosind reduce() method function
let nrOfPeopleReduce=people.reduce((acc , person) =>acc + 1 , 0);
console.log("nrOfPeopleReduce is : " , nrOfPeopleReduce);//3
var nrPersons=document.getElementById("nrPersons");
nrPersons.innerText=nrOfPeopleReduce;
//2 . try to find the sum of all ages of people 35 + 30 + 28

function addAges(array){
  let sumAges=0;
  for(let i=0 ; i<array.length ;i++){
    sumAges=sumAges + array[i].age;
  }
  return sumAges;
}
console.log("addAges(people) is : " , addAges(people));

var sumAgesClassic=document.getElementById("sumAgesClassic");
sumAgesClassic.style.border="3px solid magenta";
sumAgesClassic.style.padding="0.5em";
sumAgesClassic.innerText=addAges(people);
//with reduce:
let sumAgesPeople=people.reduce((acc , person) =>{
  return acc + person.age;
},0);

var sumAgesReduce=document.getElementById("sumAgesReduce");
sumAgesReduce.style.border="3px solid darkmagenta";
sumAgesReduce.style.padding="0.5em";
sumAgesReduce.innerText=sumAgesPeople;

//3.get array of names like mapping

function getFamilyNames(array){
  let familyNames=[];
  for(let i=0 ; i<array.length ; i++){
    familyNames.push(array[i].name);
  }
  return familyNames;
}
console.log("getFamilyNames(people) is : " , getFamilyNames(people));

var namesClassic=document.getElementById("namesClassic");
namesClassic.style.border="3px solid Chartreuse";
namesClassic.style.padding="0.5em";
namesClassic.innerText=getFamilyNames(people).join(" , ");
//with reduce

let famNames=people.reduce((acc , person) =>{
  //destructurare cu spread operaror pt a adauga cate un element (person.name) in array-ul initial gol: acc=[]
  return [...acc , person.name];
} , []);

console.log("famNames is : " , famNames);

const namesReduce=document.getElementById("namesReduce");
namesReduce.style.border="3px solid HotPink";
namesReduce.style.padding="0.5em";
namesReduce.innerText=famNames.join(" , ");
/////////////////////////
const allNamesReduce=document.querySelectorAll(".namesReduce");
console.log("allNamesReduce is : " , allNamesReduce);

for(let i=0 ; i<allNamesReduce.length ; i++){
allNamesReduce[i].style.border="3px solid blue";
allNamesReduce[i].style.padding="0.5em";
allNamesReduce[i].innerText=famNames[i];
}
///with map
function callbackFNames(arr){
  let initialNames=[];
  for(let i=0 ; i<arr.length ; i++){
     initialNames.push(arr[i].name);
  }
  return initialNames;
}
console.log("callbackFNames(people) is : " , callbackFNames(people));

let mapNames=callbackFNames(people);
console.log("mapNames is : " , mapNames);//['Leigh', 'Jenny', 'Heather']

var getNamesMap=document.getElementById("getNamesMap");
getNamesMap.style.border="3px solid darkblue";
getNamesMap.style.padding="0.5em";
getNamesMap.innerText=mapNames.join(" / ");
//4. convert to id => person lookup(dictionary) // lookup table
//find a person by id

//[person.id]:person

let peopleObj=people.reduce((acc , person) =>{
  return {...acc , [person.id]:person};
} , {});

console.log("peopleObj are : " , peopleObj);
console.log("peopleObj.three is : " , peopleObj.three);
console.log("peopleObj.three.name is : " , peopleObj.three.name);

console.log("peopleObj.two is : " , peopleObj.two);
console.log("peopleObj.two.name is : " , peopleObj.two.name);

//5.
//get max age
let maxAge=people.reduce((acc , person) =>{
  if(acc === null || person.age > acc){
    return person.age;
  }
  else{
    return acc;
  }
} , null);

console.log("maxAge is : " , maxAge);

//get min age
let minAge=people.reduce((acc , person) =>{
  if(acc === null || person.age < acc){
    return person.age;
  }
  else{
    return acc;
  }
} , null);

console.log("minAge is : " , minAge);

//6 . find a person by name , only the first person

let getByNameL=people.reduce((acc , person) =>{
  if(acc !== null){
    return acc;
  }else if(person.name === "Leigh"){
    return person;
  }else{
    return null;
  }
})
console.log("getByNameL is : " , getByNameL);

//
const orders=[
  {id:"1" , status:"pending"},
  {id:"2" , status:"pending"},
  {id:"1" , status:"cancelled"},
  {id:"2" , status:"shipped"}
];

let checkOrders=orders.reduce((acc , order) =>{
  return {...acc , [order.status]: (acc[order.status] || 0) + 1};
} , {});

console.log("checkOrders is : " , checkOrders);
//checkOrders is :  {pending: 2, cancelled: 1, shipped: 1}








































//
