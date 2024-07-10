import React from 'react';
import './TopNav.css';

function TopNav(){
    return(
        <div class = "NavContainerBox">
                <li className= 'NavBullet'>
                    <div className = 'ItemContainer'>
                        <div className = "Item">
                            <h3>Home</h3>
                        </div>
                        <div className = "Item">
                            <h3>Welcome</h3>
                        </div>
                        <div className = "Item">
                            <h3>Learn More</h3>
                        </div>
                    </div>
                </li>
        </div>
    )
}

export default TopNav;