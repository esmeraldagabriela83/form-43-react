console.log("input-name");
//7.07.2022



//input name
var inputOne=document.getElementById("name");
var inputTwo=document.getElementById("surname");

var buttonTotalName=document.getElementById("show-total-name");

var outputTotalName=document.getElementById("outputTotalName");

function nameFunc(event){
  var userTotalName=inputOne.value + " " + inputTwo.value;
  console.log("userTotalName" , userTotalName);
  return outputTotalName.innerText=userTotalName;
}

buttonTotalName.addEventListener("click" , nameFunc);
