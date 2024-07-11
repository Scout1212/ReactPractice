import React, { Component } from 'react'
import './Toggle.css'

class Toggle extends Component{
    constructor(props){
        super(props)

        this.state ={
            message : 'hello',
            toggle : true
        }
    }

    render() {
        return(
            <div className = 'Super'>
                <h1 className= 'Message'>{this.state.message}</h1>
                <button  className = 'Button' onClick ={() => this.changeMessage()}> Click me </button>
            </div>
        )
    }

    changeMessage() {
        if(this.state.toggle) {
            this.setState({
                message: 'Goodbye',
                toggle: false
            })
        } else {
            this.setState({
                message: 'Hello',
                toggle: true
            })
        }
    }
}

export default Toggle;