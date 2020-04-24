// State is used to keep internal private variables or objects
// a way to describe the state of our component
// ==========================================================
// WARNING: don't modify state directly. Use this.setState().
// ==========================================================


// 组件免不了要与用户互动，React 的一大创新，
// 就是将组件看成是一个状态机，一开始有一个初始状态，然后用户互动，导致状态变化，从而触发重新渲染 UI 
// 一个简单的区分方法是，this.props 表示那些一旦定义，就不再改变的特性，
// 而 this.state 是会随着用户互动而产生变化的特性。

// Neither parent nor child components can know 
// if a certain component is stateful or stateless, 
// and they shouldn’t care whether it is defined as a 
// function or a class.
// This is why state is often called local or encapsulated.

class Clock extends React.Component {

    // 1. When <Clock /> is passed to ReactDOM.render(), 
    // React calls the constructor of the Clock component.
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    // 3. When the Clock output is inserted in the DOM, 
    // React calls the componentDidMount() lifecycle hook. 
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    // 4. Thanks to the setState() call, 
    // React knows the state has changed, 
    // and calls the render() method again. 
    tick() {
        this.setState({
            date: new Date()
        });
    }

    // 2. React then calls the render() method. 
    // This is how React learns what should be displayed on the screen. 
    // React then updates the DOM to match the Clock’s render output.
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);