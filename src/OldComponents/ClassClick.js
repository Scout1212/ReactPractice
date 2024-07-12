import React, { Component } from 'react'

class ClassClick extends Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'click me'
        }
    }

    changeThing(){
        this.setState({
            message: 'Thank you'
        });
    }

    render(){
        return(
            <div>
                <div>click the button</div>
                <button onClick = {() => this.changeThing()}> {this.state.message} </button>
            </div>
        );
    }
}

export default ClassClick;