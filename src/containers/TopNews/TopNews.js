import React, { useState, useEffect } from 'react';

import NewsItem from '../../components/NewsItem/NewsItem';

const TopNews = (props) => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        // Component mounted
        loadNews();
    }, [])

    // console.log('news', news);

    const loadNews = async () => {
        try {
            // Get news from endpoint
            const res = await fetch('https://newsapi.org/v2/top-headlines?country=gb&apiKey=59190f37d9f241a28a044c7042722e6d');
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
            pathname: '/' + id,
            state: news[id]
        });
    }

    return (
        <div>
            <h1>Top News From Great Britain</h1>
            {news.map((newsItem, index) => 
                <NewsItem
                    key={index}
                    id={index}
                    title={newsItem.title}
                    image={newsItem.urlToImage}
                    description={newsItem.description}
                    clicked={() => articleSelectedHandler(index)}
                />
            )}
        </div>
    )
}

export default TopNews;