import React from 'react';
import Toggle from './Components/Toggle';
import TopNav from './Components/TopNav';

function Exec(){
    //todo figure out how to pass the toggle boolean from toggle into topNav
    return(
        <div>
            <Toggle/>
            <TopNav button = Toggle.GetToggle()/>
        </div>
    )
}

export default Exec