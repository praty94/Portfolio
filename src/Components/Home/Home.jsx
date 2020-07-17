import React from 'react';
import Header from '../HeaderNav/HeaderNav';
import { makeStyles } from '@material-ui/core/styles';
import { background } from '../../Assets';
import { Grid, Typography, Button } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import Tabs from '../Tabs/Tabs';

const useStyles = makeStyles(() => ({
    headerNav: {
        backgroundImage: `linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.4)),url(${background})`,
        backgroundSize: "cover",
        height: "450px",
        borderTop: "8px solid #fc9d03",
        boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.6)",
        textAlign: "center"
    },
    location: {
        textTransform: "none",
        fontSize: "1.25rem",
        color: "rgba(255, 255, 255, 1)!important",
        fontWeight: "lighter"
    },
    socialButton: {        
        textAlign: 'center',
        color:'rgba(255, 255, 255, 1)',       
        '&:hover': {
            transform:'scale(1.25)',
            cursor:'pointer'
        },
        transition:'all 300ms'
    },
    socialContainer:{
        padding:"5rem 2rem 2rem 2rem" 
    },
    tabContainer:{
        marginTop:'-1.5rem'
    }
}));
const Home = () => {
    const classes = useStyles();
    return (
        <div>
        <div className={classes.headerNav}>
            <Header></Header>
            <Grid style={{ textAlign: "center", marginTop: 75,color:'rgba(255,255,255,1)' }}>
                <Typography variant="h4"><strong>Full Stack Software Engineer</strong></Typography>
            </Grid>

            <Button size="large" className={classes.location} disabled>
                <LocationOnIcon></LocationOnIcon>
                    India
            </Button>
            <Grid container justify="center" alignItems="center" className={classes.socialContainer} spacing={1}>
                <Grid item xs={3} sm={2} container justify="center" alignItems="center">
                    <div className={classes.socialButton}>
                        <LinkedInIcon></LinkedInIcon>
                        <Typography>LinkedIn</Typography>
                    </div>                                      
                </Grid>
                <Grid item xs={3} sm={2} container justify="center" alignItems="center">
                    <div className={classes.socialButton}>
                        <GitHubIcon></GitHubIcon>
                        <Typography>GitHub</Typography>
                    </div>                                      
                </Grid>
                <Grid item xs={3} sm={2} container justify="center" alignItems="center">
                    <div className={classes.socialButton}>
                        <MailIcon></MailIcon>
                        <Typography>Mail</Typography>
                    </div>                                      
                </Grid>
            </Grid>
        </div>
        <Grid className={classes.tabContainer}>
            <Tabs></Tabs>
        </Grid>
    </div>

    );
}

export default Home;