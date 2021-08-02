import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';


export const NavBar = () => (
    <nav className="nav-bar">
        <Link to="/"><button>Rankings</button></Link>
        <Link to="/record"><button>Record match</button></Link>
    </nav>
)