console.log("--------------from selectori.js for selectori html");
//createElement
//clone elemente
//remove element

var buttonAll1=document.querySelectorAll("#section1 article button");
console.log("buttonAll1 is : " , buttonAll1);
console.log("buttonAll1.length is : " , buttonAll1.length);

for(let i=0 ; i<buttonAll1.length ; i++){
  buttonAll1[i].style.border="3px solid red";
  buttonAll1[i].style.margin="0.5em";
  buttonAll1[i].style.padding="0.5em";
  buttonAll1[i].addEventListener("click" , changeFunction);
}

function changeFunction(event){
  event.preventDefault();
  console.log("you clicked the button");
  console.log("this is: " , this);

  var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

  var parent=this.parentElement;

  var prevBrotherParagraph=this.previousElementSibling;

  return parent.style.backgroundColor=randomColor ,
         parent.style.border="3px solid indigo",
         parent.style.padding="1em",
         parent.style.margin="1em",

         prevBrotherParagraph.innerText=this.dataset.text ,
         prevBrotherParagraph.style.border="3px solid magenta";
}

//------------------------------------------------------------------------------------------------

var buttonAll2=document.querySelectorAll("#section2 button");
console.log("buttonAll2.length is : " , buttonAll2.length);

for(let i=0 ; i<buttonAll2.length ; i++){
  buttonAll2[i].style.border="3px solid magenta";
  buttonAll2[i].addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the button");
    console.log("this is: " , this);

    var paragraphPrev=this.previousElementSibling;
    var paragraphNext=this.nextElementSibling;

    return paragraphPrev.style.backgroundColor=this.dataset.color,
           paragraphPrev.style.color="white",
           paragraphPrev.innerText=`text is : ${buttonAll2[i].innerText}`,
           this.style.backgroundColor=this.dataset.color,

           paragraphNext.innerText=this.dataset.text,
           paragraphNext.style.border="3px solid olive";
  })
}
////--------------------------------------------------------------------------------------------------------

var allLi3=document.querySelectorAll("#section3 ul li");
console.log("allLi3.length is : " , allLi3.length);

for(let i=0 ; i<allLi3.length ; i++){
  allLi3[i].innerText=`I am li ${i}`;
  allLi3[i].style.backgroundColor="yellow";
  allLi3[i].style.padding="0.5em";
  allLi3[i].style.margin="0.5em";
}

var btn3=document.querySelector(".btn3");
btn3.style.border="3px solid yellowgreen";
btn3.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("you clicked the button");
  console.log("this is: " , this);

  var ul3=this.previousElementSibling;
  for(let i=0 ; i<ul3.children.length ; i++){
    ul3.children[i].style.border="3px solid DarkSlateGray";
  }

  return ul3.style.border="3px solid olive",
         ul3.children[0].style.backgroundColor="Chartreuse",
         ul3.children[0].innerText="you clicked the btn",
         ul3.children[1].innerText="you changed my text",
         ul3.children[2].style.backgroundColor="pink";

});

//---------------------------------------------------------------------------
//04 04 2022
//console, document sunt obiecte native [incep cu litera mica]
//Math este o librarie [incepe cu litera mare]
//SELECTIE DUPA ID !!ATENTIE Singular
var cakeImg = document.getElementById("cakeImg");
//ce primeste: un string
//ce intoarce: elementul care are id-ul egal cu stringul sau null;
cakeImg.alt="shoul be cake img";
cakeImg.src="../assets/images/cake.jpg";
cakeImg.style.width="20vh";
cakeImg.style.height="25vh";
console.log("cakeImg is : " , cakeImg);
//className
var mypngAll = document.getElementsByClassName("mypng");
//ce primeste: un string
//ce intoarce: un pseudo-array cu toate elementele care au clasa oferts sau un pseudo-array gol
console.log("mypngAll is : " , mypngAll);
for(let i=0 ; i<mypngAll.length ;i++){
    mypngAll[i].style.width="20vh";
    mypngAll[i].style.height="25vh";
    mypngAll[i].style.backgroundColor="pink";
    mypngAll[i].addEventListener("mouseover" , function(event){
      mypngAll[i].style.backgroundColor="yellow";
    });
    mypngAll[i].addEventListener("click" , function(event){
      mypngAll[i].style.border="3px solid indianRed";
    })
}

//----------------------------------------------------------
//SELECTOR de element unic dupa criterii css
var ofertsLi = document.querySelector(".oferts");
//ce primeste: un string selector de css
//ce intoarce: primul element care indeplineste conditia de css sau null
console.log("ofertsLi is : " , ofertsLi);

ofertsLi.innerText="I am the first li";
ofertsLi.style.border="3px solid red";

//
//SELECTOR de element unic dupa criterii css !! ATENTIE PLURAL (ALL)
var secondLIS = document.querySelectorAll(".oferts:last-of-type");
//ce primeste: un string selector de css
//ce intoarce: un pseudo-array cu elementele care indeplinesc conditia de css
//sau un pseudo-array gol
console.log("secondLIS is : " , secondLIS);//NodeList(3) [li.oferts, li.oferts, li.oferts]

for(let i=0 ; i<secondLIS.length ; i++){
  secondLIS[i].innerText="I am the last li in each ul";
  secondLIS[i].style.padding="0.5em";
  secondLIS[i].style.margin="0.5em";
}

var changeLi=document.getElementById("changeLi");
changeLi.style.color="magenta";
changeLi.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("you clicked the button");
  console.log("this is: " , this);

  for(let i=0 ; i<secondLIS.length ; i++){
    secondLIS[i].style.backgroundColor="pink";
    secondLIS[secondLIS.length - 1].innerText="my text was changed when clicking";
  }
})

//------------------------------------------------------------------------------
//tag
var hrDOMel = document.getElementsByTagName("hr");
//ce primeste: un string
//ce intoarce: un pseudo-array cu toate elementele care au tagul div sau un pseudo-array gol
console.log("hrDOMel is : " , hrDOMel);//HTMLCollection(3) [hr, hr, hr]
for(let i=0 ; i<hrDOMel.length ; i++){
  hrDOMel[i].style.backgroundColor="magenta";
  hrDOMel[i].style.height="3px";
}

//o4 04 2022
//tag

var divs=document.getElementsByTagName("div");
console.log("divs is : " , divs);
divs[1].style.backgroundColor="yellow";

for(let i=0 ; i<divs.length ; i++){
  divs[i].style.width="150px";
  divs[i].style.height="150px";
  divs[i].style.borderRadius="50%";
  divs[i].style.margin="0.3em";
  divs[i].style.border="3px solid red";
}
//--------------------------------------------------------------------------------------

var myArticle=document.querySelector("#selectori-discord article");
myArticle.style.border="3px solid LightBlue";
myArticle.style.margin="0.5em";
myArticle.style.padding="0.5em";
//create new circle
var newDiv=document.createElement("div");
newDiv.style.width="150px";
newDiv.style.height="150px";
newDiv.style.borderRadius="50%";
newDiv.style.margin="0.3em";
newDiv.style.border="3px solid green";
newDiv.innerText="made by js";

myArticle.appendChild(newDiv);
//create new circle

var makeCircle=document.getElementById("makeCircle");
makeCircle.style.border="3px solid GoldenRod";
makeCircle.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("you clicked makeCircle button");
  console.log("this is: " , this);

  var divNew=document.createElement("div");
  divNew.style.width="100px";
  divNew.style.height="100px";
  divNew.style.borderRadius="50%";
  divNew.style.margin="0.3em";
  divNew.style.border="3px solid blue";
  divNew.innerText="created div by clicking";

  myArticle.appendChild(divNew);
})

//clone circle

var cloneCircle=document.getElementById("cloneCircle");
cloneCircle.style.border="3px solid MediumSlateBlue ";
cloneCircle.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("you clicked cloneCircle button");
  console.log("this is: " , this);

  var nodeCircleDiv=divs[1];
  // console.log("nodeCircleDiv is : " , nodeCircleDiv);
  var cloneDiv=nodeCircleDiv.cloneNode(true);
  myArticle.appendChild(cloneDiv);
})

//---------------classic and modern selection 4 04 2022 -------------------------------------------------------------------------
var classicSelection=document.getElementById("classic");
classicSelection.style.width="100px";
classicSelection.style.height="100px";
classicSelection.style.borderRadius="10%";
classicSelection.style.margin="0.3em";
classicSelection.style.border="3px solid cornflowerblue";

var modernSelection=document.querySelector("#modern");
modernSelection.style.width="100px";
modernSelection.style.height="100px";
modernSelection.style.borderRadius="10%";
modernSelection.style.margin="0.3em";
modernSelection.style.border="3px solid deeppink";

var liDataText=document.querySelectorAll("#section4 [data-text]");
console.log("liDataText is : " , liDataText);

for(let i=0 ; i<liDataText.length ; i++){
liDataText[i].style.border="3px solid magenta";
liDataText[i].style.padding="0.5em";
liDataText[i].style.margin="0.5em";
liDataText[i].innerText=liDataText[i].dataset.text;
}

//----------------------------------------------------HTML DOM Element classList
//https://www.w3schools.com/jsref/prop_element_classlist.asp

var section5=document.getElementById("section5");
console.log("section5 is : " , section5);
console.dir(section5);

console.log("section5.id is : " , section5.id);
console.log("section5.classList is : " , section5.classList);
console.log("section5.className is : " , section5.className);

var div1=section5.querySelector("#div1");
console.log("div1.id is : " , div1.id);//  div1
console.log("div1.classList is : " , div1.classList);//DOMTokenList(2) ['mydiv', 'divOne', value: 'mydiv divOne']0: "mydiv"1: "divOne"length: 2value: "mydiv divOne"[[Prototype]]: DOMTokenList

console.log("div1.className is : " , div1.className);//mydiv divOne
div1.style.border="3px solid magenta";
div1.innerText="text1 from selectori.js";
div1.style.boxShadow="1.5px 3px gray";
div1.style.width="500px";
div1.style.height="100px";

////metode pentru proprietatea classList:add , remove , toggle
//add
var div2=section5.querySelector("#div2");
div2.classList.add("styleDiv");
div2.innerText="text2 from selectori.js";
//remove
var div3=section5.querySelector("#div3");
div3.classList.remove("divThree");
//toggle
var div4=section5.querySelector("#div4");
div4.classList.toggle("divfour");
console.log("div4.classList is : " , div4.classList);
div4.classList.toggle("divfour");
console.log("div4.classList is : " , div4.classList);
//toggle from btn3
var h35=document.getElementById("h35");
h35.innerText="text5 from selectori.js";

var toggleBtn=document.getElementById("toggleBtn");
toggleBtn.style.border="3px dotted pink";
toggleBtn.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("you clicked toggle button");
  console.log("this is: " , this);

h35.classList.toggle("h3five");
})

//------------------------------------------------------------------------------

var evenLi=document.querySelectorAll("#section6 ul li:nth-of-type(2n)");
console.log("evenLi is : " , evenLi);

for(let i=0 ; i<evenLi.length ; i++){
  evenLi[i].style.border="3px dotted olive";
}

var oddLi=document.querySelectorAll("#section6 ul li:nth-of-type(2n + 1)");
console.log("oddLi is : " , oddLi);

for(let i=0 ; i<oddLi.length ; i++){
  oddLi[i].style.border="3px solid yellowgreen";
}
///

var childElement3=document.querySelector("#section6 ul li:nth-of-type(3)");
childElement3.style.backgroundColor="crimson";
childElement3.style.color="white";
//
var childElement5=document.querySelector("#section6 ul li:nth-of-type(5)");
childElement5.classList.add("styleLi");


///
var allLi=document.querySelectorAll("#section6 ul li");

for(let i=0 ; i<allLi.length ; i = i + 2){
  allLi[i].style.backgroundColor="SeaGreen";
  allLi[i].style.textDecoration = "line-through";
}

//
var mydivs=document.querySelectorAll("#section6 article .mydiv");
console.log("mydivs is : " , mydivs);

for(let i=0 ; i<mydivs.length ; i++){
  mydivs[i].style.backgroundRepeat="no-repeat";
mydivs[i].style.backgroundSize="cover";
mydivs[i].style.width="100px";
mydivs[i].style.height="100px";
}

//css
//background-image: url(../assets/img/firefox.png);
document.querySelector("#section6 article .div61").style.backgroundImage="url(../../assets/images/image-left1.jpg)";
document.querySelector("#section6 article .div62").style.backgroundImage="url(../../assets/images/image-left2.jpg)";
document.querySelector("#section6 article .div63").style.backgroundImage="url(../../assets/images/milk.jpg)";

//-----------------------------------------------------------------------------------

var imgJSclick=document.getElementById("imgJSclick");
imgJSclick.style.backgroundRepeat="no-repeat";
imgJSclick.style.backgroundSize="cover";
imgJSclick.style.width="200px";
imgJSclick.style.height="200px";
imgJSclick.style.backgroundImage="url(../../assets/images/sugar.jpg)";

var clickBtn=document.getElementById("clickBtn");
clickBtn.style.border="3px solid red";

clickBtn.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("you clicked change image button");
  console.log("this is: " , this);

  this.previousElementSibling.style.backgroundImage="url(../../assets/images/sweet-heart.jpg)";
})
//
var imgJShover=document.getElementById("imgJShover");
imgJShover.style.backgroundRepeat="no-repeat";
imgJShover.style.backgroundSize="cover";
imgJShover.style.width="200px";
imgJShover.style.height="200px";
imgJShover.style.backgroundImage="url(../../assets/images/pink-sweets.jpg)";

var hoverBtn=document.getElementById("hoverBtn");

hoverBtn.addEventListener("mouseover" , function(event){
  event.preventDefault();
  console.log("you hovered change image button");
  console.log("this is: " , this);
  this.nextElementSibling.style.backgroundImage="url(../../assets/images/fruits.jpg)";
})

//--------------------------------------------------------------------------------------

var getImgFromJS=document.getElementById("getImgFromJS");
getImgFromJS.style.backgroundRepeat="no-repeat";
getImgFromJS.style.backgroundSize="cover";
getImgFromJS.style.width="200px";
getImgFromJS.style.height="200px";
getImgFromJS.style.backgroundImage="url(../../assets/images/tomatoes.png)";
getImgFromJS.style.backgroundColor="yellow";

getImgFromJS.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("you clicked the image to change its content");
  console.log("this is: " , this);

this.style.backgroundImage="url(../../assets/images/onion.png)";
getImgFromJS.style.backgroundColor="pink";
})

//
var getImgFromJSandHover=document.getElementById("getImgFromJSandHover");
getImgFromJSandHover.style.backgroundRepeat="no-repeat";
getImgFromJSandHover.style.backgroundSize="cover";
getImgFromJSandHover.style.width="200px";
getImgFromJSandHover.style.height="200px";
getImgFromJSandHover.style.backgroundImage="url(../../assets/images/ginger.png)";

getImgFromJSandHover.addEventListener("mouseover" , function(event){
  event.preventDefault();
  console.log("you hovered the image to change its content");
  console.log("this is: " , this);

this.style.backgroundImage="url(../../assets/images/onion.png)";
})






//
