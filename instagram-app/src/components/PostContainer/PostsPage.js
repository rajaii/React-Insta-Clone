import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from '../../../src/dummy-data';

class PostsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: dummyData, 
            newData: '',
          }
        }
    
  
 

handleSearchChange = (e) => {
    e.preventDefault();
    this.setState({
        newData: e.target.value
    })

}
handleSearch = (e) => {
    e.preventDefault();
    let nData = this.state.data.filter(data => data.username === e.target.value ? data: null);
    this.setState({
        data: nData,
        newData: ''
})
   }
      
        
       
    componentDidMount() {
          this.setState({
            data: dummyData,
            newData: {}
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

