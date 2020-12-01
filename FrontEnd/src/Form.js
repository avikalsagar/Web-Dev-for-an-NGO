import React, { Component } from "react";
import axios from 'axios';
import Response from './Components/Response.js';


class Form extends React.Component {
    constructor(props) {
      super(props);
      //this.state = {value: '',};
      //this.state = {name: ''};//, Email: '', Pnumber: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    state ={
      name:"Adi"
    }
    

   // componentDidMount() {
    //  axios.get(`https://jsonplaceholder.typicode.com/users`)
    //    .then(res => {
    ///      const names = res.data;
    //      this.setState({ names });
    //    })
    //}

    //http://127.0.0.1:8000/regdir/api/

    /*componentDidMount() {
      this.refreshList();
    }

    refreshList = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(res => this.setState({ todoList: res.data }))
        .catch(err => console.log(err));
    };*/

    //"{"user":{"name":"Shinay"}}"
    handleChange = event => {
      this.setState({name: event.target.value});
      //this.setState({Name: event.target.value});
     // this.setState({Email: event.target.value});
     // this.setState({Pnumber: event.target.value});
    };
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.name);
      event.preventDefault();
   /* handleSubmit = item => {
        //this.toggle();
        if (item.id) {
          axios
            .put(`http://127.0.0.1:8000/regdir/api/${item.id}/`, item)
            .then(res => this.refreshList());
          return;
        }
        axios
          .post("http://127.0.0.1:8000/regdir/api/", item)
          .then(res => this.refreshList());
      //}; */
     
      const user = {
        name: this.state.name,
      // Pnumber: this.state.Pnumber
      }
      //"https://jsonplaceholder.typicode.com/users"
      //"http://127.0.0.1:8000/regdir/api/"
      axios.post("http://127.0.0.1:8000/regdir/api/", { user })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })

        .catch(function(error) {
          console.log(error.response.data); // this is the part you need that catches 400 request
        });

    };
  
    render() {
      
      return (
          <main>
          <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange} />
            </label>




          <button type ="submit">Add</button>
           
           </form>
           <Response/>
           </main>

        

      );
    }
  }

  export default Form;