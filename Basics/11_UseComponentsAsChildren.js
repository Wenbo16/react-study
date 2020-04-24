import React from 'react'
class App extends React.Component {
	constructor(props) {
		super();
		this.state = {
			txt: ' this is the state text'
		}
	}

	update(e){
		this.setState({txt: e.target.value})
	}

	render(){
		return (
			<div>
				<h1>{this.state.txt}</h1>
				<Wiget update={this.update.bind(this)}/>
				<Wiget update={this.update.bind(this)}/>
				<Wiget update={this.update.bind(this)}/>
			</div>
		)
	}
}

// stateless function
const Wiget = (props) => 
	<input type="text" onChange={props.update}/>

export default App