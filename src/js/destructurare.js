console.log("destructurare js file");
//https://www.w3schools.com/js/js_classes.asp
//https://softhunt.net/top-10-es6-features-by-example/
//
//https://www.w3schools.com/js/js_object_constructors.asp
//https://www.w3schools.com/jsref/jsref_constructor_class.asp
//https://www.programiz.com/javascript/constructor-function
//https://softhunt.net/top-10-es6-features-by-example/

const objHtml=[
  {
    "id":1,
    "textObj":"text 1",
    "width":10,
    "padding":30,
    "imgObj":"url(../../assets/images/pink-sweets.jpg)",
    "border":"3px dashed indigo"
  },
  {
    "id":2,
    "textObj":"text 2",
    "width":12,
    "padding":40,
    "imgObj":"url(../../assets/images/cucumbers.png)",
    "border":"3px solid magenta"
  },
  {
    "id":3,
    "textObj":"text 3",
    "width":14,
    "padding":50,
    "imgObj":"url(../../assets/images/sweet-heart.jpg)",
    "border":"3px dotted DarkBlue"
  },
  {
    "id":4,
    "textObj":"text 4",
    "width":16,
    "padding":60,
    "imgObj":"url(../../assets/images/milk.jpg)",
    "border":"3px solid darkorange"
  }
];

console.log("objHtml is : " , objHtml);//objHtml is :  (4) [{…}, {…}, {…}, {…}]
console.log("objHtml.length is : " , objHtml.length);//4

//functie constructor care genereaza obiecte in pagina
function DOMDiv(myObj){
  const eachDiv=document.createElement("div");
  eachDiv.style.border=myObj.border;
  eachDiv.style.padding=myObj.padding + "px";
  eachDiv.style.width=myObj.width + "em";
  eachDiv.style.height="400px";
  eachDiv.style.backgroundImage=myObj.imgObj;
  eachDiv.style.backgroundSize="cover";
  eachDiv.style.backgroundPosition="center";
  eachDiv.style.backgroundRepeat="no-repeat";
  eachDiv.style.margin="3.5em calc(50% - 7.5em)";

const myParagraph=document.createElement("p");
myParagraph.style.border=myObj.border;
myParagraph.style.marginTop="-3.5em";
myParagraph.innerText=myObj.textObj + myObj.id;

eachDiv.appendChild(myParagraph);
console.log("--- eachDiv is : " , eachDiv);
  return eachDiv;
}

const mySection1=document.getElementById('section1');
mySection1.style.border="3px solid red";
mySection1.style.width="100%";


for(let i=0 ; i<objHtml.length ; i++){
  console.log(objHtml[i] , i);
  mySection1.appendChild(DOMDiv(objHtml[i]));
}

//------------------------------------------------------------------------------

const anotherArrObj=[
  {
    "id":5,
    "textObj":"text 5",
    "width":10,
    "padding":30,
    "imgObj":"url(../../assets/images/pink-sweets.jpg)",
    "border":"3px dotted indigo"
  },
  {
    "id":6,
    "textObj":"text 6",
    "width":12,
    "padding":40,
    "imgObj":"url(../../assets/images/cucumbers.png)",
    "border":"3px dotted magenta"
  },
  {
    "id":7,
    "textObj":"text 7",
    "width":14,
    "padding":50,
    "imgObj":"url(../../assets/images/sweet-heart.jpg)",
    "border":"3px dotted DarkBlue"
  },
  {
    "id":8,
    "textObj":"text 8",
    "width":16,
    "padding":60,
    "imgObj":"url(../../assets/images/milk.jpg)",
    "border":"3px dotted darkorange"
  }
];

//map primeste array cu obj :anotherArrObj  si intoarce array cu div-uri : divsWithObj
const divsWithObj=anotherArrObj.map((el , index) =>{
  //el este fiecare object din arrayul anotherArrObj
  let divWithObj=document.createElement("div");
  divWithObj.style.border=el.border;
  divWithObj.style.padding=el.padding;
  divWithObj.style.margin=`3.5em calc(50% - ${el.width/2}em)`;
  divWithObj.style.width=el.width + "em";
  divWithObj.style.height="400px";
  divWithObj.style.backgroundImage=el.imgObj;
  divWithObj.style.backgroundSize="cover";
  divWithObj.style.backgroundPosition="center";
  divWithObj.style.backgroundRepeat="no-repeat";

  let paragraphMy=document.createElement("p");
  paragraphMy.innerText=el.textObj + " " + el.id;
  paragraphMy.style.border=el.border;
  paragraphMy.style.marginTop="-1.5em";

  divWithObj.appendChild(paragraphMy);

  return divWithObj;
})

const section2=document.getElementById('section2');
section2.style.border="3px solid yellowgreen";
section2.style.width="100%";
section2.style.textAlign="center";



//forEach()
divsWithObj.forEach((el , index) =>{
  //el reprezinta fiecare divWithObj
  console.log("---el is : " , el);
  section2.appendChild(el);
})

//------------------------------------------------------------------------------

//spread
const differentNrArr=[10,51,12,14,25,26,37,123,56];

let [first, second, ...third] = differentNrArr;
console.log(`first: ${first}`);
console.log(`second: ${second}`);
console.log(`third: ${third}`);
//introduc  pe fiecare in cate un li

const allsingleNum=document.querySelectorAll(".singleNum");
console.log("---allsingleNum is an array : " , allsingleNum);
allsingleNum[0].innerText=`${first}`;
allsingleNum[1].innerText=`${second}`;
allsingleNum[2].innerText=`${third}`;

for(let i=0 ; i<allsingleNum.length ; i++){
  allsingleNum[i].style.border="3px solid DarkOrchid";
  allsingleNum[i].style.padding="0.5em";
  allsingleNum[i].style.margin="0.5em";
}

//aceasta metoda construeste cate un li pt fiecare nr din array
const threeLis=differentNrArr.map((el , index) =>{
  let liTag=document.createElement("li");
  liTag.style.border="3px solid orange";
  liTag.style.padding="0.5em";
  liTag.style.margin="0.5em";
  liTag.innerText="I am el " + el + "and my index is : " + index;

  console.log(el , index);

  return liTag;
})

//introduc li-urile creiate ant in ul
const ulAllLi=document.createElement('ul');
ulAllLi.style.border="3px solid magenta";

threeLis.forEach((el , index) =>{
  //el este fiecare liTag creiat anterior
  ulAllLi.appendChild(el);
})

document.getElementById('section3').appendChild(ulAllLi);


//DESTRUCTURARE 19 04 2022

//DESTRUCTURARE ARRAY

let [firstDestruct,secondDestruct,thirdDestruct] = [0,1,2,4,5];
console.log("firstDestruct is : " , `${firstDestruct}`);
console.log("secondDestruct is : " , `${secondDestruct}`);
console.log("thirdDestruct is : " , `${thirdDestruct}`);

document.getElementById('paragraph1').innerText=`${firstDestruct}`;
document.getElementById('paragraph1').style.border="3px solid yellowgreen";

document.getElementById('paragraph2').innerText=`${secondDestruct}`;
document.getElementById('paragraph2').style.border="3px solid yellowgreen";

document.getElementById('paragraph3').innerText=`${thirdDestruct}`;
document.getElementById('paragraph3').style.border="3px solid yellowgreen";

//------------------------------------------------------------------------------

//DESTRUCTURARE OBJECT (1)

const obj = {test: 1,
             testKey: 70,
             more: "x",
             extraKey:"super"};

const {testKey,extraKey} = obj;

console.log(`testKey : ${testKey}, extraKey: ${extraKey}`);//testKey : 70, extraKey: super

document.getElementById('testH').innerText=`${testKey}`;
document.getElementById('testH').style.border="3px dotted red";

document.getElementById('extraH').innerText=`${extraKey}`;
document.getElementById('extraH').style.border="3px dotted red";

//DESTRUCTURARE OBJECT (2)

const objSecond = {test: 2,
                   testKey: 72,
                   more: "xx",
                   extraKey:"super2"};

const {testKey: testKeyAlias, more} = objSecond;

console.log(`testKeyAlias : ${testKeyAlias}, more: ${more}`);//testKeyAlias : 72, more: xx

//EXAMPLE
const person = {
  name: "Ionel",
  lastName: "Marinescu",
  yearOfBirth: 1987,
  proffesion: "Lord of Wallachia"
};


function whoAreYou(personObj) {
  const {name,lastName,yearOfBirth,proffesion} = personObj;

  return `My name is ${name} ${lastName} .
I am ${(new Date()).getFullYear() - yearOfBirth} years old.
My proffesion is ${proffesion}.`
}

console.log("---whoAreYou(person) is : " , whoAreYou(person));

document.getElementById('personParagraph').innerText=whoAreYou(person);

//------------------------------------------------------------------------------

const secondPerson={
  "id":"secondPerson",
  "name": "Ionel",
  "lastName": "Milk",
  "yearOfBirth": 1977,
  "proffesion": "dentist generalist",
  "border":"3px solid indigo",
  "color":"red",
  "imgUrl":"url(../../assets/images/milk.jpg)",
  "width":"20em",
  "padding":"15px"
}
console.log("---!!! secondPerson is : " , secondPerson);

//--------------
function HTMLsecondPerson(secondPerson){

  const secondPersonOnPage=`
  <div id="${secondPerson.id}"
       style="  width:${secondPerson.width} ;
                padding:${secondPerson.padding} ;
                color:${secondPerson.color} ;
                height:300px ;
                background-image:${secondPerson.imgUrl};
                background-size:cover;
                background-position:center;
                background-repeat:no-repeat">My name is ${secondPerson.name} ${secondPerson.lastName} .
              I am ${(new Date()).getFullYear() - secondPerson.yearOfBirth} years old.
              My proffesion is ${secondPerson.proffesion}.
  </div>
  `;
  return secondPersonOnPage;
}

console.log(HTMLsecondPerson(secondPerson));

document.getElementById('section5').innerHTML=HTMLsecondPerson(secondPerson);

//------------------------------------------------------------------------------

const foodObject={
  "id":"oneFood",
  "name": "cake",
  "lastName": "sweet-food",
  "yearOfBirth": 2020,
  "proffesion": "make dental cavities",
  "border":"3px solid orange",
  "color":"floralwhite",
  "imgUrl":"url(../../assets/images/cake.jpg)",
  "width":"20em",
  "padding":"15px"
}
console.log("---!!!--- foodObject is : " , foodObject);

const section6=document.getElementById('section6');
section6.style.border="3px solid red";
section6.style.padding="0.5em";
section6.style.margin="0.5em";
section6.innerHTML=`
<div id="${foodObject.id}"
     style="  width:${foodObject.width} ;
              padding:${foodObject.padding} ;
              color:${foodObject.color} ;
              height:300px ;
              background-image:${foodObject.imgUrl};
              background-size:cover;
              background-position:center;
              background-repeat:no-repeat">My name is ${secondPerson.name} ${foodObject.lastName} .
            I am ${(new Date()).getFullYear() - secondPerson.yearOfBirth} years old.
            My proffesion is ${foodObject.proffesion}.
</div>
`
//------------------------------------------------------------------------------

const arrOFfoodsObj=[
  {
    "id":"oneFood",
    "name": "cake",
    "lastName": "sweet-food",
    "yearOfBirth": 2024,
    "proffesion": "make dental cavities",
    "border":"3px solid orange",
    "color":"floralwhite",
    "imgUrl":"url(../../assets/images/cake.jpg)",
    "width":"20em",
    "padding":"15px"
  },
  {
    "id":"secondFood",
    "name": "cucumbers",
    "lastName": "castraveti",
    "yearOfBirth": 2021,
    "proffesion": "make salad",
    "border":"3px solid CornflowerBlue",
    "color":"blue",
    "imgUrl":"url(../../assets/images/cucumbers.png)",
    "width":"20em",
    "padding":"15px"
  },
  {
    "id":"thirdFood",
    "name": "flour",
    "lastName": "faina",
    "yearOfBirth": 2025,
    "proffesion": "make bread",
    "border":"3px solid Chartreuse ",
    "color":"floralwhite",
    "imgUrl":"url(../../assets/images/flour.jpg)",
    "width":"20em",
    "padding":"15px"
  },
  {
    "id":"fourthFood",
    "name": "fruits",
    "lastName": "fructe",
    "yearOfBirth": 2025,
    "proffesion": "make bread",
    "border":"3px solid Cyan",
    "color":"yellow",
    "imgUrl":"url(../../assets/images/image-right1.jpg)",
    "width":"20em",
    "padding":"15px"
  }
];
console.log("--- arrOFfoodsObj is : " , arrOFfoodsObj);//--- arrOFfoodsObj is :  (4) [{…}, {…}, {…}, {…}]
console.log("---arrOFfoodsObj.length is : " , arrOFfoodsObj.length);//---arrOFfoodsObj.length is :  4
//afisez in pagina doar un element din array
document.getElementById('section7').innerHTML=`
<div id="${arrOFfoodsObj[1].id}"
     style="  width:${arrOFfoodsObj[1].width} ;
              padding:${arrOFfoodsObj[1].padding} ;
              color:${arrOFfoodsObj[1].color} ;
              height:300px ;
              background-image:${arrOFfoodsObj[1].imgUrl};
              background-size:cover;
              background-position:center;
              background-repeat:no-repeat">My name is ${secondPerson.name} ${arrOFfoodsObj[1].lastName} .
            I am ${(new Date()).getFullYear() - secondPerson.yearOfBirth} years old.
            My proffesion is ${arrOFfoodsObj[1].proffesion}.
</div>
`;
//afiseaza in pagina toate elementele din array
//functia are return, este functie ce intoarce , nu este de afisare
//functie constructor care construeste elemente html
function HTMLFoodShowObject(myFoodObj){
  const foodEachObject=`
  <div id="${myFoodObj.id}"
       style="  width:${myFoodObj.width} ;
                padding:${myFoodObj.padding} ;
                color:${myFoodObj.color} ;
                border-radius:30px;
                height:300px ;
                background-image:${myFoodObj.imgUrl};
                background-size:cover;
                background-position:center;
                background-repeat:no-repeat">My name is ${secondPerson.name} ${myFoodObj.lastName} .
              I am ${(new Date()).getFullYear() - secondPerson.yearOfBirth} years old.
              My proffesion is ${myFoodObj.proffesion}.
  </div>
  `;

  return foodEachObject;
}
console.log("--- arrOFfoodsObj[3] is : " , arrOFfoodsObj[3]);
//--- arrOFfoodsObj[3] is :  {id: 'fourthFood', name: 'fruits', lastName: 'fructe', yearOfBirth: 2025, proffesion: 'make bread', …}

console.log("HTMLFoodShowObject(arrOFfoodsObj[3]) is : " , HTMLFoodShowObject(arrOFfoodsObj[3]));

document.getElementById('oneFoodObjDiv').innerHTML=HTMLFoodShowObject(arrOFfoodsObj[3]);
document.getElementById('oneFoodObjDiv').style.marginBottom="1em";

//------------------------------------------------------------------------------
const allEachLiFoodObj=document.querySelectorAll(".eachLiFoodObj");
console.log("--- allEachLiFoodObj is : " , allEachLiFoodObj);//--- allEachLiFoodObj is :  NodeList(4) [li.eachLiFoodObj, li.eachLiFoodObj, li.eachLiFoodObj, li.eachLiFoodObj]
console.log("allEachLiFoodObj.length is : " , allEachLiFoodObj.length);//allEachLiFoodObj.length is :  4

for(let i=0 ; i<allEachLiFoodObj.length ; i++){
  allEachLiFoodObj[i].innerHTML=HTMLFoodShowObject(arrOFfoodsObj[i]);
  allEachLiFoodObj[i].style.margin="1em";
  allEachLiFoodObj[i].style.border="5px solid yellowgreen";
    allEachLiFoodObj[i].style.borderRadius="10px";
}

//------------------------------------------------------------------------------

const unsplashDivsWithPhoto=[
  {
    "id":"imgOne",
    "name": "photoOne",
    "textObj": "I am photo 1",
    "border":"3px solid Cyan",
    "color":"red",
    "imgUrl":"url(https://images.pexels.com/photos/12760654/pexels-photo-12760654.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load)",
    "width":"20em",
    "padding":"15px"
  },
  {
    "id":"imgTwo",
    "name": "photoTwo",
    "textObj": "I am photo 2",
    "border":"3px solid Brown",
    "color":"green",
    "imgUrl":"url(https://images.pexels.com/photos/11858609/pexels-photo-11858609.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load)",
    "width":"20em",
    "padding":"15px"
  },
  {
    "id":"imgThree",
    "name": "photoThree",
    "textObj": "I am photo 3",
    "border":"3px solid DeepPink",
    "color":"blue",
    "imgUrl":"url(https://images.pexels.com/photos/13010671/pexels-photo-13010671.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load)",
    "width":"20em",
    "padding":"15px"
  },
  {
    "id":"imgFour",
    "name": "photoFour",
    "textObj": "I am photo 4",
    "border":"3px solid DarkSlateGray",
    "color":"blue",
    "imgUrl":"url(https://images.pexels.com/photos/12891215/pexels-photo-12891215.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load)",
    "width":"20em",
    "padding":"15px"
  }
];

console.log("---unsplashDivsWithPhoto is arr : " , unsplashDivsWithPhoto);
//---unsplashDivsWithPhoto is arr :  (4) [{…}, {…}, {…}, {…}]
console.log("unsplashDivsWithPhoto.length is : " , unsplashDivsWithPhoto.length);
//unsplashDivsWithPhoto.length is :  4

//functie constructor care creeaza elemente in arborele DOM
function DOMDivWithUnsplashPhoto(objUnsplash){
const divAll=document.createElement("div");
  divAll.style.border=objUnsplash.border;
//
  const div=document.createElement("div");
  div.style.border=objUnsplash.border;
  div.style.backgroundImage=objUnsplash.imgUrl;
  div.style.backgroundSize="cover";
  div.style.backgroundPosition="center";
  div.style.backgroundRepeat="no-repeat";
  div.style.width=objUnsplash.width;
  div.style.height="700px";
  div.style.padding=objUnsplash.padding;
div.id=objUnsplash;

  divAll.appendChild(div);
//
const unsplashH3=document.createElement("h3");
unsplashH3.style.border=objUnsplash.border;
unsplashH3.innerText=objUnsplash.textObj;

divAll.appendChild(unsplashH3);
//
const unsplashParahraph=document.createElement("p");
unsplashParahraph.style.border=objUnsplash.border;
unsplashParahraph.innerText="the index of this element is : " + objUnsplash.id;

divAll.appendChild(unsplashParahraph);
//

  return divAll;
}

document.getElementById('section9').appendChild(DOMDivWithUnsplashPhoto(unsplashDivsWithPhoto[2]));

//

document.getElementById('section99').appendChild(DOMDivWithUnsplashPhoto(unsplashDivsWithPhoto[3]));

//
document.getElementById('section10').style.border="3px dotted deeppink";

for(let i=0 ; i<unsplashDivsWithPhoto.length ; i++){
  document.getElementById('section10').appendChild(DOMDivWithUnsplashPhoto(unsplashDivsWithPhoto[i]));
}

/////////
