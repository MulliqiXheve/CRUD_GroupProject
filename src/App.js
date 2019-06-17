
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AllStudents from './components/frontEnd/students/AllStudents'
import AllCampuses from './components/frontEnd/campuses/AllCampuses'
import StudentsForm from './components/frontEnd/students/StudentsForm'
import CampusesForm from './components/frontEnd/campuses/CampusesForm'
import AddStudentsForm from './components/frontEnd/students/addStudentForm'
import AddCampusForm from './components/frontEnd/campuses/addCampusForm'
import Notfound from './components/frontEnd/notFound'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Home from './components/frontEnd/Home';


const routing = (
    <Router>
      <div class="text-primary">

      <ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link active" type="button"><Link to="/Home">Home</Link>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" type="button"><Link to='/AllCampuses'>All Campuses</Link></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" type="button"><Link  to='/AllStudents'>All Students</Link></a>
  </li>


</ul>

   
   
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/AllStudents" component={AllStudents} />
          <Route path="/AllCampuses" component={AllCampuses} />

          <Route path="/StudentsForm" component={StudentsForm} />
          <Route path="/CampusesForm" component={CampusesForm} />
          <Route path="/addStudentForm" component={AddStudentsForm} />
          <Route path="/addCampusForm" component={AddCampusForm} />
          <Route path="/Home" component={Home} />


          
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  )
  export default routing;