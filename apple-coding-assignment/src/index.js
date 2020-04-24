import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './index.css';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import movieReducer from './reducers/movieReducer';


//createStore方法还可以接受第二个参数，表示 State 的最初状态。这通常是服务器给出的。
const store = createStore(movieReducer);


ReactDOM.render(
	<Provider store={store}>
    	<App />
	</Provider>,
document.getElementById('root'));
