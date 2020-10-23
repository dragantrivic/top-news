import React from 'react';
// import { Link } from 'react-router-dom';

const newsItemStyle = {
    border: '1px solid #ccc', 
    marginTop: '16px'
}

const NewsItem = (props) => {
    const data = {
        title: props.title,
        image: props.image,
        desc: props.description,
        clicked: props.clicked
    }

    return (
        <div style={newsItemStyle}>
            <h2>{data.title}</h2>
            <img src={data.image} alt={data.title} />
            <p>{data.desc}</p>
            <button type="button" onClick={props.clicked}>More</button>
        </div>
    );
}

export default NewsItem;