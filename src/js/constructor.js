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

///NOTIUNEA DE CLASA ABSTRACTA

//1.Clasa pe care o definim fara a instantia vreodata obiecte din ea
//adica nu apelam niciodat constructorul clasei cu new
//2.O folosim ca sablon pentru alte clase care o vor mosteni
//3.NU FOLOSIM INSTANTE (obiecte create cu new ale clasei respective)

//https://www.codegrepper.com/search.php?q=class%20javascript
//https://www.w3schools.com/js/js_asynchronous.asp


































//
