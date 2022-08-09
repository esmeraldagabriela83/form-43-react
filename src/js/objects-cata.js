console.log("objects cata js file");

//https://www.youtube.com/watch?v=aAAS9cEuFYI&t=2s
//JavaScript The Hard Parts: Object Oriented Programming

//Part 1: JavaScript the Hard Parts - Classes, Prototypes & Object-Oriented Programming

// — 19.04.2022
const myName = "Mihaela Gabriela Aco";
console.log("myName is : " , myName);

const myname=document.getElementById('myname');
myname.style.border="3px solid red";
myname.style.padding="0.5em";
myname.innerText=myName;
//
let restMyName=[...myName];
console.log("restMyName is : " , restMyName);

const restmyname=document.getElementById("restmyname");
restmyname.style.border="3px solid green";
restmyname.style.padding="0.5em";
restmyname.innerText=restMyName.map(el => el).join(" / ");
//
let resultmyName=[...myName].map((element , index) => index % 2 == 0 ? element.toUpperCase() : element.toLowerCase());
console.log(" resultmyName is :  " , resultmyName);

const resultmyname=document.getElementById("resultmyname");
resultmyname.style.border="3px solid blue";
resultmyname.style.padding="0.5em";
resultmyname.innerText=resultmyName.join(" / ");
//
//IIFE <=> Imediately Invoked Function Expression
console.log((function(param){
  return param;
})(5))
//ARROW FUNCTION
console.log(( a => a)(70));

//
const myDiv = {
  backgroundColor: 'Chartreuse ',
  width: 150,
  height:150,
  color: 'forestgreen'
}

const jsStyle=document.getElementById("jsStyle");
jsStyle.innerText="text from js file";
jsStyle.style.backgroundColor=myDiv.backgroundColor;
jsStyle.style.height=myDiv.height + 'px';
jsStyle.style.width=myDiv.width + 'px';
jsStyle.style.color=myDiv.color;

//https://www.w3schools.com/react/exercise.asp?filename=exercise_es6_spread1
//...rest operator es6
//https://www.w3schools.com/react/react_es6_spread.asp
const arrayOne = ['a', 'b', 'c'];
const arrayTwo = [1, 2, 3];
const arraysCombined =[...arrayOne , ...arrayTwo];
console.log("arraysCombined is : " , arraysCombined);//arraysCombined is :  (6) ['a', 'b', 'c', 1, 2, 3]

const arrPersons=["user1" , "user2" , "user3" , "user4" , "zmeura", "capsuni" , "banane"];
const [getUser1 , getUser2 , getUser3 , getUser4 , ...restPersons]=arrPersons;

console.log("getUser1 is : " , getUser1);
console.log("typeof(getUser1) is : " , typeof(getUser1));
console.log("getUser2 is : " , getUser2);
console.log("getUser3 is : " , getUser3);
console.log("getUser4 is : " , getUser4);
console.log("restPersons is : " , restPersons);

const allRestLi=document.querySelectorAll(".restLi");
console.log("allRestLi is : " , allRestLi);

for(let i=0 ; i<allRestLi.length ; i++){
  allRestLi[i].style.border="3px solid orange";
  allRestLi[i].style.padding="0.5em";
  if(i < 4){
      allRestLi[i].innerText=arrPersons[i];
  }
}
allRestLi[4].innerText=restPersons.join(" / ");
//allRestLi[0].innerText=getUser1;

const arrmy=[1 , 4 , "castraveti"];
const castravetiParagraph=document.getElementById("castravetiParagraph");
castravetiParagraph.innerText=arrmy.join(" / ");
//---------------------------------------------------------------------------------------------------------------------------

const myLiObj = {
  backgroundColor: 'yellow',
  width: 150,
  height:100,
  color: 'cornflowerblue',
  innerText:"just li"
}

const allLiObj=document.querySelectorAll('.liObj');
console.log("allLiObj is : " , allLiObj);

for(let i=0 ; i<allLiObj.length ; i++){
  allLiObj[i].style.border="3px solid blue";
  allLiObj[i].style.padding="0.5em";
  allLiObj[i].style.margin="0.5em";
  allLiObj[i].style.width=myLiObj.width + 'px';
  allLiObj[i].style.height=myLiObj.height + 'px';
  allLiObj[i].style.color=myLiObj.color;
  allLiObj[i].style.backgroundColor=myLiObj.backgroundColor;
  allLiObj[i].innerText=myLiObj.innerText;
}

///curs 28   19 04 2022

const button = {
  text: "Send message",
  id: "sendMsg",
  width: 150,
  padding: 20,
  bgCOL:"yellow",
  color:"cornflowerblue"
};

function sendMsg(button) {
  return `This is a button.\nIt is ${button.width} wide.\nThe text on it says "${button.text}".`;
}
//pt afisare in consola
console.log("---!!!---sendMsg(button) is : " , sendMsg(button));
////curs 28 19 04 2022
//` btn ` and innerHTML
//width:${button.width}px;

function HTMLButton(button) {
  const btn = `<button style="width:${button.width}px;
                              padding:${button.padding}px;
                              color:${button.color};
                              background-color:${button.bgCOL};
                              border:3px solid red;
                              font-weight:bold"
                        id="${button.id}">
                ${button.text}
                </button>`;
  return btn;
}

const htmlBtn = HTMLButton(button);
console.log("htmlBtn is : " , htmlBtn);

document.getElementById('btnInside').innerHTML = htmlBtn;

document.getElementById('sendMsg').style.letterSpacing="0.3em";
document.getElementById('sendMsg').addEventListener("click" , function(event){
console.log("Afara e cald.")
})

///curs 28 19 04 2022 general
//createElement and appendChild
//btn.style.width = button.width + 'px';

function DOMButton(button){
  const btn = document.createElement('button');
  btn.style.width = button.width + 'px';
  btn.style.padding = button.padding + 'px';
  btn.id = "documentCreatedBtn";
  btn.innerText = button.text;
  btn.style.backgroundColor=button.bgCOL;
  btn.style.color=button.color;
  btn.style.height="200px";
  return btn;
}

document.getElementById('btnDomInside').appendChild(DOMButton(button));

document.getElementById('documentCreatedBtn').style.border="3px solid magenta"
document.getElementById('documentCreatedBtn').addEventListener("mouseover" , showFuncCB);

function showFuncCB(event){
  console.log("Este inca vara si este foarte cald.")
}

//01 04 2022 discord


var mycountry = {
  "capital": "Bucuresti",
  "population": 4000000,
  "president": "Johanis",
  "primeMinisters": ["Ciorbea","Citu","Ciuca"],
  "test": "test"
};
console.log("mycountry is : " , mycountry);

console.log(mycountry.capital);
console.log(mycountry.population);
console.log(mycountry.president);
console.log(mycountry.primeMinisters);

const allcontryLi=document.querySelectorAll(".contryLi");

for(let i=0 ; i<allcontryLi.length ; i++){
  allcontryLi[i].style.border="3px solid red";
  allcontryLi[i].style.padding="0.3em";
  allcontryLi[i].style.margin="0.3em";
}

const capital=document.querySelector(".capital");
console.log("capital is : " , capital);
capital.innerText=mycountry.capital;

const population=document.querySelector(".population");
console.log("population is : " , population);
population.innerText=mycountry.population;

const president=document.querySelector(".president");
console.log("president is : " , president);
president.innerText=mycountry.president;

const primeMinisters=document.querySelector(".primeMinisters");
console.log("primeMinisters is : " , primeMinisters);
primeMinisters.innerText=mycountry.primeMinisters.join(" / ");

console.log("Object.keys(mycountry) is : " , Object.keys(mycountry));
console.log("Object.values(mycountry) is : " , Object.values(mycountry));

const keysMyCountry=Object.keys(mycountry);
console.log("keysMyCountry is : " , keysMyCountry);
for(let i=0 ; i<keysMyCountry.length ; i++){
  console.log("keysMyCountry[i] is : " , keysMyCountry[i]);
}
////---------------------------------------------------------------------------------------------------------------

var timeMachine={
  "shape":"rounded",
    "model":"M 700",
      "run":function(place , time){
        console.log(time + " I travel to the " + place + " and back : ");
        return time + " I travel to the " + place + " and back.";
      }
}

console.log("................" ,timeMachine.shape);
console.log("................" ,timeMachine.model);
timeMachine.run("moon" , "today");

const alltimeMachine=document.querySelectorAll(".timeMachine");
for(let i=0 ; i<alltimeMachine.length ; i++){
  alltimeMachine[i].style.border="3px solid pink";
  alltimeMachine[i].style.padding="0.3em";
  alltimeMachine[i].style.margin="0.3em";
}

const machine1=document.querySelector(".machineOne");
machine1.style.letterSpacing="0.5em";
machine1.innerText=timeMachine.run("moon" , "today");

const machine2=document.querySelector(".machineTwo");
machine2.style.letterSpacing="0.7em";
machine2.innerText=timeMachine.run("Constanta" , "tomorrow");

const machine3=document.querySelector(".machineThree");
machine3.style.letterSpacing="0.9em";
machine3.innerText=timeMachine.run("Ceahlau" , "the day after");

//------------------------------------------------------------------------------------------------------------------
//grupa 1 01 04 2022 andrei

var myPerson = {
"name" : "Andrei",
"age": 35,
"sayHello" : function (nature){
  console.log("Salut Andrei !");
  console.log("Hello " + this.name + " , you have " + this.age  + " years old");
  return this.name + " is " + this.age + " years old and talks about " + nature + ".";
}
}

console.log("myPerson.name is:" , myPerson.name);
console.log("myPerson.age is:" , myPerson.age);
myPerson.sayHello("ocean");

const personAndrei=document.getElementById("personAndrei");
personAndrei.innerText=myPerson.sayHello("ocean");

const mypersonall=document.querySelectorAll(".myperson");
for(let i=0 ; i<mypersonall.length ; i++){
  mypersonall[i].style.border="3px solid green";
    mypersonall[i].style.padding="0.3em";
}

const person1=document.querySelector(".personOne");
console.log("person1 is : " , person1);
person1.innerText=myPerson.sayHello("copaci");

const person2=document.querySelector(".personTwo");
console.log("person2 is : " , person2);
person2.innerText=myPerson.sayHello("desert");

const person3=document.querySelector(".personThree");
console.log("person3 is : " , person3);
person3.innerText=myPerson.sayHello("soare");
//
function Person(myname, myage){
  this.name = myname;
  this.age = myage;
}
Person.prototype.sayHello = function(){
  console.log("Hello " + this.name);
}

var personM=new Person("Mihaela", 39);
console.log("personM is : " , personM);
personM.sayHello();

Person.prototype.cantaMuzica = function(song){
  console.log(this.name + " sings " + song);
  return this.name + " is " + this.age + "years old and sings: " + song;
}

var personG=new Person("Gabriela" , 40);
console.log("personG is : " , personG);
console.log("typeof(personG) is : " , typeof(personG));//typeof(personG) is :  object
personG.sayHello();//Hello Gabriela
personG.cantaMuzica("la la la");

const personGabriela=document.getElementById("personGabriela");
personGabriela.style.border="3px solid red";
personGabriela.innerText=personG.cantaMuzica("la la la");

var personMary=new Person("Maria" , 74);
const personMaria=document.getElementById("personMaria");
personMaria.style.border="3px solid green";
personMaria.innerText=personMary.cantaMuzica("bla bla bla");

//--------------------------------------------
//01.04 2022
function TimeMachine(model) {
  this.shape = "round";
  this.model = model;

}
//NE DA POSIBILITATEA DE A ATASA
//PROPRIETATI SI METODE!!!
//!!!DIN EXTERIORUL FUNCTIEI CONSTRUCTOR

TimeMachine.prototype.run = function(date, place) {
  console.log("Traveling with " + this.model + " to " + date + " in  " + place);
}

TimeMachine.prototype.moreProps = ["prop1","prop2"];

var tm1 = new TimeMachine("TM 1");
var tm2 = new TimeMachine("TM 2");

//schimb valoare lui shape pt tm1
tm1.shape = "Square";

//SE APLICA DOAR PE UN ANUMIT OBIECT (tm1)
// tm1.run = function(date, place) {
//   console.log("Traveling with " + this.model + "  to " + date + " in  " + place);
// }

tm1.run("Ieri","Home");

console.log("tm1,tm2 are : " , tm1,tm2);
console.log("tm1.shape,tm2.shape are : " , tm1.shape,tm2.shape);
console.log("tm1.moreProps,tm2.moreProps is : " , tm1.moreProps,tm2.moreProps);
//-------------------------------------------------------------------------------------------------

var andreiBtn=document.querySelector(".mainBtn");
andreiBtn.style.border="3px solid red";
andreiBtn.style.padding="0.5em";

andreiBtn.addEventListener("click" , function(event){
  console.log("It works !");
})
//////----8 04 2022------------------------------------------------------------------------------

var hideShowArticle=document.getElementById('hideShowArticle');
hideShowArticle.style.border="3px solid orange";
hideShowArticle.style.padding="0.3em";
hideShowArticle.addEventListener("click" , function(event){
  event.preventDefault();
  hideShowArticle.style.backgroundColor="crimson";
  hideShowArticle.style.color="cornflowerblue";
  console.log("you clicked the button");

  var articleUnderBtn=this.nextElementSibling;
  articleUnderBtn.classList.toggle("hidden");

  var parentDiv=this.parentElement;
  parentDiv.style.border="3px solid green";
  parentDiv.style.backgroundColor="FloralWhite";
})

//////----8 04 2022------------------------------------------------------------------------------

var buttonAll=document.querySelectorAll(".button") ;
for(let i=0 ; i<buttonAll.length ; i++){
  buttonAll[i].style.border="3px solid pink";
  buttonAll[i].style.padding="0.3em";
  buttonAll[i].addEventListener("click" , function(event){
    event.preventDefault();
  buttonAll[i].style.backgroundColor="yellow";

    var nextBtnParagraph=this.nextElementSibling;
    nextBtnParagraph.style.color="gray";
if(nextBtnParagraph !== null){
  nextBtnParagraph.classList.toggle("hidden");
}

  })
}

//////----8 04 2022------------------------------------------------------------------------------
//https://www.w3schools.com/cssref/pr_class_visibility.asp
//https://www.w3schools.com/cssref/tryit.asp?filename=trycss_visibility

var allvisibleBtn=document.querySelectorAll(".visibleBtn");
console.log("allvisibleBtn is : " , allvisibleBtn);

for(let i=0 ; i<allvisibleBtn.length ; i++){
  allvisibleBtn[i].style.border="3px solid green";
  allvisibleBtn[i].style.padding="0.5em";
  allvisibleBtn[i].addEventListener("click" , function(event){
     event.preventDefault();
    allvisibleBtn[i].style.border="7px solid DarkGoldenRod";

      var nextImg=this.nextElementSibling;
      console.log("nextImg is : " , nextImg);
      if(nextImg !== null){
        nextImg.style.visibility=nextImg.style.visibility == "visible" ? "hidden" : "visible";
      }

      var parentArticle=this.parentElement;
      parentArticle.style.border="3px solid olive";
      parentArticle.style.backgroundColor="Cornsilk";

      var grandparentDiv=this.parentElement.parentElement;
      grandparentDiv.style.border="3px solid magenta";
      grandparentDiv.style.backgroundColor="DeepSkyBlue";
  });
}

//-------------------------------------------------------------------------------------------------
//8042022
var allbuttonSec=document.querySelectorAll(".buttonSec");
for(let i=0 ; i<allbuttonSec.length ; i++){
  allbuttonSec[i].style.border="3px solid red";
  allbuttonSec[i].style.padding="0.5em";
  allbuttonSec[i].addEventListener("click" , function(event){
    event.preventDefault();
    allbuttonSec[i].style.backgroundColor="yellow";

     var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

     var parentButton=this.parentElement;
     parentButton.style.backgroundColor=randomColor;
  })
}
////----------------------------------------------------------------------------------------------

console.log("11 04 2022 ex 5 dom create eements");


//There are two lists on the page. Next to each entry (in both lists) there are buttons.
// Write JavaScript code that will move an element of one list to the other list
//when a corresponding button is clicked. Remember that an element can be moved multiple times
//(e.g. list 1 to list 2, and then back to list 1).

var ul1=document.getElementById("list1");
ul1.style.border="3px solid red";
ul1.style.padding="0.5em";

var arrList1=document.querySelectorAll("#list1 li");
console.log("arrList1 is : " , arrList1);

//

var ul2=document.getElementById("list2");
ul2.style.border="3px solid green";
ul2.style.padding="0.5em";

var arrList2=document.querySelectorAll("#list2 li");
console.log("arrList2 is : " , arrList2);
//
var btnsAllLists=document.querySelectorAll(".moveBtn");
console.log("btnsAllLists is : " , btnsAllLists);

for(let i=0 ; i<btnsAllLists.length ; i++){
  btnsAllLists[i].style.border="3px solid indigo";
  btnsAllLists[i].addEventListener("click" , moveItem)
}
//

function moveItem(event){
  console.log("YOU CLICKED THE MOVE LI LINK");
  console.log("need to move item" ,this);
  console.log("grandparent of move btn is : " , this.parentElement.parentElement.id);
  var gpUl=this.parentElement.parentElement;
  if(gpUl.id === "list1"){
    var getList2=document.getElementById('list2');
    getList2.appendChild(this.parentElement);
  }else{
    var getList1=document.getElementById('list1');
    getList1.appendChild(this.parentElement);
  }
}

///w3 school appendChild
///w 3 school ceateElement
//https://www.w3schools.com/jsref/met_document_createelement.asp

















//
//https://www.youtube.com/watch?v=oMpXmbvk3hw&t=3799s
//Intro to JavaScript: Functions & Objects - Part 1































/////curs 28 19 04 2022 general REPETA REPETA REPETA LINIA  41 54    90 173
