import React from "react";
import "./App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Ipsum from "./components/Ipsum.js";

toast.configure();

function App() {
  return (
    <div className="App">
      <Ipsum />
    </div>
  );
}

export default App;
