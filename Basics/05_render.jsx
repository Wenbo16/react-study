// React use virtual dom when you update the dom.
// It only updates the difference.

// 组件并不是真实的 DOM 节点，而是存在于内存之中的一种数据结构，
// 叫做virtual DOM。只有当它插入文档以后，才会变成真实的 DOM 。
// 根据 React 的设计，所有的 DOM 变动，都先在虚拟 DOM 上发生，然后再将实际发生变动的部分，反映在真实 DOM上，
// 这种算法叫做 DOM diff ，它可以极大提高网页的性能表现。
// 但是，有时需要从组件获取真实 DOM 的节点，这时就要用到 ref 属性


function tick() {
  	const element = (
		<div>
	  		<h1>Hello, world!</h1>
	  		<h2>It is {new Date().toLocaleTimeString()}.</h2>   // {...}实际发生变动的部分
		</div>
  	);

  	ReactDOM.render(
		element,
		document.getElementById('app');
  	);
}

setInterval(tick, 1000);