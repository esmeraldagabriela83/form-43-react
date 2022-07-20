console.log("I am in five-questions-interview.js");
//1.how to add something to the beggining  or the end of an array
//js
var myarr=["a" , "b" , "c" , "d"];
console.log("myarr is: " , myarr);

myarr.push("end");
console.log("after push myarr is: " , myarr);
myarr.unshift("start");
console.log("after unshift myarr is: " , myarr);
//es6 using spread operator
var myarrES6=["e" , "f" , "g" , "h" ,"i"];
console.log("myarrES6 is: " , myarrES6);

myarrES6=["ES6start", ...myarrES6];
console.log("dupa start destructurare" , myarrES6);
myarrES6=[...myarrES6 ,"ES6end"];
console.log("dupa end destructurare" , myarrES6);

myarrES6=["secondStart" , ...myarrES6 , "secondEnd"];
console.log("dupa a doua destructurare myarrES6 este : " , myarrES6);


//2.how to create a private variable in js // scope
//to create a variable that lives inside of the scope of a local function

//ex
function secretVariable(){
  var private="super secret code";
  return function(){
    return private;
  }
}

console.log("secretVariable() is : " , secretVariable());

var getPrivateVariable=secretVariable()

console.log("getPrivateVariable() is : " , getPrivateVariable());
//////////////////////////////////////////////////////////////////////////////////////
//https://www.youtube.com/watch?v=6Wzj7kxfRdI&t=384s   5 Must Know Interview Questions for Javascript!

//3 what is the output of this function?

var num=4;
console.log("num is : " , num);

function outher(){

var num=9;

function inner(){
  num++;
  // console.log("num inside inner function is : " , num);
  var num=30;
  console.log("second num inside inner function is : " , num);
}
return inner();
}
//apel functie
outher();
////////////////////////////////////////////////////////////////////////////////////////
var mynum=50;
console.log("mynum is : " , mynum);

function exterior(){
  var mynum=55;
  console.log("mynum from exterior function is : " , mynum);
  mynum++;
  console.log("mynum from exterior function after incrementation is : " , mynum);

function interior(){
  mynum++;
  console.log("mynum from interior function is : " , mynum);
  // var mynum=555;
  // console.log("after assign mynum from interior function is : " , mynum);
}
return interior();
}
//apel functie
exterior();

var questionThree=document.getElementById

//4 What is the output? string //order operations
console.log("typeof typeof 1 is : " , typeof typeof 1);//typeof typeof 1 string

console.log("typeof 1 is : " , typeof 1);//number

console.log(typeof "mytext");//string

console.log("typeof(3) is : " , typeof(3));//number
console.log("typeof(typeof(3)) is : " , typeof(typeof(3)));//string
/////////////////////////////////////////////////////////////////////////////////////////////

//5 what is the output?
var hero={
  name:"Mihaela Aco",
  getSecretIdentity:function(){
    return this.name;
  }
};
console.log("hero is : " , hero);
////////////////
var stoleSecretIdentity=hero.getSecretIdentity;

console.log("stoleSecretIdentity is : " , stoleSecretIdentity);

// stoleSecretIdentity is :  ƒ (){
//     return this.name;
//   }

/////////////
var stoleSecretIdentityMethod=hero.getSecretIdentity();

console.log("stoleSecretIdentityMethod is : " , stoleSecretIdentityMethod);// Mihaela Aco
/////////////////////////
console.log("hero.getSecretIdentity is : " , hero.getSecretIdentity);
// ƒ (){
//     return this.name;
//   }

console.log(hero.getSecretIdentity());//Mihaela Aco
/////////////////////!!!!!!!!!!!!!!!!!!!!!! bind

var brother={
  name:"Alex Aco",
  getSecretIdentity:function(){
    return this.name;
  }
};
console.log("brother is : " , brother);

var brotherIdentity=brother.getSecretIdentity.bind(brother);
console.log("brotherIdentity() is: " , brotherIdentity());//Alex Aco

console.log("brother.getSecretIdentity() is : " , brother.getSecretIdentity());//Alex Aco
////////////////////////////////////////////////////////////////////////////////////////////////
var brotherOnPage=document.getElementById("question3s");

brotherOnPage.style.padding="1em";
brotherOnPage.style.border="3px dotted dimgray";
brotherOnPage.innerText=brotherOnPage.id;

var spanBrother=document.querySelector("span.brother");
console.log("spanBrother is : " , spanBrother);
spanBrother.style.border="3px dashed pink";
spanBrother.style.padding="1em";
spanBrother.innerText=brother.getSecretIdentity();























//
