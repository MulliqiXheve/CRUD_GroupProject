import React from 'react';
//import App from'./App.css';
import {Link} from 'react-router-dom'




class addCampusForm extends React.Component {

  submittingForm = (event) => {
    event.preventDefault(); // dont refresh
    let name = event.target[0].value;
    let addr = event.target[1].value;
    let url = event.target[2].value;
    let des = event.target[3].value;

    // send to back end
    
  }


  render() {
      return (

        <div >
          <form form onSubmit={this.submittingForm}>
            <div class="form-group">
              <label for="name">Campus Name</label>
              <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter campus name"/>
              <small id="emailHelp" class="form-text text-muted">What is your favorite Campus</small>
            </div>
            <div class="form-group">
              <label for="location">Location:</label>
              <input type="text" class="form-control" id="location" aria-describedby="emailHelp" placeholder="Enter location"/>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Image Url:</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Image url"/>
              
            </div>
            <div class="form-group">
              <label for="epassword">Description</label>
              <input type="password" class="form-control" id="password" placeholder="this school is fun"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
    </div>
      );
  }
}

export default addCampusForm;
