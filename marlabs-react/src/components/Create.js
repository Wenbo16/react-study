import React, { Component } from 'react';
import serializeForm from 'form-serialize';

// install form-serialize
class Create extends Component {
	createUser = (event) => {
		event.preventDefault(); // 当点击提交按钮时阻止对表单的提交
		// console.log('Create user fn called !!!');
		console.log(event.target); // <form> ... </form>
		console.log(serializeForm(event.target)); // username=sss&location=pa
		console.log(serializeForm(event.target, {hash:true})); // {username: "wfeng", location: "pa"}
		this.props.onCreateUser(serializeForm(event.target, {hash:true}));
		// console.log(this.props.history);
		this.props.history.push('/list');
	}

	render(){
		return <div>
			<h1>Create component loaded!!!</h1>
			<form onSubmit={this.createUser}>
				{/*<input ref={(input)=>this.username = input} type="text" placeholder="username"/><br/><br/>
				<input ref={(input)=>this.location = input} type="text" placeholder="Location"/><br/><br/>*/}
				<input name="username" type="text" placeholder="username"/><br/><br/>
				<input name="location" type="text" placeholder="Location"/><br/><br/>
				<button type="submit">Create</button>
			</form>
		</div>
	}
}

export default Create