import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { remove_user } from '../actions/removeUser';
import { fetch_users } from '../actions/users';

class List extends Component {

    componentDidMount(){
        console.log(this.props);
        this.props.dispatch(fetch_users());
    }

    removeUser = (user) => {
        this.props.dispatch(remove_user(user));
    }

    render() {
        const users = this.props.users;
        // console.log(this.props);
        return <ul>
            {
                users && users.map((user, index) => {
                    return <li key={index}>
                        {user.username} {user.location} 
                        <button onClick={()=> this.removeUser(user)}>Remove</button>
                        <Link to={"/view/"+index}>View</Link>
                    </li>
                })
            }
        </ul>
    }
}

// function mapStateToProps({users, products}){}
// mapStateToProps会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。
function mapStateToProps(state){
    return {
        users : state.users.users
    }
}

export default connect(mapStateToProps)(List);

// export default List;
