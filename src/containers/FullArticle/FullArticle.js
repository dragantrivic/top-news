import React from 'react';
import { Link } from 'react-router-dom';

const FullArticle = (props) => {
    const state = {
        ...props.location.state
    }

    const data = {
        title: state.title,
        image: state.urlToImage,
        content: state.content
    }

    // console.log(state)

    return (
        <section>
            <h1>{data.title}</h1>
            <img src={data.image} alt={data.title} />
            <p>{data.content}</p>
            <Link to="/">Back to list</Link>
        </section>
    );
}

export default FullArticle;