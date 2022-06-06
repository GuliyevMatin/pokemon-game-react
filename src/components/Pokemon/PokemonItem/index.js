import { Component } from "react";
import PokemonStyle from "./pokemon.module.css"
class PokemonItem extends Component {
  
  render() {
   let  item = this.props.item
   console.log(this.props.item);
    return (
      <div className="col-lg-3">
           <div className={`card ${PokemonStyle.bg_color}`} style={{width: "100%"}}>
           <h5 className={`text-center pt-3 ${PokemonStyle.title_color}`}>{item.name}</h5>
             <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`} className={`card-img-top ${PokemonStyle.pokemon_img}`} alt="..." />
             <div className="card-body">
               <p className="card-text text-center mb-0">Type : {item.type}</p> 
               <p className="card-title text-center">EXP:{item.base_experience}</p>       
             </div>
           </div>
           
      </div>
    );
  }
}


export default PokemonItem