import React from 'react';

const newsItemStyle = {
    border: '1px solid #ccc', 
    marginTop: '16px'
}

const NewsItem = (props) => {
    const data = {
        title: props.title,
        image: props.image,
        desc: props.description
    }

    return (
        <div style={newsItemStyle}>
            <h2>{data.title}</h2>
            <img src={data.image} alt="" />
            <p>{data.desc}</p>
            <a href="http://google.com">More</a>
        </div>
    );
}

export default NewsItem;