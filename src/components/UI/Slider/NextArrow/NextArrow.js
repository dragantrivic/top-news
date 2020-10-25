import React from 'react';

const NextArrow = (props) => {
    const { onClick } = props;

    const style = {
        display: 'block',
        position: 'absolute',
        right: '-12px',
        fontSize: '0',
        lineHeight: '0',
        top: '50%',
        width: '48px',
        height: '48px',
        borderRadius: '24px',
        boxShadow: 'rgba(0, 0, 0, 0.14) 0px 1px 1px 1px',
        background: '#fff',
        zIndex: '1',
        WebkitTransform: 'translate(0,-50%)',
        MsTransform: 'translate(0,-50%)',
        transform: 'translate(0,-50%)',
        cursor: 'pointer',
        border: 'none',
        outline: '0'
    }

    return (
        <div
            style={style}
            onClick={onClick}>
                <svg className="w-6 h-6 mx-auto mt-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
        </div>
    );
}

export default NextArrow;