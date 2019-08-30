import React from 'react';
import { Link } from 'react-router-dom';

function TypeCard(props) {
    return (
        <div className="type-card">
            <div className="type-card-img-ctn">
                <img className="type-card-img" src={props.src} alt={props.type}/>
            </div>
            <div className="type-card-txt">
                <div className="type-card-title">{props.type}</div>
                <div className="type-card-description">{props.des}</div>
            </div>
        </div>
    );
}

function Type() {
    return (
        <div className="type-link-ctn">          
            <Link  className="type-link-a" to={`/adventures`} >
                <TypeCard type="Adventure" src="https://a0.muscache.com/im/pictures/b5ca14ba-87c5-4c44-8dbc-35fe514f0746.jpg?aki_policy=x_large" des="Hosted journeys to extraordinary places—all you have to do is show up." />
            </Link>
            <Link className="type-link-a" to={`/food-tours`} >
                <TypeCard type="Food Tours" src="https://a0.muscache.com/im/pictures/9ae4202f-3ab6-4684-8fa8-59af00320dba.jpg?aki_policy=x_large" des="Sink your teeth into cities around the world with tours led by culinary experts." />
            </Link>
            <Link className="type-link-a" to={`/cooking`} >   
                <TypeCard type="Cooking" src="https://a0.muscache.com/im/pictures/52aa45c1-d168-41d5-9149-445c8787358f.jpg?aki_policy=x_large" des="Sample local flavors and take home new skills with hands-on cooking classes by local experts." />
            </Link>
            <Link className="type-link-a" to={`/surfing`} >
                <TypeCard type="Surfing" src="https://a0.muscache.com/im/pictures/bbaee069-8069-459d-aebd-f527b9ed72e8.jpg?aki_policy=x_large" des="Catch a wave with experiences hand-picked by the World Surf League and hosted by a pro." />
            </Link>
            <Link className="type-link-a" to={`/concerts`} >
                <TypeCard type="Concerts" src="https://a0.muscache.com/im/pictures/4e8700d7-49f3-4165-b685-0c59524a1186.jpg?aki_policy=x_large" des="Feel the rhythm with intimate shows in unique spaces and listen to live music like never before." />
            </Link>
            <Link className="type-link-a" to={`/social-impact`} >
                <TypeCard type="Social Impact" src="https://a0.muscache.com/im/pictures/4e8700d7-49f3-4165-b685-0c59524a1186.jpg?aki_policy=x_large" des="Try something new while supporting a cause—100% of what you pay goes to a nonprofit." />
            </Link>  
        </div>
    );
}

export default Type;