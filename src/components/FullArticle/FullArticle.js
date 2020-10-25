import React from 'react';
import { Link } from 'react-router-dom';

const FullArticle = (props) => {
    const state = {
        ...props.location.state
    }

    const data = {
        title: state.title,
        image: state.urlToImage,
        content: state.content,
        lang: props.location.pathname.split('/')[1],
        author: state.author,
        publishedAt: new Date(state.publishedAt).toLocaleString()
    }

    return (
        <section>
            <h1 className="mb-4 text-3xl font-bold">{data.title}</h1>
            {data.publishedAt && (
                <div>
                    <div className="inline-flex items-center mt-2 text-gray-700 text-base">
                        <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h6>{data.publishedAt}</h6>
                    </div>
                </div>
            )}
            {data.author && (
                <div>
                    <div className="inline-flex items-center mt-2 text-gray-700 text-base">
                        <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h6>{data.author}</h6>
                    </div>
                </div>
            )}
            <img className="rounded w-full mt-4" src={data.image} alt={data.title} />
            <p className="text-gray-700 text-base my-6">{data.content}</p>
            <Link className="text-indigo-600 hover:text-indigo-900 inline-flex items-center" to={`/${data.lang}`}>
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to list
            </Link>
        </section>
    );
}

export default FullArticle;