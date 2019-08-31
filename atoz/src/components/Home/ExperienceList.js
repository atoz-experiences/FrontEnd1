
import React from 'react';
import "./ExperienceList.css";

const ExperienceList = function(props) {
    console.log(props, 'props from experiences')
    return(
        <div className="exContainer">
            {props.experiences.map(experience => (
                <div className="exCard">
                <p><strong>Title:</strong>{experience.title}</p>
                <p><strong>Date:</strong>{experience.date}</p>
                <p><strong>Location:</strong>{experience.location}</p>
                <p><strong>Description:</strong>{experience.description}</p>
                <p><strong>Price:</strong>{experience.price}</p>
                <p><strong>Image:</strong>{experience.image}</p>

                </div>
            ))}
        </div>
    )
}

export default ExperienceList;
