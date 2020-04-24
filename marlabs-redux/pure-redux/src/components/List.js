import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {
    removeUser = (user) => {
        this.props.onRemoveUser(user);
    }

    render() {
        // var elem = React.createElement('ul', null, 
        //     React.createElement('li', null, 'User 1'),
        //     React.createElement('li', null, 'User 2'),
        //     React.createElement('li', null, 'User 3'),
        //     React.createElement('li', null, 'User 4'),
        //     React.createElement('li', null, 'User 5')
        // );

        // const elem2 = <ul>
        //     <li>User 6</li>
        //     <li>User 7</li>
        //     <li>User 8</li>
        //     <li>User 9</li>
        // </ul>

        const users = this.props.users;
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

        //return <div>{elem} {elem2}</div>;

    }
}

export default List;
