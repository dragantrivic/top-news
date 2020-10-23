import React from 'react';

import Navigation from './Navigation/Navigation.js';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher.js';

const Header = () => (
    <header>
        <Navigation />
        <LanguageSwitcher />
    </header>
);

export default Header;