import React, { useState, useEffect} from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navigation = (props) => {
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
        <React.Fragment>
            <NavLink 
                exact 
                to={'/' + lang}
                onClick={props.clicked}
                className={props.classes}
                activeClassName="bg-gray-900">
                    Top News
            </NavLink>
            <NavLink 
                to={'/' + lang + '/categories'}
                onClick={props.clicked} 
                className={props.classes}
                activeClassName="bg-gray-900">
                    Categories
            </NavLink>
            <NavLink 
                to={'/' + lang + '/search'}
                onClick={props.clicked}
                className={props.classes}
                activeClassName="bg-gray-900">
                    Search
            </NavLink>
        </React.Fragment>
    );
};

export default Navigation;