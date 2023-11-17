import React, {Component} from 'react';
import {Link} from "react-router-dom";
import NavbarItems from './NavbarItems';
import GovtechLogo from '../assets/GovtechLogo.webp';
import "../styles/NavbarStyles.css";


class Navbar extends Component{
    state = {clicked: false}
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className='Navbaritems'>
                <img src={GovtechLogo} alt="Logo" className="navbar-logo"></img>

                <div className='menu-icons' onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {NavbarItems.map((item,index)=>{
                        return(
                            <li key={index}>
                                <Link className={item.cname} to= {item.url}>
                                    <i className={item.icon}></i>
                                    {item.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}


export default Navbar;



