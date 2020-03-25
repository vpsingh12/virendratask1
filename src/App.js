import React from 'react';
import './App.css';
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from "axios";
  


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      posts:[]
    }
  }

  componentWillMount () {
    localStorage.getItem("posts") && this.setState({
      posts:JSON.parse(localStorage.getItem("posts"))
    })
  }
  componentDidMount () {
    if (!localStorage.getItem("posts")) {
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
       // const posts = res.data;
        this.setState({ posts:res.data });
        
      })
    } else {
      console.log("using data from local storage");
    }
    
  }

  componentWillUpdate (nextProp , nextState) {
    localStorage.setItem("posts",JSON.stringify(nextState.posts));
  }
  render() {
    const columns = [{  
      Header: 'Id',  
      accessor: 'id',
      width: 100,
      minWidth:100 ,
      maxWidth:100 ,
      filterable:true
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
        
  return (
    <div className = "react-classes">
     <ReactTable 
                columns = {columns}
                data = {this.state.posts}
                defaultPageSize = {10}  
                pageSizeOptions = {[10,20]}
                
     />
    </div>
                 
  );
}
}
export default App;
