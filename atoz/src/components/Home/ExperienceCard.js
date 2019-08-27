import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const ExperienceCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.ex.image} alt="Experience" />
        <CardBody>
          <CardTitle>{props.ex.title}</CardTitle>
          <CardSubtitle>{props.ex.date}</CardSubtitle>
          <CardSubtitle>{props.ex.price}</CardSubtitle>
          <CardText>{props.ex.description}</CardText>
          <Button>See more</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ExperienceCard;