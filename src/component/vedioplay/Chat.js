import React, { Component } from 'react';



class Chat extends Component {

  render() {
    return (
		<div>
			<div className="chatArea"></div>
			<div className="inputArea">
				<span></span>
				<input type="text" placeholder="请输入内容"/><span></span>
				<span></span>
			</div>
		</div>
	
    );
  }
  
}

export default Chat;
