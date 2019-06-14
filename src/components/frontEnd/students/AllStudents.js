import React from 'react';
//import App from './App.css';
import {Link} from 'react-router-dom'
import StudentsForm from './StudentsForm'



function AllStudents() {
  return (
    <div >
      <h1>All Students</h1>
      <Link  to='/StudentsForm'>Add Student</Link>
    </div>
  );
}

export default AllStudents;