import React from 'react'

const Hello = () => {
    //return(
        //<div classname = 'dummyClass'>
            //<h1> Hello MAN!</h1>
        //</div>)
    return React.createElement('div', {id: 'Hello', className: 'dummyClass'}, React.createElement('h1', null, 'Hello men'))
}

export default Hello;