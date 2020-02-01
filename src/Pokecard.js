 import React, {Component } from 'react';
 import './Pokecard.css';

class Pokecard extends Component{
    render() {        
        let givePadding= (number)=>(number>999 ? number:`00${number}`.slice(-3) );
        let imageSrc=`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${givePadding(this.props.id)}.png`;
        return (
             <div className="Pokecard">
                 <h1 className="Pokecard-title">{this.props.name}</h1>           
                 <div className="Pokecard-image">
                 <img src={imageSrc} alt=""/>
                 </div>
                 <h1 className="Pokecard-data">Type: {this.props.type}</h1>
                 <h1 className="Pokecard-data">Exp: {this.props.exp}</h1>
             </div>
        );
    }
} 
export default Pokecard;