import React from 'react';


const BurgerPane = props => {
    var mappedStack = props.stack.map((ingredient, id) => <li key={id}>{ingredient.name}</li>)
    
    return (
    <div id ="burger">
        <div id ="stack">
        {mappedStack}
        </div>
        
        <button onClick= {(e) => props.clearStack(e)}>Clear</button>
    </div>
    
    )
    
}

export default BurgerPane