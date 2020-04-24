import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';


class View extends Component {
	componentDidMount(){
		this.props.getOneUser(this.props.match.params.id);
	}

	render(){
		return <div>
			<h1>View Component loaded!!</h1>
			<p>{this.props.currUser.username}</p>
			<p>{this.props.currUser.location}</p>
			<p></p>
		</div>
	}
}

export default View