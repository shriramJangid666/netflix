import React from "react";
import './homeScreen.css'
import Nav from "./Nav";
import Banner from "./Banner";


function HomeScreen(){
    return(
        <div className="homeScreen">
          <Nav/>
          <Banner/> 
        </div> 
    )
}

export default HomeScreen