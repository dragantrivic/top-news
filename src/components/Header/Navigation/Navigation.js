import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Top News</Link>
            </li>
            <li>
                <Link to="/categories">Categories</Link>
            </li>
            <li>
                <Link to="/search">Search</Link>
            </li>
        </ul>
    </nav>
);

export default Navigation;