import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import userScreen from "./screen/userScreen";
export default function App() {

 



  return (
      <BrowserRouter>
   
    

   <Route path="/" exact={true} component={HomeScreen}/>
   <Route path="/content/:userHandle"  component={userScreen}/>
   
   
       
       
  

       
   
    

    </BrowserRouter>
  )
 
}



