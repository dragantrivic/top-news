import React from 'react';
import { Accordion } from 'react-accessible-accordion';
 
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

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
            <h1 className="mx-4 mb-4 text-3xl font-bold">Top 5 news by categories from {activeLang === 'gb' ? 'Great Britan' : 'United States' }</h1>
            <Accordion allowZeroExpanded={true}>
                {categories.map((category, index) => 
                    <SingleCategory 
                        key={index} 
                        categoryName={category.name}
                        activeLang={activeLang}
                        navProps={props}
                    />
                )}
            </Accordion>
        </section>
    );
}

export default AllCategories;