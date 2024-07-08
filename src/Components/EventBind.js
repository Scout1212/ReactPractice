import React, { Component } from 'react'

class EventBind extends Component{
    constructor(props){
        super(props)
        this.state = {
            message : 'hello'
        }
    }

    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                <button onClick = {this.clickHandler.bind(this)}> click </button>
            </div>
        )
    }

    clickHandler () {
        this.setState({
            message: 'goodbye'
        })
    }
}

export default EventBind