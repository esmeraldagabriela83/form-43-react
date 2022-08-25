console.log("diverse destructurare js");

// destructurare
// https://www.w3docs.com/learn-javascript/destructuring-assignment.html
//

//
// https://www.w3schools.com/react/react_es6_destructuring.asp

//discord 19 04 2022

//DESTRUCTURARE ARRAY

let [first,second,third] = [0,11,22,4,5];
console.log("[first,second,third] is : " , [first,second,third]);
console.log(`first: ${first},second: ${second},third: ${third} `)

console.log(`first : ${first}`);
console.log(`second : ${second}`);
console.log(`third: ${third}`);

//------------------------------------------------------------------------------

//DESTRUCTURARE ARRAY-uri (2)

let [primul,,,,,,,ultimul] = [ "snow", "rain","micuPisicu" , 34, 45, 56, "test", "sun"];
console.log("[primul,,,ultimul] is : " , [primul,,,ultimul]);

console.log("primul : " ,` ${primul}`);
console.log("ultimul : " ,` ${ultimul}`);
//DESTRUCTURARE ARRAY-uri (2) cu string-uri

let arrStrings=["string1" , "string2" , "string3", "string4", "string5", "string6","string7"];
console.log("arrStrings is : " , arrStrings);
console.log("arrStrings.length is : " , arrStrings.length);

let [primulString,,,,,,ultimulString]=arrStrings;

console.log("primulString is : " , `${primulString}`);
console.log("ultimulString is : " , `${ultimulString}`);

//destructurare object

const slider = {
    type: "infinite",
    numberOfItems: 10,
    center: true,
    autoStart: true
}
console.log("slider is : " , slider);

const {type , autoStart}=slider;
console.log("type is : " , `${type}`);
console.log("autoStart is : " , `${autoStart}`);

//------------------------------------------------------------------------------

//Array Destructuring
const friends = ['Mihaela', 'Gabriela' , 'Aco'];
const [firstName, secondName , famName] = friends;
console.log("firstName is : " , firstName);//firstName is :  Mihaela
console.log("secondName is : " , secondName);  //secondName is :  Gabriela
console.log("famName is : " , famName);//famName is :  Aco

//------------------------------------------------------------------------------
//destructurare obiect
const personObj={
  id:1,
  name:"Aco Alina",
  age:35,
  phone:0722669610,
  imgURL:"url(../../assets/images/aco-alina.jpg)",
  border:"5px solid red",
  margin:1,
  padding:0.5,
  width:20,
  height:15,
  text:"woman lorem ipsum"
}
console.log("personObj is : " , personObj);

//vreau sa afisez imaginea in pag
const womanImage=`<div id="${personObj.id}"
                       style="border:${personObj.border} ;
                              height:${personObj.height}em ;
                              width:${personObj.width}em ;
                              padding:${personObj.padding}em ;
                              background-image:${personObj.imgURL};
                              background-size:cover;
                              background-position:center;
                              background-repeat:no-repeat;
                              margin:0.5em">${personObj.text}</div>`;
console.log("--- womanImage is : " , womanImage);

document.getElementById('section1').innerHTML=womanImage;

//vreau sa afisez textul in pagina
document.getElementById('womanText').innerText=personObj.text;
document.getElementById('womanText').style.border=personObj.border;
document.getElementById('womanText').style.padding=personObj.padding + "em";

//------------------------------------------------------------------------------
function createWoman(obj){
  const {id, name, age, phone, imgURL, border, margin, padding, width, height, text}=obj;

const womanFunctImage=`<article id="${id}"
                       style="border:${border} ;
                              height:${height}em ;
                              width:${width}em ;
                              padding:${padding}em ;
                              background-image:${imgURL};
                              background-size:cover;
                              background-position:center;
                              background-repeat:no-repeat;
                              margin:0.5em">unsplash photo
                              <p>${text}</p><p>${phone}</p></article>`

  return womanFunctImage;
}
console.log(createWoman(personObj));
document.getElementById('section2').style.border=personObj.border;
//
document.getElementById('section3').style.border=personObj.border;
document.getElementById('section3').innerHTML=createWoman(personObj);
//------------------------------------------------------------------------------

//Object Destructuring
const personExample = {nameExample: "Popescu Dumitru",
                       ageExample: 17,
                       phoneExample: "123456789",
                       borderExample:"3px solid yellowgreen"};
const {nameExample , ageExample, phoneExample, borderExample} = personExample;
console.log("nameExample is : " , nameExample);

document.getElementById('section4').innerText=nameExample;
document.getElementById('ageParagraph').innerText=ageExample;

document.getElementById('phoneParagraph').innerHTML=phoneExample;
document.getElementById('phoneParagraph').style.border=borderExample;

//------------------------------------------------------------------------------

const [a, b, ...[c, d]] = [1, 2, 3, 4];
console.log("a, b, c, d is : " , a, b, c, d); // a, b, c, d is :  1 2 3 4

//https://www.codegrepper.com/code-examples/javascript/object+destructuring

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin',
        type: 'private'
    }
};

console.log("--- book is : " , book);
console.log(typeof(book));//object
console.log("--- book.publisher is : " , book.publisher);

console.log("--- book.publisher.name is : " , book.publisher.name);
console.log("--- book.publisher.type is : " , book.publisher.type);

document.getElementById('book-title').innerText=book.title;
document.getElementById('book-title').style.border="3px solid orange";

document.getElementById('book-type').innerText=book.publisher.type;
document.getElementById('book-type').style.border="3px solid deeppink";

//------------------------------------------------------------------------------
// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// create an object
const person = new Person();
console.log("person is : " , person);
console.log("person.name" , person.name);
console.log("person.age" , person.age);
//------------------------------------------------------------------------------

// constructor function
function Person2 (valName,valAge) {
    this.name = valName,
    this.age = valAge,
    this.proffesion="nurse"
     this.greet = function () {
        console.log('hello - initial text');
        console.log(`hello ${this.name} , your age is : ${this.age} .`);
        return `${this.name} is ${this.age} years old and works as ${this.proffesion}`;
    }
}

// create objects
const personCostica = new Person2("Costica" , 78);
// personCostica is :  Person2 {name: 'Costica',
//                              age: 78,
//                              proffesion: 'nurse',
//                              greet: ƒ}

const personGigel = new Person2("Gigel" , 25);
const personAna=new Person2("Ana" , 47);

console.log("personCostica is : " , personCostica);
console.log("personGigel is : " , personGigel);
// access properties
console.log("personCostica.name is : " , personCostica.name);
//personCostica.name is :  Costica
personCostica.greet();

console.log("personGigel.name is : " , personGigel.name);
personGigel.greet();

document.getElementById('section6').children[0].style.border="3px solid yellow";
document.getElementById('section6').children[1].style.border="3px solid deeppink";
document.getElementById('section6').children[2].style.border="3px solid yellowgreen";

document.getElementById('costica').innerText=personCostica.greet();
document.getElementById('gigel').innerText=personGigel.greet();
document.getElementById('ana').innerText=personAna.greet();

//------------------------------------------------------------------------------
// using object lateral
let person1 = {
    name: 'Matilda'
}

console.log("person1.name is : " , person1.name); // Matilda

let student1 = person1;

// changes the property of an object
student1.name = 'Giorgiana';

// changes the origins object property
console.log("person1.name is : " , person1.name); // Giorgiana


// using copied object
let personEx2 = {
    name: 'Sam'
}

console.log("personEx2.name is : " , personEx2.name); // Sam

let student2 = {...personEx2};

// changes the property of an object
student2.name = 'John';

// changes the origins object property
console.log("personEx2.name is : " , personEx2.name); // Sam
console.log("student2.name is : " , student2.name);

//------------------------------------------------------------------------------
//https://www.programiz.com/javascript/constructor-function

// Adding Properties And Methods in an Object
// You can add properties or methods in an object like this:

// constructor function
function Person3 () {
    this.name = 'Mihai',
    this.age = 23
}

// creating objects
let person31 = new Person3();
let person32 = new Person3();

// adding property to person1 object
person31.gender = 'male';
console.log("person31.gender is : " , person31.gender);

// adding method to person1 object
person31.greet = function () {
    console.log('salut from person 31');
    console.log(`${this.name} says hello .`);
}

person31.greet();   // hello

// Error code
// person2 doesn't have greet() method
//person32.greet();

//---------------------------------------------------JavaScript Object Prototype
// constructor function
function Prajitura(nr){
  this.name="tort",
  this.portion=3,
  this.layer=nr,
  this.eat=function(val){
    console.log(`${this.name} is eaten in ${this.portion} at dinner and has ${this.layer} layers .`);
    console.log(`${this.name} contains ${val} and sugar.`);
    return `${this.name} contains ${this.layer} layers and it is served in ${this.portion} .`;
  }
}

// adding new property to constructor function
Prajitura.prototype.colorProperty="yellow";

let tort1=new Prajitura(7);
let tort2=new Prajitura(17);
let tort3=new Prajitura(33);
let tort4=new Prajitura(4);
let tort5=new Prajitura(5);

console.log("--- tort1 is : " , tort1);
//--- tort1 is :  Prajitura {name: 'tort', portion: 3, layer: 7, eat: ƒ}
console.log("--- tort3 is : " , typeof(tort3));
//--- tort3 is :  object
console.log("-!!!-- tort3.eat() is : " , tort3.eat("milk"));

//proprietatea colorProperty se transmite la toate obiectele create
console.log("tort1.colorProperty is : " , tort1.colorProperty);//tort1.colorProperty is :  yellow
console.log("tort2.colorProperty is : " , tort2.colorProperty);//tort2.colorProperty is :  yellow
console.log("tort3.colorProperty is : " , tort3.colorProperty);//tort3.colorProperty is :  yellow

//show Prajitura objects on html page

let prajituraArr=[];
console.log("prajituraArr is : " , prajituraArr);//prajituraArr is :  []

prajituraArr.push(tort1 , tort2, tort3, tort4, tort5);
console.log("prajituraArr after push() method is : " , prajituraArr);
//prajituraArr after push() method is :
// (5) [Prajitura, Prajitura, Prajitura, Prajitura, Prajitura]
console.log("prajituraArr.length is : " , prajituraArr.length);

const allliTort=document.querySelectorAll(".liTort");
console.log("allliTort is arr : " , allliTort);
//allliTort is arr :  NodeList(5) [li.liTort, li.liTort, li.liTort, li.liTort, li.liTort]

for(let i=0; i<allliTort.length ; i++){
  allliTort[i].style.backgroundColor="pink";
  allliTort[i].style.border="3px dotted indigo";
  allliTort[i].style.padding="0.5em";
  allliTort[i].style.margin="0.5em";
  allliTort[i].innerText=prajituraArr.map((el,index) =>el.layer)[i];
}
//------------------------------------------------------------------------------
//https://www.codegrepper.com/code-examples/javascript/object+destructuring+in+javascript+w3schools

// assigning object attributes to variables before ES6
const personSara = {
    name: 'Sara Sampson',
    age: 25,
    gender: 'female'
};

let nameSara = personSara.name;
let ageSara = personSara.age;
let genderSara = personSara.gender;

console.log("nameSara is : " , nameSara); // Sara Sampson
console.log("ageSara is : " , ageSara); // 25
console.log("genderSara is : " , genderSara); // female


//------------------------------------------------------object destructuring ES6
const personJohn={
  nameJohn:"John",
  ageJohn:31,
  genderJohn:"male"
};

let {nameJohn , ageJohn , genderJohn}=personJohn;
console.log("---nameJohn is : " , nameJohn);//---nameJohn is :  John
console.log("---ageJohn is : " , ageJohn);//---ageJohn is :  31
console.log("---genderJohn is : " , genderJohn);//---genderJohn is :  male

//destructuring
var foo = ['oneElement', 'twoElement', 'threeElement'];

// without destructuring
var one   = foo[0];
console.log("one is : " , one);// oneElement
var two   = foo[1];
console.log("two is : " , two);//twoElement
var three = foo[2];
console.log("three is : " , three);//threeElement

//with destructuring

const [oneDestructuring, twoDestructuring, threeDestructuring]=foo;
console.log("oneDestructuring is : " , oneDestructuring);//oneDestructuring is :  oneElement
console.log("twoDestructuring is : " , twoDestructuring);//twoDestructuring is :  twoElement
console.log("threeDestructuring is : " , threeDestructuring);//threeDestructuring is :  threeElement

//------------------------------------------------------------------------------

const personGamer={
  nameGamer:"George Gamer",
  ageGamer:30,
  hobbies:{
    read:false,
    playGames:true
  }
};

let {nameGamer, ageGamer, hobbies:{read, playGames}}=personGamer;
console.log("nameGamer is : " , nameGamer);//nameGamer is :  George Gamer
console.log("ageGamer is : " , ageGamer);//ageGamer is :  30
console.log("read is : " , read);//read is :  false
console.log("playGames is : " , playGames);//playGames is :  true

//------------------------------------------------------------------------------
const userPerson = { idUser: 42, isVerified: true };

//------------------ grabs the property by name in the object, ignores the order
const {isVerified , idUser}=userPerson;
console.log("--- isVerified is : " , isVerified);//--- isVerified is :  true
console.log("--- idUser is : " , idUser);//--- idUser is :  42

//------------------------------------------------------------------------------
//https://www.codegrepper.com/code-examples/javascript/how+to+use+object+destructuring
const juiceObject={
  id:1,
  name:"tasty drink",
  color:"yellowgreen",
  ingredients:3
};

console.log("!!! juiceObject is : " , juiceObject);

//functie fara destructurare
function getJuiceClassic(obj){
  const nameJuice=obj.name;
  const colorJuice=obj.color;
  const ingredientsJuice=obj.ingredients;

  return `${nameJuice} is a juice ; its color is ${colorJuice} and has ${ingredientsJuice} ingredients.`;
}

document.getElementById('classicJuice').innerText=getJuiceClassic(juiceObject);
document.getElementById('classicJuice').style.border="3px solid indigo";
document.getElementById('classicJuice').style.padding="0.5em";
document.getElementById('classicJuice').style.margin="0.5em";

//functie cu destructurare

function getJuiceDstructuring(obj){
  const {id , name, color , ingredients}=juiceObject;

  return `${name} is a juice ; its color is ${color} and has ${ingredients} ingredients.`;
}

const destructuringJuice=document.getElementById('destructuringJuice');
destructuringJuice.style.border="3px solid magenta";
destructuringJuice.style.padding="0.5em";
destructuringJuice.style.margin="0.5em";
destructuringJuice.innerText=getJuiceDstructuring(juiceObject);

//functie cu destructurare alta forma de scriere

function getDestructuringJuice({id , name, color , ingredients}){
  return `${name} is a juice ; its color is ${color} and has ${ingredients} ingredients.`;
}

const juiceDestructuring=document.getElementById('juiceDestructuring');
juiceDestructuring.style.border="3px solid orange";
juiceDestructuring.style.padding="0.5em";
juiceDestructuring.style.margin="0.5em";
juiceDestructuring.innerText=getDestructuringJuice(juiceObject);

//------------------------------------------------------------------------------

const arrMyJuices=[
  {
    id:1,
    name:"tasty drink",
    color:"yellowgreen",
    ingredients:3
  },
  {
    id:2,
    name:"hot drink",
    color:"pink",
    ingredients:5
  },
  {
    id:3,
    name:"cold drink",
    color:"skyblue",
    ingredients:7
  },
  {
    id:4,
    name:"cool drink",
    color:"yellow",
    ingredients:10
  }
];

function getClassicJuice(obj){
  const idJuice=obj.id;
  const nameJuice=obj.name;
  const colorJuice=obj.color;
  const ingredientsJuice=obj.ingredients;

  return `The id is ${idJuice}.
          ${nameJuice} is a juice ; its color is ${colorJuice} and has ${ingredientsJuice} ingredients.`;
}

const allliClassicJuice=document.querySelectorAll(".liClassicJuice");
console.log("--- allliClassicJuice is : " , allliClassicJuice);

for(let i=0 ; i<allliClassicJuice.length ; i++){
  allliClassicJuice[i].style.border="3px solid red";
  allliClassicJuice[i].style.padding="0.5em";
  allliClassicJuice[i].style.margin="0.5em";
  allliClassicJuice[i].innerText=getClassicJuice(arrMyJuices[i]);
}

//------------------------------------------------------------------------------

const arrFlowers=[
  {
    "id":1,
    "name":"flower1",
    "color":"yellow",
    "leaves":10,
    "imgUrl":"url(https://images.pexels.com/photos/1037994/pexels-photo-1037994.jpeg?auto=compress&cs=tinysrgb&w=1600)",
    "border":"3px dotted magenta",
    "padding":15,
    "margin":0.5,
    "text":"I am flower1",
    "width":10
  },
  {
    "id":2,
    "name":"flower2",
    "color":"deeppink",
    "leaves":5,
    "imgUrl":"url(https://images.pexels.com/photos/2099737/pexels-photo-2099737.jpeg?auto=compress&cs=tinysrgb&w=1600)",
    "border":"3px dotted red",
    "padding":15,
    "margin":0.5,
    "text":"I am flower2",
    "width":10
  },
  {
    "id":3,
    "name":"flower3",
    "color":"magenta",
    "leaves":3,
    "imgUrl":"url(https://images.pexels.com/photos/250716/pexels-photo-250716.jpeg?auto=compress&cs=tinysrgb&w=1600)",
    "border":"3px dotted skyblue",
    "padding":15,
    "margin":0.5,
    "text":"I am flower3",
    "width":10
  }
];

function destructuringFlower(objFlower){
  const {id, name, color,leaves, imgUrl, border, padding, margin, text, width}=objFlower;
  return `<article id=${id}>
  <h3>${text}</h3>
<p style="color:gray ; background-color:${color}">Flower name is : ${name} and has ${leaves} leaves. </p>
<div style="width:${width};
            height:300px;
            border:${border};
            background-image:${imgUrl};
            background-size:cover;
            background-position:center;
            background-repeat:no-repeat"></div>
  </article>`
}

const allliFlower=document.querySelectorAll(".liFlower");
for(let i=0 ; i<allliFlower.length ; i++){
  allliFlower[i].style.border="3px dotted gold";
  allliFlower[i].style.padding="0.5em";
  allliFlower[i].style.margin="0.5em";
  allliFlower[i].innerHTML=destructuringFlower(arrFlowers[i]);
}
//------------------------------------------------------------------------------

const myCatObj={
  "id":1,
  "name":"CAT1",
  "color":"red",
  "leaves":10,
  "imgUrl":"url(https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1600)",
  "border":"3px dotted gold",
  "padding":15,
  "margin":0.5,
  "text":"I am cat1",
  "width":10
};

function getDestructuringCat({id, name, color,leaves, imgUrl, border, padding, margin, text, width}){
  return `<article id=${id}>
  <h3>${text}</h3>
<p style="color:gray ; background-color:${color}">cat name is : ${name} and has ${leaves} friends. </p>
<div style="width:${width};
            height:300px;
            border:${border};
            background-image:${imgUrl};
            background-size:cover;
            background-position:center;
            background-repeat:no-repeat"></div>
  </article>`
}
//apel functie
console.log("--- get all cats ---" , getDestructuringCat(myCatObj));

document.getElementById('catDiv').innerHTML=getDestructuringCat(myCatObj);
//------------------------------------------------------------------------------
const myArrCats=[
  {
    "id":1,
    "name":"CAT1",
    "color":"coral",
    "leaves":10,
    "imgUrl":"url(https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1600)",
    "border":"3px dotted yellowgreen",
    "padding":15,
    "margin":0.5,
    "text":"I am cat1",
    "width":10
  },
  {
    "id":2,
    "name":"CAT2",
    "color":"yellow",
    "leaves":4,
    "imgUrl":"url(https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&w=1600)",
    "border":"3px dotted magenta",
    "padding":15,
    "margin":0.5,
    "text":"I am cat2",
    "width":10
  },
  {
    "id":3,
    "name":"CAT3",
    "color":"floralwhite",
    "leaves":5,
    "imgUrl":"url(https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=1600)",
    "border":"3px dotted olive",
    "padding":15,
    "margin":0.5,
    "text":"I am cat3",
    "width":10
  }
];

function getDestructuringCats({id, name, color,leaves, imgUrl, border, padding, margin, text, width}){
  return `<article id=${id}>
  <h3>${text}</h3>
<p style="color:gray ; background-color:${color}">cat name is : ${name} and has ${leaves} friends. </p>
<div style="width:${width};
            height:300px;
            border:${border};
            background-image:${imgUrl};
            background-size:cover;
            background-position:center;
            background-repeat:no-repeat"></div>
  </article>`
}

const allliCat=document.querySelectorAll(".liCat");
console.log("--- allliCat is : " , allliCat);

for(let i=0 ; i<allliCat.length ; i++){
  allliCat[i].style.border="3px dotted gold";
  allliCat[i].style.padding="0.5em";
  allliCat[i].style.margin="0.5em";
  allliCat[i].innerHTML=getDestructuringCats(myArrCats[i]);
}



























//https://www.programiz.com/javascript/constructor-function
//https://www.codegrepper.com/code-examples/javascript/object+destructuring
//
