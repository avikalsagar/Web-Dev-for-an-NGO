import React from 'react';

import axios from 'axios';

export default class Response extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
      //"https://jsonplaceholder.typicode.com/users"
      //"http://127.0.0.1:8000/regdir/api/"
    axios.get("http://127.0.0.1:8000/regdir/api/")
      .then(res => {
        const persons = res.data;
        this.setState({ persons: res.data });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li key ={person.id}>{person.name}</li>)}
      </ul>
    )
  }
}
