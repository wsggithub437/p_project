import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import $ from 'jquery'

class Happy extends Component {
		constructor(){
		super();
		this.state={
			"res":[]
		}
	}
	exgame(event){
		$(".gameList").find("li").removeClass("active");
		if(event.target.nodeName === "LI" && event.target) {
			event.target.className = "active"
		}
	}
	finddata(key){
		$.ajax({
			type:"get",
			url:"https://api.m.panda.tv/ajax_get_live_list_by_cate?pageno=1&pagenum=10&__plat=h5&cate="+key,
			async:true,
			dataType:'jsonp',
			success:function(data){				
				var arr = data.data.items;
				this.setState({
					"res":arr
				})
			}.bind(this)
		});
	}
		componentDidMount(){
		$.ajax({
			type:"get",
			url:"https://api.m.panda.tv/ajax_get_live_list_by_cate?pageno=1&pagenum=10&__plat=h5&cate=yzdr",
			async:true,
			dataType:'jsonp',
			success:function(data){				
				var arr = data.data.items;
				this.setState({
					"res":arr
				})
			}.bind(this)
		});
	}
  render() {
    return (
      <div>
				<ul className="gameList" onClick={this.exgame}>
					<li className="active" onClick={this.finddata.bind(this,"yzdr")}>熊猫新秀</li>
					<li onClick={this.finddata.bind(this,"acg")}>二次元</li>
					<li onClick={this.finddata.bind(this,"star")}>艺能达人</li>
				</ul>
				<ul className="vlist clearfix">
				
				
				{
					this.state.res.map((value,index) => (
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
      </div>
    );
  }
}

export default Happy;
