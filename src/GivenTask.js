import React from "react";
import "./GivenTask.css";
import ReactTable from "react-table";
import "react-table/react-table.css"; 
import Modaler from "./Modaler.js";
import {
    Button,
    Form,
    Card,
    Row,
    FormGroup, 
    Label,
    Input,
    Col,
    Table
    
  }  from "reactstrap";



class GivenTask extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           show:false
       }
    }

 render () {
    const columns = [{  
        Header: 'FirstName',  
        accessor: 'firstname',
        
        },
        {  
        Header: 'LastName',  
        accessor: 'lastname',
        sortable : false,
        //filterable: true
        },
        {  
        Header: 'Email',  
        accessor: 'email',
        sortable: false ,
        //filterable: true
       },
       {  
        Header: 'Contacts',  
        accessor: 'contacts',
        sortable: false ,
        //filterable: true
       },
       {  
        Header: 'Actions',  
        accessor: 'actions',
        sortable: false ,
        //filterable: true
       }
    ]
     return (
     <div>
       <h3 className="ml-5 my-5 text-primary">Authorised Personnel Detail</h3>
       <Card>
         <ReactTable  className="m-5"
                   columns={columns}
                   noDataText = {"No Authorised Personnel !!"}
                   defaultPageSize = {8}
                   showPagination={false}
         />
       </Card>
       <Modaler className="mt-3 ml-5"/> 
     </div>
     )
 }
}
export default GivenTask;