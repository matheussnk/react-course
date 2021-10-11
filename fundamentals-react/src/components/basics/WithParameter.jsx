import React from "react";
export default function WithParameter(props){ 
    const status = props.grades >= 8 ? 'approved' : 'failed' 
    return (
        <div>
            <h2>{ props.title }</h2>
            <p>{ props.student }  got a { props.grades } and is {status} </p>
        </div>
    )
}