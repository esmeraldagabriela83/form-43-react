console.log("----------------callback-function.js-------");
//curs 26 catalin
//setTimeout , setInterval , addEventListener primesc alte functii

//Understanding JavaScript Callbacks  https://www.youtube.com/watch?v=Nau-iEEgEoM

//sincron - executa codul linie dupa linie
//asincron - callback function (ca parametru formal in higher - order function) // se executa dupa ce altceva se executa mai intai
//cauta in functions-and-callbackFunction.js


//setTimeout este o functie ce se executa dupa un anume interval de timp
//setTimeout este o functie//metoda care primeste o alta functie

var callbackParagraph=document.getElementById('callbackParagraph');
callbackParagraph.style.padding="1em";
callbackParagraph.style.margin="1.5em";
callbackParagraph.style.border="3px solid yellow";
callbackParagraph.innerText="MY TEXT CHANGES IN 5 SECONDS";
callbackParagraph.style.color="dimgray";
callbackParagraph.style.backgroundColor="deeppink";
callbackParagraph.style.textAlign="left";

let callbackFunction=function(){
  console.log("I appear after 5 seconds");
  callbackParagraph.innerText="I appear after 5 seconds";
  callbackParagraph.style.border="3px solid yellowgreen";
  callbackParagraph.style.color="black";
  callbackParagraph.style.backgroundColor="white";
  callbackParagraph.style.textAlign="right";
}

setTimeout(callbackFunction , 3000);
/////////////////////////////////////setInterval()method function primeste o functie callback
var demoSetInterval=document.getElementById("demoSetInterval");
demoSetInterval.innerText="initial text";
demoSetInterval.style.textAlign="right";
demoSetInterval.style.fontWeight="bold";

function myTimerCallbackFunc(){
// console.log("I show without stopping the time in 1 second");
 const date = new Date();
 demoSetInterval.innerText=date.toLocaleTimeString();
}

setInterval(myTimerCallbackFunc, 1000);
//////////////////setInterval with clearInterval when the user clicks the button

var demo1=document.getElementById("demoSetIntervalAndClearInterval");
demo1.style.border="3px solid DarkSalmon";
demo1.innerText="before text";

function myTimerAndClearIntervalCallbackFunc(){
  const date = new Date();
  demo1.innerText=date.toLocaleTimeString();
}

const newInterval =setInterval(myTimerAndClearIntervalCallbackFunc, 1000);
console.log("------------newInterval is : " , newInterval);

function stopNewInterval(){
  clearInterval(newInterval);
}

//////////////////setInterval with clearInterval when the user clicks the button to stop display text

var displayText=document.getElementById("displayText");
displayText.style.border="3px dotted magenta";
displayText.style.padding="1em";
displayText.innerText="MY INITIAL TEXT";

function displayTextFunc(){
  displayText.innerText+="NEW DISPLAYED TEXT // ";
}

const newText=setInterval(displayTextFunc, 10000);

function stopDisplaingText(event){
  clearInterval(newText);
}

var stopDisplayText=document.getElementById("stopDisplayText");

stopDisplayText.style.padding="0.5em 1em";
stopDisplayText.style.color="magenta";

stopDisplayText.addEventListener("click" , stopDisplaingText);

//////////////////////////my exercise


var userTextFromInput=document.getElementById("userTextFromInput");
userTextFromInput.style.padding="1em";
userTextFromInput.style.border="3px dotted IndianRed";

var inputText=document.getElementById("inputText");
inputText.style.backgroundColor="gold";
inputText.style.color="black";
inputText.style.padding="0.5em";

function showUserTextInParagraph(event){
  console.log("-----------    userTextFromInput.value is : " , userTextFromInput.value);
  userTextFromInput.innerText=inputText.value;
}

var btnShowUSERtext=document.getElementById("showUSERtext");
btnShowUSERtext.addEventListener("click" , showUserTextInParagraph);


function changeUserTextInParagraph(){
  userTextFromInput.innerText += " CHANGED TEXT AFTER 3 SECONDS // ";
}

const changeUserText=setInterval(changeUserTextInParagraph, 3000);

function stopChangedText(event){
  clearInterval(changeUserText)
}

var stopUSERtext=document.getElementById("stopUSERtext");
stopUSERtext.addEventListener("click" , stopChangedText);


//////////////my exercise
/////////////setInterval cu functie anonima

setTimeout( function(){
  console.log("after 3 seconds => Hello from anonimous function");
} , 3000);

//Understanding JavaScript Callbacks  https://www.youtube.com/watch?v=Nau-iEEgEoM

///////////////////////////////-----------------------------------------

let students=[
  {name:"Mary1" , score:90 , school:"West"},
  {name:"Mary2" , score:63 , school:"East"},
  {name:"Mary3" , score:75 , school:"West"},
  {name:"Mary4" , score:85 , school:"West"},
  {name:"Mary5" , score:35 , school:"West"},
  {name:"Mary6" , score:25 , school:"East"},
  {name:"Mary7" , score:105 , school:"West"},
  {name:"Mary8" , score:73 , school:"West"},
  {name:"Mary9" , score:78 , school:"West"}
];

let processStudents=function(data , callback){
  for(let i=0 ; i<data.length ; i++){
    if(data[i].school === "West"){
      callback(data[i]);
      //each data[i] is an object from data array
      //data and students are arrays: data parametru formal , students parametru real
    }
  }
}

let studentNames=[];
let studentScores=[];

function callbackFunc1(object){
if(object.score > 60){
  console.log("object.name is : " , object.name);
  studentNames.push( object.name);

  console.log("object.score is : " , object.score);
  studentScores.push( object.score);
}
}

//apel functie
processStudents(students , callbackFunc1);

console.log("studentNames is : " , studentNames);//['Mary1', 'Mary3', 'Mary4', 'Mary7', 'Mary8', 'Mary9']
console.log("studentNames.length is : " , studentNames.length);//studentNames.length is :  6

console.log("studentScores is : " , studentScores);// [90, 75, 85, 105, 73, 78]
console.log("studentScores.length is : " , studentScores.length);//studentScores.length is :  6

var allStudent=document.querySelectorAll(".student");
console.log("allStudent are in array : " , allStudent);

for(let i=0 ; i<allStudent.length ; i++){
  allStudent[i].innerText=studentNames[i] + " passed the exam; score is: " + studentScores[i];
  allStudent[i].style.border="3px dashed black";
  allStudent[i].style.padding="0.5em";
  allStudent[i].style.margin="0.5em";
}

///////////////////
let determineTotalll=function(){

  let total=0;
  let count=0;

processStudents(students , function(object){
  total=total + object.score;
  count++;
});
console.log("Total score: " , total , "-total count: " , count);
}
//apel functie
determineTotalll();

//
