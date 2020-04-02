import React from 'react';
import './App.css';
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from "axios";
 import {
   Button,
   Form,
   Card,
   Row,
   FormGroup, 
   Label,
   Input,
   Col
 }  from "reactstrap";
import AnotherTable from './AnotherTable';


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      posts:[],
      //id:101,
      title:"",
      body:"",
      filteredData: [],
      searchInput: "",
      searching:""
    }
  }
  componentDidMount () {
 
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
     const posts = res.data;
     
      this.setState({ posts: posts
       });
      
    })
  }

onFilterChange = (event) => {
  this.setState({[event.target.name]:event.target.value})
  console.log(event.target.value);
}



 onFormSumit = (event) => {
    event.preventDefault();
   
 }
 onChangeInput = (event) => {
   
  this.setState({searchInput:event.target.value}, () =>
  this.globalSearch());
  console.log(event.target.value)

}
  globalSearch = () => {
    let { searchInput ,posts} = this.state;
  
    let filteredData = posts.filter(value => {
      return (
        value.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.body.toLowerCase().includes(searchInput.toLowerCase())
        //const val =  (filteredData.length > 0 && filteredData) || searchInput ? filteredData : this.state.posts 
                 
      );
    });
  
    this.setState({ posts : filteredData });
  
  };
  render() {
    let {filteredData ,searchInput ,posts ,searching} = this.state;



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
      sortable : false, 
      filterable: true
      },
      {  
      Header: 'Content',  
      accessor: 'body',
      sortable: false ,
      filterable: true
        }]
    
       
  



  return (
    <div>
    <AnotherTable  />
   
    <div className = "container-fluid react-classes">
    <Form  onSubmit={this.onFormSumit}>
        <input type="text" className="form-control w-50 mt-3 mb-4 text-dark" value={searchInput || ""} placeholder="Search Here" onChange={this.onChangeInput} />
     </Form>

     <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="title">Title</Label>
            <Input type="text" name="title" id="title" placeholder="Search by title...." onChange={this.onFilterChange}/>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="body">Content</Label>
            <Input type="text" name="body" id="body"   placeholder="Search by Content..."  onChange={this.onFilterChange}/>
          </FormGroup>
        </Col>
      </Row> 
    </Form>
     <ReactTable className=""
                
                columns = {columns}        
                data = { filteredData.length > 0  ? filteredData : posts}
                defaultPageSize = {10}  
                pageSizeOptions = {[10,20]}
                //filterable
              
     />

    </div>
    </div>             
  );
}
}
export default App;
