import React from 'react'

const userInput = (props) => {
    console.log(props.changed);
    return <input type='text' onChange={props.changed}/>;
};

export default userInput;