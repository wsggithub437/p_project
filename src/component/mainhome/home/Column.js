import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import $ from 'jquery'

class Column extends Component {
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
			var arr = data.data;
			var newarr = [];
			for(var i=1;i<arr.length;i++){
				newarr.push(arr[i]);
			}
			this.setState({
				"res":newarr
			})	
			console.log(this.state.res);
		}.bind(this)
	});
}
  render() {
    return (
    	<div>
    	{
	    this.state.res.map((data,i) => (
	      <div className="column" key={i}>
				<div className="title">
					<div className="titline"></div>
					<h3>{data.type.cname}</h3>
					<div className="titline"></div>
				</div>
				<ul className="vlist clearfix">
					{
					
					data.items.map((value,index) => (
						<li key={index}>
							<div className="vedio">
								<Link to={"/vedioplay/" + value.id}><img src={value.pictures.img} alt=""/></Link>
								<div className="vedioDes">{value.name}</div>
							</div>
							<div className="vedioName">{value.userinfo.nickName}<span>{value.person_num}</span></div>
						</li>
						
					))
					
				}
				</ul>
				<div className="more">查看全部{data.total}个直播</div>
	      </div>
	     ))
	    }
    	</div>
    );
  }
}

export default Column;
