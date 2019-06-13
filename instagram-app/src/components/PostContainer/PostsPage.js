import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from '../../../src/dummy-data';

class PostsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: dummyData, 
            newData: {
                username: '',
            },
          }
        }
    
  
 

handleSearchChange = (e) => {
    e.preventDefault();
    this.setState({
        data: dummyData,
        newData: {
            username: e.target.value,

        }
    })
//is d.username === new username
}
handleSearch = (e) => {
    e.preventDefault();
    let nData = this.state.data.filter(data => { 
        return data.username.includes(this.state.newData.username);
    });
    console.log(nData)
    this.setState({
        data: nData,
        newData: {
            username: ''
        }
})
   }
      
        
       
    
    

    render() {
        return (
        <div>
            <div>
                <SearchBar data={this.state.data} newData={this.state.newData} handleSearch={this.handleSearch} handleSearchChange={this.handleSearchChange} />
            </div>
            <div>
            {this.state.data.map(d => {
                return (
                <div>
                    <PostContainer key={d.id} data={d} />
                </div>
                );
            })}
            </div>
        </div>
    );
}}



export default PostsPage;

