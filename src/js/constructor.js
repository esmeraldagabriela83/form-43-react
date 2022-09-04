console.log("constructor.js file");
//https://www.codegrepper.com/search.php?q=constructor
//https://www.w3schools.com/js/js_object_constructors.asp

//https://www.programiz.com/javascript/constructor-function

//In JavaScript, a constructor function is used to create objects. For example,

// constructor function
function Person1 () {
    this.name = 'Ana Maria',
    this.age = 40
}

// create an object
const person1 = new Person1();
console.log("--- person1 object created by constructor function is : " , person1);//Person1 {name: 'Ana Maria', age: 40}
console.log("person1.name is : " , person1.name);

const personX=new Person1();
console.log("--- personX is : " , personX);//--- personX is :  Person1 {name: 'Ana Maria', age: 40}
console.log("personX.name is : " , personX.name);
//------------------------------------------------------------------------------
function Audio(title){
  this.title=title ;
  console.log("this is : " , this);//this is :  Audio {title: 'title string '}
}
const myAudio=new Audio("title string ");
console.log("--- myAudio is : " , myAudio);
//--- myAudio is :  Audio {title: 'title string '}
console.log(typeof(myAudio));//object

//------------------------------------------------------------------------------

//JavaScript Object Constructors
//https://www.w3schools.com/js/tryit.asp?filename=tryjs_object_constructor
function Person2(first, last, age, eye){
  this.firstName=first;
  this.lastName=last;
  this.age=age;
  this.eyeColor=eye;

  console.log(`${this.firstName} ${this.lastName} has ${this.age} years old and eye color is ${this.eyeColor}.`)
  return `${this.firstName} ${this.lastName} has ${this.age} years old and eye color is ${this.eyeColor}.`;
}

const me=new Person2("Mihaela" , "Aco" , 39 , "brown");
console.log("--- me is : " , me);//--- me is :  Person2 {firstName: 'Mihaela', lastName: 'Aco', age: 39, eyeColor: 'brown'}

document.getElementById('meParagraph').innerText=Person2("Gabriela", "Anitoaie", 40, "green");
document.getElementById('myBrotherParagraph').innerText=Person2("Alex", "Aco", 37, "blue");

const  myMom=new Person2("Cornelia" , "Anitoaie" , 64, "brown");
document.getElementById('momParagraph').innerText=myMom.firstName + " " + myMom.lastName + " has " + myMom.eyeColor + " and is " +  myMom.age + " years old .";
console.log("myMom first: " , myMom);
//myMom first:  Person2 {firstName: 'Cornelia', lastName: 'Anitoaie', age: 64, eyeColor: 'brown'}

//------------------------------------------------Adding a Property to an Object
myMom.nationality="Romanian";
console.log("myMom second: " , myMom);
//myMom second:  Person2 {firstName: 'Cornelia', lastName: 'Anitoaie', age: 64, eyeColor: 'brown', nationality: 'Romanian'}

document.getElementById('momParagraphAddProperty').innerText=myMom.firstName + " " + myMom.lastName + " has " + myMom.nationality + " nationality .";

//--------------------------------------------------Adding a Method to an Object
myMom.totalName=function(val){
  console.log("My mom name is " + this.firstName + " " + this.lastName + " and sings " + val + ".");
  return "My mom name is " + this.firstName + " " + this.lastName + " and sings " + val + ".";
}
console.log("myMom third is : " , myMom);
//myMom third is :
// Person2 {firstName: 'Cornelia', lastName: 'Anitoaie', age: 64, eyeColor: 'brown', nationality: 'Romanian', …}
// age: 64
// eyeColor: "brown"
// firstName: "Cornelia"
// lastName: "Anitoaie"
// nationality: "Romanian"
// totalName: ƒ (val)
// [[Prototype]]: Object
console.log(myMom.totalName("la la la"));
document.getElementById('blaParagraph').innerText=myMom.totalName("bla bla bla");
//--------------------------------------------------Adding a Method to an Object
myMom.eat=function(foodValue){
  console.log(this.firstName + " " + this.lastName);
  return this.firstName + " " + this.lastName + " and eats " + foodValue + " .";
}

document.getElementById('foodParagraph').innerText="My mother " + myMom.eat("tomatoes");

//------------------------------------------------------------------------------
function Person3(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.name = function(myVal) {
    return this.firstName + " " + this.lastName + " is " + myVal;
  };
}

// Create a Person object
const myFather = new Person3("Dumitru", "Aco", 67, "brown");
document.getElementById('fatherParagraph').innerText="My father is " + myFather.name("romanian") + " .";

//27.04.2022 discord grupa1

//NOTIUNI GENERALE DE Object Oriented Programing
//definire functie consturctor [lucru clasic javascript]
function Car(speed, name) {
  //proprietati
  this.speed = speed;
  this.name = name;
  //metoda interna
  this.go = function(plus) {
    this.speed += plus;
  }
}
//metoda atasata pe prototip
Car.prototype.show = function() {
  console.log(`Car: ${this.name}, kmh:${this.speed}`);
  return `Car: ${this.name} has :${this.speed} kmh.`;
}

let car = new Car(100, "Audi");
car.go(30);
car.show();//Car: Audi, kmh:130

car.go(50);
car.show();//Car: Audi, kmh:180

car.go(100);
car.show();//Car: Audi, kmh:280

console.log("car is : " , car);
// car is :
// Car {speed: 130, name: 'Audi', go: ƒ}
// go: ƒ (plus)
// name: "Audi"
// speed: 130
// [[Prototype]]: Object
console.log("--- car is : " , typeof(car));//--- car is :  object

let car1=new Car(1000 , "Dacia");
document.getElementById('car1Paragraph').innerText=car1.show();

let car2=new Car(10 , "Bold");
document.getElementById('car2Paragraph').innerText=car2.show();

car2.go(500);
document.getElementById('car2ParagraphGo').innerText=car2.show();

car2.go(2000);
document.getElementById('car2ParagraphGoGo').innerText=car2.show();
//------------------------------------------------------------------------------



//------------------------------------------!!!---------abordare OOP in stil ES6

class ES6Car {
  constructor(speed,name){
    //aici se declara/initializeaza proprietatile
    this.speed = speed;
    this.name = name;
  }
//metode
  go(plus) {
    this.speed += plus
  }

  show() {
    console.log(`Car: ${this.name}, kmh:${this.speed}`);
  }

  //suprascriere metoda nativa

}


let es6Car = new ES6Car(50,"Dacia");
es6Car.go(39);
es6Car.show();

console.log("--- es6Car is : " , es6Car);
// ES6Car
// name: "Dacia"
// speed: 89
// [[Prototype]]: Object
// constructor: class ES6Car
// go: ƒ go(plus)
// show: ƒ show()
// [[Prototype]]: Object

//mostenire [inheritance]
class Truck extends ES6Car {
    //implicit mosteneste consturctorul
    //alaturi de celelalte metode;
    //suprascriu constructorul
    constructor(speed, name, weight = 0) {
      //!!!super apeleaza constructorul din parinte;
      super(speed,weight);
      //adaugam prorprietati noi
      this.weight = weight;
    }
    //adaugare metode noi
    load(weight){
      this.weight += weight;
    }

    //suprascrie metoda show
    show(){
      console.log(`Truck: ${this.name}, kmh:${this.speed}, weight: ${this.weight} tons`);
    }
}

let truck = new Truck(10,"Scania");

truck.go(10);
truck.load(3);
truck.show();

console.log("--- truck is : " , truck);
//--- truck is :  Truck {speed: 20, name: 0, weight: 3}
//la truck name este 0 pt ca super a anulat valoara parametrului real "Scania" ce ara pt parametrul formal name al lui ES6Car

class Suv extends ES6Car {
  //pot adauga proprietati noi
  //PRIN SUPRASCRIEREA constructorului

  //pot adauga metode noi

  //pot suprascrie metode mostenite
  show(){
    console.log(`SUV: ${this.name}, kmh:${this.speed}, weight: ${this.weight} tons`);
  }
}


let suv = new Suv(100,"X5");

suv.go(32);
suv.show();

console.log("--- suv Is : " , suv);
//--- suv Is :  Suv {speed: 132, name: 'X5'}
//suv are ca name pe X5 pt ca nu are un super care sa anuleze valoarea parametrului formal name al lui ES6Car

///NOTIUNEA DE CLASA ABSTRACTA

//1.Clasa pe care o definim fara a instantia vreodata obiecte din ea
//adica nu apelam niciodat constructorul clasei cu new
//2.O folosim ca sablon pentru alte clase care o vor mosteni
//3.NU FOLOSIM INSTANTE (obiecte create cu new ale clasei respective)

//https://www.codegrepper.com/search.php?q=class%20javascript
//https://www.w3schools.com/js/js_asynchronous.asp

//------------------------------------------------------------------------------
//https://www.w3schools.com/js/js_classes.asp

class ClassCar{
  constructor(name , year){
        //aici se declara/initializeaza proprietatile
    this.name=name;
    this.year=year;
  }
  //metode
  age(){
    let date=new Date();

    return date.getFullYear() - this.year;
  }
}

let schoolCar=new ClassCar("Ford", 2014);

console.log("--- schoolCar is : " , schoolCar);
//--- schoolCar is :
// Car {speed: 'Ford', name: 2014, go: ƒ}
// go: ƒ (plus)
// name: 2014
// speed: "Ford"
// [[Prototype]]: Object

document.getElementById('schoolCar').innerText="My car name is : " +  schoolCar.name +" . " + " It is " + schoolCar.age() + " years old.";

//------------------------------------------------------------------------------
//https://www.w3schools.com/js/js_classes.asp
//https://www.codegrepper.com/search.php?q=class%20javascript

//class genereaza obiecte

class FoodAutumn{
  constructor(ingredient1, ingredient2){
      //aici se declara/initializeaza proprietatile
    this.ingr1=ingredient1;
    this.ingr2=ingredient2;
  }
  //metode
  makeZacusca(year){
    return `This year : ${year}, I make zacusca with ${this.ingr1} and ${this.ingr2} .`
  }
}

let zacusca1=new FoodAutumn("ceapa" , "morcovi");
console.log("zacusca1 is : " , zacusca1);
// zacusca1 is :
// FoodAutumn {ingr1: 'ceapa', ingr2: 'morcovi'}
// ingr1: "ceapa"
// ingr2: "morcovi"
// [[Prototype]]: Object
// constructor: class FoodAutumn
// makeZacusca: ƒ makeZacusca(year)
// [[Prototype]]: Object
console.log("zacusca1 este : " , typeof(zacusca1));//zacusca1 este :  object

document.getElementById('zacusca1Paragraph').innerText=zacusca1.makeZacusca(2022);

let zacusca2=new FoodAutumn("cartofi" , "telina");
console.log("zacusca2 is : " , zacusca2);
document.getElementById('zacusca2Paragraph').innerText=zacusca2.makeZacusca(2000);

let zacusca3=new FoodAutumn("ardei" , "rosii");
console.log("zacusca3 is : " , zacusca3);
document.getElementById('zacusca3Paragraph').innerText=zacusca3.makeZacusca(1983);

//------------------------------------------------------------------------------
//functia constructor genereaza obiecte

function AutumnFuncZacusca(ingredient1, ingredient2){
  this.ingred1=ingredient1;
  this.ingred2=ingredient2;
  this.makeAutumnZacusca=function(year){
    return "Zacusca mea este facuta din " + this.ingred1 + " and " + this.ingred2 + " ,ingredients which  are picked in " + year + " year.";
  }
}

let zacuscaAutumn1=new AutumnFuncZacusca("castraveti" , "sfecla rosie");
console.log("zacuscaAutumn1 is " , zacuscaAutumn1);
// zacuscaAutumn1 is
// AutumnFuncZacusca {ingred1: 'castraveti', ingred2: 'sfecla rosie', makeAutumnZacusca: ƒ}
// ingred1: "castraveti"
// ingred2: "sfecla rosie"
// makeAutumnZacusca: ƒ (year)
// [[Prototype]]: Object
console.log("zacuscaAutumn1 este de tip : " , typeof(zacuscaAutumn1));//zacuscaAutumn1 este de tip :  object

document.getElementById('zacuscaAutumnParagraph1').innerText=zacuscaAutumn1.makeAutumnZacusca(1985);
//
let zacuscaAutumn2=new AutumnFuncZacusca("frunze de dafin" , "sare");
console.log("zacuscaAutumn2 is :" , zacuscaAutumn2);
document.getElementById('zacuscaAutumnParagraph2').innerText=zacuscaAutumn2.makeAutumnZacusca(2003);
//
let zacuscaAutumn3=new AutumnFuncZacusca("piper" , "usturoi");
console.log("zacuscaAutumn3 is :" , zacuscaAutumn3);
document.getElementById('zacuscaAutumnParagraph3').innerText=zacuscaAutumn3.makeAutumnZacusca(1995);

//https://www.udemy.com/course/modern-javascript-es6-for-react-js/
//https://www.codegrepper.com/search.php?q=class%20javascript

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
//Prototype methods
































//
