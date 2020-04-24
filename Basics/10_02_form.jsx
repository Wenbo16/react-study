class Input extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: 'Hello!'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        // props as a bridge for parent component to be able to listen for children change
        this.props.updateParentState(e);
        this.setState({value: e.target.value});
    }

    render () {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <p>{this.state.value}</p>
            </div>
        );
    }
}

function MatchText(props) {
    if (props.matched) {
        return <div><h1>Matched</h1></div>
    } else {
        return <div><h1>Not matched</h1></div>
    }
}

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state ={ firstValue: '', secondValue:'' }
        this.handleFirstValueChange = this.handleFirstValueChange.bind(this);
        this.handleSecondValueChange = this.handleSecondValueChange.bind(this);
    }

    handleFirstValueChange(event) {
        this.setState({firstValue: event.target.value});
    }

    handleSecondValueChange(event) {
        this.setState({secondValue: event.target.value});
    }

    render() {
        return (
            <div>
                // 派遣侦察员 
                <Input updateParentState = {this.handleFirstValueChange}/>
                <br/>
                <Input updateParentState = {this.handleSecondValueChange}/>
                <MatchText matched={this.state.firstValue == this.state.secondValue}/>
            </div>
        );
    }

}

ReactDOM.render(<Form />, document.body);