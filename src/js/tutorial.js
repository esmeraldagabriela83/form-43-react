console.log("I am in tutorial.js");
//from Array Method | JavaScript Tutorial
//https://www.youtube.com/watch?v=qS79OIceQ7k

const stringNumbers="1234567891011";
console.log("stringNumbers is : " , stringNumbers);
//[1 , 2 ,3 , 4 , 5 , 6 , 7 . 8 ,9]

const arrayFromString=Array.from(stringNumbers);
console.log("arrayFromString is : " , arrayFromString);
//////////////////////////////////////////////////////////////////////////////////////

const string7="1234567";
console.log("string7 is : " , string7);

const arrString7=Array.from(string7 , mapFunction);

function mapFunction(x){
  return Number(x);
}
console.log("arrString7 is :" , arrString7);

///remove the duplicated values from an array
const duplicatedValues=[1 , 3 , 4 , 77 , 56 , 4 , 3 , 1];

const arrangeNumbers=Array.from(new Set(duplicatedValues));
console.log("arrangeNumbers is : " , arrangeNumbers);
///////////////////////////////

const namesArray=["Alin" , "Maria" , "Teo" , "George" , "Radu" , "Maria" , "Teo" ,"Alin" ];
console.log("namesArray is : " , namesArray);
const arrangeNames=Array.from(new Set(namesArray));
console.log("arrangeNames is : " , arrangeNames);

//https://www.youtube.com/watch?v=R8rmfD9Y5-c
//8 Must Know JavaScript Array Methods

















//
