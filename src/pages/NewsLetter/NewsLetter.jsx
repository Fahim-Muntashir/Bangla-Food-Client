import React from 'react';
import './News.css';
const NewsLetter = () => {
    return (
        <div className='subscribe'>
            <h1>SUBSCRIBE FOR OUR NEWSLETTER</h1>
            <div className='divs'>
                <input type="email" placeholder='example@email.com'/>
                <button>Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLetter;