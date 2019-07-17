import React, { Component } from 'react';

import Nav from './components/Nav';
import PostContainer from './redux/containers/PostContainer';


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <PostContainer />
      </div>
    );
  }
}

export default App;
