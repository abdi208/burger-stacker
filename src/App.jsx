import React from 'react';
import BurgerPane from './BurgerPane';
import IngredientsList from './IngredientsList';
import './App.css';

class App extends React.Component {
  state = {
    IngredientsDisplay: this.props.ingredients,
    stack: []
  }
  
  addIngredients = (e, id) => {
    e.preventDefault();
    console.log('add ingredient')
    const stackCopy = Array.from(this.state.stack);
    stackCopy.unshift(this.state.IngredientsDisplay[id]);
    this.setState({
      stack: stackCopy
    })
} 
clearStack = (e) => {
  console.log("Clearing list!")
  e.preventDefault();
  this.setState({
    stack: []
  })
}

  render() {

    return (
      <div className="App">
        <IngredientsList ingredients={this.state.IngredientsDisplay} addIngredients={this.addIngredients}/>
        <BurgerPane stack={this.state.stack} clearStack={this.clearStack}/>
      </div>
    )
  }
}

export default App;
