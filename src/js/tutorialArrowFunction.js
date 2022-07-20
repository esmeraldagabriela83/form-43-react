import React from 'react';
console.log("I am in tutorialArrowFunction.js");

const liStyle={
  // padding:"1em",
  border:"3px solid pink",
}

function TutorialArrowFunction(){

const arraArrow=[1 , 2 , 3 , "primavara" , 5];

return(
  <>
  <p>14 07 2022 after catalin course</p>
<ul>
<li style={liStyle}>{arraArrow.map((el) =>el)}</li>
</ul>

{arraArrow.map((el) => el)}

  </>
)

}

export default TutorialArrowFunction;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//https://www.youtube.com/watch?v=ajTvmGxWQF8&t=1032s
//Arrow Functions JavaScript Tutorial - What NOT to do!!!






























///
