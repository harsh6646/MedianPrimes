import React, { Component } from "react";

export default class Prime extends Component {
  state = {
    input: "",
    median: [],
    error: "",
    outputClass: ""
  };

  handleGetMedians = () => {
    let number = parseFloat(this.state.input);
    if (isNaN(number) || number < 0) {
      this.setState({
        median: [],
        error: "This input is not supported, please enter a positive integer or float.",
        outputClass: "col-4 alert alert-warning"
      });
    } else {
      number = Math.floor(number);
      fetch("/primes", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          number: number
        })
      }).then(res => {
        res.text().then(data => {
          const result = JSON.parse(data);
          this.setState({
            median: result.median,
            error: "",
            outputClass: "col-4 alert alert-success"
          });
        });
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

  showOutput = () => {
    let output = "";
    if (this.state.error) {
      output = this.showErrors();
    } else {
      output = this.showMedians();
    }
    return output;
  };
  render() {
    return (
      <React.Fragment>
        <div className="jumbotron text-center">
          <h2>Find the median of all the prime(s) beyond your number!</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-2" />
            <div className="col-6">
              <label htmlFor="number">Enter your number:</label>
              <input
                className="form-control"
                type="text"
                id="number"
                name="number"
                placeholder="Number"
                onChange={this.handleChange}
              />
            </div>
            <div className="col-2">
              <button
                className="m-4 btn btn-light"
                onClick={this.handleGetMedians}
              >
                Find Median!
              </button>
            </div>
            <div className="col-2" />
          </div>
          <div className="row">
            <div className="col-4" />
            <div className={this.state.outputClass} id="output">
              {this.showOutput()}
            </div>
            <div className="col-4" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
