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
        lang: props.location.pathname.split('/')[1]
    }

    return (
        <section>
            <h1>{data.title}</h1>
            <img src={data.image} alt={data.title} />
            <p>{data.content}</p>
            <Link to={`/${data.lang}`}>Back to list</Link>
        </section>
    );
}

export default FullArticle;