import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import runningImg from '../../images/running.jpg';
import styles from './styles.module.css';

const useStyles = makeStyles({
  card: {
    maxWidth: 250,
    backgroundColor: 'white',
    margin: '0 1em 1em 0.5em',
    position: 'relative',
    top: '0px',
  },
  media: {
    height: 175,
    padding: '5em 1em 5em 1em',
    position: 'relative',
    top: '0px',
  },
});

// Creating function that will make a sudo list for later API use
function Exercises() {
  const [list] = useState([
    {
      exerciseImg: runningImg,
      title: 'Run Your Heart Out!',
      text:
        'Run, run, and run some more.  Look into this great workout to see how you can improve on your workout.',
    },
    {
      exerciseImg: runningImg,
      title: 'Run Your Heart Out!',
      text:
        'Run, run, and run some more.  Look into this great workout to see how you can improve on your workout.',
    },
    {
      exerciseImg: runningImg,
      title: 'Run Your Heart Out!',
      text:
        'Run, run, and run some more.  Look into this great workout to see how you can improve on your workout.',
    },
    {
      exerciseImg: runningImg,
      title: 'Run Your Heart Out!',
      text:
        'Run, run, and run some more.  Look into this great workout to see how you can improve on your workout.',
    },
    {
      exerciseImg: runningImg,
      title: 'Run Your Heart Out!',
      text:
        'Run, run, and run some more.  Look into this great workout to see how you can improve on your workout.',
    },
    {
      exerciseImg: runningImg,
      title: 'Run Your Heart Out!',
      text:
        'Run, run, and run some more.  Look into this great workout to see how you can improve on your workout.',
    },
    {
      exerciseImg: runningImg,
      title: 'Run Your Heart Out!',
      text:
        'Run, run, and run some more.  Look into this great workout to see how you can improve on your workout.',
    },
  ]);

  return (
    <div style={styles.container}>
      <div style={styles.topBar}>Exercises</div>
      {list.map((exercise, index) => (
        <MediaCard key={index} index={index} exercise={exercise} />
      ))}
    </div>
  );
}

// Material UI Media Card that will be used for listing our different exercises
function MediaCard({ exercise }) {
  const classes = useStyles();

  return (
    <div className={styles.list}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={runningImg}
            title="Running"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {exercise.title}
            </Typography>
            <Typography variant="body3" color="textSecondary" component="p">
              {exercise.text}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button size="small" color="secondary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Exercises;
