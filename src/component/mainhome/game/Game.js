import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import $ from 'jquery'

class Game extends Component {
	constructor(props){
		super(props);
		this.state={
			"res":[],
			"listAll":[],
			"list":[]
		}
		console.log(this.props)
	}
	finddata(key,key2){
		console.log(key)
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
		
		this.refs.flist.innerHTML = key2;
		var temarr = [];	
		for(var i=0;i<this.state.listAll.length;i++){
			temarr.push(this.state.listAll[i]);
		}
		
		for(var i=0;i<temarr.length;i++){
			if(key === temarr[i].ename){
				temarr.splice(i,1);	
				
			}
		}
		var boxarr = [];
		for(var j=0;j<3;j++){
			boxarr.push(temarr[j]);	
		}
		this.setState({
			"list":boxarr
		});
				
		
	}
	
  render() {
    return (
      <div>
				<ul className="gameList">
					<li className="active" ref="flist">{this.props.match.params.cname}</li>
					{
					this.state.list.map((val,ind) => (
						<li onClick={this.finddata.bind(this,val.ename,val.cname)} key={ind}>{val.cname}</li>
					))
					}
					
					<li><Link to="/gamekinds"><img src={'https://i.h2.pdim.gs/695ff30ecdc843f58a1e7b9d53783144.png'} alt=""/></Link></li>
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
  componentDidMount(){
		
		$.ajax({
			type:"get",
			url:"https://api.m.panda.tv/index.php?method=category.list&type=game",
			async:true,
			dataType:'jsonp',
			success:function(data){
				this.setState({
					"listAll":data.data
				})
				var boxarr2 = [];
				for(var j=1;j<4;j++){
					boxarr2.push(data.data[j]);	
				}
				console.log(boxarr2)
				this.setState({
					"list":boxarr2
				});
			}.bind(this)
		});	
		
		$.ajax({
			type:"get",
			url:"https://api.m.panda.tv/ajax_get_live_list_by_cate?pageno=1&pagenum=10&__plat=h5&cate="+this.props.match.params.ename,
			async:true,
			dataType:'jsonp',
			success:function(data){				
				var arr = data.data.items;
				this.setState({
					"res":arr
				})
				this.finddata(this.props.match.params.ename,this.props.match.params.cname);
			}.bind(this)
		});
	}
  
}

export default Game;
