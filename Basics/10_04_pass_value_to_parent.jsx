export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {getResultFromSearchBar: 'not form search bar'};
	}

	getResult(term){
		this.setState({getResultFromSearchBar: term});
	}

    render() {
        return (
            <div>
	            <SearchBar getResult={this.getResult.bind(this)} />
	            <p>{this.state.getResultFromSearchBar}</p>	
            </div>
        )
    }
}


import React, {Component} from 'react';
// import React from 'react';
// import './search_bar.css';

export default class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.state = {term : ""};
    }

    handleInputChange(event){
        this.setState({term: event.target.value});
        this.props.getResult(event.target.value);
    }

    render(){
        return (
            <div>
                <input type="text" value={this.state.term} onChange={this.handleInputChange.bind(this)}/>
                <p>In child: {this.state.term}</p>
            </div>
        )
    }
}
