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
  const [value, setValue] = React.useState(false);

  const text =
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate eu scelerisque felis. Libero justo laoreet sit amet cursus. Donec ac odio tempor orci dapibus ultrices in iaculis. Lectus sit amet est placerat in egestas erat. Turpis massa sed elementum tempus egestas sed. Turpis nunc eget lorem dolor. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Nullam vehicula ipsum a arcu. Ligula ullamcorper malesuada proin libero nunc consequat. Vitae suscipit tellus mauris a diam maecenas sed enim. Est pellentesque elit ullamcorper dignissim cras tincidunt. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Diam sollicitudin tempor id eu nisl nunc. Suspendisse faucibus interdum posuere lorem. Fringilla phasellus faucibus scelerisque eleifend. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Diam quam nulla porttitor massa id neque. Dictum at tempor commodo ullamcorper a lacus.</p>";

  const ol = `<p>1. Sic enim maiores nostri labores non fugiendos tristissimo tamen verbo aerumnas etiam in deo nominaverunt.
2. Ita relinquet duas, de quibus etiam atque etiam consideret.
3. Et homini, qui ceteris animantibus plurimum praestat, praecipue a natura nihil datum esse dicemus?</p>`;

  const ShowData = () => {
    return (
      <div>
        {value && text}{" "}
        <Link className="button" to="/">
          Go Back
        </Link>
      </div>
    );
  };

  const Home = () => {
    return (
      <div>
        <label for="checkbox">Generate some shit: </label>
        <input
          id="checkbox"
          type="checkbox"
          checked={value}
          onClick={() => {
            setValue((val) => !val);
          }}
        />
        <Link to="/data" className="button">
          Generate Data
        </Link>{" "}
      </div>
    );
  };

  return (
    <div style={{ display: "flex" }}>
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
