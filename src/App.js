import React from 'react';
import './App.css';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Select from "react-select";
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

const options = [
  { value: 'title', label: 'Title' }
 
];
const options1 = [
   { value: 'body', label: 'Content' }
 
];

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      posts:[],
      //id:101,
     // title:"",
     // body:"",
      //filteredData: [],
      searchString: "",
     // searching:""
    }
  }
  componentDidMount () {
 
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
    // const posts = res.data;
      this.setState({ posts: res.data
       });
      
    })
  }

/*onFilterChange = (event) => {
  this.setState({[event.target.name]:event.target.value})
  console.log(event.target.value);
}*/



 onFormSumit = (event) => {
    event.preventDefault();
   
 }

 onChangeInput = (event) => {
  this.setState({searchString:event.target.value});
 }

 /*onChangeInput = (event) => {
   this.setState({searchString:this.refs.Search.value});
   this.refs.Search.focus();
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
  
  };*/
  render() {
    let {searchString ,posts} = this.state;
    let newPost = posts;
    let search = searchString.trim().toLowerCase();

    if (search.length > 0) {
      newPost = newPost.filter((user) => {
        return user.title.toLowerCase().match(search) || user.body.toLowerCase().match(search);
      });
    }
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
      //filterable: true
      },
      {  
      Header: 'Content',  
      accessor: 'body',
      sortable: false ,
      //filterable: true
        }]
    
       
  



  return (
    <div>
    <AnotherTable  />
   
    <div className = "container-fluid react-classes">
    <Row>
    <Col md={3}>
    <Form  onSubmit={this.onFormSumit}>
        <input type="text" className="form-control  mt-3 mb-4 text-dark"  value={searchString}  placeholder="Search Here" onChange={this.onChangeInput} />
     </Form>
     </Col>
    </Row>
    
    
    <Row className="mb-3">
            <Col md={3}>
              <FormGroup>
                <Label>Title</Label>
                <Select
                   options={options}
                   value = {options.value}
                   classNamePrefix="Select"
                   placeholder="Select ...."
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label>Content</Label>
                <Select
                   options={options1}
                   classNamePrefix="Select"
                   placeholder="Select ...."
                />
              </FormGroup>
            </Col>
     </Row>
     
     <ReactTable className=""
                
                columns = {columns}        
                data = { /*filteredData.length > 0  ? filteredData : posts*/newPost}
                defaultPageSize = {10}  
                pageSizeOptions = {[10,20]}
                noDataText = "No Data Found"
                //filterable
              
     />

    </div>
    </div>             
  );
}
}
export default App;
