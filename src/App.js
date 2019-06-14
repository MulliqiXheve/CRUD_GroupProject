import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AllStudents from './components/frontEnd/students/AllStudents'
import AllCampuses from './components/frontEnd/campuses/AllCampuses'
import StudentsForm from './components/frontEnd/students/StudentsForm'
import CampusesForm from './components/frontEnd/campuses/CampusesForm'
import Notfound from './components/frontEnd/notFound'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';




const routing = (
    <Router>
      <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <form class="form-inline">
    <ul>
          <li>
          <button class="btn btn-outline-success" type="button"><Link to="/">Home</Link></button>
          </li>
          <li>
          <button class="btn btn-outline-success" type="button"><Link to='/AllCampuses'>All Campuses</Link></button>
          </li>
          <li>
          <button class="btn btn-outline-success" type="button"><Link  to='/AllStudents'>All Students</Link></button>
          </li>
        </ul>
 </form>
</nav>
   
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/AllStudents" component={AllStudents} />
          <Route path="/AllCampuses" component={AllCampuses} />

          <Route path="/StudentsForm" component={StudentsForm} />
          <Route path="/CampusesForm" component={CampusesForm} />


          
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  )

  export default routing;