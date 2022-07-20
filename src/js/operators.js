console.log("I am in operators.js");

//7.07.2022

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

//JavaScript Calculate 2 Numbers Form Input Text - Addition, Subtraction, Multiplication, Division

//https://www.youtube.com/watch?v=oDUjP4N_MtQ



function calc(event){


  // var n1=parseInt(document.getElementById("n1").value);
    var n1=parseFloat(document.getElementById("n1").value);

  // var n2=parseInt(document.getElementById("n2").value);
  var n2=parseFloat(document.getElementById("n2").value);

  var oper=document.getElementById("operators").value;

console.log("you clicked the button");
console.log("n1 is : " , n1);
console.log("n2 is : " , n2);

console.log("oper is : " , oper);

if(oper === "+"){
  console.log("Addition//n1 + n2 is : " , n1 + n2);
document.getElementById("result").value=n1 + n2;
}

if(oper === "-"){
  console.log("Subtraction//n1 - n2 is : " , n1 - n2);
document.getElementById("result").value=n1 - n2;
}


if(oper === "/"){
  console.log("Division//n1 / n2 is : " , n1 / n2);
document.getElementById("result").value=n1 / n2;
}

if(oper === "X"){
  console.log("Multiplication//n1 * n2 is : " , n1* n2);
document.getElementById("result").value=n1 * n2;
}

}

var calcButton=document.getElementById("calcButton");
calcButton.style.border="3px dotted magenta";
calcButton.addEventListener("click" , calc);

////////////////
var inputsArray=document.querySelectorAll("#input-tutorial input");
console.log("inputsArray is : " , inputsArray);
for(i=0 ; i<inputsArray.length ;i++){
  inputsArray[i].style.border="3px dotted skyblue";
  inputsArray[i].style.outline="none";
}






















//
