import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom'
import Home from './home/Home'
import Game from './game/Game'
import Happy from './happy/Happy'
import $ from 'jquery'

class Mainhome extends Component {

	exhead(event){
		$(".headList").find("a").removeClass("active");
		if(event.target.nodeName === "A" && event.target) {
			event.target.className = "active"
		}
	}
  render() {
    return (
      <div>
		<div className="homeHead">
			<div className="logo"><img src={"https://i.h2.pdim.gs/c1ce37e223711ac773cf78cd9410556a.png"} alt=""/></div>
			<ul className="headList" onClick={this.exhead}>
				<li><Link className="active" to="/mainhome/home">首页</Link></li>
				<li><Link to="/mainhome/game/lol/英雄联盟">游戏</Link></li>
				<li><Link to="/mainhome/happy">娱乐</Link></li>
			</ul>
			<div className="search"><img src={"https://i.h2.pdim.gs/a56efe5500f98bd3c763a02ff340a951.png"} alt=""/></div>
		</div>
		<Main/>
      </div>
    );
  }
  
}

class Main extends Component {
  render() {
    return (
      <div>
      		<Route exact path="/" component={Home}></Route>
			<Route path="/mainhome/home" component={Home}></Route>
	        <Route path="/mainhome/game/:ename/:cname" component={Game}></Route>
	        <Route path="/mainhome/happy" component={Happy}></Route>
      </div>
    );
  }
}
export default Mainhome;
