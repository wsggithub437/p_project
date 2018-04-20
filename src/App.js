import React, { Component } from 'react';
import {HashRouter,Route} from 'react-router-dom'
import './App.css';
import Mainhome from './component/mainhome/Mainhome'
import Gamekinds from './component/gamekinds/Gamekinds'
import Vedioplay from './component/vedioplay/Vedioplay'
class App extends Component {
  render() {
    return (
      <div className="App">
				<HashRouter>
					<div>
						<Route exact path="/" component={Mainhome}></Route>
						<Route path="/mainhome" component={Mainhome}></Route>
						<Route path="/gamekinds" component={Gamekinds}></Route>
						<Route path="/vedioplay/:id" component={Vedioplay}></Route>
					</div>
				</HashRouter>
      </div>
    );
  }
}

export default App;
