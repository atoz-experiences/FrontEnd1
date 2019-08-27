import React from 'react';

const ExperienceList = function(props) {
    console.log(props, 'props from experiences')
    return(
        <div>
            {props.experiences.map(experience => (
                <div>
                <p><strong>Title</strong>{experience.title}</p>
                </div>
            ))}
        </div>
    )
}

export default ExperienceList;