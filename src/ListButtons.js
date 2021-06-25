import React from 'react';
import Button from './Button';

class ListButtons extends React.Component {
  handlefilter = () => {
    console.log('Salve')
  }
  render() {
    const types = ["All", "Electric", "Fire", "Bug", "Poison", "Psychic", "Normal", "Dragon"]
    return (
      <div className="ListButtons">
        {types.map((type) => <Button
          key={type}
          checked={this.props.checked}
          func={this.props.func} 
          typeName={type}/>)}
      </div>
    );
  }
}

export default ListButtons;