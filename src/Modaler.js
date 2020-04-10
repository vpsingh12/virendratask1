import React from "react";
import {

  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Col,
  FormGroup,
  Label
} from "reactstrap";
import "./Modaler.css";

class Modaler extends React.Component {
    constructor(props) {
       super(props);
       this.state={
           //show:false,
           showModal: false ,
           firstname:"",
           lastname:"",
           email:"",
           contact:""   
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
  event.preventDefault();
}
    render() {

        return (
        <div>
          <Button className="mt-3 ml-5" color="danger" onClick={this.toggle}>Add here</Button>
          <Modal isOpen={this.state.showModal} toggle={this.toggle}  className="my-class" 
          >
            <ModalHeader toggle={this.toggle}>Add Authorised Personnel</ModalHeader>
            <ModalBody>
              <Row className="mb-3">
                 <Col md={6}>
                     <FormGroup>
                      <Label>First Name</Label>
                       <input type="text" className="form-control text-dark" placeholder="Enter First Name" name="firstname" 
                        value={this.state.firstname} onChange={this.onInputChange}
                      />
                     </FormGroup>
                  </Col>
                 <Col md={6}>     
                     <FormGroup>
                      <Label>Last Name</Label>
                      <input type="text" className="form-control text-dark " placeholder="Enter Last Name" name="lastname" 
                       value={this.state.lastname} onChange={this.onInputChange}
                       />
                     </FormGroup>
                  </Col>
                  <Col md={6}>
                     <FormGroup>
                      <Label>Email Address</Label>
                      <input type="email" className="form-control text-dark " placeholder="Enter Email" name="email"
                       value={this.state.email} onChange={this.onInputChange}
                       />
                     </FormGroup>
                  </Col>
                  <Col md={6}>
                     <FormGroup>
                      <Label>Contact No</Label>
                      <input type="number" className="form-control text-dark " placeholder="Enter Contact No" name="contact" 
                       value={this.state.email} onChange={this.onInputChange}
                      />
                     </FormGroup>
                  </Col>
               </Row>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onSubmit={this.onSubmitModel}>Submit</Button>
            </ModalFooter>
          </Modal>
        </div>
        )
    }
}
 export default Modaler;