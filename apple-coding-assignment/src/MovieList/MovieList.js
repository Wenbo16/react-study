import './MovieList.css';

import React from 'react';
import { connect } from 'react-redux'

import { remove_movie } from '../actions/removeMovie';
import { add_movie } from '../actions/addMovie';
import { mouse_enter } from '../actions/mouseEnter';
import { mouse_leave } from '../actions/mouseLeave';


class MovieList extends React.Component {

    mouseEnter = (movie) => {
        this.props.dispatch(mouse_enter(movie));
    }

    mouseLeave = () => {
        this.props.dispatch(mouse_leave());
        
    }

    removeMovie = (movie) => {
        this.props.dispatch(remove_movie(movie));
    }

    addMovie = (movie) => {
         this.props.dispatch(add_movie(movie));
    }

    renderMovies= () => {
        const my_list = this.props.rowList.map((movie) => {
            return(
                <div className="list-item" key={movie.id} onMouseEnter={this.mouseEnter.bind(this, movie)} onMouseLeave={this.mouseLeave}>
                    <img src={movie.img} alt='movie'/>
                    <h4>{movie.title}</h4>
                    <div className="myButton">
                        {this.props.rowTitle === 'My List'
                        ?
                        <a className={movie.id !== this.props.currMovie ? 'waves-effect red btn hidden' : 'waves-effect red btn'} onClick={this.removeMovie.bind(this, movie)}>Remove</a>
                        :
                        <a className={movie.id !== this.props.currMovie ? 'waves-effect waves-light btn hidden' : 'waves-effect waves-light btn'} onClick={this.addMovie.bind(this, movie)}>Add</a>}
                    </div>
                </div>
            )
        });

        return (
            <div >
                {my_list}
            </div>
        );
    }

    render() {
        return (
            <div className="MovieList">
                <h3>{this.props.rowTitle}</h3>
                {this.renderMovies()}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        mylist : state.mylist,
        recommendations : state.recommendations,
        currMovie : state.currMovie
    }
}
export default connect(mapStateToProps)(MovieList);
