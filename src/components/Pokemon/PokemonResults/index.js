import { Component } from "react";

class PokemonResults extends Component {

  render() {
    
    return (
      <>
        {
          <p className="pokemonResult">
            {this.props.team.team1Point > this.props.team.team2Point ? "Team 1 Winner" : "Team 2 Winner"}
          </p>
        }
        <p>{this.count}</p>
      </>
    );
  }
}

export default PokemonResults;
