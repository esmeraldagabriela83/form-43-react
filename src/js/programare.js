console.log("I am in programare.js");

/////////////https://www.youtube.com/watch?v=AfRHl3soLDg
///Javascript - How To Get And Set Input Text Value In JS [ with source code ]


//https://www.youtube.com/watch?v=-rNQeJi3Wp4   Pure JavaScript CRUD Operations with Html

//try interval
//crud curs 41 create ,read ,  update , delite
//https://www.youtube.com/watch?v=pcelNF8Ckhk    Complete CRUD Operation with IndexDB Database - JavaScript Project

//https://www.youtube.com/watch?v=AfRHl3soLDg   Javascript - How To Get And Set Input Text Value In JS [ with source code ]

var firstInput=document.getElementById('txt');

firstInput.style.border="3px dotted red";
firstInput.style.padding="1em";
firstInput.style.width="100%";
firstInput.style.outline="none";
//set value using input
firstInput.value="your text here";

  var paragraphValue=document.getElementById("paragraphValue");

function getValue(){
  console.log("you clicked the first button");

  //get value from the user

  var txt=firstInput.value;
  console.log("txt is : " , txt);

  //////////////

  paragraphValue.innerText=txt;


}

var valueBtn=document.getElementById("showValueBtn");
// valueBtn.style.color="yellow";
valueBtn.style.backgroundColor="red";
valueBtn.style.padding="0.5em";
valueBtn.style.borderRadius="0.3em";
valueBtn.style.width="150px";
valueBtn.addEventListener("click" , getValue);
/////////////////////////////////////////////////////////






//
