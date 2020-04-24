// React is using a top-down flow through props
// If you need to share some states with other components:
// E.g. a form validator in Login Form.
// You lift it up to their closest common ancestor. 

class PasswordField extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange(e) {
        this.props.changeHandler(e);
    }

    render() {
        return (
          <input type='text' onChange={this.handleChange.bind(this)}/>
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

    // <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
    // <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
    render() {
        return (
          <div>
            <PasswordField changeHandler={this.handleFirstPasswordChange.bind(this)}/>
            <br/>
            <PasswordField changeHandler={this.handleSecondPasswordChange.bind(this)}/>
            <MatchText matched={this.state.firstPassword == this.state.secondPassword}/>
          </div>
        );
    }
}

ReactDOM.render(
  <Form />,
  document.getElementById('app')
);