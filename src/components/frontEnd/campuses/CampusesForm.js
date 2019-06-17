import React from 'react';
//import App from './App.css';
import {Link} from 'react-router-dom';
<<<<<<< HEAD
import CampusesCart from './CampusesCart';
=======
>>>>>>> 20e533a485691d98d3ccc58f5b4337665291175d



function CampusesForm() {
  return (
    <div >
      <CampusesCart />
      <CampusesCart />
      <CampusesCart />

      <button  href="#" class="btn btn-success" ><Link to="/addCampusForm">Add Campus</Link></button>
      
      </div>
    
  )
}

export default CampusesForm;