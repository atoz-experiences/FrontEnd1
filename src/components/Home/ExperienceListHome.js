import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import ExperienceCard from "./ExperienceCard";

// set experience as all on page load and then when user selects, set state and make dynamic

function ExperienceListHome() {

    const [experiences, setExperiences] = useState()
    
    const getData = () => {

        axios
        .get(`https://atoz-backend.herokuapp.com/api/experiences`)
        .then(r => {
            setExperiences(r.data.experiences)
        })
        .catch( e => console.log('Axios Experience GET Error:', e))
    
    };

    useEffect(getData, [])
    
    if (experiences != null || experiences != undefined) {
        console.log("Experiences Array: ", experiences)  
        return (
            <div>                
                <div className="experiences-ctn">
                    {experiences.map( el => {
                        return (                    
                            <div>
                                <Route
                                    exact path="/" 
                                    render={props => <ExperienceCard {...props} ex={el} />}
                                />
                                <Route 
                                    exact path="/adventures" 
                                    render={props => <ExperienceCard {...props} ex={el} />}
                                />
                                <Route 
                                    exact path="/food-tours" 
                                    render={props => <ExperienceCard {...props} ex={el} />}
                                />
                                <Route 
                                    exact path="/cooking" 
                                    render={props => <ExperienceCard {...props} ex={el} />}
                                />
                                <Route 
                                    exact path="/surfing" 
                                    render={props => <ExperienceCard {...props} ex={el} />}
                                />
                                <Route 
                                    exact path="/concerts" 
                                    render={props => <ExperienceCard {...props} ex={el} />}
                                />
                                <Route 
                                    exact path="/social-impact" 
                                    render={props => <ExperienceCard {...props} ex={el} />}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
    else {
      return (
        <div>
            <div className="loading">Loading...</div>
        </div>
      )
    }
}

export default ExperienceListHome;