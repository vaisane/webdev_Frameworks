import './App.css';
import React, { Component } from 'react'
import SearchView from './components/SearchView';
import productData from "./productData.json";
import AdminView from './components/AdminView';
export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       searchValue: "",
       productData: productData.products,
       showAdminPanel: false
    }
  }
  handleSearchChange = (event) =>{
    this.setState({searchValue: event.target.value});
  }
  toggleAdminView = () => {
    this.setState({showAdminPanel: !this.state.showAdminPanel})
  }
  addItems = (productName, manufacturer, price, rating) =>  {
    let newProducts = [...this.state.productData];
    let id = this.state.productData.length + 1;
    newProducts.push({"id": id, "product name": productName, "manufacturer": manufacturer, "price": price, "rating": rating})
    this.setState({productData: newProducts})
  }
  deleteItems = (index) => {
    let newProducts = [...this.state.productData];
    newProducts.splice(index, 1);
    this.setState({productData: newProducts})
    console.log(this.state.productData)
  }
  render() {
    return (
      <>
      {
        this.state.showAdminPanel
        ? <AdminView toggleview={this.toggleAdminView} additems={this.addItems} deleteitems={this.deleteItems} productData={this.state.productData}/>
        : 
        <>
        <div className="topBar">
        <button style={{alignSelf: "flex-end"}} onClick={this.toggleAdminView}>Admin</button>
        <input type="text" 
          className="searchInputField" 
          placeholder="Search..." 
          value={this.state.searchValue} 
          onChange={this.handleSearchChange} />
      </div>
      <SearchView productData={this.state.productData.filter(item => item["product name"].toLowerCase().includes(this.state.searchValue.toLowerCase()))}/>
      </>
      }
      
      </>
    )
  }
}
