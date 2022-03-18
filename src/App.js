// import { render } from "@testing-library/react";
import { Component } from "react";
import logo from "./images/logo.svg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      bill: "",
      tip: "",
      numOfPeople: "",
    };
  }
  render() {
    return (
      <>
        <img className="logo" src={logo} alt="logo" />

        <div className="calculator-wrapper">
          <div className="input-wrapper">
            <h2>Bill</h2>
            <input type="text" name="bill" value="142.55" />

            <h2>Select Tip %</h2>
            <div className="btn-tip-container">
              <button className="btn-tip">5%</button>
              <button className="btn-tip">10%</button>
              <button className="btn-tip btn-active">15%</button>
              <button className="btn-tip">25%</button>
              <button className="btn-tip">50%</button>
              <button className="btn-tip-custom">Custom</button>
            </div>

            <h2>Number of People</h2>
            <input type="text" name="" id="" value="5" />
          </div>

          <div className="answer-wrapper">
            <div className="tip-category">
              <p>
                Tip Amount <span>/ person</span>
              </p>
              <p className="tip-result">$4.27</p>
            </div>

            <div className="tip-category">
              <p>
                Total <span>/ person</span>
              </p>
              <p className="tip-result">$32.79</p>
            </div>

            <button className="btn-reset">Reset</button>
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
