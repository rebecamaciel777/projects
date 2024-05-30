import { Component } from "react";
import {Link} from 'react-router-dom';
import "./NavbarStyles.css"
import Logo from '../components/logo-genshin-impact-42369.png'

class Navbar extends Component{
  state={clicked: false};
  handleClick=()=>{
    this.setState({clicked:!this.state.clicked})
  }
   render(){
    return (
        <>
          <nav>
    
            <a  href={() => false}><img className="Logo" alt="" src={Logo} color="#fff"></img></a>
             <div>
                <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                <Link to = '/' >
                    <li><a   href="./home">Home</a></li></Link>
                    <li ><a  href="./ascensao">Ascensão</a></li>
                    <li><a href="./build">Build</a></li>
                    <li><a href="./gameplay">Gameplay</a></li>
                    <li><a href="./constelacao">Constelação</a></li>
                </ul>
             </div>
             <div id="mobile" onClick={this.handleClick}>
              <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
             </div>          
          </nav>
        </>
    )
}
}

export default Navbar;