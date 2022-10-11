import React from 'react';
import Button from '../atoms/Button';
import ColorName from '../atoms/ColorName';
import "../style.css";

class RandomColor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rgb1: 255,
            rgb2: 0,
            rgb3: 90
        }
        this.handleClick = this.handleClick.bind(this)
        this.formatColor = this.formatColor(this)

    }

    generatergb() {
            return Math.floor(Math.random() * 256);
    }

    handleClick() {
        this.setState({
            rgb1: this.generatergb(),
            rgb2: this.generatergb(),
            rgb3: this.generatergb(),
        })
    }

    formatColor() {
        return `'rgb(${this.state.rgb1}, ${this.state.rgb2}, ${this.state.rgb3})'`
    }

    

    render() {
        return (
            <div className="randomcolormolecule">
                <ColorName rgb1={this.state.rgb1} rgb2={this.state.rgb2} rgb3={this.state.rgb3}></ColorName>
                {/* por alguma razao o handleClick nao aceita parenteses na linha abaixo. Da muitos erros no console no browser */}
                <Button clickProp={this.handleClick}></Button>
                <div style={{backgroundColor: 'rgb(30, 0, 99)'}} className="square" >
                </div>
                <h1>formartColor: {this.formatColor}</h1>
            </div>
            
        );
    }

    componentDidMount() {
    
    }
}

export default RandomColor;