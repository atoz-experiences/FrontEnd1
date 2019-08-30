import React from "react";
import { Route } from "react-router-dom";
import Type from "./Type";
import ExperienceListHome from "./ExperienceListHome";

const HomePage = function(props) {
    return (
        <div className="home-ctn">
            <Type title={props.title} />
            <ExperienceListHome />
        </div>
    )
}

function Home() {

    return (
        <div>
            <Route 
                exact path="/" 
                render={props => <HomePage {...props} title="All Experiences" />}
            />
            <Route 
                exact path="/adventures" 
                render={props => <HomePage {...props} title="Adventures" />}
            />
            <Route 
                exact path="/food-tours" 
                render={props => <HomePage {...props} title="Food Tours" />}
            />
            <Route 
                exact path="/cooking" 
                render={props => <HomePage {...props} title="Cooking" />}
            />
            <Route 
                exact path="/surfing" 
                render={props => <HomePage {...props} title="Surfing" />}
            />
            <Route 
                exact path="/concerts" 
                render={props => <HomePage {...props} title="Concerts" />}
            />
            <Route 
                exact path="/social-impact" 
                render={props => <HomePage {...props} title="Social Impact" />}
            />
        </div>
    );

}

export default Home;