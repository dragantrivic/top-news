import React, { useState, useEffect } from 'react';

import NewsItem from '../../components/NewsItem/NewsItem';

const SingleCategory = (props) => { 
    const [topNews, setTopNews] = useState([]);
    const category = props.categoryName;
    const navProps = props.navProps;
    const activeLang = props.activeLang;

    useEffect(() => {
        if (activeLang) {
            getTopNewsByCategory(activeLang, category);
        }
    }, [activeLang]) // eslint-disable-line react-hooks/exhaustive-deps

    const getTopNewsByCategory = async (lang, category) => {
        try {
            const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${lang}&pageSize=5&category=${category}&apiKey=2d54fd7673fa427186ec6c9301c0745a`);
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
            pathname: `/${activeLang}/${category}/${id}`,
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