import React, {Component} from "react";
//stateful!!!!!!!
class Welcome extends Component {
    render() {
        //const {state1, state2} = this.state??!?!??!@?!@?!?1
        return (<div>
            <h1>
                Welcome {this.props.name} a.k.a {this.props.heroName}
            </h1>
            {this.props.children}
        </div>)
    }
}

export default Welcome