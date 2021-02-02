// your Bomb code her
import React from 'react'

export default class Bomb extends React.Component {
    constructor(props) {
        super() 
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render () {

        if (this.state.secondsLeft === 0) {return(
            <h1>Boom!</h1>
        )} else {
            return (<h2>
            {this.state.secondsLeft} seconds before I go boom!
            </h2>)}
       
    }
}