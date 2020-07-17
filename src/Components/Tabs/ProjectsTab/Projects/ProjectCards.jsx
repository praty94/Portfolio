import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,Button,CardHeader,CardMedia,CardContent,CardActions,Typography} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import ComputerIcon from '@material-ui/icons/Computer';
import Proptypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

function ProjectCard(props) {
  const classes = useStyles();
 
  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.title}
        subheader={props.subtitle}
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions >
      {props.sourceDisabled ? null : <Button startIcon={<GitHubIcon />}>View Source</Button>}
      {props.demoDisabled ? null :  <Button startIcon={<ComputerIcon />}>Live Demo</Button> }                     
      </CardActions>      
    </Card>
  );
}

ProjectCard.propTypes = {
  title : Proptypes.string.isRequired,
  subtitle : Proptypes.string,
  description : Proptypes.string,
  sourceDisabled : Proptypes.bool,
  demoDisabled : Proptypes.bool
}

export default ProjectCard;