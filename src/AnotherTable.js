import React from "react";
import "./AnotherTable.css";
import { Form,
         Table,
         Button
        } 
    from 'reactstrap';

class AnotherTable extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           id:3 ,
           firstname:"",
           lastname:"",
           items:[]
       }
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

return (
<div className="container-fluid">
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
      <thead color="primary" style = {{backgroundColor:"darkcyan",color:"floralwhite"}}className="">
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