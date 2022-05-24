import React from 'react';

function Comp1( props ){
    return (<div className="c1">
                <h1> Este es es un componente externo, {props.name}, {props.age} años</h1>
           </div>);
}

export default Comp1;