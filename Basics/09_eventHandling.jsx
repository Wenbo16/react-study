class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        // Component doesn't auto bind methods to itself.
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // 对函数体使用括号, 返回一个对象字面表达式
        // this.state = ... render is not going to update
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            // the event-handling system of the browser defines
            // the context of the invocation to be the target element of the event, which causes the
            // context to be the <button> element, not the button object.
            <button onClick={this.handleClick}> // handleClick not get called yet
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('app')
);