import React, { useState, useEffect } from 'react';

import NewsItem from '../../components/NewsItem/NewsItem';

const TopNews = (props) => {
    const [news, setNews] = useState([]);
    const activeLang = props.activeLang;

    useEffect(() => {
        // Component mounted
        if (activeLang) {
            getNews(activeLang);
        }
    }, [activeLang]);

    const getNews = async (lang) => {
        try {
            // Get news from endpoint
            const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${lang}&apiKey=2d54fd7673fa427186ec6c9301c0745a`);
            const data = await res.json();

            setNews([...data.articles]);

            if (!res.ok) {
                throw Error(res.statusText);
            } 
        } catch (error) {
            console.log(error);
        }
    }

    const articleSelectedHandler = (id) => {
        props.history.push({ 
            pathname: `/${activeLang}/top-new/${id}`,
            state: news[id]
        });
    }

    return (
        <section>
            <h1>Top News From {activeLang === 'gb' ? 'Great Britan' : 'United States' }</h1>
            {news.map((newsItem, index) => 
                <NewsItem
                    key={index}
                    title={newsItem.title}
                    image={newsItem.urlToImage}
                    description={newsItem.description}
                    clicked={() => articleSelectedHandler(index)}
                />
            )}
        </section>
    )
}

export default TopNews;