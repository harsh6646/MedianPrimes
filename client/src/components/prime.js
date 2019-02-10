import React, { Component } from "react";

export default class Prime extends Component {
  state = {
    input: "",
    median: [],
    error: ""
  };

  handleGetMedians = () => {
    let number = parseFloat(this.state.input);
    if (isNaN(number)) {
      this.setState({
        error: "This input is not supported, please enter a integer or float."
      });
    } else {
      number = Math.floor(number);
      fetch("http://localhost:3000/primes", {
        method: "POST",
        body: {
          number: number
        }
      }).then(data => {
        console.log(data);
      });
    }
  };

  // will auto update the DOM when state changes
  showMedians = () => {
    let message = "Median";
    if (this.state.median.length === 1) {
      message += ": ";
    } else if (this.state.median.length === 2) {
      message += "s: ";
    } else {
      return;
    }
    return message + this.state.median;
  };

  // Display the errors to user
  showErrors = () => {
    const error = this.state.error;
    if (error) {
      return error;
    }
  };
  // update state on changing input
  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <h5>Find the median of all the prime(s) beyond your number!</h5>
        <div>
          <div>Enter your number:</div>
          <div>
            <input
              id="medianInput"
              type="text"
              name="number"
              placeholder="Enter your number here"
              onChange={this.handleChange}
            />
            <div>
              <button onClick={this.handleGetMedians}>Find Median!</button>
            </div>
          </div>
          <div>{this.showMedians()}</div>
          <div>{this.showErrors()}</div>
        </div>
      </React.Fragment>
    );
  }
}
