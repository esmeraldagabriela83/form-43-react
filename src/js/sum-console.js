console.log("I am in sum-console");

////////////////////////7 07 2022

var num1=4;
var num2=7;

var sumSpan=document.querySelector(".spanShowSum");
sumSpan.style.border="3px dotted yellow";

function sumFunction(event){
  var sumNumbers=num1 + num2;
  console.log("sumNumbers is : " , sumNumbers);

return sumSpan.innerText=sumNumbers;
       sumSpan.style.padding="0.5em 1em";
}

var showSum=document.querySelector(".showSum");
showSum.style.border="3px solid olive";
showSum.addEventListener("click" , sumFunction);
//////////////////////////////////////////////////////////////////////
