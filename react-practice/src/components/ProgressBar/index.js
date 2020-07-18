import React from "react";

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  componentDidMount() {
    let value = this.state.value;
    let timeout = setInterval(() => {
      value += 5;
      this.setState({ value });
    }, 100);

    if (value >= 100) {
      clearInterval(timeout);
    }
  }

  render() {
    return <div><progress value={this.state.value} max="100" /></div>;
  }
}

class Runner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nums: 0,
    };
  }

  addProgressBar = () => {
    let nums = this.state.nums;
    this.setState({ nums: nums + 1 });
  };

  render() {
		let bars = [];
		let nums = this.state.nums;
		for(let i = 0; i < nums; i++) {
			bars.push(<ProgressBar />);
		}
    return (
      <div>
        <div>
          <button onClick={this.addProgressBar}>Add</button>
        </div>
				{bars}
      </div>
    );
  }
}

export default Runner;
