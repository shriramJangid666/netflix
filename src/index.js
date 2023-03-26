import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

function Display(){
  return(
    <App/>
  )
}


ReactDOM.render(<Display/>,document.getElementById("root"))