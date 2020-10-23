import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <nav>
        <ul>
            <li>
                <NavLink exact to="/">Top News</NavLink>
            </li>
            <li>
                <NavLink to="/categories">Categories</NavLink>
            </li>
            <li>
                <NavLink to="/search">Search</NavLink>
            </li>
        </ul>
    </nav>
);

export default Navigation;