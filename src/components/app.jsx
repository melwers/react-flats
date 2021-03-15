import React, { Component } from 'react';

import FlatList from './flat_list';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    }
  };


  render() {
    return (
      <div> 
        <FlatList />
      </div>
      <div className="map-container"> 
      </div>
    );
  }
}

export default App;