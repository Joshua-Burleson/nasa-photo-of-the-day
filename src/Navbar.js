import React from 'react';
import {NavLink} from 'react-router-dom';
import NavStyle from './styles/Navstyle';

function NavBar(props){
    return (
        <NavStyle className="navbar">
            <NavLink to="/APOD">APOD</NavLink>
            <NavLink to="/other">other API</NavLink>
        </NavStyle>
    );
};

export default NavBar; 