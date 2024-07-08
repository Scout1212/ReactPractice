import React, { Component } from 'react'
import './Toggle.css'

class Toggle extends Component{
    constructor(props){
        super(props)

        this.state = {
            message : 'hello',
            hello : true
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
        if (this.state.hello) {
            this.setState({
                message: 'Goodbye',
                hello: false
            })
        } else {
            this.setState({
                message: 'Hello',
                hello: true
            })
        }
    }
}

export default Toggle;