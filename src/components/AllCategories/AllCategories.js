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

    return (
        <div>
            <h1>Top 5 news by categories from GB:</h1>
            {categories.map((category, index) => 
                <SingleCategory 
                    key={index} 
                    categoryName={category.name}
                    navProps={props}
                />
            )}
        </div>
    );
}

export default AllCategories;