import React from 'react';
import './App.css';
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from "axios";
 import {
   Button,
   Form,
   Card
 }  from "reactstrap";
import AnotherTable from './AnotherTable';


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      posts:[],
      id:101,
      title:"",
      body:"",
      filteredData: [],
      searchInput: "",
      isLoading: false,
    }
  }
 onChangeInput = (event) => {
   
   this.setState({searchInput:event.target.value}, () =>
   this.globalSearch());
   console.log(event.target.value)

 }

 onFormSumit = (event) => {
    event.preventDefault();
   
 }
  
  componentDidMount () {
 
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
       // const posts = res.data;
       
        this.setState({ posts:res.data , isLoading:false
         });
        
      })
    }
  
  globalSearch = (event) => {
    let { searchInput } = this.state;
    let filteredData = this.state.posts.filter(value => {
      return (
        value.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.body.toLowerCase().includes(searchInput.toLowerCase())
        //const val =  (filteredData.length > 0 && filteredData) || searchInput ? filteredData : this.state.posts 

      );
    });
    this.setState({ filteredData });
  };
  render() {
    const columns = [{  
      Header: 'Id',  
      accessor: 'id',
      width: 100,
      minWidth:100 ,
      maxWidth:100 ,
      filterable:false
      },
      {  
      Header: 'Title',  
      accessor: 'title',
      sortable : false ,
      filterable: true
      },
      {  
      Header: 'Content',  
      accessor: 'body',
      sortable: false ,
      filterable: true
        }]
    
       
  let {filteredData ,searchInput,posts} = this.state;
  return (
    <div>
    <AnotherTable       />
   
    <div className = "container-fluid react-classes">
    <Form  onSubmit={this.onFormSumit}>
        <input type="text" className="form-control w-50 mt-3 mb-4 text-dark" value={searchInput || ""} placeholder="Search Here" onChange={this.onChangeInput} />
     </Form>
     <ReactTable className=""
                
                columns = {columns}
                data = {filteredData.length > 0  ? filteredData : posts}
                defaultPageSize = {10}  
                pageSizeOptions = {[10,20]}
                filterable
              
     />

    </div>
    </div>             
  );
}
}
export default App;
