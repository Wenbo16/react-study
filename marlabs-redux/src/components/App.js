import React, { Component } from 'react';
import List from './List';
import Create from './Create';
import Home from './Home';
import View from './View';
import { Link, Route } from 'react-router-dom';
// import { add_user } from '../actions/users';
import { view_user } from '../actions/viewUser';

class App extends Component {
  
	state = {
		users_data : null,
		currUser: null
	};

	// componentDidMount() {
	// 	this.setState({
	// 	  	users_data : this.props.store.getState().users
	// 	});

	// 	// Collects the new state and then passes the updated state
	// 	// along to all of the views under it to render.
	// 	this.props.store.subscribe(() => {
	// 	  	this.setState({
	// 			users_data : this.props.store.getState().users
	// 	  	});
	// 	});
	// }

	
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
					return <List history={history} />
			  	}} />
				<Route path="/create" render={({history}) => {
					return <Create history={history} />
					// return <Create store={this.props.store} history={history} />
			  	}} />
			  	<Route path="/view/:id" render={(props)=>
					<View {...props} getOneUser={this.getOneUser} currUser={this.state.currUser}/> 
				} />
			</div>
		  </div>
		);
	}
}

export default App;
