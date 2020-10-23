import React, { useState, useEffect } from 'react';

import NewsItem from '../../components/NewsItem/NewsItem';

const SingleCategory = (props) => { 
    const [topNews, setTopNews] = useState([]);
    const category = props.categoryName;
    const navProps = props.navProps;

    // console.log('props', props);

    useEffect(() => {
        getTopNewsByCategory(category);
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const getTopNewsByCategory = async (category) => {
        try {
            const res = await fetch(`https://newsapi.org/v2/top-headlines?country=gb&pageSize=5&category=${category}&apiKey=59190f37d9f241a28a044c7042722e6d`);
            const data = await res.json();

            // console.log(data.articles);

            setTopNews([...data.articles]);

            if (!res.ok) {
                throw Error(res.statusText);
            } 
        } catch (error) {
            console.log(error);
        }
    }

    const articleSelectedHandler = (id) => {
        navProps.history.push({ 
            pathname: `/${category}/${id}`,
            state: topNews[id]
        });
    }

    return (
        <section>
            <h2>{category}</h2>
            {topNews.map((newsItem, index) => 
                <NewsItem
                    key={index}
                    title={newsItem.title}
                    image={newsItem.urlToImage}
                    description={newsItem.description}
                    clicked={() => articleSelectedHandler(index)}
                />
            )}
        </section>
    );
};

export default SingleCategory;