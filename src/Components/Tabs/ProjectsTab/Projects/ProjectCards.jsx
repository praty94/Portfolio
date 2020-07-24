import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Button, CardHeader,Paper, CardMedia, CardContent, CardActions, Typography, Link,IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import ComputerIcon from '@material-ui/icons/Computer';
import LaunchIcon from '@material-ui/icons/Launch';
import Proptypes from 'prop-types';
import clsx from 'clsx';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height: 400,
    borderRadius:20,
    '&:hover': {
      boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.3),0px 4px 5px 0px rgba(0,0,0,0.24),0px 1px 10px 0px rgba(0,0,0,0.22)',
      transform:'scale(1.01)',
      cursor:'default'
    },    
    transition: "all 0.25s ease-out"
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
  if (str && str.length > 85) {
    return str.substr(0, 82) + "...";
  }
  return str;
}
const openLink = (url, sameTab) => {
  if(url)
    sameTab ? window.location = url : window.open(url, "_blank");
}
function ProjectCard(props) {
  const classes = useStyles();
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.title}
        subheader={props.subtitle}
        action={props.demoDisabled ? null :
          <IconButton aria-label="settings">
            <LaunchIcon onClick={()=>openLink(props.demoLink)}/>
          </IconButton>
        }
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
        {props.sourceDisabled ? null : <Button startIcon={<GitHubIcon />} onClick={()=>openLink(props.sourceLink)}>View Source</Button>}
        {props.demoDisabled ? null : <Button startIcon={<ComputerIcon />} onClick={()=>openLink(props.demoLink)}>Live Demo</Button>}
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