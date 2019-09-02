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
                exact path="/home" 
                render={props => <HomePage {...props} title="All Experiences" />}
            />
            <Route 
                exact path="/home/adventures" 
                render={props => <HomePage {...props} title="Adventures" />}
            />
            <Route 
                exact path="/home/food-tours" 
                render={props => <HomePage {...props} title="Food Tours" />}
            />
            <Route 
                exact path="/home/cooking" 
                render={props => <HomePage {...props} title="Cooking" />}
            />
            <Route 
                exact path="/home/surfing" 
                render={props => <HomePage {...props} title="Surfing" />}
            />
            <Route 
                exact path="/home/concerts" 
                render={props => <HomePage {...props} title="Concerts" />}
            />
            <Route 
                exact path="/home/social-impact" 
                render={props => <HomePage {...props} title="Social Impact" />}
            />
        </div>
    );

}

export default Home;