import React from "react";
import "./AnotherTable.css";
import Select from "react-select";
import { Form,
         Table,
         Button,
         Label,
         FormGroup,
         Row,
         Col
        } 
    from 'reactstrap';
const options = [
  { value: 'Virendra', label: 'Virendra'},
  { value: 'Ankit',label:'Ankit'},
  { value: 'Deepu', label: 'Deepu'}
]

const options1 = [
  { value: 'Singh', label: 'Singh'},
  { value: 'Vats',label:'Vats'},
  { value: 'Thakur', label: 'Thakur'}
]
class AnotherTable extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           id:3 ,
           firstname:"",
           lastname:"",
           items:[],
           search:""
       }
   }


onSearchInput = (event) => {
  event.preventDefault();
  this.setState({search:event.target.value});
  console.log(event.target.value);
}

onFormSumit = (event) => {
    event.preventDefault();
    let items = [...this.state.items];
 if ((this.state.id) && (this.state.firstname) && (this.state.lastname) !=="") {
    
    items.push({
      id:this.state.id,
      firstname: this.state.firstname,
      lastname: this.state.lastname
    });

    this.setState({
      items,
      id:(this.state.id) + 1,
      firstname: '',
      lastname: ''
    });
 } 
 else {
alert("Please Fill All ");
 }
}
onChangeInput = (event) => {
    this.setState({[event.target.name]:event.target.value})
}
render() {
/*let filteredData = this.state.items.filter(
  (e) => {
    return  (e.firstname.toLowerCase().indexOf(this.state.search.toLowerCase())) ||  (e.lastname.indexOf(this.state.search.toLowerCase())) !==-1
  }
)*/
return (
<div className="container-fluid">
<div>
<input type="text" className="form-control w-50 text-dark" placeholder="Search here...." name="search" 
        value={this.state.search} onChange={this.onSearchInput} />
</div>
<Row className="mb-3 mt-3">
            <Col md={3}>
              <FormGroup>
                <Label>Firstname</Label>
                <Select
                   options={options}
                  // value = {options.value}
                   classNamePrefix="Select"
                   placeholder="Select ...."
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label>Lastname</Label>
                <Select
                   options={options1}
                   classNamePrefix="Select"
                   placeholder="Select ...."
                />
              </FormGroup>
            </Col>
     </Row>
<Form onSubmit={this.onFormSumit}/*className="form-inline mt-2 mb-2"*/>
      
       <div className="row mt-2 mb-2">
        <div className="col">
        <input type="text" className="form-control text-dark" placeholder="Enter First Name" name="firstname" 
        value={this.state.firstname} onChange={this.onChangeInput} />
        </div>
        <div className="col">
        <input type="text" className="form-control text-dark " placeholder="Enter Last Name" name="lastname" 
        value={this.state.lastname} onChange={this.onChangeInput}/>
        </div>
        <div className="col text-left">
        <Button>Click Here to Add in Table</Button>
        </div>
       </div>
</Form>    
<Table bordered className=" text-center tabless">
      <thead color="primary" style = {{backgroundColor:"darkcyan",color:"floralwhite"}} className="">
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Virendra </td>
          <td>Singh</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Ankit</td>
          <td>Vats</td>
        </tr>                     
        {this.state.items.map(item => {
              return (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                </tr>
              );
        })
        }
      </tbody>
    </Table>
    </div>
  );
}
}
export default AnotherTable;