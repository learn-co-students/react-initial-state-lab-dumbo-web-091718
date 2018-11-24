import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    putCorrectSeconds = () => {
        if(this.state.secondsLeft === '0') {
            <p>Boom!</p>
        }else{
            <p>{this.state.secondsLeft} seconds left before I go boom!</p>
        }
    }
    render(){
        const conditionalMessage = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
        return(
            <div>{conditionalMessage}</div>
        )
    }
}