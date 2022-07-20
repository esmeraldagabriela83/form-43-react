console.log("-----++++++++++++++++++++++--------I am in for-loop.js");

var allAfterCostica=document.querySelectorAll(".afterCostica");
console.log("allAfterCostica is : " , allAfterCostica);

for(let i=0 ; i < allAfterCostica.length ; i++){
  console.log("each li .afterCostica is : " , i);
  let k = i + 1;
  // allAfterCostica[i].innerText=k;
  allAfterCostica[i].innerText=`${i + 1} . fiecare numar ${k}`
  allAfterCostica[i].style.border="3px dotted magenta";
  allAfterCostica[i].style.padding="0.5em";
  allAfterCostica[i].style.margin="0.5em";
  allAfterCostica[i].style.textAlign="right";
  allAfterCostica[i].style.fontSize=`${i + 16}px`;
}
///////////////////////////////////////////////////

var allMyTry=document.querySelectorAll(".myTry");
console.log("allMyTry is : " , allMyTry);

for(let i=0 ; i<allMyTry.length ; i++){
    console.log("each li .myTry is : " , i);

    allMyTry[i].innerText=` the number is :  ${i + 1}`;
    allMyTry[i].style.border="3px dotted Cyan";
    allMyTry[i].style.padding="0.5em";
    allMyTry[i].style.margin="0.5em";
    allMyTry[i].style.textAlign="center";
}
/////////////////////////////////

//https://www.w3schools.com/js/tryit.asp?filename=tryjs_loop_for_ex

let text1="";

for(let i=0 ; i < 7 ; i++){
  text1 += "numarul afisat este : " + i  + "<br></br>";
}

var demo1=document.getElementById('demo1');
demo1.style.border="3px solid darkred";
demo1.style.padding="0.5em";
demo1.style.margin="1em";
demo1.innerHTML=text1;
///////////////////////////////////////

//https://www.w3schools.com/js/tryit.asp?filename=tryjs_loop_for

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text2 = "";

for(let i=0 ; i<cars.length ; i++){
  text2 += i + ". alta  marca de masina " + cars[i] + "<br></br>"
}

var demo2Paragraph=document.getElementById("demo2");
demo2.style.border="3px solid forestgreen";
demo2.style.padding="0.5em";
demo2.style.margin="1em";
demo2.innerHTML=text2;
/////////////////////////////////////////////////////////////very important

const carsAnother = ["another BMW", "another Volvo", "another Saab", "another Ford", "another Fiat", "another Audi"];

var allAnotherCar=document.querySelectorAll(".anotherCar");
console.log("allAnotherCar is : " , allAnotherCar);

let text3=[];

for(let j=0 ; j<carsAnother.length ; j++){
text3.push(carsAnother[j]);
}

for(let i=0 ; i<allAnotherCar.length ; i++){
  allAnotherCar[i].style.border="3px solid magenta";
  allAnotherCar[i].style.padding="0.5em";
  allAnotherCar[i].style.margin="1em";

  allAnotherCar[i].innerText=text3[i];
console.log("text3[i] is : " , text3[i]);
}
//////////////////////////////////////////////////////////////////////////






















//
