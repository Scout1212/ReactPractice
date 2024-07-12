import React, { Component } from 'react'
//stateless stateful component omg!!!!
class ClassroomClick extends Component {
    clickHandler(){
        console.log('Button clicked')
    }

    render(){
        return(
            <div>
                <button onClick = {this.clickHandler}> Click me</button>
            </div>
        )
    }
}

export default ClassroomClick