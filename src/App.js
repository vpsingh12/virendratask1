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
      body:""
    }
  }
 onChangeInput = (event) => {
   
   this.setState({[event.target.name]:event.target.value})
 }

 onFormSumit = (event) => {
    event.preventDefault();
    if(((this.state.body)&& (this.state.title)) !="") {
    this.setState({id:this.state.id + 1})
    }
    const firstName = event.target.querySelector("input[name='title']").value;
 const lastName = event.target.querySelector("input[name='body']").value;
 }
  //componentWillMount () {
    //localStorage.getItem("posts") && this.setState({
      //posts:JSON.parse(localStorage.getItem("posts"))
    //})
 // }
  componentDidMount () {
  //const val =  localStorage.setItem("posts",JSON.stringify(posts));
  //console (val);
    //if (!localStorage.getItem("posts")) {
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
       // const posts = res.data;
       console.log(res.data)
        this.setState({ posts:res.data
         });
        
      })
    //const val = localStorage.setItem("post",JSON.stringify(posts));
    //const val1 = localStorage.getItem("posts") && this.setState({
     // posts:JSON.parse(localStorage.getItem("posts"))
   // })
   // var posts;
    //localStorage.setItem( 'posts', JSON.stringify(posts) );
    //console.log( JSON.parse( localStorage.getItem( 'posts' ) ) );
    }// else {
     // console.log("using data from local storage");
    //}
    
  

  //componentWillUpdate (nextProp , nextState) {
    //localStorage.setItem("posts",JSON.stringify(nextState.posts));
  //}
  render() {
    const columns = [{  
      Header: 'Id',  
      accessor: 'id',
      width: 100,
      minWidth:100 ,
      maxWidth:100 ,
      //filterable:true
      },
      {  
      Header: 'Title',  
      accessor: 'title',
      sortable : false ,
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
    <AnotherTable       />
    <div className = "container-fluid react-classes">
  
     <ReactTable className=""
                columns = {columns}
                data = {this.state.posts}
                defaultPageSize = {10}  
                pageSizeOptions = {[10,20]}
              
     />

    </div>
    </div>             
  );
}
}
export default App;
