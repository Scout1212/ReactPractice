import React, { Component } from 'react';
import './TopNav.css';

class TopNav extends Component{
    constructor(props) {
        super(props)
        this.state = {
            hidden: false
        }
        this.update = this.update.bind(this);
    }

    update(){
        this.setState({
            hidden: !this.state.hidden
        })
    }

    render(){
        if(this.state.hidden){
            return(
                <div className="NavContainerBox">
                    <div className='ItemContainer'>
                        <div className="Item">
                            <h3>Home</h3>
                        </div>
                        <div className="Item">
                            <h3>Welcome</h3>
                        </div>
                        <div className="Item">
                            <h3>Learn</h3>
                        </div>
                        <button className="NavButton" onClick = {() => this.update()}>Click me</button>
                    </div>
                </div>
            );
        }
        else{
            return (
                <div ClassName="Shrunk">
                        <button className="NavButton" onClick={this.update}> Click me</button>
                </div>
            );
        }
    }
}

export default TopNav;