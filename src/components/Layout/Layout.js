import React from 'react';

import Header from '../Header/Header';

const Layout = (props) => (
    <React.Fragment>
        <Header />
        <main>
            {props.children}
        </main>
    </React.Fragment>
);

export default Layout;