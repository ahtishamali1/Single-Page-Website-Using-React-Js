import React from 'react';
import {NavLink} from 'react-router-dom';
const Navbar = (props)=>(
    <div className="nav">
          <h2 className="logo"><NavLink className="logo-link" exact to="/">{props.title}</NavLink></h2>
          <ul className="nav-menu">
            <li><NavLink className="nav-menu__link" activeClassName="activate" exact to="/">Home</NavLink></li>
            <li><NavLink className="nav-menu__link" activeClassName="activate" to="/actors">Best Actors</NavLink></li>
            <li><NavLink className="nav-menu__link" activeClassName="activate" to="/actress">Best Actresses</NavLink></li>
            <li><NavLink className="nav-menu__link" activeClassName="activate" to="/films">Best Films</NavLink></li>
          </ul>
        </div>
);
export default Navbar;