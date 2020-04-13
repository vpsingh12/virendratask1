import React from "react";
import "./GivenTask.css";
import ReactTable from "react-table";
import "react-table/react-table.css"; 
//import Modaler from "./Modaler.js";
import "./Modaler.css";
import {
    Button,
    Form,
    Card,
    Row,
    FormGroup, 
    Label,
    Input,
    Col,
    Table,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
    
  }  from "reactstrap";
 import {FaTrashAlt } from "react-icons/fa";
 import {FaPenAlt } from "react-icons/fa";


class GivenTask extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
        showModal: false ,
        firstName:"",
        lastName:"",
        email:"",
        contact:"" ,
        id:0 ,
        items:[]
       }
    }

    toggle = (e) => {
      this.setState({showModal:!this.state.showModal})
      console.log(e)
      }
     onInputChange = (event) => {
       this.setState({[event.target.name]:event.target.value})
       console.log(event.target.value)
     }
      onSubmitModel = (event) => {
     //event.preventDefault();
     let items = [...this.state.items];
     
    if ((this.state.firstName) && (this.state.lastName) && (this.state.email) && (this.state.contact) !=="") {
    
    items.push({
     // id:this.state.id,

      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email:this.state.email,
      contact:this.state.contact
    });

    this.setState({
      items,
      id:(this.state.id) + 1,
      firstName: '',
      lastName: '',
      email:'',
      contact:''
    });
    console.log()
 }
 else {
   alert ("Please fill all")
 }
     }

 render () {
    const columns = [{  
        Header: 'FirstName',  
        accessor: 'firstName',
        
        },
        {  
        Header: 'LastName',  
        accessor: 'lastName',
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
        Header: 'Contact',  
        accessor: 'contact',
        sortable: false ,
        //filterable: true
       },
       {  
        Header: 'Actions',  
        accessor: 'actions',
        Cell: row => (
          <div className="w-100 text-center">
            <Button
              className="mr-2 actions-button-1"
              color="white"
              title="Edit"
            >
              <FaPenAlt style={{ color: "blue"}}/>
            </Button>
            <Button
              className="actions-button-2"
              color="white"
              title="Delete"
            >
              <FaTrashAlt style={{ color: "red"}}/>         
            </Button>
          </div>
        ),
        sortable: false ,
        //filterable: true
       }
    ]
     return (
     <div>
       <h3 className="ml-5 my-5 text-primary">Authorised Personnel Detail</h3>
       <Card>
         <ReactTable  className="m-5"
                   data={this.state.items}
                   columns={columns}
                   noDataText = {"No Authorised Personnel !!"}
                   defaultPageSize = {8}
                   showPagination={false}
         />
       </Card>
       <Button className="mt-3 ml-5" color="danger" onClick={this.toggle}>Add here</Button>

          <Modal isOpen={this.state.showModal} toggle={this.toggle}  className="my-class" 
          >
            <ModalHeader toggle={this.toggle}>Add Authorised Personnel</ModalHeader>
            <ModalBody>
              <Row className="mb-3">
                 <Col md={6}>
                     <FormGroup>
                      <Label for="firstName">First Name<span className="text-danger">*</span></Label>
                       <input type="text" className="form-control text-dark" placeholder="Enter First Name" name="firstName" 
                        value={this.state.firstName} onChange={this.onInputChange} required
                      />
                     </FormGroup>
                  </Col>
                 <Col md={6}>     
                     <FormGroup>
                      <Label for="lastName">Last Name</Label>
                      <input type="text" className="form-control text-dark " placeholder="Enter Last Name" name="lastName" 
                       value={this.state.lastName} onChange={this.onInputChange}
                       />
                     </FormGroup>
                  </Col>
                  <Col md={6}>
                     <FormGroup>
                      <Label for="email">Email Address</Label>
                      <input type="email" className="form-control text-dark " placeholder="Enter Email" name="email"
                       value={this.state.email} onChange={this.onInputChange}
                       />
                     </FormGroup>
                  </Col>
                  <Col md={6}>
                     <FormGroup>
                      <Label for="contact">Contact No</Label>
                      <input type="number" className="form-control text-dark " placeholder="Enter Contact No" name="contact" 
                       value={this.state.contact} onChange={this.onInputChange}
                      />
                     </FormGroup>
                  </Col>
               </Row>
            </ModalBody>
            <ModalFooter>
            <Button type="submit" color="primary" onClick={this.onSubmitModel}>Submit</Button>
            </ModalFooter>
          </Modal>
     </div>
     )
 }
}
export default GivenTask;