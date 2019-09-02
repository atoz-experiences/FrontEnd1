import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 275,
    minHeight: 190,
    marginTop: 32,
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px',
    borderRadius: 10,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    color: '#FF4081',
  },
  fiveTitle: {
    fontSize: '1.5rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 500,
    lineHeight: 1.33,
    letterSpacing: '0em',
  },
});

const ExperienceCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.ex.location}
        </Typography>
        <Typography className={classes.fiveTitle} component="h2">
          {props.ex.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.ex.price}
        </Typography>
        <Typography variant="body2" component="p">
          {props.ex.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button  className={classes.button} size="small">VIEW MORE</Button>
      </CardActions>
    </Card>
  );
}

export default ExperienceCard;