import React, { Component } from 'react';

class View extends Component {
    
    componentDidMount() {
    	this.props.getOneUser(this.props.match.params.id)
    }

    render() {
    	const currUser = this.props.currUser
    	if(currUser){
    		 return <div>
	            <p>{this.props.currUser.location}</p>
	        </div>
    	}else{
    		return <div>
	        </div>
    	}
       
    }
}

export default View;