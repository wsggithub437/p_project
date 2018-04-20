import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import $ from 'jquery'
class Gamekinds extends Component {
constructor(){
	super();
	this.state={
		"res":[]
	}
}
componentDidMount(){
	$.ajax({
		type:"get",
		url:"https://api.m.panda.tv/index.php?method=category.list&type=game",
		async:true,
		dataType:'jsonp',
		success:function(data){
			var arr = data.data;
			this.setState({
				"res":arr
			})	
			console.log(this.state.res);
		}.bind(this)
	});
}
  render() {
    return (
      <div>
		<div className="kindsHead">
			<Link to='/mainhome/game' className="kindsExit"><img src={'https://i.h2.pdim.gs/6cf04297e7c8972420dd2a319aabe879.png'} alt=""/></Link>
			游戏分类
		</div>
		<ul className="kindsList">
		{
			this.state.res.map((val,ind) => (
				<li key={ind}>
					<Link to={'/mainhome/game/'+val.ename+"/"+val.cname}><img src={JSON.parse(val.extra).icon} alt=""/></Link>
					<div>{val.cname}</div>
				</li>
			))
		}


		</ul>
      </div>
    );
  }
}

export default Gamekinds;
