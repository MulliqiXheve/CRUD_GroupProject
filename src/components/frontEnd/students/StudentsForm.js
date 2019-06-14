import React from 'react';
//import App from './App.css';
import {Link} from 'react-router-dom';



function StudentsForm() {
  return (
    <div >
      <form action="" method="Post"> 
       <p>First name:</p>
     
     <input type="text" name="firstname" />
       
      <p>Last name:</p>
       
     <input type="text" name="lastname" />
   
      <input type="submit" value="Submit"/>
      </form>
      </div>
    
  )
}

export default StudentsForm;