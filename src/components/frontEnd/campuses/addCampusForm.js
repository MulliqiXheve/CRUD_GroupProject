import React from 'react';
//import App from'./App.css';
import {Link} from 'react-router-dom'




function addCampusForm() {
  return (

    <div >
      <form form action="" method="Post">
  <div class="form-group">
    <label for="exampleInputEmail1">Campus</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter campus name"/>
    <small id="emailHelp" class="form-text text-muted">What is your favorite Campus</small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Location:</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter location"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email:</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
 </div>
    // <div >
    //   <form action="" method="Post"> 
    //    <p>Campus name:</p>
     
    //  <input type="text" name="campusname" />
       
    //   <p>Location:</p>
       
    //  <input type="text" name="location" />
   
    //   <input type="submit" value="Submit"/>
    //   </form>
    //   </div>
    
  );
}

export default addCampusForm;
