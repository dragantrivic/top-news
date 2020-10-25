import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const LanguageSwitcher = (props) => {
    const [pageUrl, setPageUrl] = useState('');
    const [isMultiLang, setIsMultiLang] = useState(true);
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

        if(pathnameArr.length === 4) {
            setIsMultiLang(false);
        } else {
            setIsMultiLang(true);
        }

        setPageUrl(activePageUrl);
    }

    return(
        isMultiLang && (
            <React.Fragment>
                <NavLink 
                    to={`/gb/${pageUrl}`}
                    onClick={props.clicked} 
                    className={props.classes}
                    activeClassName="bg-gray-900">
                        GB
                </NavLink>
                <NavLink 
                    to={`/us/${pageUrl}`}
                    onClick={props.clicked} 
                    className={props.classes}
                    activeClassName="bg-gray-900">
                        US
                </NavLink>
            </React.Fragment>
        )
    );
};

export default LanguageSwitcher;