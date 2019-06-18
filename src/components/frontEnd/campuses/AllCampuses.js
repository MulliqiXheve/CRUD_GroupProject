import React from 'react';
//import App from'./App.css';
import {Link} from 'react-router-dom'
import CampusesForm from './CampusesForm'



function AllCampuses() {
  return (
    <div >
      <h1>All Campuses</h1>
      <button type="button" class="btn btn-lg btn-info  btn-block"><Link  to='/CampusesForm'>Show all Campuses</Link></button>
      
    </div>
  );
}

export default AllCampuses;
