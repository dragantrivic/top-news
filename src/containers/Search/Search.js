import React, { useState, useEffect } from 'react';
import useDebounce from './use-debounce';
import ApiService from '../../services/ApiService';

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
            const res = await ApiService.getTopNewsByTerm(lang, search);
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
            pathname: `/${activeLang}/news/${id}`,
            state: results[id]
        });
    }

    return (
        <section>
            <h1 className="mx-4 mb-4 text-3xl font-bold">Search top news in {activeLang === 'gb' ? 'Great Britan' : 'United States' }</h1>
            
            <div className="relative mx-4 mb-4 lg:w-4/12">
                <input type="text"
                    onChange={handleChange}
                    className="w-full bg-purple-white shadow rounded border-0 p-3"
                    value={searchTerm}
                    placeholder="Search news by term" />

                <div className="absolute top-0 right-0 mt-3 mr-4 text-purple-lighter">
                    <svg version="1.1" className="h-6 text-dark" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 52.966 52.966" style={{enableBackground: 'new 0 0 52.966 52.966'}} space="preserve">
                        <path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
                        c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
                        C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
                        S32.459,40,21.983,40z"/>
                    </svg>
                </div>
            </div>

            <section className="flex flex-wrap justify-start">
                {isSearching && <p className="text-gray-700 text-base mx-4 mb-4">Searching ...</p>}
                {!isHavingResults && <p className="text-gray-700 text-base mx-4 mb-4">No results found, try searching with differnet term.</p>}
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