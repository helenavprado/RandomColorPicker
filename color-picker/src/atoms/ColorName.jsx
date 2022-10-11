import React from 'react';
import "../style.css";

class ColorName extends React.Component {
    render() {
        return (
            <h2>your color is rbg({this.props.rgb1}, {this.props.rgb2}, {this.props.rgb3})</h2>
        );
    }
}

export default ColorName;