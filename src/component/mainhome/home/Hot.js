import React, { Component } from 'react';
import $ from 'jquery'
import {Link} from 'react-router-dom'
class Hot extends Component {
	constructor(){
	super();
	this.state={
		"res":[]
	}
}
componentDidMount(){
	$.ajax({
		type:"get",
		url:"https://api.m.panda.tv/ajax_get_live_list_by_multicate?hotroom=1&__plat=h5",
		async:true,
		dataType:'jsonp',
		success:function(data){

			var arr = data.data[0].items;
			this.setState({
				"res":arr
			})
			console.log(this.state.res)
		}.bind(this)
	});
}
  render() {
    return (
      <div className="column">
				<div className="title">
					<div className="titline"></div>
					<h3>热门</h3>
					<div className="titline"></div>
				</div>
				<ul className="vlist clearfix">
				{
				this.state.res.map((val,ind) => (
					<li key={ind}>
						<div className="vedio">
							<Link to={"/vedioplay/" + val.id}><img src={val.pictures.img} alt=""/></Link>
							
							<div className="vedioDes">{val.name}</div>
							<div className="hotTag"><span>{val.classification.cname}</span></div>
						</div>
						<div className="vedioName">{val.userinfo.nickName}<span>{val.person_num}</span></div>
					</li>
				))
				}

				</ul>
      </div>
    );
  }
}

export default Hot;
