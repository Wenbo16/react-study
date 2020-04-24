import React, { Component } from 'react';
import View from './View';
import {Link, Route} from 'react-router-dom';

class List extends Component {

	removeUser = (user, event) => {
		this.props.onRemoveUser(user, event);
	}

  	render() {
  		// var elem = React.createElement('ul', null, 
		// 	React.createElement('li', null, 'User1'),
		// 	React.createElement('li', null, 'User2'),
		// 	React.createElement('li', null, 'User3'),
		// 	React.createElement('li', null, 'User4'),
		// 	React.createElement('li', null, 'User5')
		// );

  		const elem2 = 
  		<ul>
  			<li> User 6</li>
  			<li> User 7</li>
  			<li> User 8</li>
  		</ul>

  		// const users = [
  		// 	{username : 'User 1', location : 'Location 1'},
  		// 	{username : 'User 2', location : 'Location 2'},
  		// 	{username : 'User 3', location : 'Location 3'},
  		// 	{username : 'User 4', location : 'Location 4'},
  		// ];

		// return <div>{elem} {elem2}</div>

  		const users = this.props.users;
		return <div>
		<ul>
			{ // expression
				users.map((user, index) => {
					return <li key={index}>
						{user.username} {user.location}
						<button onClick={() => this.removeUser(user)}>Remove</button>
						{/*<button onClick={this.props.onRemoveUser.bind(this, user)}>Remove</button>
							`this` is diffirent from this.props.users, cuz it's a event handler*/}
						{/* <button onClick={this.removeUser.bind(this, user)}>Remove</button> */}
						<Link to={"/view/" + index}> View </Link>
					</li>
				})
			}
		</ul>
		{/*<Route path="/view/:id" component={View} />*/}
		</div>
  	}
}

export default List;
