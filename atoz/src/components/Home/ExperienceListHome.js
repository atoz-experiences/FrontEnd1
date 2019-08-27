import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import ExperienceCard from "./ExperienceCard";

// set experience as all on page load and then when user selects, set state and make dynamic

function ExperienceList() {

    const [experiences, setExperiences] = useState([])
    
    useEffect(() => {
        axios.get('https://atoz-backend.herokuapp.com/api/experiences')
            .then( r => {
                setExperiences(r)
            })
            .catch( e => console.log('Axois Experience GET Error:', e))
    }, [experiences])

    return (
        <div>
            <Route 
                exact path="/" 
                render={props => <ExperienceCard {...props} ex={experiences.map(e => e)} />}
            />
            <Route 
                exact path="/adventures" 
                render={props => <ExperienceCard {...props} ex={experiences.map(e => e)} />}
            />
            <Route 
                exact path="/food-tours" 
                render={props => <ExperienceCard {...props} ex={experiences.map(e => e)} />}
            />
            <Route 
                exact path="/cooking" 
                render={props => <ExperienceCard {...props} ex={experiences.map(e => e)} />}
            />
            <Route 
                exact path="/surfing" 
                render={props => <ExperienceCard {...props} ex={experiences.map(e => e)} />}
            />
            <Route 
                exact path="/concerts" 
                render={props => <ExperienceCard {...props} ex={experiences.map(e => e)} />}
            />
            <Route 
                exact path="/socail-impact" 
                render={props => <ExperienceCard {...props} ex={experiences.map(e => e)} />}
            />
        </div>
    );
}

export default ExperienceList;