console.log("hello json school js file");
// JSON Objects
// JSON objects are written inside curly braces.
//
// Just like in JavaScript, objects can contain multiple name/value pairs:

const schoolObj={"firstName":"John", "lastName":"Doe"}
console.log("schoolObj is : " , schoolObj);

var firstNameObj=document.getElementById('firstNameObj');
firstNameObj.style.border="3px solid red";
firstNameObj.style.padding="0.5em";
firstNameObj.style.margin="0.5em";
firstNameObj.innerText=schoolObj.firstName;

var lastNameObj=document.getElementById('lastNameObj');
lastNameObj.style.border="3px solid green";
lastNameObj.style.padding="0.5em";
lastNameObj.style.margin="0.5em";
lastNameObj.innerText=schoolObj.lastName;

// JSON Arrays
// JSON arrays are written inside square brackets.
//
// Just like in JavaScript, an array can contain objects:

// "employees":[
//   {"firstName":"John", "lastName":"Doe"},
//   {"firstName":"Anna", "lastName":"Smith"},
//   {"firstName":"Peter", "lastName":"Jones"}
// ];

const employees=[
  {"firstName":"Gigel", "lastName":"Aco"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
];
console.log("employees is : " , employees);
console.log("employees is : " , typeof(employees));

const arrFirstNameFromObj=employees.map((el , index) =>el.firstName);
console.log("arrFirstNameFromObj is : " , arrFirstNameFromObj);

//
var paragraphNames=document.getElementById('paragraphNames');
paragraphNames.style.border="3px solid gold";
paragraphNames.style.padding="0.5em";
paragraphNames.style.margin="0.5em";
paragraphNames.innerText=arrFirstNameFromObj.join(" , ");
//

const arrLastNameFromObj=employees.map((el , index) =>el.lastName);
console.log("arrLastNameFromObj is : "  , arrLastNameFromObj);

//

var allliPersonSchool=document.querySelectorAll(".liPersonSchool");
console.log("allliPersonSchool is arr: " , allliPersonSchool);
for(let i=0 ; i<allliPersonSchool.length ; i++){
  allliPersonSchool[i].style.border="3px solid yellow";
  allliPersonSchool[i].style.padding="0.5em";
  allliPersonSchool[i].style.margin="0.5em";
  // allliPersonSchool[i].innerText=employees.map((el , index) =>el.firstName)[i] + " " + employees.map((el , index) =>el.lastName)[i];
  allliPersonSchool[i].innerText=arrFirstNameFromObj[i] + " " + arrLastNameFromObj[i];
}
//
// Converting a JSON Text to a JavaScript Object
// A common use of JSON is to read data from a web server, and display the data in a web page.
//
// For simplicity, this can be demonstrated using a string as input.
//
// First, create a JavaScript string containing JSON syntax:

//ATENTIE STEP 1
//text is a string
let text = '{ "employees" : [' +
'{ "firstName":"Alina" , "lastName":"Gurbelea" },' +
'{ "firstName":"Alexandru" , "lastName":"Agafitei" },' +
'{ "firstName":"Cutare" , "lastName":"Popescu" } ]}';

console.log("text is : " , text);
console.log("text is : " , typeof(text));

//ATENTIE STEP 2
//get object from string

const obj = JSON.parse(text);
console.log("obj is : " , obj);//obj is :  {employees: Array(3)}
console.log("obj is : " , typeof(obj));


const textParagraph=document.getElementById('textParagraph');
textParagraph.style.border="3px solid olive";
textParagraph.style.padding="0.5em";
textParagraph.style.margin="0.5em";
textParagraph.innerText=obj.employees[1].firstName + " " + obj.employees[1].lastName;

//ATENTIE STEP 3
//get array from obj
const getArrfromobj=obj.employees;
console.log("---getArrfromobj is : " , getArrfromobj);//(3) [{…}, {…}, {…}]

const textObjParagraph=document.getElementById('textObjParagraph');
textObjParagraph.style.border="3px solid CornflowerBlue";
textObjParagraph.style.padding="0.5em";
textObjParagraph.style.margin="0.5em";
textObjParagraph.innerText=getArrfromobj.map((el , index) =>el.firstName) + " / " + getArrfromobj.map((el , index) =>el.lastName);

const allliFromArrGOTfROMobj=document.querySelectorAll(".liFromArrGOTfROMobj");
console.log("allliFromArrGOTfROMobj are : " , allliFromArrGOTfROMobj);
console.log("allliFromArrGOTfROMobj is : " , allliFromArrGOTfROMobj.length);

for(let i=0 ; i<allliFromArrGOTfROMobj.length ; i++){
  allliFromArrGOTfROMobj[i].style.border="3px solid green";
  allliFromArrGOTfROMobj[i].style.padding="0.5em";
  allliFromArrGOTfROMobj[i].style.margin="0.5em";
  allliFromArrGOTfROMobj[i].innerText=getArrfromobj.map((el , index) =>el.firstName)[i] + " " + getArrfromobj.map((el , index) =>el.lastName)[i];
}

//------------------------------------------------------------------------------
//https://www.codegrepper.com/code-examples/javascript/arrow+function+inside+object

//step 1
let softNet=`{"chain":
	[{
	"index":0,
	"hashid":"first-block",
	"timestamp":1,
	"proof-of-work":"xyz",
	"content":
		{
		"from":"network",
		"to":"Ranjeet",
		"amount":1
		}
	},
  {
  "index":1,
  "hashid":"second-block",
  "timestamp":2,
  "proof-of-work":"2xyz",
  "content":
    {
    "from":"2network",
    "to":"Popescu",
    "amount":2
    }
  },
  {
	"index":2,
	"hashid":"third-block",
	"timestamp":3,
	"proof-of-work":"3xyz",
	"content":
		{
		"from":"3network",
		"to":"Ionescu",
		"amount":3
		}
	}
]
}`;

console.log("---softNet is : " , softNet);
console.log("softNet is : " , typeof(softNet));//softNet is :  string

//step 2 get obj from string
const softObj=JSON.parse(softNet);
console.log("---softObj is : " , softObj);//---softObj is :  {chain: Array(3)}
console.log("softObj is : " , typeof(softObj));//softObj is :  object

//step 3 get array from object

const softArray=softObj.chain;
console.log("--- softArray is : " , softArray);//(3) [{…}, {…}, {…}]

//
const allliEachChain=document.querySelectorAll(".liEachChain");
console.log("allliEachChain are : " , allliEachChain);
console.log("allliEachChain.length is : " , allliEachChain.length);

for(let i=0 ; i<allliEachChain.length ; i++){
  allliEachChain[i].style.border="3px solid yellowgreen";
  allliEachChain[i].style.padding="0.5em";
  allliEachChain[i].style.margin="0.5em";
  allliEachChain[i].innerText=softArray.map((el , index) =>el.index)[i] + " / "+
                              softArray.map((el , index) =>el.timestamp)[i] + " / " +
                              softArray.map((el , index) =>el.content.to)[i]

}

var softParagraph=document.getElementById('softParagraph');
softParagraph.style.border="3px solid orangered";
softParagraph.style.padding="0.5em";
softParagraph.style.margin="0.5em";
softParagraph.innerText=softArray.map((el , index) =>el.hashid) + " / " + softArray.map((el , index) =>el.content.from);

//https://www.w3schools.com/js/js_classes.asp
//https://softhunt.net/top-10-es6-features-by-example/



























//
