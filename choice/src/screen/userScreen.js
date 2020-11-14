import React from 'react';
import { Link } from "react-router-dom";
import data from "../data"


export default function userScreen() {


  
  return (
    <div className="grid-container2">
    <header className="header2">
    
      
     <div className="slider">
     <div className="slides">
     <input type="radio" name="radio-btn" id="radio1"/>
      <input type="radio" name="radio-btn" id="radio2"/>
      <input type="radio" name="radio-btn" id="radio3"/>
      <div ><Link to="/" className="user-nav">back</Link></div>

      <div className="slider first">
     {
       data.contents.map(content =>
        <img src={content.mainImage} alt="slide"/>
        )
     }
      </div>
       <div className="navigation-auto">
       <div className="auto-btn1"></div>
       <div className="auto-btn2"></div>
       <div className="auto-btn3"></div>
       </div>
      
      <div className="navigation-manual">
     <label for="radio1" className="manual-btn"></label>
     <label for="radio2" className="manual-btn"></label>
     <label for="radio3" className="manual-btn"></label>
      </div>
     </div>
     </div>
   
        
    </header>
   
    <main className="main2">
          <div className="banner-image">
         
        </div>
      
      
   
    </main>
    <footer className="footer2">
         hello
       </footer>
    </div>
  )
}
