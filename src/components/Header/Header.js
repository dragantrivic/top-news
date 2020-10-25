import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Navigation from './Navigation/Navigation.js';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher.js';
import logo from '../../assets/imgs/logo.svg';

const Header = () => {
    const [isOpened, setIsOpened] = useState(false);
    
    const toggle = () => {
        setIsOpened(wasOpened => !wasOpened);
    }

    // Navigation Classes
    const navDesktopClassNames = 'px-3 py-2 rounded-md text-sm font-medium text-white focus:outline-none focus:text-white focus:bg-gray-900';
    const navMobileClassNames = 'block px-3 py-2 rounded-md text-base font-medium text-white focus:outline-none focus:text-white focus:bg-gray-900';

    return (
        <header>
            <nav className="bg-gray-800 fixed inset-x-0 top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <NavLink 
                                    exact 
                                    to="/gb">
                                        <img className="h-8 w-8" src={logo} alt="Workflow logo" />
                                </NavLink>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Navigation classes={navDesktopClassNames} />
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <div className="ml-3 relative">
                                    <LanguageSwitcher classes={navDesktopClassNames} />
                                </div>
                            </div>
                        </div>

                        <div className="-mr-2 flex md:hidden">
                            <button 
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                                onClick={toggle}
                            >
                                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg className="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                
                {isOpened && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Navigation 
                                classes={navMobileClassNames}
                                clicked={() => toggle()}
                            />
                            <div className="flex justify-start pt-12 pb-3">
                                <LanguageSwitcher 
                                    classes={navMobileClassNames}
                                    clicked={() => toggle()}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;