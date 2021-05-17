import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../logoHenry.png'
import Buscador from '../Buscador/Buscador'

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">                  
          <div className="imagen">  <img id="logoHenry" src={Logo} width="80" height="80"  alt="" /> <h2 className="movie-found">Movie Found</h2>   </div>
          
            
            
          

           <nav className="nav">
           
            <NavLink  className="NavLink"  to="/favs" >Favoritas</NavLink>
            <NavLink className="NavLink" exact to="/" >Home</NavLink>
            
            </nav>
            
           
        </header>
    )
}