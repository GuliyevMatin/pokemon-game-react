import { Component } from "react";

class PokemonResults extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
      console.log(this.props);
    return (
      <>
        {
          <p className="pokemonResult">
            {this.props.team.team1Point > this.props.team.team2Point ? "Team 1 Winner" : "Team 2 Winner"}
          </p>
        }
      </>
    );
  }
}

export default PokemonResults;
