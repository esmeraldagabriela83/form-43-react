console.log("saturday string");

const myObjCat={
  "name":"micu-pisicu",
  "age":5,
  "catFunc":function(hour){
    console.log(`${this.name} makes mioau miau at ${hour} p.m. each day. `);

    return `${this.name} + makes mioau miau at + ${hour} + a.m. each day.`;
  }
}

console.log("myObjCat is : " , myObjCat);
//myObjCat is :
// {name: 'micu-pisicu', age: 5, catFunc: ƒ}
// age
// :
// 5
// catFunc
// :
// ƒ (hour)
// name
// :
// "micu-pisicu"
// [[Prototype]]
// :
// Object

console.log("myObjCat.name is : " , myObjCat.name);//myObjCat.name is :  micu-pisicu
document.getElementById('catName-paragraph').innerText=myObjCat.name;

myObjCat.catFunc(7);//micu-pisicu makes mioau miau at 7 p.m. each day.
document.getElementById("catFunc-paragraph").innerText=myObjCat.catFunc(7);

console.log("Object.keys(myObjCat) is : " , Object.keys(myObjCat));
//Object.keys(myObjCat) is :  (3) ['name', 'age', 'catFunc']

console.log("Object.values(myObjCat) is : " , Object.values(myObjCat));
//Object.values(myObjCat) is :
// (3) ['micu-pisicu', 5, ƒ]
// 0
// :
// "micu-pisicu"
// 1
// :
// 5
// 2
// :
// ƒ (hour)
// length
// :
// 3
// [[Prototype]]
// :
// Array(0)

console.log("keys-Array.from()" , Array.from(Object.keys(myObjCat)));
//keys-Array.from() (3) ['name', 'age', 'catFunc']

console.log("values-Array.from(Object.values(myObjCat))" , Array.from(Object.values(myObjCat)));
//values-Array.from(Object.values(myObjCat)) (3) ['micu-pisicu', 5, ƒ]

const allmycatLi=document.querySelectorAll(".mycatLi");
console.log("allmycatLi is : " , allmycatLi);
//allmycatLi is :  NodeList(3) [li.mycatLi, li.mycatLi, li.mycatLi]
for(let i=0; i<allmycatLi.length ; i++){
  allmycatLi[i].style.border="3px solid red";
    allmycatLi[i].innerText=Array.from(Object.keys(myObjCat))[i] + " : " + Array.from(Object.values(myObjCat))[i];
}

//
const allmycatLisecond=document.querySelectorAll(".mycatLisecond");
console.log("--- allmycatLisecond is : " , allmycatLisecond);

for(let i=0 ; i<allmycatLisecond.length ; i++){
  allmycatLisecond[i].style.border="3px solid indigo";
  allmycatLisecond[i].innerText=Object.keys(myObjCat)[i] + " : " + Object.values(myObjCat)[i];
}

//https://www.w3schools.com/jsref/jsref_from.asp
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_from

let myCatString="micu is my favorite cat.";
console.log("myCatString is : " , myCatString);
console.log("Array.from(myCatString) is : " , Array.from(myCatString));
//Array.from(myCatString) is :  (24) ['m', 'i', 'c', 'u', ' ', 'i', 's', ' ', 'm', 'y', ' ', 'f', 'a', 'v', 'o', 'r', 'i', 't', 'e', ' ', 'c', 'a', 't', '.']

document.getElementById('micuParagraph').innerText=Array.from(myCatString).join(" / ");

//-------------------------------------------------------------------------------
const myInput=document.getElementById('exampleInput');
myInput.style.backgroundColor="pink";
myInput.style.borderRadius="15px";

const showButton=document.getElementById('showButton');
showButton.style.border="3px dotted forestgreen";
showButton.addEventListener("click" , function(event){
  event.preventDefault();
  console.log("myInput.value is : " , myInput.value);
  document.getElementById('valueUserParagraph').innerText=myInput.value;
  document.getElementById('valueUserParagraph').style.border="3px solid cornflowerblue";
})




//----------------------------------------------------------------------------------------

let foods=[];
//clasa abstracta pe care o folosesc ca sablon pt alte clase
class Food{
  constructor(name , protein, carbs, fat){
      //aici se declara/initializeaza proprietatile
    this.name=name;
    this.protein=protein;
    this.carbs=carbs;
    this.fat=fat;
  }
}

//daca vreau clasa Food genereaza obiecte ex : food1 , food2

let food1=new Food("dish1" , 10 ,110 , 1100);
console.log("food1 is : " , food1);
//food1 is :  Food {name: 'dish1', protein: 10, carbs: 110, fat: 1100}
console.log("food1.name is : " , food1.name);
document.getElementById('food1Paragraph').innerText=food1.name;

let food2=new Food("dish2" , 20 , 220, 2200);
console.log("food2 is : " , food2);
//food2 is :  Food {name: 'dish2', protein: 20, carbs: 220, fat: 2200}
console.log("food2.name is : " , food2.name);//food2.name is :  dish2
console.log(typeof(food2));//object
document.getElementById('food2Paragraph').innerText=food2.name;

//
class FastFood extends Food{
  constructor(name, protein, carbs, fat){
    super(name, protein, carbs, fat)
  }
      //aici se declara/initializeaza metodele()
      getkcal(){
         return 4*(this.protein + this.carbs) + 9*this.fat;
        //return this.protein + this.carbs + this.fat;
      }
}

let fastFood1=new FastFood("fastDish1" , 10, 20, 30);
console.log("fastFood1 is : " , fastFood1);
//fastFood1 is :  FastFood {name: 'fastDish1', protein: 10, carbs: 20, fat: 30}
console.log(typeof(fastFood1));
document.getElementById('food1FastParagraph').innerText=fastFood1.name;

let fastFood2=new FastFood("fastDish2" , 20, 50 , 40);
console.log("fastFood2 is : " , fastFood2);
//fastFood2 is :  FastFood {name: 'fastDish2', protein: 20, carbs: 50, fat: 40}
document.getElementById('food2FastParagraph').innerText=fastFood2.name;
//
class FatFreeFood extends Food{
  //proprietatile le mosteneste automat de la clasa abstracta Food
  //aici se declara/initializeaza metodele()
  getkcal(){
     return 4*(this.protein + this.carbs) + 9*this.fat;
    //return this.protein + this.carbs + this.fat;
  }
}

const a=new FastFood("Fries", 3.4, 41, 15);
console.log("a is : " , a);
//a is :  FastFood {name: 'Fries', protein: 3.4, carbs: 41, fat: 15}
console.log(typeof(a));//object
const b=new FastFood("Donut" , 4.9, 51, 25);
console.log("b is : " , b);
const c=new FatFreeFood("Greek Yogurt" , 10, 3.6, 0.4);
console.log("c is : " , c);
//c is :  FatFreeFood {name: 'Greek Yogurt', protein: 10, carbs: 3.6, fat: 0.4}

//
document.querySelector("form").addEventListener("submit" , function(event){
  //pun event.preventDefault() pt a opri formularul de la iesirea din pagina
  event.preventDefault();
  console.log("this is : " , this);//afiseaza tot formularul din saturday.html
  console.log("this.elements is : " , this.elements);//this.elements is :  HTMLFormControlsCollection(5) [input#name, input#proteins, input#carbs, input#fat, input#add, name: input#name, proteins: input#proteins, protein: input#proteins, carbs: input#carbs, fat: input#fat, …]
  console.log("type of this.elements is : " , typeof(this.elements));//type of this.elements is :  object
//vreau array cu input-urile din formular
  console.dir(Array.from(this.elements));//Array(5) ce contine input-urile din formular

  // const li=document.createElement("li");
  // li.style.border="3px solid yellowgreen";

//   Array.from(this.elements).forEach((element, index) =>{
//
// const span=document.createElement("span");
// span.innerText=" / " + element.name + " : " + element.value;
// //introduc fiecare span  in fiecare li
// li.appendChild(span);
//document.querySelector("#products").appendChild(li);
//  })

//destructurare
//preiau elementele input din formular dupa nume
const {name, protein, carbs, fat}= this.elements;
console.log("name, protein, carbs, fat is : " , name, protein, carbs, fat);//afiseaza input-urile

//presupun ca nu am erori
let hasErrors=false;
[name, protein, carbs, fat ].forEach((el, index) =>{
  //daca campul este gol
  if(el.value.trim().length == 0){
    //am gasit o eroare
    hasErrors=true;
    //pun clasa error pe elementul curent ca sa-i fac border-ul rosu
    // el.style.border="3px solid red";
    el.classList.add("error");
  }else{
    //scot clas error (daca este) de pe elementul input
    // el.style.border="3px solid green";
      el.classList.remove("error");
      el.classList.add("okValue");
  }
})

//calculez kcal
const kcal=4*(parseFloat(protein.value) + parseFloat(carbs.value)) + 9*parseFloat(fat.value);
//se incarca array-ul foods
if(kcal>250){//daca kcal > 250 creez FastFood si-l adaug la array-ul foods
  foods.push(new FastFood(name.value, parseFloat(protein.value), parseFloat(carbs.value), parseFloat(fat.value)));
}else{//altfel creez FastFreeFood si-l adaug la array-ul foods
  foods.push(new FatFreeFood(name.value, parseFloat(protein.value), parseFloat(carbs.value), parseFloat(fat.value)));
}

//goleste lista ul#products
document.querySelector("#products").innerHTML="";

console.log("--- foods is : " , foods);

//parcurge array-ul foods care contine obiecte de tipul FastFood sau FatFreeFood
foods.forEach((el,index) =>{
  const li=document.createElement("li");
  li.style.border="3px solid magenta";
  li.innerText=el.name + " " + el.getkcal() + "kcal // ";

//aray utilitar care ma ajuta sa creez span-uri din li
  // const names=["protein" , "carbs" , "fat"];
  const names=document.querySelectorAll(`[data-info]`);
  console.log("--- names is : " , names);//pt fiecare obiect creat names este un array cu cate 3 input-uri : protein, carbs, fat
//aray creiat ad-hoc cu proprietatile obiectului
  // [el.protein, el.carbs, el.fat].forEach((element, index) =>{
  names.forEach((input) =>{
    const span1=document.createElement("span");
    //ordinea elementelor din array-ul ad-hoc coincide cu cea din array-ul utilitar
    //deci elementele au index corespunzator
    // span1.innerText=`[${names[index]} : ${element}g]`;
    span1.innerText=`[${input.dataset.info} : ${el[input.name]}g]`;//el[input.name] imi afiseaza valoarea(value) introdus de user
      span1.style.border="3px dotted yellowgreen";
    //se ataseaza span-ul creat la li
    li.appendChild(span1);
  })
//se ataseaza li-ul complet la ul
  document.querySelector("#products").appendChild(li);
})

//calculare suma totala kcal
const sum=foods.reduce((acc, item) =>{
  return acc + item.getkcal();
},0)

//schimbare text h2
document.querySelector("h2").innerText="Product list : " + sum + "kcal";

})




























//
