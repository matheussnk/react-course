import React from "react"

export default (props) => {
    const {min,max } = props;
    const random = parseInt(Math.random() * (max - min)) + min;
    return (
        <div>
            <h2>Random Value</h2>
            <p><strong>Min value</strong> = {min} </p>
            <p><strong>Max value</strong> = {max} </p>
            <p><strong>Chosen value</strong> =  {random} </p>
        </div>
    );
};