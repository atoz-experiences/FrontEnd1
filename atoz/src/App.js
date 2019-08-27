import React from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';


import Form from './components/AddExperience/Form';
import ExperienceList from './components/Home/ExperienceList';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      experiences: [],
      whatever: null
    };
  }

  componentDidMount() {
    axios
      .get("https://atoz-backend.herokuapp.com/api/experiences")
      .then(response => this.setState({experiences: response.data}))
      .catch(error => console.log(error))
  };

  
render() {
  return (
    <div>
    <nav>
    <NavLink to="/experiences" >Experiences</NavLink>
    <NavLink to="/form" >Add Experience</NavLink>
    </nav>
    <Route exact path ="/experiences" render={props =>
    <ExperienceList {...props} experiences={this.state.experiences} />
    } />
    <Route path="/form" render={props => 
    <Form {...props} />
    } />    
    </div>
  );
}
}

export default App;
