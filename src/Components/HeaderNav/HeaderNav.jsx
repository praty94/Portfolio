import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },  
  title: {
    flexGrow: 1,
    textAlign:'left',
    fontSize:'1.25rem',
    [theme.breakpoints.down('xs')]: {
      textAlign:'center'
    },
    color:"rgba(255, 255, 255, 1)!important"
  },
  transparent:{
    background:"transparent",
    boxShadow:"none"
  },
  headerButton:{
    [theme.breakpoints.down('xs')]: {
      display:'none'
    },
    color:"rgba(255, 255, 255, 0.8)!important"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.transparent}>
        <Toolbar>      
          <p className={classes.title}>
            <strong>Pratyay</strong><span style={{fontWeight:'lighter'}}>Bandyopadhyay</span>
          </p>
          <Button className={classes.headerButton}>Projects</Button>
          <Button className={classes.headerButton}>Technologies</Button>
          <Button className={classes.headerButton}>About me</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}