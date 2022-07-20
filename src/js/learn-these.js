console.log("I am in learn.these.js");

//5 JavaScript Concepts You HAVE TO KNOW
//https://www.youtube.com/watch?v=a00NRSFgHsY

//A JavaScript Boolean represents one of two values: true or false.
//The Boolean() Function

var booleanExample=document.getElementById('demoBoolean');
booleanExample.style.border="3px solid forestgreen";
booleanExample.style.padding="1em";
booleanExample.innerText=Boolean(100 > 50);
//1. equality
//== and ===
//"32" == 32 true pt ca == operator aduce si stringul si numarul la aceeasi valoare

console.log("typeof(32)" , typeof(32));
console.log(typeof("32"));


console.log(Boolean(32=="32"));//true


console.log(Boolean(32==="32"));//false

//"32" === 32 false

var num1=document.getElementById('num1');
num1.style.border="3px solid yellowgreen";

var num2=document.getElementById('num2');
num2.style.border="3px solid yellow";

var booleanBtn=document.getElementById("booleanBtn");
booleanBtn.style.color="olive";
booleanBtn.style.padding="0.5em";

var booleanParagraph=document.getElementById("booleanParagraph");
booleanParagraph.style.border="3px dotted deeppink";
booleanParagraph.style.padding="0.5em";


function showBoolean(event){

var num1Value=parseFloat(num1.value);

var num2Value=parseFloat(num2.value);

  if(num1Value > num2Value){
    console.log("-----num1Value is : " , num1Value);
    console.log( num1Value + " is greater than " + num2Value);

    return booleanParagraph.innerText=num1Value;
  }else if(num1Value < num2Value){
    console.log("-----num2Value is : " , num2Value);
    console.log( num2Value + " is greater than " + num1Value);

    return booleanParagraph.innerText=num2Value;
  }else if(num1Value = num2Value){
    console.log("the inputs are equal");
      return booleanParagraph.innerText=num2Value;
  }else{
    console.log("the inputs are empty");
      return booleanParagraph.innerText="empty inputs";
  }
}
//apel functie
showBoolean();
booleanBtn.addEventListener("click" , showBoolean);
/////////////////////////////////////////////////////////////////////

var booleanInput1=document.getElementById("num1boolean");
booleanInput1.style.border="5px solid BurlyWood";
booleanInput1.style.padding="0.5em";

var booleanInput2=document.getElementById("num2boolean");
booleanInput2.style.border="5px solid Coral";
booleanInput2.style.padding="0.5em";

var btnBoolean=document.getElementById("btnBoolean");
btnBoolean.style.color="white";
btnBoolean.style.backgroundColor="black";

var paragraphBoolean=document.getElementById("paragraphBoolean");

paragraphBoolean.style.padding="0.5em";
paragraphBoolean.style.border="3px solid yellow";

function booleanLowestFunc(event){

var booleanInput1Value=parseFloat(booleanInput1.value);

var booleanInput2Value=parseFloat(booleanInput2.value);

if(booleanInput1Value > booleanInput2Value){
  console.log(booleanInput2Value + " is lower than " + booleanInput1Value);
  return paragraphBoolean.innerText=Boolean(booleanInput2Value < booleanInput1Value);
}else if(booleanInput1Value < booleanInput2Value){
  console.log(booleanInput1Value + " is lower than " + booleanInput2Value);
  return paragraphBoolean.innerText=Boolean(booleanInput1Value < booleanInput2Value);
}else if(booleanInput1Value = booleanInput2Value){
  console.log(booleanInput1Value + " is equal to " + booleanInput2Value);
  return paragraphBoolean.innerText=booleanInput1Value;
}else{
  return paragraphBoolean.innerText="the inputs are bouth empty";
}

}

//apel functie
booleanLowestFunc();

btnBoolean.addEventListener("click" , booleanLowestFunc);
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//https://www.w3schools.com/js/js_booleans.asp

console.log("Boolean(55) is : " , Boolean(55));
console.log("Boolean(true) is :" , Boolean(true));
console.log("Boolean(false) is :" , Boolean(false));
console.log(Boolean("any string"));
console.log("3 + 3,74 + 8 - 55 is : " , 3 + 3.74 + 8 - 55);
console.log(Boolean(3 + 3,74 + 8 - 55));

//2. Async js callback Function
//3. Error handling :checking parameter types , check for null or undefined
//4. ES6 Syntax:destructurare , spread operator , `` instead of ""

//spread operator
const names=["Alin" , "George"];
console.log("names is : " , names);

const outherNames=["Alina" , "Maria" , "Tatiana" , "eu"];
console.log("outherNames is : " , outherNames);

const allNames=[...names , ...outherNames];
console.log("allNames is : " , allNames);



const myFriend={
  firstName:"Micu",
  lastName:"Pisicu"
}

console.log("my friend is : " , `${myFriend.firstName} ${myFriend.lastName}`);//my friend is :  Micu Pisicu


//https://www.youtube.com/watch?v=a00NRSFgHsY
//5 JavaScript Concepts You HAVE TO KNOW
//``
//create div

var mySquare=document.getElementById("square");

mySquare.style.border="3px solid dimgray";
mySquare.style.margin="1em 0";
/////////
var myvalueOfUser=document.getElementById("valueOfUser");
myvalueOfUser.style.border="3px solid pink";
myvalueOfUser.style.padding="0.5em";
//////////
var mybtnSquare=document.getElementById("btnSquare");
mybtnSquare.style.border="3px solid olive";
mybtnSquare.style.padding="0.5em";

function createSquare(event){
  console.log("myvalueOfUser.value is : " , myvalueOfUser.value);
  mySquare.style.width=`${parseFloat(myvalueOfUser.value)}px`;
  mySquare.style.height=`${parseFloat(myvalueOfUser.value)}px`;
}

mybtnSquare.addEventListener("click" , createSquare);
////////////////////////////////////////////////////////////////////
//the user chooses the value of the font size

var inputFontSize=document.getElementById("inputFontSize");
inputFontSize.style.border="3px solid Chartreuse";
inputFontSize.style.padding="0.5em";
inputFontSize.style.outline="none";

var btnFontSize=document.getElementById("btnFontSize");
btnFontSize.style.backgroundColor="olive";
btnFontSize.style.color="white";
btnFontSize.style.padding="0.5em";

var userParagraphFontSize=document.getElementById("userParagraphFontSize");
userParagraphFontSize.style.color="dimgray";

function fontSizeFunction(event){
  console.log("the font size of #userParagraphFontSize paragraph is : " , inputFontSize.value);
  return userParagraphFontSize.style.fontSize=`${parseFloat(inputFontSize.value)}px`;
}

btnFontSize.addEventListener("click" , fontSizeFunction);
////////////////////////////////////////////////////////////////////select color for div/from select  and
//choose text color from input
var coloredParagraph=document.getElementById("coloredParagraph");
coloredParagraph.style.border="3px solid magenta";
coloredParagraph.style.padding="1em";

var colorBtnParagraph=document.getElementById("colorBtnParagraph");
colorBtnParagraph.style.color="white";
colorBtnParagraph.style.backgroundColor="gold";

var inputColor=document.getElementById("inputColor");
inputColor.style.color="gold";
inputColor.style.backgroundColor="black";
inputColor.style.padding="0.5em";

function colorParagraphFunc(event){
  console.log("the user choosed the color of the paragraph text");

coloredParagraph.style.color=inputColor.value;
coloredParagraph.style.fontWeight="bold";
}

colorBtnParagraph.addEventListener("click" , colorParagraphFunc);
//////////////////////////select color for div/from select


var coloredDiv=document.getElementById("coloredDiv");
coloredDiv.style.border="3px dotted black";
coloredDiv.style.padding="1em";

var backgroundBtnDiv=document.getElementById("backgroundBtnDiv");
backgroundBtnDiv.style.color="white";
backgroundBtnDiv.style.backgroundColor="cornflowerblue";

var colorsSelect=document.getElementById("colors");

function backgroundColorDivFunc(){
  console.log("the user choosed the backgroundColor of the div with text");
  return coloredDiv.style.backgroundColor=colorsSelect.value;
}

backgroundBtnDiv.addEventListener("click" , backgroundColorDivFunc);




















//5.Array methods

//https://www.youtube.com/watch?v=670f71LTWpM   Asynchronous JavaScript in ~10 Minutes - Callbacks, Promises, and Async/Await



















//
