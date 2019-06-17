import React from 'react';
//import App from './App.css';
import {Link} from 'react-router-dom'
import StudentsForm from './StudentsForm'




function AllStudents() {
  return (
    <div >
      <h1>All Students</h1>
      
      <button type="button" class="btn btn-lg btn-info  btn-block"><Link  to='/StudentsForm'>Show all Students</Link></button>
      
    </div>
  );
}

export default AllStudents;