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
