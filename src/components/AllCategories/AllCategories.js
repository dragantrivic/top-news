import React from 'react';

import SingleCategory from '../../containers/SingleCategory/SingleCategory';

const AllCategories = (props) => {
    // Entertainment, General, Health, Science, Sport, Technology
    const categories = [
        { name: 'entertainment' },
        { name: 'general' },
        { name: 'health' },
        { name: 'science' },
        { name: 'sport' },
        { name: 'technology' }
    ];

    const activeLang = props.activeLang;

    return (
        <section>
            <h1>Top 5 news by categories from {activeLang === 'gb' ? 'Great Britan' : 'United States' }</h1>
            {categories.map((category, index) => 
                <SingleCategory 
                    key={index} 
                    categoryName={category.name}
                    activeLang={activeLang}
                    navProps={props}
                />
            )}
        </section>
    );
}

export default AllCategories;