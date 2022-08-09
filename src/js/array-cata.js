console.log("-----------------array-catalin.js");

//discord 28 03 2022

function myMixing(parametruFormal){
  return parametruFormal + "any string";
}
//apel functie cu console.log() pt ca functia este cu return , e functie care intoarce , nu e de afisare cu console.log
console.log(myMixing("my string "));

var mixingParagraph=document.getElementById('mixingParagraph');
mixingParagraph.innerText=myMixing("page string and ");
//---------------------------------------------------------------------------------------------------------------------------------

var userMix=document.getElementById("userMix");
userMix.style.border="3px solid red";
userMix.style.outline="none";
userMix.style.padding="0.5em";
userMix.style.margin="0.5em";

var userMixBtn=document.getElementById("userMixBtn");
userMixBtn.style.border="3px solid blue";
userMixBtn.style.padding="0.5em";
userMixBtn.style.margin="0.5em";

var userMixParagraph=document.getElementById("userMixParagraph");
userMixParagraph.style.border="3px solid green";
userMixParagraph.style.padding="0.5em";
userMixParagraph.style.margin="0.5em";

userMixBtn.addEventListener("click" , addTen);

function addTen(event){
  console.log("userMix.value is : " , userMix.value);
  return userMixParagraph.innerText=parseFloat(userMix.value) + 10;
}

////functia de afisare cu console.log()

function displayText(n){
  console.log("n + 50 is : " , n + 50);
  for(let i=1 ; i <= n ;i++){
    console.log("programming is cool and :", n + 100);
  }
  return n * 100;
}
//apel functie
displayText(5);

var allDisplayLi=document.querySelectorAll(".displayLi");
for(let i=0 ; i < allDisplayLi.length ; i++){
  allDisplayLi[i].style.border="3px solid Cyan";
  allDisplayLi[i].style.padding="0.5em";
  allDisplayLi[i].style.margin="0.5em";
}

document.querySelector(".oneLI").innerText=displayText(7);
document.querySelector(".twoLI").innerText=displayText(2);
document.querySelector(".threeLI").innerText=displayText(3);
////////////////////////-----------------------------------------------------------------------

function power(a , n){
var result=1;
for(let i=1 ; i<=n ; i++){
  result=result * a;
}
return result;
}

var x=power(3 , 5);
console.log("x is : " , x);
document.querySelector(".firstLI").innerText=power(2 , 4);
document.querySelector(".secondLI").innerText=power(3 , 7);
document.querySelector(".thirdLI").innerText=power(5 , 3);

//cel mai mic si cel mai mare nr dintr-un array

var arrHomework=[7,23,55,7,97,2];
console.log("array homework initial : " , arrHomework);

arrHomework.sort(function(a , b){
  return a - b;
})
console.log("array homework after sorting : " , arrHomework);
console.log("cel mai mic nr din array homework : " , arrHomework[0]);
console.log("cel mai mare nr din array homework : " , arrHomework[arrHomework.length - 1]);

arrHomework.reverse(function(a , b){
  return b - a;
})
console.log("array homework after reversing : " , arrHomework);

///28 03 2022------------------------------------------------------------------------------------------------------------------
console.log("elemente comune ale mai multor array");
var arr1 = [4, 55 , 20 ,  17, 22, 1];
var  arr2 = [4, 53, 11, 22, 20];

function getCommonEl(arrA , arrB){
  var resultArr=[];
  for(var i = 0 ; i < arrA.length ; i++){

  for(var j = 0 ; j < arrB.length ; j++){

  if(arrA[i] == arrB[j]){
    console.log("arrA[i] is : " , arrA[i]);
    resultArr.push(arrA[i]);
  }

  }

  }
  return resultArr;
}

console.log("getCommonEl(arr1 , arr2) is : " , getCommonEl(arr1 , arr2));

var commonElArr=document.getElementById("commonElArr");
commonElArr.style.border="3px solid yellowgreen";
commonElArr.style.padding="0.5em";
commonElArr.style.margin="0.5em";
commonElArr.innerText=getCommonEl(arr1 , arr2).join(" , ");

var allCommonLIArr=document.querySelectorAll(".commonLIArr");
for(let i=0 ; i< allCommonLIArr.length ; i++){
  allCommonLIArr[i].style.border="3px solid green";
  allCommonLIArr[i].style.padding="0.5em";
  allCommonLIArr[i].style.margin="0.5em";

  allCommonLIArr[i].innerText=getCommonEl(arr1 , arr2)[i];
}

//25 03 2022----------------------------------------------------------------------------------------------------------
var s1=0;
for(let i=1 ; i<=10 ; i++){
  s1=s1 + i;
  console.log("i is : " , i , "s1 is : " , s1);
}
/////////////////////////////////////////////////////////
var s2Arr=[];

function s2Add(number){
let s2=0;
for(let j=0 ; j<number ; j++){
  s2=s2 + j;
  console.log("j is : " , j , "s2 is : " , s2);
  s2Arr.push(s2);
}
return s2;
}


var allS1elementsFunc=document.getElementById("allS1elementsFunc");
allS1elementsFunc.style.border="3px solid magenta";
allS1elementsFunc.style.padding="0.5em";
allS1elementsFunc.style.margin="0.5em";
allS1elementsFunc.innerText=s2Add(5);

console.log("s2Arr array is : " , s2Arr);

var allS1elementsArr=document.getElementById("allS1elementsArr");
allS1elementsArr.style.border="3px solid magenta";
allS1elementsArr.style.padding="0.5em";
allS1elementsArr.style.margin="0.5em";
allS1elementsArr.innerText=s2Arr.join(" // ");

var allEachS1elementsArr=document.querySelectorAll(".eachS1elementsArr");
for(let i=0 ; i<allEachS1elementsArr.length ; i++){
  allEachS1elementsArr[i].style.border="3px solid magenta";
  allEachS1elementsArr[i].style.padding="0.5em";
  allEachS1elementsArr[i].style.margin="0.5em";
  allEachS1elementsArr[i].innerText=s2Arr[i];
}
//
var addUserParagraph=document.getElementById("addUserParagraph");
addUserParagraph.style.border="3px solid magenta";
addUserParagraph.style.padding="0.5em";
addUserParagraph.style.margin="0.5em";

var addUserInput=document.getElementById("addUserInput");
addUserInput.style.border="3px solid gold";
addUserInput.style.outline="none";

var addUserBtn=document.getElementById("addUserBtn");
addUserBtn.style.border="3px solid yellowgreen";
addUserBtn.addEventListener("click" , getSumUser);

function getSumUser(event){
  addUserParagraph.innerText=s2Add(parseFloat(addUserInput.value));
}

//-------------------------------------------------------------------------------------------------
//get numbers in descending order
for(var k = 10; k >= 0; k = k - 1 ){
  console.log("k:",k);
}

//operator ternar
var start=15;
var end=9;

// var step;
// if(start < end) {
//   step = 1;
// } else {
//   step = -1;
// }

var step = start < end ? 1 : -1;

for(var cursCata = start; cursCata != (end + step); cursCata = cursCata + step){
  console.log("cursCata is :",cursCata);
}

// cursCata is : 15
// cursCata is : 14
// cursCata is : 13
// cursCata is : 12
// cursCata is : 11
// cursCata is : 10
// cursCata is : 9

////---------------------------------------------------------------------------------------------

var arrCurs1 = [3,2,7,8,9,12,90];

let s3=0;
for(let i=0 ; i<arrCurs1.length ; i++){
  s3=s3 + arrCurs1[i];
}
console.log("s3 is : " , s3);

//
var arrCurs2 = [3,2,7,8,9,12,90];
function addElArr(arr){
  let s3=0;
  for(let i=0 ; i<arr.length ; i++){
    s3=s3 + arr[i];
    console.log( "s3 is : " , s3 , "arr[i] is " , arr[i] , "s3 + arr[i] is : " , s3 + arr[i])
  }
  return s3;
}

console.log("addElArr(arrCurs2) is : " , addElArr(arrCurs2));

//adauga elemente intr-un array cu push
//25 03 2022
//prima varianta
var arrEx1=[];

for(var i = 0; i < 10; i++) {
 arrEx1[i] = Math.floor(1 + Math.random()*9);
}
console.log("arrEx1 after for loop" , arrEx1);
//a doua varianta
var arrEx2=[];

for(var i = 0; i < 10; i++) {
 arrEx2.push(Math.floor(1 + Math.random()*9));
}
console.log("arrEx2 after push" , arrEx2);

//push() adauga  pop()sterge
//pop() removes the last element of an array
//syntax
//array.pop()
fruits = ['apple', 'banana', 'cherry'];

fruits.pop(1)
console.log("fruits after pop() : " , fruits);
//https://www.w3schools.com/jsref/jsref_pop.asp
//               0    1   2    3    4    5     6   7    8
var arrExercise1=[3 , 6 , 7 , 98 , 67 , 456 , 45 , 34 , 2];
console.log("arrExercise1.length is : " , arrExercise1.length);

arrExercise1.pop();
console.log("arrExercise1 after pop()" , arrExercise1);
console.log("arrExercise1.length is : " , arrExercise1.length);
arrExercise1.pop();
console.log("arrExercise1 after pop()" , arrExercise1);
console.log("arrExercise1.length is : " , arrExercise1.length);
arrExercise1.pop();
console.log("arrExercise1 after pop()" , arrExercise1);
console.log("arrExercise1.length is : " , arrExercise1.length);

//               0    1   2    3    4    5     6   7    8
var arrExercise2=[4 , 6 , 55, 67 , 69 , 456 , 8 , 34 , 10 , 3 , 9 , 5];

var remainedElArr=document.getElementById("remainedElArr");
remainedElArr.style.border="3px solid skyblue";
remainedElArr.style.padding="0.5em";
remainedElArr.style.margin="0.5em";
remainedElArr.innerText=arrExercise2.join(" / ");

var popElArr=document.getElementById("popElArr");
popElArr.style.border="3px solid red";
popElArr.addEventListener("click" , popFunc);

function popFunc(event){

if(arrExercise2.length != 0){
  arrExercise2.pop();
  return remainedElArr.innerText=arrExercise2.join(" / ");
}else {
  return remainedElArr.innerText="no elements left in the array";
}

}

//
//               0    1   2    3    4    5     6   7    8
var arrExercise3=[4 , 6 , 55, 67 , 69 , 456 , 8 , 34 , 10 , 3 , 9 , 5];

var displayElArr=document.getElementById("displayElArr");
displayElArr.style.border="3px solid darkblue";
displayElArr.style.padding="0.5em";
displayElArr.style.margin="0.5em";
displayElArr.innerText=arrExercise3.join(" / ");

var popElArr2=document.getElementById("popElArr2");
popElArr2.style.border="3px solid skyblue";

var removedElArr=document.getElementById("removedElArr");
removedElArr.style.border="3px solid hotpink";
removedElArr.style.padding="0.5em";
removedElArr.style.margin="0.5em";

popElArr2.addEventListener("click" , showPopEl);

function showPopEl(event){
  removedElArr.innerText=arrExercise3.pop();
}

///--------------------------------------------------------------------------------------
//media aritmetica

var avg = [4, 4, 1, 2, 5, 40];
var s4=0;

for(let i = 0 ; i < avg.length ; i++){
  s4 = s4 + avg[i];
}

var avhMedium= s4 / avg.length;
console.log(avhMedium);
////////////----------------------------------------------------------------------------------
//transforma toate nr dintr-un array in numere pare
var arrExercise2=[];
for(var i=1; i<=10; i++) {
  arrExercise2.push(Math.floor(Math.random()*59 + 1));
}
console.log("arrExercise2 after push is : " , arrExercise2);
//parcurgere array cu if conditional in interiorul lui for loop
for(let i=0 ; i < arrExercise2.length ; i++){
  if(arrExercise2[i] % 2 == 1){
    arrExercise2[i]=arrExercise2[i] + 1;
  }
}

console.log("arrExercise2 after if conditional is : " , arrExercise2);

///-------------------------------------------------------------------------------------------------
var box = [7,9,12,34,99,100,14,6,3,1];
console.log("box" , box);
var apples = [];
var pears = [];

for(let i=0 ; i<box.length ; i++){
  if(box[i] % 2 == 0){
    apples.push(box[i]);
  }else{
    pears.push(box[i]);
  }
}
console.log("apples" , apples);
console.log("pears" , pears);

// — 28.03.2022
//elemente comune ale mai multor array-uri

var arr3=[4 , 78 , 678 , 3 , 0 , 1 , 64, 6 , 90 , 32];
var arr4=[4 , 78 , 6 , 3 , 7 , 1 , 77 , 33 , 27];

var commonElements=[];

for(let i=0 ; i<arr3.length ; i++){

for(let j=0 ; j<arr4.length ; j++){
  if(arr3[i] == arr4[j]){
    commonElements.push(arr3[i]);
  }

}

}
console.log("commonElements are : " , commonElements);
//-----------------------------------------------------------------------------------------------------------

var myarr = [
  [
    1,2,3,4,
    [
      5,6,7,
      [
        8,9,10,[
          11,12,13
        ]
      ]
    ]
  ]
]

function listArr(arr){
  //DACA arr nu este Array
  if(typeof arr !== 'object') {
    //afisez arr
    console.log("x",arr)
  } else {
    //parcurg array
    for(var i = 0; i < arr.length; i++){
        listArr(arr[i]);
    }
  }
}

listArr(myarr);

console.log("number is : " , typeof 3);
console.log( "string is : ", typeof "myString");
console.log("[] is : " , typeof []);
console.log("{} is : " , typeof {});
console.log("function is : " , typeof function(){return 0});

///-------30 03 discord--------------------------------------------------------------------------------
// — 30.03.2022
function distFromAverage(arr){
    var sum = arr[0];

  //calculez suma elementelor
  for(let i=0 ; i<arr.length ;i++){
    sum=sum + arr[i];
  }
    //calculez media
    var avg=sum/arr.length;
    //initializez array-ul final
    result = [];
    for(let i=0 ; i<arr.length ; i++){
         //calculez diferenta dintre elem curent si medie
         var r=arr[i] - avg;
         //daca rezultatul e negativ il inumultec cu -1 altfel il pastrez
         r = r < 0 ? r * -1 : r;
         //imping rezultatul in array-ul final
         result.push(r);
    }
    //intorc array-ul final
    return result;
}

//apel functie cu salvare in variabila rez
var rez = distFromAverage([1,2,3,4,5,6,7]);
//afisare rez
console.log(" rez is : " , rez);

//---------------------------------------------------------------------------------
var fructeMihai = [
  "mar",
  "para",
  "banana",
  "capsuna",
  "zmeura"
];
console.log("Mihai are " , fructeMihai.length , "fructe .");
console.log("primul element din array este: " , fructeMihai[0]);
console.log("ultimul element din array este:" , fructeMihai[fructeMihai.length - 1]);

for(let i=0 ; i<fructeMihai.length ; i++){
  console.log(fructeMihai[i]);
}

var alleachFruitMihai=document.querySelectorAll(".eachFruitMihai");
for(let i=0 ; i<alleachFruitMihai.length ; i++){
  alleachFruitMihai[i].style.border="3px solid DarkTurquoise";
  alleachFruitMihai[i].style.padding="0.5em";
  alleachFruitMihai[i].style.margin="0.5em";
  alleachFruitMihai[i].innerText=fructeMihai[i];
    alleachFruitMihai[i].style.fontSize=`${(i * 10) + 16}px`;
}
//
var allFruits=document.getElementById("all-fruits");
allFruits.style.border="3px solid red";
allFruits.innerText=fructeMihai.join(" / ");
///-------------------------------------------------------------------------------------------
function multiply(arr){
  var p=1;
  for(let i=0 ; i<arr.length ; i++){
    p = p * arr[i];
  }
  return p;
}

console.log("multiply([12, 10, 3]) is : " , multiply([12, 10, 3]));

//30 03 2022

function  getEvenAvarage(array){
  var s = 0;
  //nr este counter
    var nr = 0;
    for(let i=0 ; i<array.length ; i++){
      if(array[i] % 2 == 0){
        s = s + array[i];
        nr++;
      }
    }
    if(nr == 0) {
    return null;
  }
  var avg = s / nr;
  return avg;
}

var arrx = [1,2,3,4,5,6,7];
console.log("getEvenAvarage(arrx) is : " , getEvenAvarage(arrx));

var arrx1 = [1,3,5,7 , 9 , 15 , 25];
console.log("getEvenAvarage(arrx1) is : " , getEvenAvarage(arrx1));

var arrx11 = [2,4,6,8 , 10 , 17 , 26];
console.log("getEvenAvarage(arrx11) is : " , getEvenAvarage(arrx11));

var arrx2 = [2,4,6,34 , 8 , 100 , 68];
console.log("Math.floor(getEvenAvarage(arrx2)) is : " , Math.floor(getEvenAvarage(arrx2)));

//----------------------------------------------------------------------------------

console.log("................how to concat arrays ");
//https://www.w3schools.com/jsref/jsref_concat_array.asp
//array1.concat(array2, array3, ..., arrayX)

const arr1Names = ["Cecilie", "Lone"];
const arr2Names = ["Emil", "Tobias", "Linus"];

console.log("arr1Names.concat(arr2Names) is : " , arr1Names.concat(arr2Names));

const allConcatLi=document.querySelectorAll(".concatLi");

for(let i=0 ; i<allConcatLi.length ; i++){
  allConcatLi[i].style.border="3px solid Turquoise";
  allConcatLi[i].style.padding="0.5em";
  allConcatLi[i].style.margin="0.5em";
  allConcatLi[i].innerText=arr1Names.concat(arr2Names)[i];
}

const arrNamesConcat=document.getElementById("arrNamesConcat");
arrNamesConcat.style.border="3px solid DarkTurquoise";
arrNamesConcat.style.padding="0.5em";
arrNamesConcat.style.margin="0.5em";
arrNamesConcat.innerText=arr2Names.concat(arr1Names).join("/");
//

const arrchild1 = ["Cecilie", "Lone"];
const arrchild2 = ["Emil", "Tobias", "Linus"];
const arrchild3 = ["Robin"];
const children = arrchild3.concat(arrchild2, arrchild1);
console.log("children is : " , children);
//01 04 2022
function concatArr(arrX , arrY){
  let concatArr=[];

for(let i=0 ; i<arrX.length ;i++){
  concatArr.push(arrX[i]);
}

for(let j=0 ; j<arrY.length ;j++){
  concatArr.push(arrY[j]);
}
return concatArr;

}

let arrX1=[1 , 2 , 3 , 4 , 5];
let arrY1=[6 , 7 , 8 , 9];

console.log("concatArr(arrX1 , arrY1) is : " , concatArr(arrX1 , arrY1));

//01 04 2022
console.log("....................how to add arrays ");

function addArr(arX , arY){
  let sumArr=[];

if(arX.length < arY.length){
  //parcurg al doilea array1
  for(let i=0 ; i<arY.length ; i++){
    //if conditional
    if(i<arX.length){
      sumArr.push(arX[i] + arY[i]);
    }else{
      sumArr.push(arY[i]);
    }
  }
}else{
  for(let j=0 ; j<arX.length ; j++){
    if(j < arY.length){
      sumArr.push(arX[j] + arY[j]);
    }else{
      sumArr.push(arX[j]);
    }
  }
}
return sumArr;
}

var trySum1=addArr([2,3,1,5,3,5], [3,1,76,1]);
console.log("trySum1 : " , trySum1);//trySum1 :  (6) [5, 4, 77, 6, 3, 5]

var trySum2=addArr([8 , 3 , 22], [1 , 3 ,2]);
console.log("trySum2 : " , trySum2);//trySum2 :  (3) [9, 6, 24]

//01 04 2022

//...spread operator ES6
const names1=["user1" , "user2" , "user3"];
const names2=["user4" , "user5"];
const spreadNames=[...names1 , ...names2];
console.log("spreadNames is : " , spreadNames);

const allSpreadLi=document.querySelectorAll(".spreadLi");
for(let i=0 ; i<allSpreadLi.length ;i++){
  allSpreadLi[i].style.border="3px solid DarkRed";
  allSpreadLi[i].style.padding="0.5em";
  allSpreadLi[i].style.margin="0.5em";
  allSpreadLi[i].innerText=[...names2 , ...names1][i];
}

const arrNamesSpread=document.getElementById("arrNamesSpread");
arrNamesSpread.innerText=[...names1 , ...names2].join(" ");
///...rest operator ES6
const mynumbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = mynumbers;

console.log("one is : " , one);
console.log("two is : " , two);
console.log("rest is : " , rest);

///...spread with obj
const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red',
  nrUsi:2
}

const updateMyVehicle = {
  type: 'car',
  year: 2021,
  color: 'yellow',
  nrUsi:4
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
console.log("myUpdatedVehicle is : " , myUpdatedVehicle);

// {brand: 'Ford', model: 'Mustang', color: 'yellow', type: 'car', year: 2021}
// brand: "Ford"
// color: "yellow"
// model: "Mustang"
// nrUsi: 4
// type: "car"
// year: 2021
// [[Prototype]]: Object

//--------------------------------------------------------------------------------------------------------
//https://www.w3schools.com/jsref/jsref_concat_array.asp

const arr1concat = ["Cecilie", "Lone"];
const arr2concat = [1, 2, 3];

const mixedArr=arr1concat.concat(arr2concat);
console.log("mixedArr is : " , mixedArr);
//
const arr1my = [1, 2, [3, 4]];
const arr2my = [[5, 6], 7, 8];

const mixedArrNr=arr1my.concat(arr2my);
console.log("mixedArrNr is : " , mixedArrNr);

const arrWithArraysParagraph=document.getElementById("arrWithArraysParagraph");
arrWithArraysParagraph.style.border="3px solid yellow";
arrWithArraysParagraph.style.padding="0.5em";
arrWithArraysParagraph.style.margin="0.5em";
arrWithArraysParagraph.innerText=mixedArrNr;

const allMixedEl=document.querySelectorAll('.mixedEl');
console.log("allMixedEl is : " , allMixedEl);
for(let i=0 ; i<allMixedEl.length; i++){
  allMixedEl[i].style.border="3px solid DarkGreen";
  allMixedEl[i].style.padding="0.5em";
  allMixedEl[i].style.margin="0.5em";
  allMixedEl[i].innerText=mixedArrNr[i];
}

//--------------------------------------------
var saturdayArr=[1 , 2 , 3 , "Gigel" , "Costel"];

var saturday=document.getElementById('saturday');
saturday.innerText=saturdayArr.join(" / ");

var allsaturdayLi=document.querySelectorAll('.saturdayLi');
for(let i=0 ; i<allsaturdayLi.length ; i++){
  allsaturdayLi[i].innerText=saturdayArr[i];
  allsaturdayLi[i].style.border="3px solid red";
}

//-------------------------------------------------------------------------------------------------------------------
//ES6 SPREAD OPERATOR ...
const arrLetters=["aa" , "bb" , "cc"];
const arrNrs=[11 , 22 ,33];

const myArrCombined=[...arrLetters , ...arrNrs];
console.log("myArrCombined is : " , myArrCombined);

var combinedArr=document.getElementById("combinedArr");
combinedArr.style.border="3px solid red";
combinedArr.style.padding="0.5em";
combinedArr.style.margin="0.5em";
combinedArr.innerText=myArrCombined;

//ES6 REST OPERATOR
const diverseArr=["aaa" , "bbb" , "ccc" ,"ddd" , [1 , 2 , 3] , "MERE" , "PERE"];
const [getA , getB ,getC , getD ,  getNRS , ...getFruits]=diverseArr;

console.log("getA is : " , getA);
console.log("getB is : " , getB);
console.log("getC is : " , getC);
console.log("getD is : " , getD);
console.log("getNRS is : " , getNRS);
console.log("getFruits is : " , getFruits);

const restArrAll=document.getElementById("restArrAll");
restArrAll.style.border="3px solid indigo";
restArrAll.style.padding="0.5em";
restArrAll.style.margin="0.5em";
restArrAll.innerText=diverseArr.join(" /");

//
const allrestLi=document.querySelectorAll(".restLi");
for(let i=0 ; i<allrestLi.length ;i++){
  allrestLi[i].style.border="3px solid green";
  allrestLi[i].style.padding="0.5em";
  allrestLi[i].style.margin="0.5em";
  if(i < 4){
    allrestLi[i].innerText=diverseArr[i];
  }
}
allrestLi[4].innerText=getNRS;
allrestLi[5].innerText=getFruits;

//1 04 2022
function getNumber(a , arr){
  //for loop
  for(let i=0 ; i<arr.length ; i++){
    //if conditional
    if(a == arr[i]){
      console.log("a este egal cu  arr[i] is : " , a , arr[i]);
      return true;
    }
  }
  console.log("a este nu egal cu  arr[i] is : " , a , arr[i]);
  return false;
}

console.log(getNumber(2, [33, 54, 2, 1, 4, 100]));
console.log(getNumber(44, [44 , 33, 54, 2, 1, 4, 100]));
console.log(getNumber(456, [33, 54, 2, 1, 4, 100]));

//1 04 2022

// function addTheSameNumbers(b , arr){
//   var s = 0;
//   //if conditional
//   for(let i=0 ; i<arr.length ; i++){
//     //if conditional
//     if(b == arr[i]){
//       s = s + arr[i];
//     }
//   }
//   return s;
// }
//
// console.log("addTheSameNumbers(5 , [5 , 17 , 5 , 100]) is : " , addTheSameNumbers(5 , [5 , 10 , 100]));

function addTheSameNumbers (b, arr1){
var s=0;
for (var i=0; i<arr1.length; i++){
  if(b == arr1[i]){
      s=s+arr1[i];
  }
}
  return s;
}

console.log("addTheSameNumbers (5, [5 , 17 , 5 , 100]) is : " , addTheSameNumbers (5, [5 , 17 , 5 , 100]));
console.log("addTheSameNumbers (3, [3 , 17 , 3 ,3, 100]) is : " , addTheSameNumbers (3, [3 , 17 , 3 ,3, 100]));

////
//andrei 11 04 2022 grupa 1 discord

function getSqrt(n){
  return Math.sqrt(n);
}
//apel functie cu intoarcere pt ca are return
console.log("getSqrt(9) is : " , getSqrt(9));
console.log("getSqrt(16) is : " , getSqrt(16));
console.log("getSqrt(25) is : " , getSqrt(25));

//
function altafunctie(n){
  console.log(n * n)
}
//apel functie de afisare
altafunctie(5);
altafunctie(7);

//elena
function bigestSumOfTwoElements(array){
array.sort(function(a, b){return a - b});
let s=0;
for(let i=0 ; i<array.length ;i++){
s= array[array.length -1] + array[array.length -2];
}
return s;
}

console.log("bigestSumOfTwoElements([3 , 4 , 55 , 5 , 100]) is : " , bigestSumOfTwoElements([3 , 4 , 55 , 5 , 100]));//155
console.log(bigestSumOfTwoElements([3 , 4 , 10 , 5 , 300]));//310
//elema 11 04 2022 version exam js

function sumLastTwoNrs(myarr){
//sort() method aseava in ordine crescstoare elemntele dintr-un array
var newmyArr=myarr.sort(function(a , b){
  return a - b;
});
//if conditional
if(myarr.length == 1){
  console.log(myarr[0] , "is the only element inside myarr , myarr.length is : " , myarr.length);
  return myarr[0];
}else if(myarr.length == 0){
  console.log("myarr is empty" ,myarr.length);
return false;
}else{
  //aduna ultimul si penultimul elemente din array-ul sortat
return newmyArr[newmyArr.length - 1] + newmyArr[newmyArr.length - 2];
}

}

console.log("sumLastTwoNrs([2, 6 , 77 , 90, 1, 100]) is : " , sumLastTwoNrs([2, 6 , 77 , 90, 1, 100]));
console.log("sumLastTwoNrs([40 , 5 , 8 , 60]) is : " ,sumLastTwoNrs([40 , 5 , 8 , 60]));
console.log("sumLastTwoNrs([7]) is : " , sumLastTwoNrs([7]));
console.log("sumLastTwoNrs([]) is : " , sumLastTwoNrs([]));

////
var paragraphId=document.getElementById('paragraphId');
paragraphId.style.border="3px solid red";
paragraphId.style.padding="0.5em";
//
function getElClass(elDom){
  return elDom.className;
}
console.log("---------------getElClass(paragraphId) is : " , getElClass(paragraphId));
//
var btnId=document.getElementById('btnId');
btnId.style.border="3px solid red";
btnId.style.padding="0.5em";
btnId.style.backgroundColor="yellow";

btnId.addEventListener("click" , function(event){
  console.log("---" , this.previousElementSibling);
  console.log("---" , this.previousElementSibling.dataset.text);
  return paragraphId.innerText=this.previousElementSibling.dataset.text;
})
//--------------------
var paragraphIdSec=document.getElementById('paragraphIdSec');
paragraphIdSec.style.border="3px solid yellowgreen";
paragraphIdSec.style.padding="0.5em";

var btnIdSec=document.getElementById('btnIdSec');
btnIdSec.style.border="3px solid red";
btnIdSec.style.padding="0.5em";
btnIdSec.style.backgroundColor="indigo";
btnIdSec.style.color="white";
btnIdSec.addEventListener("click" , function(event){
  paragraphIdSec.style.backgroundColor=this .nextElementSibling.dataset.color;
})
//11 04 2022------------------------------------------------------------------------------------------
var allSampleClass=document.querySelectorAll(".sample-class");
console.log("allSampleClass is : " , allSampleClass);

function getInnerText(arr){
  var newArr=[];
  for(let i=0 ; i<arr.length ; i++){
    newArr.push(arr[i].innerText);
  }
  return newArr;
}

console.log("getInnerText(allSampleClass) is : " , getInnerText(allSampleClass));
//
var parentDivContainerChildren=document.getElementById('parentDivContainer').children;
console.log("parentDivContainerChildren is : " , parentDivContainerChildren);
//-------------
var changeColorBtn=document.getElementById('changeColorBtn');
changeColorBtn.addEventListener("click" , cbFuncChangeColor);

function cbFuncChangeColor(event){
  event.preventDefault();
  console.log("change color of some children");
  return parentDivContainerChildren[5].style.color="black";
}
//-------------

//11042022----------------------------------------------------------------------------------------------------
function getTag(elements){
  var newArr=[];
  for(let i=0 ; i<elements.length ; i++){
    newArr.push(elements[i].tagName);
  }
  return newArr;
}

console.log("getTag(allSampleClass) is : " , getTag(allSampleClass));

//-------------------------------------------------------------------------------------------------------

var ulList=document.getElementById('ul-list');
ulList.style.border="3px solid red";
ulList.style.padding="0.5em";

var childrenUl=ulList.children;
console.log("childrenUl is : " , childrenUl);
console.log("childrenUl.length is : " , childrenUl.length);

for(let i=0 ; i<childrenUl.length ; i++){
  childrenUl[i].style.border="3px solid orange";
}

//-----------------------------------------------------------------------------------------------------------
//https://www.w3schools.com/jsref/prop_element_children.asp
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_children3

var mySelectChildren=document.getElementById('mySelect').children;
console.log("mySelectChildren is : " , mySelectChildren);

function getOption(arr){
  var newArr=[];
  for(let i=0; i<arr.length ; i++){
  newArr.push(arr[i].innerText);
  }
  return newArr;
}

console.log("---getOption(mySelectChildren) is : " , getOption(mySelectChildren));

var innerTextOption=document.getElementById('inner-text-option');
innerTextOption.innerText=getOption(mySelectChildren).join(" / ");
innerTextOption.style.border="3px solid red";

var demoSelect=document.getElementById('demoSelect');
demoSelect.style.border="3px solid yellowgreen";
demoSelect.style.padding="0.5em";
demoSelect.style.margin="0.5em";
//demoSelect.innerText=mySelectChildren[3].innerText;
demoSelect.innerText=getOption(mySelectChildren)[3];

//
var selectOption=document.getElementById('select-option');
selectOption.style.border="3px solid yellow";
selectOption.style.padding="0.5em";
selectOption.style.margin="0.5em";

//
for(let i=0 ; i < mySelectChildren.length ; i++){
  mySelectChildren[i].addEventListener("click" , function(event){
    selectOption.innerText=mySelectChildren[i].innerText;
    //selectOption.innerText=mySelectChildren[i].value;
  })
}

//-------------------------------------------------------
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_children4

var parentSchoolchildren=document.getElementById('parentSchool').children;
console.log("parentSchoolchildren is : " , parentSchoolchildren);

var changeBGbtn=document.getElementById('changeBGbtn');
changeBGbtn.style.border="3px solid red";
changeBGbtn.addEventListener("click" , cbFunc);

function cbFunc(event){

for(let i=0 ; i<parentSchoolchildren.length ; i++){
  parentSchoolchildren[i].style.backgroundColor="deeppink";
}

}
//
var changeOneBGbtn=document.getElementById('changeOneBGbtn');
changeOneBGbtn.style.border="3px solid indigo";
changeOneBGbtn.addEventListener("click" , function(event){
  parentSchoolchildren[3].style.backgroundColor="yellowgreen";
})
//
var changeLastBGbtn=document.getElementById('changeLastBGbtn');
changeLastBGbtn.style.border="3px solid olive";
changeLastBGbtn.addEventListener("click" , cbFuncLastElChange);

function cbFuncLastElChange(event){
  parentSchoolchildren[parentSchoolchildren.length - 3].style.backgroundColor="yellow";
}
//11 04 2022 ex5-----------------------------------------------------------------------------------------------


var myContainer=document.getElementById('myContainer');
myContainer.style.backgroundColor="yellow";

var myButtonAll=document.querySelectorAll(".myButton");
console.log("myButtonAll is : " , myButtonAll);

for(let i=0 ; i<myButtonAll.length ; i++){
  myButtonAll[i].addEventListener("click" , function(event){
    event.preventDefault();
    myButtonAll[i].style.backgroundColor="red";

    myContainer.style.backgroundColor="yellowgreen";
    myContainer.innerText=this.dataset.text;
  })
}

//cloneNode(true)
//cata discord grupa 1 11042022
//www.w3schools.com/jsref/met_node_clonenode.asp
//www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_clonenode

var mylist1=document.getElementById('mylist1');
console.log("mylist1 is : " , mylist1);
mylist1.style.border="3px solid red";

var mylist2=document.getElementById('mylist2');
console.log("mylist2 is : " , mylist2);
mylist2.style.border="3px solid green";
//

var nodeMilk=mylist2.lastElementChild;
console.log("nodeMilk is : " , nodeMilk);

  var cloneMilk = nodeMilk.cloneNode(true);
console.log("cloneMilk is : " , cloneMilk);

//
var copyMilkBtn=document.getElementById('copyMilk');
copyMilkBtn.style.border="3px solid orange";
copyMilkBtn.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("copy milk");
  return mylist1.appendChild(cloneMilk);
})
//
var nodeWater=mylist2.firstElementChild;
console.log("nodeWater is : " , nodeWater);

  var cloneWater = nodeWater.cloneNode(true);
console.log("cloneWater is : " , cloneWater);

var copyWaterBtn=document.getElementById('copyWater');
copyWaterBtn.style.border="3px solid blue";
copyWaterBtn.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("copy water");
  return mylist1.appendChild(cloneWater);
})

//selectez al doilea element icecream cu index 1
var nodeIcecream=mylist2.children[1];
console.log("nodeIcecream is : " , nodeIcecream);

var cloneIcecream=nodeIcecream.cloneNode(true);
console.log("cloneIcecream is : " , cloneIcecream);

var copyIcecreamBtn=document.getElementById('icecream');
copyIcecreamBtn.style.border="3px solid CornflowerBlue";
copyIcecreamBtn.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("copy icecream");
  return mylist1.appendChild(cloneIcecream);
})

//-------------------------------------------------------------------------------------------------------grupa 1 discord 11 04 2022
//HTML DOM Document createElement()

var shoppingList=document.getElementById('shopping-list');
shoppingList.style.border="5px solid cornflowerblue";
shoppingList.style.padding="0.5em";

var childrenArr=shoppingList.children;
console.log("childrenArr is : " , childrenArr);

//adauga bread
var btn1=document.getElementById('btn1');
btn1.style.border="3px solid red";
btn1.addEventListener("click" , cbFunc1);

function cbFunc1(event){
  console.log("you clicked btn 1");

var newLi=document.createElement("li");
    newLi.innerText="bread";

    shoppingList.appendChild(newLi);

}
//sterge pe rand fiecare li
var btn2=document.getElementById('btn2');
btn2.style.border="3px solid green";
btn2.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("you clicked second btn");

if(childrenArr.length !== 0){
return shoppingList.removeChild(childrenArr[0]);//return shoppingList.removeChild(shoppingList.firstElementChild);
}else{
  return console.log("no item li left in ul");
}

})

//remove last li element
var btn3=document.getElementById('btn3');
btn3.style.border="3px solid pink";
btn3.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("you clicked third btn");

if(shoppingList.children.length !== 0){
  return shoppingList.removeChild(shoppingList.lastElementChild);
}else{
  return console.log("no item li left in ul");
}

});
//
var btn4=document.getElementById('btn4');
btn4.style.border="3px solid blue";
btn4.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked fourth button");

    var nodeMigdale=shoppingList.children[1];
    var cloneMigdale=nodeMigdale.cloneNode(true);
    return shoppingList.appendChild(cloneMigdale);
})

//appendChild
//https://www.w3schools.com/jsref/met_node_appendchild.asp
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_appendchild

var appendList=document.getElementById('appendList');
appendList.style.border="3px solid yellow";
appendList.style.padding="0.5em";
appendList.style.margin="0.5em";
appendList.children[0].style.border="3px dashed pink";
appendList.children[1].style.border="3px dashed yellowgreen";

var btnAppend=document.getElementById('btnAppend');
btnAppend.style.border="3px solid indigo";
btnAppend.addEventListener("click" , appendLi)

function appendLi(event){
  event.preventDefault();
console.log("append li water")
// Create an "li" node:
const nodeWater=document.createElement("li");
nodeWater.style.border="3px solid red";
nodeWater.style.padding="0.3em";
nodeWater.innerText="watter";

appendList.appendChild(nodeWater);

}

//-------------------------------------------
//https://www.w3schools.com/jsref/met_node_appendchild.asp
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_appendchild2

//move an item from one list to another
var listAppend1=document.getElementById('listAppend1');
listAppend1.style.border="3px solid pink";
listAppend1.style.padding="0.3em";

var listAppend2=document.getElementById('listAppend2');
listAppend2.style.border="3px solid orange";
listAppend2.style.padding="0.3em";

var moveLiLast=document.getElementById('moveLiLast');
moveLiLast.style.border="3px solid indigo";
moveLiLast.style.padding="0.3em";
moveLiLast.addEventListener("click" , moveFunction);

function moveFunction(event){
  event.preventDefault();
  console.log("you clicked btn to move last li");

  if(listAppend2.children.length !== 0){
    //get the last li of second list
    var nodeLastLi=listAppend2.lastElementChild;
    nodeLastLi.style.border="3px solid yellowgreen";
    nodeLastLi.style.padding="0.3em";
  //adauga in prima lista
    listAppend1.appendChild(nodeLastLi);
  }else{
    console.log("second list cu alune is empty");
  }
}

//

var moveLiFirst=document.getElementById('moveLiFirst');
moveLiFirst.style.border="3px solid darkgreen";
moveLiFirst.style.padding="0.3em";
moveLiFirst.addEventListener("click" , moveFirstLiFunc);

function moveFirstLiFunc(event){
  event.preventDefault();
  console.log("you clicked btn to move first li");

  if(listAppend2.children.length !== 0){
    //get the last li of second list
    var nodeFirstLi=listAppend2.firstElementChild;
    nodeFirstLi.style.border="3px solid magenta";
    nodeFirstLi.style.padding="0.3em";

    listAppend1.appendChild(nodeFirstLi);
  }else{
    console.log("second list cu alune is empty");
  }
}

//create element and append child---------------------------------------------------------------------------------------
//https://www.w3schools.com/jsref/met_node_appendchild.asp
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_appendchild3

var myDIV=document.getElementById('myDIV');
myDIV.style.border="3px solid orange";
myDIV.style.padding="0.3em";


var addDOMelBtn=document.getElementById('addDOMelBtn');
addDOMelBtn.style.border="3px solid yellow";
addDOMelBtn.style.padding="0.3em";
addDOMelBtn.addEventListener("click" , appendDOMelFunc);

function appendDOMelFunc(event){
  event.preventDefault();
  console.log("you clicked btn to append DOM element");

const paragraphNode=document.createElement("p");
paragraphNode.innerText="I am a paragraf created when clicking btn by appendDOMelFunc function";
paragraphNode.style.padding="0.5em";
paragraphNode.style.margin="0.5em";
paragraphNode.style.border="3px solid magenta";
paragraphNode.style.width="50%";

myDIV.appendChild(paragraphNode);
}

//

var addDOMelImageBtn=document.getElementById('addDOMelImageBtn');
addDOMelImageBtn.style.padding="0.5em";
addDOMelImageBtn.style.margin="0.5em";
addDOMelImageBtn.style.border="3px solid Cornsilk";
addDOMelImageBtn.addEventListener("click" , appendDOMimgFunc);

function appendDOMimgFunc(event){
  event.preventDefault();
  console.log("you clicked btn to append image photo DOM element");

  const imageNode=document.createElement("img");
  imageNode.style.border="3px dashed magenta";
  imageNode.style.padding="0.5em";
  imageNode.src="../assets/images/fruits.jpg";
  imageNode.alt="should be fruits.jpg right here";
  imageNode.style.width="20%";
  myDIV.appendChild(imageNode);
}

//

var addDOMelCircleBtn=document.getElementById('addDOMelCircleBtn');
addDOMelCircleBtn.style.padding="0.5em";
addDOMelCircleBtn.style.margin="0.5em";
addDOMelCircleBtn.style.border="3px solid FireBrick";
addDOMelCircleBtn.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("you clicked btn to append circle div DOM element");

  const circleNode=document.createElement("div");
  circleNode.style.padding="0.5em";
  circleNode.style.margin="0.5em";
  circleNode.style.border="3px solid FireBrick";
  circleNode.style.borderRadius="50%";
  circleNode.style.backgroundColor="pink";
  circleNode.style.width="100px";
  circleNode.style.height="100px";

  myDIV.appendChild(circleNode);
})

//cerateElement and appendElement
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_doc_body_append
//https://www.w3schools.com/jsref/met_node_appendchild.asp

// var createDOMbtn=document.getElementById('createDOMbtn');
// createDOMbtn.style.border="3px solid red";
// createDOMbtn.addEventListener("click" , function(event){
//   event.preventDefault();
//   console.log("--------------------------you clicked btn to append paragraph to body");
//
//   const parNode=document.createElement("p");
//   parNode.innerText="I am a paragraph appended to the document's body";
//   parNode.style.border="3px solid DarkTurquoise";
//
//   document.body.appendChild(parNode);
// })

//discord grupa 1 11 04 2022 exact in ainte de catel si pisic

var domesticList=document.getElementById('domesticList');
domesticList.style.border="3px solid red";
console.log("domesticList.children.length is : " , domesticList.children.length);
domesticList.style.padding="0.5em";
domesticList.children[0].style.border="3px solid magenta";
domesticList.children[0].style.padding="0.5em";
domesticList.children[1].style.border="3px solid olive";
domesticList.children[1].style.padding="0.5em";
domesticList.children[2].style.border="3px solid hotpink";
domesticList.children[2].style.padding="0.5em";
domesticList.children[3].style.border="3px solid yellowgreen";
domesticList.children[3].style.padding="0.5em";
domesticList.children[4].style.border="3px solid LightSeaGreen";
domesticList.children[4].style.padding="0.5em";

var changeListBtn1=document.getElementById('changeListBtn1');
changeListBtn1.style.border="3px dashed cornflowerblue";
changeListBtn1.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("you clicked btn 1 to add li with domestic animal");

  const domLi=document.createElement("li");
  domLi.innerText="sarpe";
  domLi.style.border="3px solid LightSlateGray";

  domesticList.appendChild(domLi);
})
//
var changeListBtn2=document.getElementById('changeListBtn2');
changeListBtn2.style.border="3px solid black";
changeListBtn2.addEventListener("click" , removeLastLiFunc);

function removeLastLiFunc(){
  event.preventDefault();

  if(domesticList.children.length !== 0){
    console.log("you clicked btn 2 to remove last li");

    domesticList.removeChild(domesticList.lastElementChild);
  }else{
    console.log("domesticList is empty");
  }
}

//

var changeListBtn3=document.getElementById('changeListBtn3');
changeListBtn3.style.border="3px solid yellow";
changeListBtn3.addEventListener("click" , cloneFirstLiFunc);

function cloneFirstLiFunc(event){
    event.preventDefault();
    console.log("you clicked third button");

const newCloneLi=domesticList.children[0].cloneNode(true);
domesticList.appendChild(newCloneLi);
}


//createElement
//clone elemente
//remove element
