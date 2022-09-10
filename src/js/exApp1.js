import React from "react";
import ReactDOM from "react-dom";

console.log("---hello from exApp1.js");

function AppEx1(){
  return (
    <>
    <h1 >my text </h1>
    <div className="test">
<ul>
<li>one</li>
<li>two</li>
<li>three : {1 + 2}</li>
</ul>
    </div>
    </>
  );
}

export default AppEx1;
