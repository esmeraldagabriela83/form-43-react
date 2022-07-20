console.log("I am in my-version-input 7 07 2022");

//operators
//https://www.w3schools.com/js/js_operators.asp

//+	Addition
//-	Subtraction
//*	Multiplication
//**	Exponentiation (ES2016)
// /	Division
//%	Modulus (Division Remainder)
//++	Increment
//--	Decrement
/////////////////////////////////////////////////////////////////

var n3=document.getElementById("n3");
n3.style.border="3px dotted Blue";

var n4=document.getElementById("n4");
n4.style.border="3px dotted DarkMagenta";

var additionSpanResult=document.getElementById("additionSpan");
additionSpanResult.style.border="3px solid DarkOliveGreen";
additionSpanResult.style.marginLeft="1em";
additionSpanResult.style.padding="0.5em 1em";
///------------additionFunc----------------/////////////////
function additionFunc(event){
  console.log("you clicked the addition button +");
//metoda parseFloat() transforma string-ul introdus de user in valoare numerica
var n3Value=parseFloat(n3.value);
console.log("n3Value is : " , n3Value);
n3.style.border="3px solid Blue";
//metoda parseFloat() transforma string-ul introdus de user in valoare numerica
var n4Value=parseFloat(n4.value);
console.log("n4Value is : " , n4Value);
n4.style.border="3px solid DarkMagenta";

additionSpanResult.innerText=n3Value + n4Value;

}
////////////////////////////////////////////
var additionInputsBtn=document.getElementById("additionInputs");
console.log("additionInputs" , additionInputs);
additionInputsBtn.style.padding="1em";
additionInputsBtn.addEventListener("click" , additionFunc);

///------------subtractionFunc----------------/////////////////

var subtractionSpanResult=document.getElementById("subtractionSpan");
subtractionSpanResult.style.border="3px solid olive";
subtractionSpanResult.style.marginLeft="1em";
subtractionSpanResult.style.padding="0.5em 1em";

function subtractionFunc(event){
  console.log("you clicked the subtraction button -");

  //metoda parseFloat() transforma string-ul introdus de user in valoare numerica
  var n3Value=parseFloat(n3.value);
  console.log("n3Value is : " , n3Value);
  n3.style.border="3px solid dimgray";
  //metoda parseFloat() transforma string-ul introdus de user in valoare numerica
  var n4Value=parseFloat(n4.value);
  console.log("n4Value is : " , n4Value);
  n4.style.border="3px solid #262626";

  subtractionSpanResult.innerText=n3Value - n4Value;

}

var subtractionInputsBtn=document.getElementById("subtraction");
console.log("subtractionInputsBtn" , subtractionInputsBtn);
subtractionInputsBtn.style.padding="1em";
subtractionInputsBtn.addEventListener("click" , subtractionFunc);

///------------divisionFunc----------------/////////////////
var divisionSpanResult=document.getElementById("divisionSpan");
divisionSpanResult.style.border="3px solid orange";
divisionSpanResult.style.marginLeft="1em";
divisionSpanResult.style.padding="0.5em 1em";

function divisionFunc(event){
  console.log("you clicked the division button /");

  //metoda parseFloat() transforma string-ul introdus de user in valoare numerica
  var n3Value=parseFloat(n3.value);
  console.log("n3Value is : " , n3Value);
  n3.style.border="3px solid dimgray";
  //metoda parseFloat() transforma string-ul introdus de user in valoare numerica
  var n4Value=parseFloat(n4.value);
  console.log("n4Value is : " , n4Value);
  n4.style.border="3px solid #262626";

  divisionSpanResult.innerText=n3Value / n4Value;

}

var divisionInputsBtn=document.getElementById("division");
console.log("divisionInputsBtn" , divisionInputsBtn);
divisionInputsBtn.style.padding="1em";
divisionInputsBtn.addEventListener("click" , divisionFunc);
/////////////////////---------------multiplicationFunc------------////////////

var multiplicationSpanResult=document.getElementById("multiplicationSpan");
multiplicationSpanResult.style.border="3px solid yellow";
multiplicationSpanResult.style.marginLeft="1em";
multiplicationSpanResult.style.padding="0.5em 1em";

function multiplicationFunc(event){
  console.log("you clicked the multiplication button *");

  //metoda parseFloat() transforma string-ul introdus de user in valoare numerica
  var n3Value=parseFloat(n3.value);
  console.log("n3Value is : " , n3Value);
  n3.style.border="3px solid dimgray";
  //metoda parseFloat() transforma string-ul introdus de user in valoare numerica
  var n4Value=parseFloat(n4.value);
  console.log("n4Value is : " , n4Value);
  n4.style.border="3px solid #262626";

  multiplicationSpanResult.innerText=n3Value * n4Value;

}

var multiplicationInputsBtn=document.getElementById("multiplication");
console.log("multiplicationInputsBtn" , multiplicationInputsBtn);
multiplicationInputsBtn.style.padding="1em";
multiplicationInputsBtn.addEventListener("click" , multiplicationFunc);


//
