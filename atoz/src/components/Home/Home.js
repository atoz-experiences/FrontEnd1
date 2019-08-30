import React from "react";
import { Router, Route } from "react-router-dom";
import Type from "./Type";
import ExperienceListHome from "./ExperienceListHome";

const HomePage = function() {
    return (
        <div className="home-ctn">
            <Type />
            <ExperienceListHome />
        </div>
    )
}

function Home() {

    return (
        <div>
            <Route path="/" exact component={HomePage} />
        </div>
    );
}

export default Home;