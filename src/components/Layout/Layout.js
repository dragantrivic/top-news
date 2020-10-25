import React from 'react';

import Header from '../Header/Header';

const Layout = (props) => (
    <div className="bg-gray-200 min-h-screen">
        <Header />
        <main className="container mx-auto px-4 pt-24 pb-16">
            {props.children}
        </main>
    </div>
);

export default Layout;