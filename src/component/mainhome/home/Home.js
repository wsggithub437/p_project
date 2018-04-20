import React, { Component } from 'react';
import Slide from './Slide'
import Hot from './Hot'
import Column from './Column'
import Foot from './Foot'

class Home extends Component {
  render() {
    return (
      <div>
				<Slide/>
				<Hot/>
				<Column/>
				<Foot/>
      </div>
    );
  }
}

export default Home;
