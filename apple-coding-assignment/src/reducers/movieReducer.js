import { REMOVE_MOVIE } from '../actions/removeMovie';
import { ADD_MOVIE } from '../actions/addMovie';
import { MOUSE_ENTER } from '../actions/mouseEnter';
import { MOUSE_LEAVE } from '../actions/mouseLeave';

const initialAppState = {
    'mylist' : [
        {
            'title': 'Futurama',
            'id': 1,
            'img': 'http://cdn1.nflximg.net/webp/7621/3787621.webp'
        },
        {
            'title': 'The Interview',
            'id': 2,
            'img': 'http://cdn1.nflximg.net/webp/1381/11971381.webp'
        },
        {
            'title': 'Gilmore Girls',
            'id': 3,
            'img': 'http://cdn1.nflximg.net/webp/7451/11317451.webp'
        }
    ],

    'recommendations' : [
        {
            'title': 'Family Guy',
            'id': 4,
            'img': 'http://cdn5.nflximg.net/webp/5815/2515815.webp'
        },
        {
            'title': 'The Croods',
            'id': 5,
            'img': 'http://cdn3.nflximg.net/webp/2353/3862353.webp'
        },
        {
            'title': 'Friends',
            'id': 6,
            'img': 'http://cdn0.nflximg.net/webp/3200/9163200.webp'
        }
    ],

    'currMovie': -1
}

function movieReducer(state=initialAppState, action) {
    

    switch (action.type) {
        
        case REMOVE_MOVIE:
            let nextRemoveIndex = state.mylist.indexOf(action.movie);
            let nextRemoveId = state.mylist[state.mylist.length-1].id !==  action.movie.id ? state.mylist[nextRemoveIndex+1].id : -1
            return {
                'mylist': state.mylist.filter(item => item.id !== action.movie.id),
                'recommendations': state.recommendations.concat(action.movie),
                'currMovie': nextRemoveId
            }
        
        case ADD_MOVIE:
            let nextAddIndex = state.recommendations.indexOf(action.movie);
            let nextAddId = state.recommendations[state.recommendations.length-1].id !==  action.movie.id ? state.recommendations[nextAddIndex+1].id : -1
            if(state.mylist.indexOf(action.movie) === -1){
                return {
                    'mylist' : state.mylist.concat(action.movie),
                    'recommendations' : state.recommendations.filter(item => item.id !== action.movie.id),
                    'currMovie': nextAddId
                }
            }else{
                return Object.assign({}, state);
            }
        
        case MOUSE_ENTER:
            return {
                'mylist' : state.mylist,
                'recommendations' : state.recommendations,
                'currMovie': action.movie.id
            }
        
        case MOUSE_LEAVE:
            return {
                'mylist' : state.mylist,
                'recommendations' : state.recommendations,
                'currMovie': -1
            }
        default:
            return state;
    }
}

export default movieReducer;