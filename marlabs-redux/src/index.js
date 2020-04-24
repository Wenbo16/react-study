import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

// createStore方法还可以接受第二个参数，表示 State 的最初状态。这通常是服务器给出的。
// const store = createStore(rootReducer, window._REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENSION_());
const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();
