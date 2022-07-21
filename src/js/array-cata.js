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

console.log(multiply([12, 10, 3]));

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

var arrx2 = [2,4,6,34 , 8 , 100 , 68];
console.log("Math.floor(getEvenAvarage(arrx2)) is : " , Math.floor(getEvenAvarage(arrx2)));

//----------------------------------------------------------------------------------





















console.log("....................how to concat arrays ");


















































//
