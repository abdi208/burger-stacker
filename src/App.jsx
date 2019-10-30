import React from 'react';
import BurgerPane from './BurgerPane';
import IngredientsList from './IngredientsList';
import './App.css';

class App extends React.Component {
  state = {
    IngredientsDisplay: this.props.ingredients
  }
  render() {
    return (
      <div className="App">
        <IngredientsList ingredients={this.state.IngredientsDisplay}/>
        <BurgerPane />
      </div>
    )
  }
}

export default App;
