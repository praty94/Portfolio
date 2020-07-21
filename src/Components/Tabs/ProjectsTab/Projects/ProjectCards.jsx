import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Button, CardHeader,Paper, CardMedia, CardContent, CardActions, Typography, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import ComputerIcon from '@material-ui/icons/Computer';
import Proptypes from 'prop-types';
import clsx from 'clsx';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height: 400
  },
  media: {
    height: 180
  },
  content:{
    height:50
  },
  description:{
    transition: "all 0.10s ease-out",
    padding:"15px 16px 0px 16px",
    margin:"-15px -16px 0px -16px",    
    borderRadius:"0px"
  },
  expandedDescription:{
    margin:"-70px -16px 0px -16px"
  }
}));
function getTrimmedDescription(str) {
  if (str && str.length > 90) {
    return str.substr(0, 87) + "...";
  }
  return str;
}
function ProjectCard(props) {
  const classes = useStyles();
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.title}
        subheader={props.subtitle}
      />
      <CardMedia
        className={classes.media}
        image={props.img}
        title={props.title}
      />
      <CardContent className={classes.content}>
      <Paper elevation={0} className={clsx(classes.description, {[classes.expandedDescription]: isDescExpanded})}>
        {isDescExpanded ?        
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>:
          <Typography variant="body2" color="textSecondary" component="p">
            {getTrimmedDescription(props.description)}
          </Typography>}
          </Paper>
        {props.description && props.description.length > 90 ?
          <Link component="button" color="secondary" onClick={() => { setIsDescExpanded(!isDescExpanded) }}>
            {isDescExpanded ? "See less.." : "See more.."}
          </Link> : null}

      </CardContent>
      <CardActions className={classes.actions}>
        {props.sourceDisabled ? null : <Button startIcon={<GitHubIcon />}>View Source</Button>}
        {props.demoDisabled ? null : <Button startIcon={<ComputerIcon />}>Live Demo</Button>}
      </CardActions>
    </Card>
  );
}

ProjectCard.propTypes = {
  title: Proptypes.string.isRequired,
  subtitle: Proptypes.string,
  description: Proptypes.string,
  sourceDisabled: Proptypes.bool,
  demoDisabled: Proptypes.bool
}

export default ProjectCard;