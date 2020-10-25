import React, { useState, useEffect } from 'react';
import ApiService from '../../services/ApiService';

import NewsItem from '../../components/NewsItem/NewsItem';

const TopNews = (props) => {
    const [news, setNews] = useState([]);
    const [isHavingResults, setIsHavingResults] = useState(true);
    const activeLang = props.activeLang;
    const category = props.location.state;

    useEffect(() => {
        // Component mounted
        if (activeLang || category) {
            getNews(activeLang, category);
        }
    }, [activeLang, category]);

    const getNews = async (lang, category) => {
        try {
            let res;

            if (category) {
                res = await ApiService.getAllTopNewsByCat(lang, category);
            } else {
                res = await ApiService.getTopNews(lang);
            }

            const data = await res.json();
            
            if(data) {
                setIsHavingResults(false);
                setNews([...data.articles]);
            } else {
                setIsHavingResults(true);
            }

            if (!res.ok) {
                throw Error(res.statusText);
            } 
        } catch (error) {
            console.log(error);
        }
    }

    const articleSelectedHandler = (id, category) => {
        if (category) {
            props.history.push({ 
                pathname: `/${activeLang}/${category}/${id}`,
                state: news[id]
            });
        } else {
            props.history.push({ 
                pathname: `/${activeLang}/news/${id}`,
                state: news[id]
            });
        }
    }

    return (
        <section>
            <h1 className="mx-4 mb-4 text-3xl font-bold">Top {category} news from {activeLang === 'gb' ? 'Great Britan' : 'United States' }</h1>
            <section className="flex flex-wrap justify-start">
                {news.map((newsItem, index) => 
                    <NewsItem
                        key={index}
                        title={newsItem.title}
                        image={newsItem.urlToImage}
                        description={newsItem.description}
                        clicked={() => articleSelectedHandler(index, category)}
                    />
                )}
                {!isHavingResults && <p className="text-gray-700 text-base mx-4 mb-4">There are no news. Please try again later.</p>}
            </section>
        </section>
    )
}

export default TopNews;