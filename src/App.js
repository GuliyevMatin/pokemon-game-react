import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Pokemon from "./components/Pokemon";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-3 mb-3">POKEDEX</h1>
        <div className="row">
          <Pokemon />
        </div>
      </div>
    );
  }
}

export default App;
