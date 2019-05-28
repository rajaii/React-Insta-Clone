import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
    /*constructor(props) {
          super(props);
          this.state = {
          data: this.props.data,
          newData: {}
        
    }}*/

   

    render() {

    return (
        <div className='search'>
            <div className='frontFlex'>
                <img src='./instagram-logo.png'/>
                <p> | </p>
                <p className='p2'>AliGram LOL</p>
            </div>
            <div className='buttonHolder'>
                <form onSubmit={this.props.handleSearch}>
                    <input 
                        type='text'
                        placeholder='Search'
                        value={this.props.newData.username}
                        onChange={this.props.handleSearchChange}
                    />
                </form>
            </div>
            <div className='leftFlex'>
                <img src='./compass-circular-variant.png' />
                <img src={'./like.png'}/>
                <img src='./profile.png' />
            </div>
        </div>
    );
}}

export default SearchBar;