// ReactDOM.render 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入指定的 DOM 节点。

// <div id='app'></div>
ReactDOM.render( <h1>Hello, world!</h1>,  document.getElementById('app') );


// JSX 允许直接在模板插入 JavaScript 变量。
// 如果这个变量是一个数组，则会展开这个数组的所有成员, 添加到模板
var arr = [
  <h1>Hello world!</h1>,
  <h2>React is awesome</h2>,
];

ReactDOM.render(
  <div>{arr}</div>,
  document.getElementById('example')
);


// JSX 的基本语法规则：遇到 HTML 标签（以 < 开头），
// 就用 HTML 规则解析；遇到代码块（以 '{' 开头），就用 JavaScript 规则解析。
var names = ['Alice', 'Emily', 'Kate'];

ReactDOM.render(
  <div>
  {
    names.map(function (name) {
      return <div>Hello, {name}!</div>
    })
  }
  </div>,
  document.getElementById('example')
);