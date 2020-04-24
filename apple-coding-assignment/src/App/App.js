import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import React, { Component } from 'react';
import { connect } from 'react-redux'

import MovieList from '../MovieList/MovieList';


import './App.css';

class App extends Component {
    render() {
        const list_titles = this.props.mylist.map(item =>{
            return (
                <div key={item.id}>{item.title}</div>
            )
        })
        return (
            <div className="container">
                <h2>Netflix</h2>
                <MovieList rowList = {this.props.mylist} rowTitle = 'My List'/>
                <MovieList rowList = {this.props.recommendations} rowTitle = 'Recommendations'/>
                    <h3>My List Titles</h3>
                    <div>{list_titles}</div>
                <br/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        mylist : state.mylist,
        recommendations : state.recommendations
    }
}

export default connect(mapStateToProps)(App);