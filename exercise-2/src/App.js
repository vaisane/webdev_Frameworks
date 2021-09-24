import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };
    
  }

  addItem = (itemType) => {
    let itemID = this.state.items.length + 1;
    let itemIndex = this.state.items.findIndex(e => e.value===itemType);
    this.setState(() => {
      if(itemIndex === -1){
        return {items: [...this.state.items,{id: itemID,value: itemType, qty: Math.floor(Math.random()*20)+1, unit: "x"}]}
      }
      else {
        let tmpStateCopy = [...this.state.items];
        tmpStateCopy[itemIndex].qty += Math.floor(Math.random()*20)+1;
        return {tmpStateCopy};
      }
    })
  }
  deleteItem = (id) => {
    let tmpStateCopy = [...this.state.items];
    let itemIndex = this.state.items.findIndex(e => e.id===id);
    tmpStateCopy.splice(itemIndex,1);
    this.setState({items: tmpStateCopy});
  }


  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } deleteItem={this.deleteItem}/>
      <button onClick={() => this.addItem("Carrots")}>Carrots</button>
      <button onClick={() => this.addItem("Apples")}>Apples</button>
      <button onClick={() => this.addItem("Strawberries")}>Strawberries</button>
      <button onClick={() => this.addItem("Beer")}>Beer</button>
    </div>
  }
}

export default App;