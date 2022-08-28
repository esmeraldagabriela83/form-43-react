import React, {Component,useState,useEffect} from "react";
import ReactDOM from "react-dom";
import {Form , UsersData} from './Form';
import AsideLeft from "./aside-left";
import AsideRight from "./aside-right";
import Footer from "./Footer";
import MenuNav from "./MenuNav";
import Info from "./info";
import Logo from "./logo";
import About from "./about";
import persons from "../../data/db";
import TutorialArrowFunction from "./tutorialArrowFunction";


console.log("persons.users[1].id is  : " , persons.users[1].id);



function App(){
  return(
    <>
    <div id="upperPart">
    <nav className="container">
    <Logo/>
    <MenuNav/>
    </nav>
    <div class="text">my exercises</div>
    </div>

    <section id="content">
    <div class="aside">
    <AsideLeft/>
    </div>
    <div className="container">
    <Info/>
    <About/>
    <Form userid={"users.id"} formTitle={"Complete form"}/>
    <UsersData/>
    <a href="programare.html">programeaza-te</a>

    <ul>
<li>Dental procedures</li>
<a href="./procedures/detartraj.html"><li>parodontologie detartraj</li></a>
<a href="./procedures/odontologie.html"><li>caria dentara obturatii</li></a>
<a href="./procedures/arrays.html"><li>all array exercises</li></a>
<a href="./procedures/mapFilterReduce.html"><li>all map , filter reduce................</li></a>
<a href="./procedures/objects.html"><li>all objects fro course and tutotials................</li></a>
<a href="./procedures/selectori.html"><li>selectori page html</li></a>
<a href="./procedures/objectsDiscord.html"><li>objects and selectori discord and w 3 school</li></a>
<a href="./procedures/newTutorial.html"><li>new tutorial page</li></a>
<a href="./procedures/schoolJSON.html"><li>school json page</li></a>
<a href="./procedures/school-objects.html"><li>school objects page</li></a>
<a href="./procedures/destructurare.html"><li>destructurare page</li></a>
<a href="./procedures/destructurare-diverse.html"><li>diverse destructurare page</li></a>
<a href="./procedures/constructor.html"><li>constructor page</li></a>
    </ul>

    </div>
    <div class="aside">
    <AsideRight/>
    </div>
    </section>

<div className="container">
<TutorialArrowFunction/>
</div>

    <div className="container">
    <Footer/>
    </div>
    </>
  )
}
ReactDOM.render(<App/>,document.getElementById("app"));
