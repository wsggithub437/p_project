import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Chat from './Chat'
import Groom from './Groom'
import $ from 'jquery'
class Vedioplay extends Component {
	constructor(props){
		super(props)
		this.state={
			"id":this.props.match.params.id,
			"res":[],
			"flag":1
		}
		console.log(this.props.match.params.id)
	}
	componentDidMount(){
		$.ajax({
			type:"get",
			url:"https://room.api.m.panda.tv/index.php?callback=jQuery112409635895076665502_1523186948555&method=room.shareapi&roomid="+this.state.id,
			async:true,
			dataType:'jsonp',
			success:function(data){
				console.log(data);
				var arr = [];
				arr.push(data.data);
				this.setState({
					"res":arr
				})
				console.log(this.state.res);

			}.bind(this)
		});
	}
	excolor(x){
		var tem = !x;	
		this.setState({
			"flag":tem
		});
	}
  render() {
    return (
      <div>
		<div className="playhead">
			<div className="logo"><img src={"https://i.h2.pdim.gs/c1ce37e223711ac773cf78cd9410556a.png"} alt=""/></div>
			<Link className="return" to="/">返回</Link>
		</div>
		{
		this.state.res.map((val,ind) => (
			<div className="play" key={ind}>
				<video src={val.videoinfo.address} controls width="100%" height="auto" poster={val.roominfo.pictures.img}></video>
				
				<div className="detail">
					<p>{val.roominfo.name}</p>
					<p>{val.hostinfo.name}</p>
					<p>人气:{val.roominfo.person_num}</p>
				</div>
				<div className="detail2">
					<div className="detailLeft">
						<p>{val.hostinfo.name}</p>
						<p>{val.roominfo.name}</p>
					</div>
					<div className="detailRight">
						<p>房间号:{this.state.id}</p>
						<p>人气:{val.roominfo.person_num}</p>
					</div>
				</div>
			</div>
			))
		}
		
		<div className="chatList">
			<div className={ this.state.flag ? "active" : "" } onClick={this.excolor.bind(this,0)}>聊天</div>
			<div className={ this.state.flag ? "" : "active" } onClick={this.excolor.bind(this,1)}>精彩推荐</div>
		</div>
		{this.state.flag ? <Chat/> : <Groom/>}
      </div>
    );
  }
  
}


export default Vedioplay;
