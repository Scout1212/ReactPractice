import React, {Component} from 'react'

class Goodbye extends Component{
    render(){
        return(
            <div>
                <div>{this.state.message} {this.state.name}</div>
                <button onClick = {()  => this.changeName()}>goodbye?</button>
            </div>
        );
    }

    changeName(){
        this.setState({
            name : "OneMad",
            message: "goodbye",
            button : "hello"
        },() => {
            console.log('Callback value', this.state.name);
            console.log(this.state.name);
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            message: 'hello',
            button: 'goodbye'
        };
    }
}

export default Goodbye