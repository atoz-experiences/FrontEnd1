import React from "react";
import { Router, Route } from "react-router-dom";
import Type from "./Type";
import ExperienceList from "./ExperienceList";

function HomePage() {
    return (
        <div>
            <Type />
            <ExperienceList />
        </div>
    )
}

function Home() {

    return (
        <Router>
            <div>
                <Route path="/" exact component={HomePage} />
            </div>
        </Router>
    );
}

export default Home;