import React from 'react';
//import App from './App.css';
import {Link} from 'react-router-dom';
import CampusesCart from './CampusesCart';



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