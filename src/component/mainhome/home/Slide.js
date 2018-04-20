import React, { Component } from 'react';
import Swiper from 'swiper'

class Slide extends Component {
  render() {
    return (
      <div className="sliderWrap">
		<div className="slider">
			<div className="swiper-container">
			    <div className="swiper-wrapper">
			        <div className="swiper-slide"><img src={'https://i.h2.pdim.gs/8f4a18a2b0e397abc80fbe1c2f49b898/w750/h375.webp'} alt="" /></div>
			        <div className="swiper-slide"><img src={'https://i.h2.pdim.gs/d7f626292598308e0828b29c92762e92.webp'} alt="" /></div>
			        <div className="swiper-slide"><img src={'https://i.h2.pdim.gs/a3317f4cfe59181b84e3ce189fc0c3e3.webp'} alt="" /></div>
	
			    </div>
			    <div className="swiper-pagination"></div>
			    
			</div>	
		</div>
      </div>
    );
  }
  componentDidMount(){
  	new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    autoplay:true,
		    // 如果需要分页器
		    pagination: {
		      el: '.swiper-pagination',
		    } 
		})  
  }
}

export default Slide;
