import React, { useState, useEffect} from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navigation = () => {
    const [lang, setLang] = useState('gb');
    const location = useLocation();

    useEffect(() => {
        langChangeHandler();
    }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

    const langChangeHandler = () => {
        const pathnameArr = location.pathname.split('/');
        const activeLang = pathnameArr[1];
        setLang(activeLang);
    }

    return(
        <nav>
            <ul>
                <li>
                    <NavLink exact to={'/' + lang}>Top News</NavLink>
                </li>
                <li>
                    <NavLink to={'/' + lang + '/categories'}>Categories</NavLink>
                </li>
                <li>
                    <NavLink to={'/' + lang + '/search'}>Search</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;