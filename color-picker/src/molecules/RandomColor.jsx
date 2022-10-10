import React from 'react';
import Button from '../atoms/Button';
import ColorName from '../atoms/ColorName';
import "../style.css";

class RandomColor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: "green",
        }
        this.handleClick = this.handleClick.bind(this)
    }

    // generateRbg() {
    //     const number = Math.floor(Math.random() * 256);
    //     return number
    // }

    handleClick() {
        const newColor = this.state.color === "green" ? "yellow" : "green";
        this.setState({color: newColor})
    }


    render() {
        return (
            <div className="randomcolormolecule">
                <ColorName ></ColorName>
                <Button clickProp={this.handleClick}></Button>
                <div style={{backgroundColor: this.state.color}} className="square" >
                </div>
            </div>
            
        );
    }
}

export default RandomColor;