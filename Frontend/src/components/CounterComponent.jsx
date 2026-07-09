import React from "react";

const CounterComponent = React.memo(({ name }) => {
    console.log("App re render")
    return(
    <>
            <h2>{name}</h2>
    
    </>
);
});

export default CounterComponent;
