import { Component } from "react";
import PokemonItem from "./PokemonItem";
import "./index.css";
import Pokedox from "../../pokedox.json";
const { pokedox } = Pokedox;
class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      pokedox,
      random1team: [],
      random2team: [],
    };
  }

  randomTeams() {
      this.setState({clicked: true});
    let team1 = [];
    let team2 = [...this.state.pokedox];

    while (team1.length < team2.length) {
      let randomNumm = Math.ceil(Math.random() * team2.length - 1);
      let newArr = team2.splice(randomNumm, 1)[0];
      team1.push(newArr);
    }
    this.setState({ random1team: team1, random2team: team2 });
  }
  team1Point(){
        return this.state.clicked && this.state.random1team.reduce((sum,hero) => sum + hero.base_experience,0)
  }
  team2Point(){
    return this.state.clicked && this.state.random2team.reduce((sum,hero) => sum + hero.base_experience,0)
}

  render() {
      console.log(this.team1Point(),this.team2Point());
    return (
      <>
        <button
        className={`${this.state.clicked && "w-100 mb-5"} btn btn-primary w-25 d-block  mx-auto pokemonBtn`}
          onClick={() => {
            this.randomTeams();
          }}
        >
          {this.state.clicked ? "Change Team" : "Game Play"}
        </button>
      
        {this.state.clicked && (
          <>
          {this.state.random1team.map((item,index)=>(<PokemonItem key={index} item={item}/>))}
          <p className="pokemonResult">{this.team1Point() > this.team2Point() ? "Team 1 Winner" : "Team 2 Winner"}</p>
          {this.state.random2team.map((item,index)=>(<PokemonItem key={index} item={item}/>))}
          
          </>
        )}
      </>
    );
  }
}

export default Pokemon;
