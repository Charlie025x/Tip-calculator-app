// import { render } from "@testing-library/react";
import { Component } from "react";
import logo from "./images/logo.svg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      bill: "",
      tip: [
        { value: 0.05, percent: "5%" },
        { value: 0.1, percent: "10%" },
        { value: 0.15, percent: "15%" },
        { value: 0.25, percent: "25%" },
        { value: 0.5, percent: "50%" },
      ],
      activeTip: 0.15,
      numOfPeople: 1,
    };
  }

  handleBillInput = (event) => {
    this.setState(
      () => {
        return { bill: event.target.value };
      },
      () => console.log(this.state)
    );
  };

  handlePeopleInput = (event) => {
    this.setState(
      () => {
        return { numOfPeople: event.target.value };
      },
      () => console.log(this.state)
    );
  };

  render() {
    return (
      <>
        <img className="logo" src={logo} alt="logo" />

        <div className="calculator-wrapper">
          <div className="input-wrapper">
            <h2>Bill</h2>
            {/* <input
              type="number"
              name="bill"
              onChange={(event) => {
                this.setState(
                  () => {
                    return { bill: event.target.value };
                  },
                  () => console.log(this.state)
                );
              }}
            /> */}
            <input
              type="number"
              name="bill"
              value={this.state.bill}
              onChange={this.handleBillInput}
            />
            <h2>Select Tip %</h2>

            <div className="btn-tip-container">
              {/* looping though tip state and rendering buttons */}
              {this.state.tip.map((tipData) => (
                <button
                  key={tipData.value}
                  className={`btn-tip ${
                    this.state.activeTip === tipData.value ? "btn-active" : ""
                  }`}
                  onClick={() => {
                    this.setState(
                      () => {
                        return { activeTip: tipData.value };
                      },
                      () => {
                        console.log(this.state);
                      }
                    );
                  }}
                  // onClick={this.handleChange}
                >
                  {tipData.percent}
                </button>
              ))}
              {/* button rendering ends */}

              <button className="btn-tip-custom">Custom</button>
            </div>
            <h2>Number of People</h2>
            <input
              type="number"
              name=""
              value={this.state.numOfPeople}
              onChange={this.handlePeopleInput}
            />
          </div>

          <div className="answer-wrapper">
            <div className="tip-category">
              <p>
                Tip Amount <span>/ person</span>
              </p>
              <p className="tip-result">
                {this.state.numOfPeople
                  ? `$${
                      Math.round(
                        (100 * (this.state.bill * this.state.activeTip)) /
                          this.state.numOfPeople
                      ) / 100
                    }`
                  : ""}
              </p>
            </div>

            <div className="tip-category">
              <p>
                Total <span>/ person</span>
              </p>
              <p className="tip-result">
                {this.state.numOfPeople
                  ? `$${Math.round(
                      (100 *
                        ((this.state.bill * this.state.activeTip) /
                          this.state.numOfPeople +
                          this.state.bill / this.state.numOfPeople)) /
                        100
                    )}`
                  : ""}
              </p>
            </div>

            <button
              className="btn-reset"
              onClick={() => {
                this.setState(() => {
                  return { bill: "", numOfPeople: "1" };
                });
              }}
            >
              Reset
            </button>
          </div>
        </div>

        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://charlie-alonso.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Charlie Alonso
          </a>
        </div>
      </>
    );
  }
}

export default App;
