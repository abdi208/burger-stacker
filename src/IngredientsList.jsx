import React from 'react';


const IngredientsList = props => {
    var mappedIngredients = props.ingredients.map((ingredient, id) => <li>{ingredient.name} <button>></button></li>)
    return (
    <div id = "ingredients">
        <ul>
            {mappedIngredients}
        </ul>
        
    </div>

    )
}

export default IngredientsList;