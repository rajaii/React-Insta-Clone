import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className='search'>
            <div className='frontFlex'>
                <img src='./instagram-logo.png'/>
                <p> | </p>
                <p className='p2'>AliGram LOL</p>
            </div>
            <div className='buttonHolder'>
                <button>Search</button>
            </div>
            <div className='leftFlex'>
                <img src='./compass-circular-variant.png' />
                <img src={'./like.png'}/>
                <img src='./profile.png' />
            </div>
        </div>
    );
}

export default SearchBar;