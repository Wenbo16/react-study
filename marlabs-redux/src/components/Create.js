import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import { add_user } from '../actions/users';
import { connect } from 'react-redux'

class Create extends Component {
    componentDidMount(){
        console.log(this.props);
    }


    createUser = (event) => {
        event.preventDefault();
        // this.props.onCreateUser(serializeForm(event.target, {hash:true}));
        this.props.dispatch(add_user(serializeForm(event.target, {hash:true})));
        this.props.history.push('/list');
    }


    render() {
        return <div>
            <h1>Create component loaded!!!</h1>
            <form onSubmit={this.createUser}>
                <input type="text" name="username" placeholder="Username" /><br /><br />
                <input type="text" name="location" placeholder="Location" /><br /><br />
                <button type="submit">Create</button>
            </form>
        </div>
    }
}


function mapStateToProps({users}){
    return {
        users : users.users
    }
}
export default connect(mapStateToProps)(Create);
