// Conceptually, components are like JavaScript functions. 
// They accept arbitrary inputs (called “props”) and 
// return React elements describing what should appear on the screen.

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}


// Conditional Rendering
function getGreeting(user) {
  	if (user) {
    	return <h1>Hello, {user}!</h1>;
  	}
  	return <h1>Hello, Stranger.</h1>;
}

ReactDOM.render(
  	getGreeting(), // Put in an user
  	document.getElementById('app')
);


// JSX combines XML and JavaScript!
// You need Babel to compile JSX

// 组件类只能包含一个顶层标签，否则会报错。
// 组件的用法与原生的 HTML 标签完全一致，可以任意加入属性，比如 <HelloMessage name="John"> ，

class HelloMessage extends React.Component {
	render() {
		// 就是 HelloMessage 组件加入一个 name 属性，值为 John。
		// 组件的属性可以在组件类的 this.props 对象上获取，
		// 比如 name 属性就可以通过 this.props.name 读取。上面代码的运行结果如下。
		return (
			<div>
				<h1>Hello {this.props.name}!</h1>
			</div>
		);
	}
}