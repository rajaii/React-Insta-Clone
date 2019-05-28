import React from 'react';
import './App.css';
import dummyData from '../src/dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from '../src/components/SearchBar/SearchBar.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dummyData, 
    }
  }
 
  componentDidMount() {
    this.setState({
      data: dummyData,
      newData: {}
    })
  }

  handleSearchChange = (e) => {
    let nData = this.state.data.filter(data => data.username === e.target.value);
    this.setState({
        ...this.state.data,
        newData: nData
})
   }

   handleSearch(e) {//set state to be obj with [data, newData] only if can filter to a username
    e.preventDefault();
    this.setState({
        data: ['', this.state.newData],
        newData: {}
    })
}

  render() {
    
    return (
      <div>
        <SearchBar data={this.state.data} newData={this.state.newData} handleChange={this.handleChange} handleSearch={this.handleSearch} />
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
      
    )
  }
}



export default App;
