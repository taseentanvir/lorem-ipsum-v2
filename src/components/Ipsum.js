/* eslint-disable no-undef */
import React from "react";
import { toast } from "react-toastify";
import Footer from "./Footer.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const Ipsum = () => {
  const [repeat, setRepeat] = React.useState(1);
  const [showOl, setShowOl] = React.useState(false);
  const [showUl, setShowUl] = React.useState(false);
  const [copy, setCopy] = React.useState(false);
  // variables
  const loremText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate eu scelerisque felis. Libero justo laoreet sit amet cursus. Donec ac odio tempor orci dapibus ultrices in iaculis. Lectus sit amet est placerat in egestas erat. Turpis massa sed elementum tempus egestas sed. Turpis nunc eget lorem dolor.";

  const ol = () => {
    return (
      <div>
        <ol>
          <li>
            {" "}
            Sic enim maiores nostri labores non fugiendos tristissimo tamen
            verbo aerumnas etiam in deo nominaverunt.
          </li>
          <li>Ita relinquet duas, de quibus etiam atque etiam consideret.</li>
          <li>
            Et homini, qui ceteris animantibus plurimum praestat, praecipue a
            natura nihil datum esse dicemus?
          </li>
        </ol>
      </div>
    );
  };

  const ul = () => {
    return (
      <div>
        <ul>
          <li>
            Sic enim maiores nostri labores non fugiendos tristissimo tamen
            verbo aerumnas etiam in deo nominaverunt.
          </li>
          <li>Ita relinquet duas, de quibus etiam atque etiam consideret.</li>
          <li>
            Et homini, qui ceteris animantibus plurimum praestat, praecipue a
            natura nihil datum esse dicemus?
          </li>
        </ul>
      </div>
    );
  };

  /** Break after a line [begins] **/

  function addNewlines(str) {
    let result = "";
    while (str.length > 0) {
      result += str.substring(0, 405) + "\n";
      str = str.substring(405);
    }
    return result;
  }

  const newLoremText = addNewlines(loremText);
  /** Break after a line [ends] **/

  //** Error if para number is 0 [begins] **//
  const verify = () => {
    if (repeat <= 0) {
      return toast.error(
        "Value of paragraph number has to be greater than zero"
      );
    }
  };

  verify();
  //** Error if para number is 0 [ends] **//

  const ShowData = () => {
    return (
      <div className="show-data-wrapper">
        {/*{value && text} */}
        <div className="show-data">
          <div style={{ marginLeft: 10 }}> {newLoremText.repeat(repeat)}</div>
          {showOl && ol()}
          {showUl && ul()}
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link className="button" to="/">
            Go Back
          </Link>
          <button
            type="button"
            className="button"
            onClick={() => {
              navigator.clipboard.writeText(newLoremText.repeat(repeat));
              setCopy(true);
              toast.info("Text has been copied to your clipboard");
              setTimeout(() => {
                setCopy(false);
              }, 5000);
            }}
          >
            {copy ? <div>copied</div> : <div>copy</div>}
          </button>
          <Footer />
        </div>
      </div>
    );
  };

  const Home = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Loripsum Options</h2>
        <div className="home">
          <div>
            <label style={{ display: "block" }} for="paraNumber">
              Write paragraph number:
            </label>
            <div style={{ display: "flex" }}>
              <input
                style={{ marginTop: 5 }}
                id="paraNumber"
                type="number"
                min="0"
                value={repeat}
                onChange={(e) => {
                  setRepeat(e.target.value);
                }}
              />
              <button
                className="button controllers"
                onClick={() => {
                  setRepeat((repeat) => repeat + 1);
                }}
              >
                +
              </button>
              <button
                className="button controllers"
                onClick={() => {
                  setRepeat((repeat) => repeat - 1);
                }}
              >
                -
              </button>{" "}
            </div>
          </div>

          <div style={{ marginTop: 20 }}>
            <label for="ol">Generate some ol: </label>
            <input
              id="ol"
              type="checkbox"
              checked={showOl}
              onClick={() => {
                setShowOl((val) => !val);
              }}
            />
          </div>
          <div>
            <label for="ul">Generate some ul: </label>
            <input
              id="ul"
              type="checkbox"
              checked={showUl}
              onClick={() => {
                setShowUl((val) => !val);
              }}
            />
          </div>
        </div>

        <Link to="/data" className="button" style={{ marginTop: 15 }}>
          Generate Data
        </Link>

        <Footer />
      </div>
    );
  };

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Switch>
          <Route exact path="/data" component={ShowData} />
        </Switch>
      </Router>
      <Redirect to="/" />
    </div>
  );
};

export default Ipsum;
