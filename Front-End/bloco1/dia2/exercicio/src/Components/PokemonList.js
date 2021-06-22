import React from 'react';
import pokemons from '../data';
import Pokemon from './Pokemon';
import './PokemonList.css'

class PokemonList extends React.Component {
    render() {
        return (
            <section className='pokemonList'>
                {pokemons.map((pokemon) => 
                    <Pokemon key={pokemon.id} pokemon={pokemon} />)}
            </section>
        );
    };
};

export default PokemonList;