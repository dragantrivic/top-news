import React from 'react';

const NewsItem = (props) => {
    const data = {
        title: props.title,
        image: props.image,
        desc: props.description,
        clicked: props.clicked
    }

    const divStyle = {
        ...props.divStyle
    }

    const divInnerStyle = {
        ...props.divInnerStyle
    }

    const imgStyle = {
        ...props.imgStyle
    }

    return (
        <div style={divStyle} className="lg:max-w-full lg:w-1/2 xl:w-1/3 mb-8 px-4">
            <div style={divInnerStyle} className="rounded overflow-hidden shadow-lg">
                <img style={imgStyle} className="w-full" src={data.image} alt={data.title} />
                <div className="px-6 py-4">
                    <h2 className="font-bold text-xl mb-2">{data.title}</h2>
                    <p className="text-gray-700 text-base">{data.desc}</p>
                    <button 
                        className="text-indigo-600 hover:text-indigo-900 mt-4 inline-flex items-center" 
                        type="button" 
                        onClick={props.clicked}
                    >
                        Read More
                        <svg className="fill-current w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;