import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontSize: '1.5rem',
    display: 'none',
    color: "rgba(255, 255, 255, 1)!important"
  },
  transparent: {
    background: "transparent",
    boxShadow: "none"
  },
  appBar: {
    background: "rgba(0,0,0,1)",
    boxShadow: "none"
  }
}));

export default function HeaderNav(props) {
  const classes = useStyles();
  const [scrolled, setScrolled] = useState(false);
  const [page, setPage] = useState('home');
  const matches = useMediaQuery('(min-width:600px)');

  const handleChange = (event, newPage) => {
    setPage(newPage);
  };

  window.addEventListener('scroll', function () {
    if (scrolled !== (window.pageYOffset > 0))
      setScrolled(window.pageYOffset > 0)
  });

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={scrolled ? classes.appBar : classes.transparent}>
        <Toolbar>
          <p className={classes.title}>
            <strong>Pratyay</strong><span style={{ fontWeight: 'lighter' }}>Bandyopadhyay</span>
          </p>
          <ToggleButtonGroup size={matches ? "medium" : "small"} value={page} exclusive onChange={handleChange}>
            <ToggleButton value="home">
              Home
          </ToggleButton>
            <ToggleButton value="projects">
              Projects
          </ToggleButton>
            <ToggleButton value="tech">
              Technologies
          </ToggleButton>
            <ToggleButton value="aboutMe">
              About me
          </ToggleButton>
          </ToggleButtonGroup>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}