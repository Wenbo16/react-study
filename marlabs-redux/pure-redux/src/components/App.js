import React, { Component } from 'react';
import List from './List';
import Create from './Create';
import Home from './Home';
import View from './View';
import { Link, Route } from 'react-router-dom';
import { add_user } from '../actions/users';
import { view_user } from '../actions/viewUser';
import { remove_user } from '../actions/removeUser';

class App extends Component {
  
	state = {
		users_data : null,
		currUser: null
	};

	componentDidMount() {
		this.setState({
		  	users_data : this.props.store.getState().users
		});

		// Collects the new state and then passes the updated state
		// along to all of the views under it to render.
		this.props.store.subscribe(() => {
		  	this.setState({
				users_data : this.props.store.getState().users
		  	});
		});
	}

	removeUserParentFn = (user) => {
		this.props.store.dispatch(remove_user(user))
	}

	
	createUser = (user) => {
		// Design: Stores let the dispatcher know that they want to be notified whenever an action comes in.
		// The dispatcher sends the action off to the stores in sequence. 
		// Each store gets notified of all actions. 
		// Then the store decides whether it cares about this one or not, 
		// and changes the state accordingly.
		this.props.store.dispatch(add_user(user));
	}

	getOneUser = (id) => {
		this.props.store.dispatch(view_user(id));

		this.props.store.subscribe(() => {
		  	this.setState({
				currUser : this.props.store.getState().currUser
		  	});
		});
	}

	render() {
		return (
		  <div>
			<div>
			  	<Link to="/home">Home</Link> | 
			  	<Link to="/list">List</Link> | 
			  	<Link to="/create">Create</Link>
			</div>
			<div>
			  	<Route path="/home" component={Home} />
			  	<Route path="/list" render={({history}) => {
				return <List users={this.state.users_data} history={history} onRemoveUser = {this.removeUserParentFn} />
			  	}} />
				<Route path="/create" render={({history}) => {
					return <Create onCreateUser={this.createUser} history={history} />
					// return <Create store={this.props.store} history={history} />
			  	}} />
			  	<Route path="/view/:id" render = {(props)=>
					<View {...props} getOneUser={this.getOneUser} currUser={this.state.currUser}/> 
				} />
			</div>
		  </div>
		);
	}
}

export default App;
