import React from 'react';
// import style from 'img/style';
import {Link} from 'react-router-dom'

  const imgStudent= require('./usersImgS.png');
  const divStyle = {
  backgroundImage: `url(${imgStudent})`,
  backgroundSize: 'cover'
  };
class StudentsCart extends React.Component{

  render (){

  return (

    <div class="card" >
    <img class="card-img-top" style={divStyle} ></img>
  
  <div class="card-body">
    <h5 class="card-title">Student</h5>
    <p class="card-text">Student info</p>
    <button href="#" class="btn btn-secondary">Edit</button>
    <button href="#" class="btn btn-danger">Delete</button>
    
  </div>

</div>

  );
}
}
export default StudentsCart;