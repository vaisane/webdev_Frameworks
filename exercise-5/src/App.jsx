import './App.css';
import React, { Component } from 'react'
import SearchView from './components/SearchView';
import AdminView from './components/AdminView';
import axios from 'axios';

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
   axios.post('http://localhost:4000/products', {
     name: productName,
     manufacturer: manufacturer,
     price: price,
     category: category,
     rating: rating
   })
   .then(res => this.setState({productData: res.data}))
   .catch(error => console.log(error))
  }

  deleteItems = (index) => {
    axios.delete("http://localhost:4000/products/", { data: {id: this.state.productData[index].id}})
    .then(res => this.setState({productData: res.data}))
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
