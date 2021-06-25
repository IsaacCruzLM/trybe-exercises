import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button
      onClick={this.props.func}
      className={(this.props.checked) === this.props.typeName ? 'checkedButton' : 'NormalButton'}>
        {this.props.typeName}
      </button>
    );
  }
}

export default Button;