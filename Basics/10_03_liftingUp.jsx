class PasswordField extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
          <input type='text' onChange={this.props.updateParentState}/>
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
        this.state = { 
          firstPassword: '',
          secondPassword: ''
        }
    }

    handleFirstPasswordChange(event) {
        this.setState({firstPassword: event.target.value});
    }

    handleSecondPasswordChange(event) {
        this.setState({secondPassword: event.target.value});
    }

    render() {
        return (
          <div>
            <PasswordField updateParentState={this.handleFirstPasswordChange.bind(this)}/>
            <br/>
            <PasswordField updateParentState={this.handleSecondPasswordChange.bind(this)}/>
            <MatchText matched={this.state.firstPassword == this.state.secondPassword}/>
          </div>
        );
    }
}

ReactDOM.render(
    <Form />,
    document.getElementById('app')
);