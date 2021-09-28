import './App.css';
import React, { Component } from 'react'
import SearchView from './components/SearchView';
import AdminView from './components/AdminView';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       searchValue: "",
       productData: [],
       showAdminPanel: false
    }
  }
  componentDidMount = () => {
    axios.get("http://localhost:4000/products")
      .then(res => this.setState({productData: res.data}))
      .catch(err => console.log(err))
  }

  handleSearchChange = (event) =>{
    this.setState({searchValue: event.target.value});
  }
  toggleAdminView = () => {
    this.setState({showAdminPanel: !this.state.showAdminPanel})
  }
  addItems = (productName, manufacturer, price, category, rating) =>  {
    let newProducts = [...this.state.productData];
    let id = uuidv4();
    newProducts.push({"id": id, productName: productName, "manufacturer": manufacturer, "price": price, "rating": rating})
    this.setState({productData: newProducts})
  
   axios.post('http://localhost:4000/products', {
     name: productName,
     manufacturer: manufacturer,
     price: price,
     category: category,
     rating: rating
   })
   .then(res => console.log(res))
   .catch(error => console.log(error))
  }
  deleteItems = (index) => {
    let newProducts = [...this.state.productData];
    console.log(this.state.productData[index].id)
    newProducts.splice(index, 1);
    this.setState({productData: newProducts})
    
    axios.delete("http://localhost:4000/products/", { data: {id: this.state.productData[index].id}})
    .then(res => console.log(res))
    .catch(error => console.log(error))
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
      <SearchView productData={this.state.productData.filter(item => item.productName.toLowerCase().includes(this.state.searchValue.toLowerCase()))}/>
      </>
      }
      
      </>
    )
  }
}
