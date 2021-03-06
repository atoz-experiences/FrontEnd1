import React from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';


import Form from './components/AddExperience/Form';
import ExperienceList from './components/Home/ExperienceList';
import UpdateForm from './components/AddExperience/UpdateForm';

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
      .then(response => this.setState({experiences: response.data.experiences}))
      .catch(error => console.log(error))
  };

  addExperience = experience => {
    axios
      .post("https://atoz-backend.herokuapp.com/api/experiences", experience )
      .then(response => {
        console.log(response);
        this.setState({ experiences: response.data });
        this.props.history.push("/experiences");
      })
      .catch(error => {
        console.log(error);
      })
  };

  setUpdateForm = (e, experience) => {
    e.preventDefault();
    this.setState({ whatever: experience });
    this.props.history.push("/update-form");
  }

  updateExperience = experience => {
    axios 
      .put(`https://atoz-backend.herokuapp.com/api/experiences/${experience.id}`, experience )
      .then(response => {
        console.log(response);
        this.setState({ experiences: response.data });
        this.props.history.push("/experiences");
      })
      .catch(error => {
        console.log(error);
      })
  }



  
render() {
  return (
    <div>
    <nav>
    <NavLink to="/experiences" >Experiences</NavLink>
    <NavLink to="/form" >Add Experience</NavLink>
    </nav>
    <Route exact path ="/experiences" render={props =>
    <ExperienceList {...props} experiences={this.state.experiences} setUpdateForm={this.setUpdateForm} />
    } 
    />
    <Route path="/form" render={props => 
    <Form {...props}  addExperience={this.addExperience} />
    } 
    />   
    <Route path="/update-form" render={props =>
    <UpdateForm {...props} activeExperience={this.state.whatever} updateExperience={this.updateExperience} />
    }
    />
    </div>
  );
}
}

export default App;
