import React from 'react';

function Hero(props) {
    if (props.login) {
        return (
            <div>
                {props.welcome && <h2>Welcome to the Hero Page</h2>}
                <h1>Hey this is Heading</h1>
                <p>Hey this is Hero section</p>
                <h1>{props.props}</h1>
            </div>
        );
    } else {
        return <>
            {/* ternary operator */}
            {props.age >= 18 ? "Login Please to Continue" 
            : "You are not old enough to login"}
        </>
        
    }
}

export { Hero };