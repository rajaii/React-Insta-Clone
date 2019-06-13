import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';


const DivFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: lightblue;
    `

const ButtonHolder = styled.div`
width: 200px;
`

const ImgFlex =  styled.img`
    margin-top: 6px;
    margin-right: 10px;
`
const SuperP = styled.p`
font-size: 1.5rem;
`
const SuperP2 = styled.p`
    margin-left: 10px; 
    font-family: cursive;
    font-size: 1.5rem;
`

const LeftFlex = styled.div`
    width: 140px;
    display: flex;
    justify-content: space-between;
`


class SearchBar extends React.Component {
    /*constructor(props) {
          super(props);
          this.state = {
          data: this.props.data,
          newData: this.props.newData
        
    }}*/

    

    

    render() {

    return (
        <div className='search'>
            <DivFlex>
                <ImgFlex src='./instagram-logo.png'/>
                <SuperP> | </SuperP>
                <SuperP2>AliGram LOL</SuperP2>
            </DivFlex>
            <ButtonHolder>
                <form onSubmit={this.props.handleSearch}>
                    <input 
                        type='text'
                        placeholder='Search'
                        value={this.props.newData.username}
                        onChange={this.props.handleSearchChange}
                    />
                </form>
            </ButtonHolder>
            <LeftFlex>
                <img src='./compass-circular-variant.png' />
                <img src={'./like.png'}/>
                <img src='./profile.png' />
            </LeftFlex>
        </div>
    );
}}

export default SearchBar;