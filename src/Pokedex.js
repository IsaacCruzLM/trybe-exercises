import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import ListButtons from './ListButtons';

class Pokedex extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemonIndex: 0,
            checked: '',
            disabledButton: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handlefilter = this.handlefilter.bind(this);
        this.disableButton = this.disableButton.bind(this);
    }

    handleClick = (e) => {
        const tamanho = (this.filterPokemons()).length;

        if(this.state.pokemonIndex === (tamanho - 1)) {
            this.setState(() => ({
                pokemonIndex: 0
            }));
        } else {
            this.setState((estadoAnterior, _props) => ({
                pokemonIndex: estadoAnterior.pokemonIndex + 1
            }));
        };        
    }

    handlefilter = (e) => {
        if (this.state.checked !== e.target.innerText) {
            this.setState({
                checked: e.target.innerText,
                pokemonIndex: 0
            }, () => this.disableButton())
        } else {
            this.setState({
                checked: '',
                pokemonIndex: 0
            }, () => this.disableButton())
        }
        
    }

    disableButton = () => {
        const tamanho = (this.filterPokemons()).length;
        
        if (tamanho === 1) {
            this.setState({disabledButton: true})
        } else {
            this.setState({disabledButton: false})
        }
    }

    filterPokemons = () => {
        let pokemons;

        if (this.state.checked === 'All') {
            pokemons = this.props.pokemons
        } else {
            pokemons = (this.props.pokemons).filter((pokemon) =>
                ((pokemon.type).includes(this.state.checked)) || 
                ((pokemon.type) === (this.state.checked)));
        }
        
        return pokemons;
    }

    render() {
        const pokemonsArray = this.filterPokemons();
        return (
            <div className="pokedex">
                <Pokemon pokemon={pokemonsArray[this.state.pokemonIndex]} />
                <ListButtons checked={this.state.checked} func={this.handlefilter}/>
                <div>
                    <button disabled={this.state.disabledButton} className='next' onClick={this.handleClick}>
                        Próximo Pokemon
                    </button>
                </div>
            </div>
        );
    }
}

export default Pokedex;