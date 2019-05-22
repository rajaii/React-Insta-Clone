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
 

  render() {
    
    return (
      <div>
        <SearchBar />
        <div>
          {this.state.data.map(d => {
            return (
              <div key={d.id}>
                <PostContainer data={d} />
              </div>
            );
          })}
        </div>
      </div>
      
    )
  }
}



export default App;
