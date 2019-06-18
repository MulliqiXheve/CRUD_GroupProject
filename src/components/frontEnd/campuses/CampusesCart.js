import React from 'react';
// import style from 'img/style';
import {Link} from 'react-router-dom'
import Figure from 'react-bootstrap/Figure'

  
class CampusesCart extends React.Component{

  editbt = (params) => {
    console.log("anything");



    
  }
  deletetb = (params) => {
    
  }



  render (){

  return (
<div>
    <Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="campus"
    src="Campus-logo.jpg"
  />
  <Figure.Caption>
   Campus Description 
  </Figure.Caption> 
    <button href="#" onClick={this.editbt} class="btn btn-secondary">Edit</button>
    <button href="#" class="btn btn-danger">Delete</button>
</Figure>
 
    
  </div>

  ); 
}
}
export default CampusesCart;