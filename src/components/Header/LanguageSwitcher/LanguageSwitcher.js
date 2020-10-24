import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const LanguageSwitcher = () => {
    const [pageUrl, setPageUrl] = useState('');
    const location = useLocation();

    useEffect(() => {
        urlChangeHandler();
    }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

    const urlChangeHandler = () => {
        const pathnameArr = location.pathname.split('/');

        let activePageUrl = '';
        if(pathnameArr.length > 2) {
            activePageUrl = pathnameArr[2];
        }

        setPageUrl(activePageUrl);
    }

    return(
        <ul>
            <li><NavLink to={`/gb/${pageUrl}`}>GB</NavLink></li>
            <li><NavLink to={`/us/${pageUrl}`}>US</NavLink></li>
        </ul>
    );
};

export default LanguageSwitcher;