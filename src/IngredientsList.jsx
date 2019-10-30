import React from 'react';


const IngredientsList = props => {
    var mappedIngredients = props.ingredients.map((ingredient, id) => <li key={id}>{ingredient.name} <button onClick={(e) => props.addIngredients(e,id)}>></button></li>)
    return (
    <div id = "ingredients">
        <ul>
            {mappedIngredients}
        </ul>
        
    </div>

    )
}

export default IngredientsList;