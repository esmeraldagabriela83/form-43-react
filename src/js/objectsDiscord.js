console.log("hello from objectsDiscord.js ");

//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_classlist_add
//https://www.w3schools.com/jsref/prop_element_classlist.asp
//classList.add()
var myDIV1=document.getElementById('myDIV1');
myDIV1.style.border="3px solid yellow";

function myFunction(){
  console.log("you clicked the first button on the page");
  console.log("this is: " , this);
  myDIV1.classList.add("myStyle1");
  myDIV1.style.boxShadow="10px 5px 5px red";
}

//box shadow effect
//https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow

//classList.remove()------------------------------------------------------------------------------

var myDIV2=document.getElementById('myDIV2');
myDIV2.style.margin="0.5em 0";

var outsideParagraph=document.getElementById("outsideParagraph");
outsideParagraph.style.backgroundColor="yellowgreen";

var btn2=document.getElementById('btn2');
btn2.style.border="3px solid olive";
btn2.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("you clicked the second button on the page");
  console.log("this is: " , this);
  this.nextElementSibling.style.border="3px solid magenta";
  this.nextElementSibling.classList.add("myStyle2");

  this.parentElement.style.backgroundColor="pink";
  outsideParagraph.style.border="3px solid forestgreen";

  this.previousElementSibling.classList.add("myPrevStyle");
})

//-------------------------------------------------------------------------------
//https://www.w3schools.com/jsref/prop_element_classlist.asp
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_classlist_remove

var myDIV3=document.getElementById('myDIV3');
myDIV3.style.border="3px solid olive";
myDIV3.style.boxShadow="3px 3px red, -1em 0 .4em olive;";

var removeStyle3=document.getElementById('removeStyle3');
removeStyle3.style.border="3px dotted red";
removeStyle3.addEventListener("click" , removeClassFunc);

function removeClassFunc(event){
  event.preventDefault();
  console.log("you clicked the remove effect button on the page");
  console.log("this is: " , this);

  return myDIV3.classList.remove("myStyle3"),

  this.parentElement.style.backgroundColor="Gainsboro",

  this.parentElement.children[5].style.border="3px solid magenta",

  this.parentElement.children[0].style.backgroundColor="crimson",
  this.parentElement.children[0].style.color="white";
}

//classList.toggle()--------------------------------------------------------------------------------------
//https://www.w3schools.com/jsref/prop_element_classlist.asp
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_classlist_toggle

var myDIV4=document.getElementById("myDIV4");
myDIV4.style.border="3px solid green";

var toggleBtn=document.getElementById("toggleBtn");
toggleBtn.style.border="3px dashed forestgreen";
toggleBtn.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("you clicked the toggle effect button on the page");
  console.log("this is: " , this);

  myDIV4.classList.toggle("myStyle4");
})
//--------------------------------------------------------------------------------------------------
//13 04 2022

//1. Se da un array, sa se faca suma numerelor din array

//ABORDARE IMPERATIVA

var arr1 = [1,2,3,4,5,6,7];

function makeSum1(array){
  var sum = 0;

  for(var i = 0; i < array.length; i++){
    sum += array[i];
    console.log("sum from inside makeSum1 is : " , sum);
  }
  return sum;
}

var forEachImperativ=document.getElementById('forEachImperativ');
forEachImperativ.style.border="3px dotted red";
forEachImperativ.style.padding="0.5em";
forEachImperativ.innerText=makeSum1(arr1);
//-----------------------------------------------------------------------------------
//ABORDARE FUNCTIONALA (metoda forEach)

//!!! NU ARE return
//!!! O FOLOSIM DOAR PENTRU PARCURS (folosim variabile globale pentru calcul)
var sum2 = 0;
console.log("start foreach");

var arr2 = [1,2,3,4,5,6,7];

arr2.forEach(function(currentElement , index){
  sum2 += currentElement;
});

var forEachFunctional=document.getElementById("forEachFunctional");
forEachFunctional.style.border="3px dotted indigo";
forEachFunctional.style.padding="0.5em";
forEachFunctional.innerText=sum2;

//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_foreach2
const numbers = [65, 44, 12, 4];
let sum3=0;

var demo1=document.getElementById("demo1");
demo1.style.border="3px dotted orange";
demo1.style.padding="0.5em";
demo1.style.margin="0.5em";

demo1.innerText=numbers.forEach(callbackFunc1);
//currentElement sau element sau item
//i-ul din for loop devine index
function callbackFunc1(currentElement , index){
  console.log("currentElement is : " , currentElement ,"index is : " , index)
  sum3=sum3 + currentElement;
  return sum3;
}
demo1.innerText=sum3;
//------------------------------------------------------------------------------

const numbers2 = [65, 44, 12, 4];

var demo2=document.getElementById('demo2');
demo2.style.border="3px dotted BlueViolet";
demo2.style.padding="0.5em";
demo2.style.margin="0.5em";

numbers2.forEach(callbackFunc2);
//ATENTIE LA ORDINEA PARAMETRILOR FORMALI : item , index , array
function callbackFunc2(item , index , array){
  console.log(array[index] , index);
  return array[index] = item * 10;
}

demo2.innerHTML=numbers2;
//
var forEachLiAll=document.querySelectorAll(".forEachLi");
for(let i=0 ; i<forEachLiAll.length ; i++){
  forEachLiAll[i].innerText=numbers2[i];

  forEachLiAll[i].style.border="3px dotted BurlyWood";
  forEachLiAll[i].style.padding="0.5em";
  forEachLiAll[i].style.margin="0.5em";
  forEachLiAll[i].style.textAlign="center";
}

//
///"DESFASURARE" forEach (ca functie);
//void myForeach(Array gigi, function callback)
function myForeach(arr,callback) {
    for(var i = 0; i < arr.length; i++){
      callback(arr[i],i);
    }
}

var arrX = [2,3,1,6,7,8,9];
myForeach(arrX,function(el,idx){
  console.log("EL : ",el, " idx: ",idx);
})
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_foreach
//https://www.w3schools.com/jsref/jsref_foreach.asp

let text = "";
const fruits1 = ["apple", "orange", "cherry"];

var demo3=document.getElementById('demo3');
demo3.style.border="3px dotted indigo";
demo3.style.padding="0.5em";
demo3.style.margin="0.5em";


fruits1.forEach(callbackFunc3);
//ATENTIE ATENTIE ATENTIE += +
function callbackFunc3(item , index , array){
  return text += index + ": " + item + "<br>";
}

demo3.innerHTML=text;

///13 04 2022 grupa 1 discord
//map
//1. Sa se parcurga un array si sa obtin un array care contine jumatatile valorilor din primul

//ex: inputArr = [2,4,6,7,10] output = [1,2,3,3.5,5];

//IMPERATIVA
var arrIn = [2,4,6,7,10];
console.log("arrIn is : " , arrIn);
var arrOut = [];
console.log("arrOut before for loop is : " , arrOut);

for(let i=0 ; i<arrIn.length ; i++){
arrOut.push(arrIn[i] / 2);
}
console.log("arrOut after for loop is : " , arrOut);
//----
var arrIn2 = [10,14,36,17,110];
console.log("arrIn2 is : " , arrIn2);
var arrOut2 = [];
console.log("arrOut2 before for loop is : " , arrOut2);

for(let i=0 ; i<arrIn2.length ; i++){
  arrOut2.push(arrIn2[i]/2);
}

var beforeMapAll=document.querySelectorAll(".beforeMap");
for(let i=0; i<beforeMapAll.length ; i++){
  beforeMapAll[i].style.border="3px dotted yellow";
  beforeMapAll[i].style.padding="0.5em";
  beforeMapAll[i].style.margin="0.5em";
  beforeMapAll[i].innerText=arrIn2[i];
}

var divideNr=document.getElementById("divideNr");
divideNr.style.border="3px solid indigo";
divideNr.addEventListener("click" , divideCallbackFunc);

function divideCallbackFunc(event){
  event.preventDefault();
  console.log("you clicked the divide button on the page");
  console.log("this is: " , this);
  for(let i=0 ; i<arrIn2.length ; i++){

for(let j=0 ; j<beforeMapAll.length ; j++){
  beforeMapAll[j].innerText=arrOut2[j];
}

  }
}

//------

//FUNCtiONALA (metoda map)
//intoarce un array cu aceeasi dimensoiune cu cel intial
//!!!map are intotdeauna return in corp

//arrow function one line
var input1=[34 , 60, 78 , 678];
console.log("input1 before map is : " , input1);

var output1=input1.map(el =>el / 2);
console.log("output1 is : " , output1);

//classic arrow function cu callback function inside it
var output11=input1.map(function(el,index){
  return el=el/2;
})
console.log("output11 is : " , output11);

//reduce 13 04 2022

//FUNCtiONQLA CU (reduce)
//se aplica pe array, DAR intoarce o valoare
//foarte potrivita pentru acumulari
//al doilea parametru al lui reduce initializeaza accumulator
            //daca lipseste al doilea param atunci acumulator este
            //PRIMUL ELEMENT DIN ARRAY-ul pe care se aplica

//accumulator poate fi orice nr dar poate fi 1 sau 0   }0) sau }1)

//Atentie la ordinea parametrilor formale: acc , currentElement , index

var inputReduce=[1, 2 , 3 , 7, 4];
console.log("inputReduce is : " , inputReduce);

var outputReduce=inputReduce.reduce(function(accumulator , currentElement , index){
  console.log("accumulator is : " , accumulator , "currentElement is : " ,  currentElement , "index is : ", index);
  return accumulator + currentElement;
},0);
console.log("outputReduce is : " , outputReduce);
//--
var inputReduceProdus=[5, 20 , 3 , 7, 4];
console.log("inputReduceProdus is : " , inputReduceProdus);

var outputReduceProdus=inputReduceProdus.reduce(function(acc, el, index){
  console.log("acc is : " , acc , "el is : " , el , "index is : " , index);
  return acc * el;
},1);
console.log("outputReduceProdus is : " , outputReduceProdus);//8400

//filter
//3. Sa se parcurga un array si sa se introduca intr-unl alt
//array doar numerele pare

//IMPERATIV

var arr3 = [1,2,4,6,3,5,7,8,9];
console.log("arr3 is : " , arr3);
//out: [2,4,6,8]

var parr = [];
console.log("parr before filter like for loop is : " , parr);

for(let i=0 ; i<arr3.length ; i++){
//if conditional
if(arr3[i] % 2 === 0){
  parr.push(arr3[i]);
}else{
  console.log("nr impar");
}
}

console.log("parr is : " , parr);
//---!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var myNr=[1, 3 , 4 , 66 , 77 , 8, 60];
var oddArr=[];

var filterLike=document.getElementById('filterLike');
filterLike.style.border="3px dotted yellow";
filterLike.style.padding="0.5em";
filterLike.style.margin="0.5em";
filterLike.innerText=myNr.join(" , ");

var getOddNrBtn=document.getElementById("getOddNrBtn");
getOddNrBtn.style.border="3px solid red";
getOddNrBtn.addEventListener("click", function(event){
  event.preventDefault();
  console.log("you clicked the get odd nr button on the page");
  console.log("this is: " , this);
for(let i=0 ; i<myNr.length ; i++){
  if(myNr[i] % 2 !== 0){
    oddArr.push(myNr[i]);
  }
}
return filterLike.innerText=oddArr.join(" , ");;

})
//--------------13 04 2022

//FUNCTIONAL (metoda filter)
//contine return
//AUXILIAR

var allNrs=[3 , 4 , 5 , 6 , 7 , 8 , 9, 10];
var evenNrArr=[];

var numerePare=allNrs.filter(function(el,index){
  //return conditie
  //can conditia e ADEVARATA se pastreaza valoarea
  evenNrArr.push(el % 2 === 0);
  return el % 2 === 0;
})
console.log("numerePare is : " , numerePare);//(4) [4, 6, 8, 10]
console.log("evenNrArr is : " , evenNrArr);//(8) [false, true, false, true, false, true, false, true]
//
var allNrs2=[100 , 40 , 5 , 6 , 7 , 8 , 9, 10];

var evenNrArr2=allNrs2.filter(function(el, inndex){
  return el % 2 === 0 ;
})

var filterMethod=document.getElementById("filterMethod");
filterMethod.style.border="3px dotted Chartreuse";
filterMethod.style.padding="0.5em";
filterMethod.style.margin="0.5em";
filterMethod.innerText=allNrs2.join(" , ");

var getEvenNrBtn=document.getElementById("getEvenNrBtn");
getEvenNrBtn.style.border="3px solid indigo";
getEvenNrBtn.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("you clicked the get even nr button on the page");
  console.log("this is: " , this);

  this.previousElementSibling.innerText=evenNrArr2.join(" , ");
})
//discord 13 04 2022
///"DESFASURARE" forEach (ca functie);
//void myForeach(Array gigi, function callback)

function discordForEach(arr , callback){
  for(let i=0 ; i<arr.length ; i++){
    callback(arr[i]);
  }
}

var arrD = [2,3,1,6,7,8,9];

discordForEach(arrD , function(el){
  console.log(el , "el + 5 is : " , el + 5);
  return el * 10;
})

//map w 3 school
//syntax
//array.map(function(currentValue, index, arr), thisValue)

const numbersMap = [4, 9, 16, 25];

var demo4=document.getElementById("demo4");
demo4.style.border="3px dotted Chartreuse";
demo4.style.padding="0.5em";
demo4.style.margin="0.5em";
demo4.innerText=numbersMap.map(Math.sqrt);
//-------------------------------------------------------------------------------------------------------
const schoolNumbers = [65, 44, 12, 4];
console.log("schoolNumbers is : " , schoolNumbers);
const schoolNumbersMap=schoolNumbers.map(function(el , index){
  return el * 100;
});
console.log("schoolNumbersMap is : " , schoolNumbersMap);

var allmapLi=document.querySelectorAll(".mapLi");
for(let i=0 ; i<allmapLi.length ; i++){
  allmapLi[i].style.border="3px dotted forestgreen";
  allmapLi[i].style.padding="0.5em";
  allmapLi[i].style.margin="0.5em";
  allmapLi[i].innerText=numbersMap[i];
  allmapLi[i].style.textAlign="center";
}

var multiplyNr=document.getElementById("multiplyNr");
multiplyNr.style.border="3px solid pink";
multiplyNr.addEventListener("click" , callbackMap);

function callbackMap(event){
  event.preventDefault();
  console.log("you clicked the multiply button on the page");
  console.log("this is: " , this);

for(let i=0 ; i<allmapLi.length ; i++){
  allmapLi[i].innerText=schoolNumbersMap[i];
  allmapLi[i].style.color="red";
}
}
//------------------------------------------------------------------------------------------------------------------------
//https://www.w3schools.com/jsref/jsref_map.asp
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_map3

const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

var demo5=document.getElementById('demo5');
demo5.style.border="3px solid magenta";
demo5.innerText=persons.map(getFullName);

function getFullName(obj){
  return [obj.firstname , obj.lastname].join("  ");
}

///

var allobjPerson=document.querySelectorAll(".objPerson");

for(let i=0 ; i<allobjPerson.length ; i++){
  allobjPerson[i].style.border="3px dotted forestgreen";
  allobjPerson[i].style.padding="0.5em";
  allobjPerson[i].style.margin="0.5em";
  allobjPerson[i].innerText=persons.map(getFullName)[i];
}
//---------------------------------------------------------------------------------------------------
//JavaScript Array filter()
//syntax
//https://www.w3schools.com/jsref/jsref_filter.asp

const ages = [32, 33, 16, 40 , 18 , 17 , 3 , 7];

var demo6=document.getElementById('demo6');
demo6.style.border="3px dotted magenta";
demo6.style.padding="0.5em";
demo6.style.margin="0.5em";
demo6.innerText=ages.filter(checkAdult).join(" , ");

function checkAdult(el , index){
  console.log("el is : " , el , "index is : " , index);
  if(el >= 18){
return el;
  }
}
//
var under18=document.getElementById('under18');
under18.style.border="3px dotted CornflowerBlue";
under18.style.padding="0.5em";
under18.style.margin="0.5em";
under18.innerText=ages.filter(checkMinor).join(" , ");

function checkMinor(el , index){
  console.log("el is : " , el , "index is : " , index);
  return el < 18;
}
//filter separa nr pare de nr impare
var manyNr=[45 , 3 , 66 , 88 , 99 , 24 , 42 , 4 , 100 , 105, -79 , -44 , 6.38 , 7.45];

var allNrArray=document.getElementById('allNrArray');
allNrArray.style.border="3px dotted DarkKhaki";
allNrArray.style.padding="0.5em";
allNrArray.style.margin="0.5em";
allNrArray.innerText=manyNr.join(" , ");

var nrParagraphAll=document.querySelectorAll(".nrParagraph");
for(let i=0 ; i<nrParagraphAll.length ; i++){
  nrParagraphAll[i].style.border="3px dotted DarkKhaki";
  nrParagraphAll[i].style.padding="0.5em";
  nrParagraphAll[i].style.margin="0.5em";
}
//click to get even nr
var evenAbove=document.getElementById("evenAbove");
evenAbove.style.border="3px solid olive";
evenAbove.addEventListener("click" , cbFuncEven);

function cbFuncEven(event){
  event.preventDefault();
  console.log("you clicked the even nr above button on the page");
  console.log("this is: " , this);

  this.previousElementSibling.innerText=manyNr.filter(cbFunctionEven).join(" , ")
}

function cbFunctionEven(currentValue, index, arr){
  if(currentValue % 2 === 0){
    return currentValue;
  }
}
//click to get odd nr
var oddBellow=document.getElementById('oddBellow');
oddBellow.style.border="3px solid yellow";
oddBellow.addEventListener("click" , cbFuncOdd);

function cbFuncOdd(event){
  event.preventDefault();
  console.log("you clicked the odd nr bellow button on the page");
  console.log("this is: " , this);

  this.nextElementSibling.innerText=manyNr.filter(cbFunctionOdd).join(" , ");
}

function cbFunctionOdd(currentValue, index, arr){
  if(currentValue % 2 !== 0){
    return currentValue;
  }
}
//------------------------------------------------------------------------------
var myLoremIpsum=["Lorem" ,  "Ipsum" ,  "is",  "simply" , "dummy" ,  "text" ,  "of" ,  "the" ,
                  "printing" , "and" ,  "typesetting" ,  "industry." ,
                   "Lorem" , "Ipsum" ,  "has" ,  "been" ,  "the" ,  "industry's" ,  "standard" , " dummy" , "text" , "ever" ,  "since" ,  "the" , "1500s," ,
                    "when", "an" ,  "unknown" ,  "printer" , "took" ,  "a" ,  "galley" ,  "of" ,  "type",  "and",  "scrambled" ,
                    "it" , "to" ,  "make" , "a" , "type",  "specimen" ,  "book"];

var loremIpsum=document.getElementById("loremIpsum");
loremIpsum.style.border="3px dotted DarkKhaki";
loremIpsum.style.padding="0.5em";
loremIpsum.style.margin="0.5em";
loremIpsum.innerText=myLoremIpsum.join(" ");

function changeTextColor(currentValue, index, arr){
    return loremIpsum.style.color="red",loremIpsum.style.backgroundColor="yellowgreen";
}

var filterColor=document.getElementById("filterColor");
filterColor.style.border="3px solid indigo";
filterColor.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("you clicked the filter color button on the page");
  console.log("this is: " , this);
return myLoremIpsum.filter(changeTextColor);
})

//-- demo7 with filter ------------------------------------------------------------------------------------
//https://www.w3schools.com/jsref/jsref_filter.asp
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_filter2

const agesFilter = [32, 33, 12, 40 , 10 , 70 , 56 , 100, 3];

var presentNeArray=document.getElementById("presentNeArray");
presentNeArray.style.border="3px solid magenta";
presentNeArray.innerText=agesFilter.join(" , ");

var ageToCheck=document.getElementById('ageToCheck');
ageToCheck.style.border="3px solid red";

var demo7=document.getElementById("demo7");
demo7.style.border="3px solid green";

var test=document.getElementById("test");
test.style.border="3px solid green";
test.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("you clicked the test button on the page");
  console.log("this is: " , this);

  demo7.innerText=agesFilter.filter(checkAge2).join(" , ");
})

function checkAge2(currentValue, index, arr){
  if(currentValue >=  ageToCheck.value){
return currentValue;
  }
}
///////////////////////-reduce---------------------------------------------------------------
//https://www.w3schools.com/jsref/jsref_reduce.asp
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_reduce
//syntax
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const numbersReduce = [175, 50, 25];

var demo8=document.getElementById('demo8');
demo8.style.border="3px dotted crimson";
demo8.style.padding="0.5em";
demo8.style.margin="0.5em";
demo8.innerText=numbersReduce.reduce(myReduceFunc);

function myReduceFunc(total , currentElement){
return total=total - currentElement;
}

//discord 13 04 2022
//aduna suma elementelor dintr-un array

var anyNrArr1=[45 , 5 , 3 , 7];

//1 option with for loop
let optionSum1=0;
for(let i=0 ; i<anyNrArr1.length ; i++){
  optionSum1=optionSum1 + anyNrArr1[i];
}
console.log("optionSum1 is : " , optionSum1);//60

//2 option with function

var anyNrArr2=[10 , 5 , 3 , 7];

function addNr(arr){
  let optionSum2=0;
  for(let i=0 ; i<anyNrArr2.length ; i++){
    optionSum2=optionSum2 + anyNrArr2[i];
  }
  return optionSum2;
}

console.log("addNr(anyNrArr2) is : " , addNr(anyNrArr2));

var option2=document.getElementById("option2");
option2.style.border="3px dotted DarkSlateBlue ";
option2.style.padding="0.5em";
option2.style.margin="0.5em";
option2.innerText=addNr(anyNrArr2);

//option 3 reduce method on array discord

//FUNCtiONQLA CU (reduce)
//se aplica pe array, DAR intoarce o valoare
//foarte potrivita pentru acumulari
//al doilea parametru al lui reduce initializeaza accumulator
            //daca lipseste al doilea param atunci acumulator este
            //PRIMUL ELEMENT DIN ARRAY-ul pe care se aplica

var anyNrArr2=[20 , 5 , 3 , 7];

var demo9=document.getElementById("demo9");
demo9.style.border="3px dotted skyblue";
demo9.style.padding="0.5em";
demo9.style.margin="0.5em";
demo9.innerText=anyNrArr2.reduce(function(acc , currentElement , index){
  console.log(acc , currentElement , index);
  return acc + currentElement;
}, 0);

//option 4 forEach discord
//syntax w 3 school
//array.forEach(function(currentValue, index, arr), thisValue)

var anyNrArr3=[30 , 5 , 3 , 7];
let sum4=0;

anyNrArr3.forEach(function(currentElement, index){
sum4= sum4 + currentElement;
})

console.log("sum4 is : " , sum4);

var demo10=document.getElementById("demo10");
demo10.style.border="3px dotted cornflowerblue";
demo10.style.padding="0.5em";
demo10.style.margin="0.5em";
demo10.innerText=sum4;

//option 5 w 3 school cu Math.round
//https://www.w3schools.com/jsref/jsref_reduce.asp
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_reduce2

const numbersSchool = [15.5, 2.3, 1.1, 4.7];

var demo11=document.getElementById('demo11');
demo11.style.border="3px dotted cornflowerblue";
demo11.style.padding="0.5em";
demo11.style.margin="0.5em";
demo11.innerText=numbersSchool.reduce(getSum, 0);

function getSum(total , acc , currentElement , index){
  return total + Math.round(acc);
}

var whatNr=36.67;
console.log("Math.round(whatNr) is : " , Math.round(whatNr));//37
console.log("Math.round(25.34) is : " , Math.round(25.34));//25
console.log("Math.sqrt(25) is : " , Math.sqrt(25));//5

//-----------------------
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_foreach
//VEZI LINIA 688 option 4
const fruits = ["apple", "orange", "cherry"];
let textFruits = "";

fruits.forEach(fruitFunction);

function fruitFunction(currentElement , index , arr){
  textFruits += index + " : " + currentElement + "<br>";
}

document.getElementById('demo12').innerHTML=textFruits;
//forEach
//https://www.w3schools.com/jsref/jsref_forEach.asp
//Compute the sum:

const numbersNr = [65, 44, 12, 4];
let sum5=0;

numbersNr.forEach(mySumFunc);
//arr[index]=currentElement
function mySumFunc(currentElement , index , arr){
  sum5=sum5 + currentElement;
}

var paragraphSum=document.getElementById('paragraphSum');
paragraphSum.style.border="3px dotted Aquamarine";
paragraphSum.style.padding="0.5em";
paragraphSum.style.margin="0.5em";
paragraphSum.innerText=sum5;

//compute the product

const numbersNr2 = [3 , 2 , 10];
let product1=1;

numbersNr2.forEach(myProductFunction);

function myProductFunction(currentElement , index , arr){
  console.log("currentElement is : " , currentElement ,"index is : " ,  index);
  product1=product1 * arr[index];
}

var computeProduct=document.getElementById("computeProduct");
computeProduct.style.border="3px dotted gray";
computeProduct.style.padding="0.5em";
computeProduct.style.margin="0.5em";
computeProduct.innerText=product1;

//Add with 10 each element of a given array:

const initialArr=[1 , 3 , 5 , 7];
let add10resultArr=[];

initialArr.forEach(add10Func);

function add10Func(curentElement , index , arr){
  add10resultArr.push(curentElement + 10)
}

var add10paragraph=document.getElementById("add10paragraph");
add10paragraph.style.border="3px dotted DarkSlateGray";
add10paragraph.style.padding="0.5em";
add10paragraph.style.margin="0.5em";
add10paragraph.innerText=add10resultArr.join(" , ");

////Multiply each element of a given array:
const initialArr1=[2 , 3 , 5 , 74];
let multiply10Arr=[];

var multiply10paragraph=document.getElementById("multiply10paragraph");
multiply10paragraph.style.border="3px dotted GoldenRod";
multiply10paragraph.style.padding="0.5em";
multiply10paragraph.style.margin="0.5em";
multiply10paragraph.innerText=initialArr1.join(" , ");

initialArr1.forEach(multiplyByTenFunc);

function multiplyByTenFunc(curentElement , index , arr){
  arr[index] = curentElement * 10;
  return multiply10Arr.push(arr[index]);
}
console.log("multiply10Arr is : " , multiply10Arr);

var multiplyBtn=document.getElementById("multiplyBtn");
multiplyBtn.style.border="3px solid orange";
multiplyBtn.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("you clicked the multiply button on the page");
  console.log("this is: " , this);

  this.previousElementSibling.innerText=multiply10Arr.join(" , ");
})

//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_foreach3
//Multiply each element of a given array:

const initialArr2=[3 , 4 , 5 , 45];
console.log("-------------------initialArr2 before forEach is : " , initialArr2);

initialArr2.forEach(function(currentElement , index , arr){
  arr[index]=currentElement * 100;
})

console.log("--------------------initialArr2 after forEach is : " , initialArr2);
//--------------my try

const initialArr3=[9 , 22 , 5 , 45];
console.log("before initialArr3 is : " , initialArr3);

var multiply200liAll=document.querySelectorAll(".multiply200li");
for(let i=0 ; i<multiply200liAll.length ; i++){
  multiply200liAll[i].style.border="3px dotted GoldenRod";
  multiply200liAll[i].style.padding="0.5em";
  multiply200liAll[i].style.margin="0.5em";
  multiply200liAll[i].innerText=initialArr3[i];
}

var multiply200Btn=document.getElementById("multiply200Btn");
multiply200Btn.style.border="3px solid indigo";

multiply200Btn.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("you clicked the multiply 200 button on the page");
  console.log("this is: " , this);

  initialArr3.forEach(function(curentElement , index , arr){
    arr[index]=curentElement * 200;
  });

  for(let i=0 ; i<multiply200liAll.length ; i++){
    multiply200liAll[i].innerText=initialArr3[i];
  }
});

//------------------

var exArr1=[2 , 6 , 8 , 5];
console.log("before exArr1 is : " , exArr1);

exArr1.forEach(currentElement => console.log(currentElement * 10));
console.log("after forEach exArr1 is : " , exArr1);

///forEach este metoda functie de afisare

var exArr2=[3 , 45 , 7 , 15];
console.log("before exArr2 is : " , exArr2);

exArr2.forEach(function(currentElement , index , arr){
  console.log("----currentElement is : " , currentElement);
  console.log(`the index is ${index} .`);
  console.log(`each currentElement multiplied by 100 is : ${arr[index] * 100}`);
  console.log("currentElement + 100 is : " , currentElement + 100);
});

//

var exArr3=[3 , 15 , 77 , 23];
console.log("before exArr3 is : " , exArr3);

exArr3.forEach((currentElement , index , arr) =>{
  console.log("currentElement + 3000 is : " , currentElement + 3000);
  console.log(`my index is : ${index} and my current element is : ${arr[index]}`);
});

//-------------------------------------------

var exArr3=[33 , 7 , 9 , 5];
console.log("before exArr3 is : " , exArr3);

var newexArr3=exArr3.map(function(el , index){
  console.log(el*500);
  return el * 500;
})
console.log("newexArr3 is : " , newexArr3);

//
var exArr4=[3 , 4 , 5 , 20];
console.log("exArr4 is : " , exArr4);
var newexArr4=exArr4.map(el => el * 5000);
console.log("newexArr4 is : " , newexArr4);
//

var exArr5=[1 , 3 , 2 , 10];
console.log("exArr5 is : " , exArr5);
var newexArr5=exArr5.map(el => el * 3000);
console.log("newexArr5 is : " , newexArr5);

var arrow1=document.getElementById("arrow1");
arrow1.style.border="3px dotted gold";
arrow1.style.padding="0.5em";
arrow1.style.margin="0.5em";
arrow1.innerText=exArr5.join(" , ");

var mapArrowBtn=document.getElementById("mapArrowBtn");
mapArrowBtn.style.border="3px dotted crimson";

mapArrowBtn.addEventListener("click" , cbF);

function cbF(event){
  event.preventDefault();
  console.log("you clicked the multiply 3000 button on the page");
  console.log("this is: " , this);

arrow1.innerText=newexArr5.join(" , ");
}
//-----------------------------------------------------------------------------------------

const personsX = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

const newPersons=personsX.map(getFullNameX);

function getFullNameX(item) {
  return [item.firstname,item.lastname].join(" ");
}

console.log("newPersons is : " , newPersons);//(3) ['Malcom Reynolds', 'Kaylee Frye', 'Jayne Cobb']

//---

//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_map3
//https://www.w3schools.com/jsref/jsref_map.asp

const personsY = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

var uParagraph=document.getElementById("uParagraph");
uParagraph.style.border="3px dotted magenta";
uParagraph.style.padding="0.5em";
uParagraph.style.margin="0.5em";
uParagraph.innerText=personsY.map(getFullNameY);

function getFullNameY(obj , index){
  return [obj.firstname , obj.lastname].join(" ");
}

//
const personsZ = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];
//
const personsZArrFirstName=personsZ.map(aflaPersonFunction);

function aflaPersonFunction(elObj , index){
  return elObj.firstname;
}

console.log("personsZArrFirstName is : " , personsZArrFirstName);
//

const personsZArrLastName=personsZ.map(aflaPersonFunction2);

function aflaPersonFunction2(elObj , index){
  return elObj.lastname;
}

console.log("personsZArrLastName is : " , personsZArrLastName);
//
var allliZmap=document.querySelectorAll(".liZmap");
console.log("allliZmap is : " , allliZmap);

var allClassName=[];

for(let i=0 ; i<allliZmap.length ; i++){
  allClassName.push(allliZmap[i].className);
  allliZmap[i].style.border="3px dotted Aquamarine";
  allliZmap[i].style.padding="0.5em";
  allliZmap[i].style.margin="0.5em";
  allliZmap[i].innerText=personsZArrFirstName[i] + " " +  personsZArrLastName[i];
}
console.log("allClassName is : " , allClassName);//(3) ['liZmap', 'liZmap', 'liZmap']

////https://www.codegrepper.com/code-examples/javascript/for+each+with+arrow+function

const productsSaturday = [
    { name: 'laptop', price: 32000, brand: 'Lenovo', color: 'Silver' },
    { name: 'phone', price: 700, brand: 'Iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'Casio', color: 'Yellow' },
    { name: 'sunglass', price: 300, brand: 'Ribon', color: 'blue' },
    { name: 'camera', price: 9000, brand: 'Lenovo', color: 'gray' },
];

const productsSaturdayArr=productsSaturday.map(getProductsInfo)

function getProductsInfo(elObj , index){
  return [elObj.name , elObj.price , elObj.brand , elObj.color];
}

console.log("---productsSaturdayArr is : " , productsSaturdayArr);
console.log("---productsSaturdayArr.length is : "  , productsSaturdayArr.length);

var eachProductAll=document.querySelectorAll('.eachProduct');
for(let i=0 ; i<eachProductAll.length ; i++){
  eachProductAll[i].style.border="3px dotted Chartreuse";
  eachProductAll[i].style.padding="0.5em";
  eachProductAll[i].style.margin="0.5em";
  eachProductAll[i].innerText=productsSaturdayArr[i];
}

//get only the names and display them in a paragraph
const productsSaturdayNames=productsSaturday.map(getProductsNames);

function getProductsNames(elObj , index){
  return elObj.name;
}

console.log("productsSaturdayNames is : " , productsSaturdayNames);

var productsNamesParagraph=document.getElementById('productsNamesParagraph');
productsNamesParagraph.style.border="3px dotted DarkBlue ";
productsNamesParagraph.style.padding="0.5em";
productsNamesParagraph.style.margin="0.5em";
productsNamesParagraph.innerText=productsSaturdayNames.join(" , ");

//get colors and display them in a list

var colorProductAll=document.querySelectorAll(".colorProduct");
for(let i=0 ; i<colorProductAll.length ; i++){
  colorProductAll[i].style.border="3px dotted BurlyWood";
  colorProductAll[i].style.padding="0.5em";
  colorProductAll[i].style.margin="0.5em";
  colorProductAll[i].innerText=productsSaturday.map(getProductColors)[i];
}

function getProductColors(elObj , index){
  return elObj.color;
}

////Total Products Price by Using forEach and arrow function
let totalPrice = 0;
//forEach nu are return
productsSaturday.forEach(objProduct =>{
  totalPrice=totalPrice + objProduct.price;
})
console.log("totalPrice is : " , totalPrice);

var totalPriceParagraph=document.getElementById('totalPriceParagraph');
totalPriceParagraph.style.border="3px dotted yellowgreen";
totalPriceParagraph.style.padding="0.5em";
totalPriceParagraph.style.margin="0.5em";
totalPriceParagraph.innerText=totalPrice;







//find-out from w 3 school classList w 3 school : add , remove , toggle




//--------------------------------------------------------------------------------------------------------------
