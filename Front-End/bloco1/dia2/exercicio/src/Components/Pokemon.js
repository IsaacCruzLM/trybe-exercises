import React from 'react';
import './Pokemon.css';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemon;

        return(
            <div className='pokemon'>
                <div className='pokemonInfo'>
                    <h4>{name}</h4>
                    <p>{type}</p>
                    <p>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
                </div>
                <div className='pokemonImage'>
                    <img src={image} alt="Imagem do Pokemon" />
                </div>
            </div>
        );
    };
};

export default Pokemon;