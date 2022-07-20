console.log("I am in show-user-value 7 07 2022");

var tbuser=document.getElementById("tbuser");
tbuser.style.border="3px solid orangered";
tbuser.style.outline="none";
tbuser.style.padding="0.5em 1em";

var btn1=document.getElementById("btn1");
btn1.style.border="3px dashed forestgreen";

var outputUser=document.getElementById("output");
outputUser.style.border="3px dotted cornflowerblue";
outputUser.style.padding="0.5em 1em";

function showUserValue(event){
  console.log("tbuser.value" , tbuser.value);
  return outputUser.innerText=tbuser.value;
}

btn1.addEventListener("click" , showUserValue);
///////////////////////////
//in css ar fi fost asa :
// #tbuser:focus{
// outline:none;
// }
