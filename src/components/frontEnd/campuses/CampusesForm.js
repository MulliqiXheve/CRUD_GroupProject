import React from 'react';
//import App from './App.css';
import {Link} from 'react-router-dom';



function CampusesForm() {
  return (
    <div >
      <form action="" method="Post"> 
       <p>College name:</p>
     
     <input type="text" name="CollegeName" />

     <p>Location:</p>
       
      {/* <p>Last name:</p>
       
     <input type="text" name="lastname" /> */}
   
      <input type="submit" value="Submit"/>
      </form>
      </div>
    
  )
}

export default CampusesForm;