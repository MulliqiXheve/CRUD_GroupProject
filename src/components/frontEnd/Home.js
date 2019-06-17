import React from 'react';
//import App from './App.css';
//import {Link} from 'react-router-dom';
// import style from './students/img/style.css'

const imgMyimageexample = require('./students/img/Capture.PNG');
const divStyle = {
  width: '100%',
  height: '500px',
  backgroundImage: `url(${imgMyimageexample})`,
  backgroundSize: 'cover'   
};

class Home extends React.Component {
  render() {
    return (
      <div>
      <div className="cComponent" style={divStyle} >
        <h1 align="center">School Management</h1>
        
      </div>
      <footer class="page-footer font-small blue">
  <div class="footer-copyright text-center py-3">© 2018 Copyright:
    <a href="https://mdbootstrap.com/education/bootstrap/"></a>
  </div>
</footer>
      </div>
    );
  }
}
export default Home;