function App() {
  return (
    <>
      <img class="logo" src="./images/logo.svg" alt="logo" />

      <div class="calculator-wrapper">
        <div class="input-wrapper">
          <h2>Bill</h2>
          <input type="text" name="" id="" value="142.55" />

          <h2>Select Tip %</h2>
          <div class="btn-tip-container">
            <button class="btn-tip">5%</button>
            <button class="btn-tip">10%</button>
            <button class="btn-tip btn-active">15%</button>
            <button class="btn-tip">25%</button>
            <button class="btn-tip">50%</button>
            <button class="btn-tip-custom">Custom</button>
          </div>

          <h2>Number of People</h2>
          <input type="text" name="" id="" value="5" />
        </div>

        <div class="answer-wrapper">
          <div class="tip-category">
            <p>
              Tip Amount <span>/ person</span>
            </p>
            <p class="tip-result">$4.27</p>
          </div>

          <div class="tip-category">
            <p>
              Total <span>/ person</span>
            </p>
            <p class="tip-result">$32.79</p>
          </div>

          <button class="btn-reset">Reset</button>
        </div>
      </div>

      <div class="attribution">
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

export default App;
