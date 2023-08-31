import React, { Component } from 'react';
import List from './List';
import Create from './Create';
import Home from './Home';
import Chart from './Chart';

import View from './View';
import {Link, Route, Switch} from 'react-router-dom';

class App extends Component {
	state = {
		users_data : [
			{username : 'User 3', location : 'Location 3'},
			{username : 'User 4', location : 'Location 4'}
		],
		currUser : {}
	}

	// this.setState({})

	// Because this.props and this.state may be updated asynchronously, 
	// you should not rely on their values for calculating the next state.
	
	// this.setState((prevState, props) => ({
	//   	counter: prevState.counter + props.increment
	// }));


	removeUserParentFn = (user, event) => {
		// console.log(event.target.value);
		this.setState((state) => {
			return {
				users_data : state.users_data.filter(item => item.username !== user.username)
			}
		})
	}

	createUser = (user) => {
		// console.log(event.target.value);
		this.setState((state) => {
			return {
				users_data : this.state.users_data.concat(user)
			}
		});
	}


	getOneUser = (id) => {
		this.setState({currUser : this.state.users_data[id]})
	}

  	render() {
  		// React.createElement('div', options:null, content)
  		const elem = React.createElement('div', {style:{'color':'white', 'backgroundColor':'gray'}}, 'This is a container element')
		
		return (
			<div>
				<div>
					<Link to="/home">Home</Link>
					<Link to="/list">List</Link>
					<Link to="/create">Create</Link>
				</div>
				<div>
					{/*<Switch>*/}
						{/*If you only want to match '/home', then you need to use
						the "exact" prop. The following will match '/home', and
						'/home/2'.*/}
						<Route path="/home" component = {Home} />
						<Route path="/chart" component = {Chart} />
						<Route path="/list" render ={({history})=>{
							console.log(history);
							return <List users= {this.state.users_data} history={history} onRemoveUser= {this.removeUserParentFn}/>
						}} />
						
						<Route path="/create" render = {({history})=>{
							return <Create history = {history} onCreateUser={this.createUser} />
						}} />

						{/*If you use render, you have to send the props manually.*/}
						{/*will generate a params object:
						{ number: '6' } // note that the captured value is a string*/}
						<Route path="/view/:id" render = {(props)=>
							<View {...props} getOneUser={this.getOneUser} currUser={this.state.currUser}/> 
						} />
					{/*</Switch>*/}
				</div>

				{elem}
	 			{/*<List users={[
	 				{username : 'User 1', location : 'Location 1'},
	 				{username : 'User 2', location : 'Location 2'}
	 			]} />*/}
	 			{/*<List users= {this.state.users_data} onRemoveUser= {this.removeUserParentFn}/>
	 			<Create onCreateUser={this.createUser}></Create>
	 			<Home />*/}
			</div>
		);
  	}
}

export default App;
