import React, { useState, useEffect } from 'react';
import useDebounce from './use-debounce';

import NewsItem from '../../components/NewsItem/NewsItem';

const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [isHavingResults, setIsHavingResults] = useState(true);
    const activeLang = props.activeLang;

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    useEffect(() => {
        if (debouncedSearchTerm && activeLang) {
            setIsSearching(true);
            
            (async () => {
                const results = await searchCharacters(debouncedSearchTerm, activeLang);
                setIsSearching(false);
                setResults(results);

                if(results.length === 0) {
                    setIsHavingResults(false);
                } else {
                    setIsHavingResults(true);
                }
            })();
            
        } else {
            setResults([]);
        }
    }, [debouncedSearchTerm, activeLang])

    const searchCharacters = async (search, lang) => {
        try {
            const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${lang}&q=${search}&apiKey=2d54fd7673fa427186ec6c9301c0745a`);
            const data = await res.json();

            if (!res.ok) {
                throw Error(res.statusText);
            }
            
            return data.articles;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    const articleSelectedHandler = (id) => {
        props.history.push({ 
            pathname: `/${activeLang}/top-new/${id}`,
            state: results[id]
        });
    }

    return (
        <section>
            <h1>Search top news in {activeLang === 'gb' ? 'Great Britan' : 'United States' }</h1>
            <input type="text"
                onChange={handleChange}
                value={searchTerm}
                placeholder="Search term" />
            <section>
                {isSearching && <p>Searching ...</p>}
                {!isHavingResults && <p>No results found, try searching with differnet term.</p>}
                {results.map((result, index) => (
                    <NewsItem
                        key={index}
                        title={result.title}
                        image={result.urlToImage}
                        description={result.description}
                        clicked={() => articleSelectedHandler(index)}
                    />
                ))}
            </section>
        </section>
    );
};

export default Search;