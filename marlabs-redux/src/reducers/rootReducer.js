import {combineReducers} from 'redux';
import users from './users'
import products from './products'

// 这种写法有一个前提，就是 State 的属性名必须与子 Reducer 同名
export default combineReducers({
	users,
	products
})