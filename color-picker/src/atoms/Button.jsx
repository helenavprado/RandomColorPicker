import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <button onClick={this.props.clickProp}>Generate Color</button>
        );
    }
}

export default Button;