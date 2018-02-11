import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Body from './components/Body/Body';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Body />
        </Layout>
      </div>
    );
  }
}

export default App;
