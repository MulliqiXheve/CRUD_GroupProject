import React from 'react';
//import App from './App.css';
import {Link} from 'react-router-dom';
import StudentsCart from './StudentsCart';
import addStudentForm from './addStudentForm';



function StudentsForm() {
  return (
    <div >

       <StudentsCart />
        <StudentsCart />
        <StudentsCart />
        <StudentsCart />

        <button  href="#" class="btn btn-success" ><Link to="/addStudentForm">Add Student</Link></button>
      
    </div>
  )
}

export default StudentsForm;