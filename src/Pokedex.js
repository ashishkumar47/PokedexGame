import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'

class Pokedex extends Component{
    render(){  
        let title;
        if(this.props.isWinner){
            title =<h1 className="Pokedex-winner">Winning Hand</h1>
        }  
        else{
            title=<h1 className="Pokedex-loser">Losing Hand</h1>
        }    
        return(
            <div className="Pokedex">
            {title}
            <h4>Total Experience: {this.props.exp}</h4>            
            <div className="Pokedex-card">
            {this.props.pokemon.map((data)=>(
                <Pokecard id={data.id} name={data.name} type={data.type} exp={data.base_experience} />
            ))}
            </div>               
            </div>
         
        );
    }
}
export default Pokedex;
