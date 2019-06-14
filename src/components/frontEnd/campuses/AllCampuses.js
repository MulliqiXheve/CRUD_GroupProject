import React from 'react';
//import App from'./App.css';
import {Link} from 'react-router-dom'



function AllCampuses() {
  return (
    <div >
        <h1>All Campuses</h1>
      <Link  to='/CampusesForm'>Add Campus</Link>
      
    </div>
  );
}

export default AllCampuses;