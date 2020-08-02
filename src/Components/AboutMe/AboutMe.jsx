import React from 'react';
import { Typography, Grid, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { praty94img } from '../../Assets';
import { themeColors } from '../../Theme/ThemeHelper';

const useStyles = makeStyles((theme) => ({
    parentContainer: {
        textAlign: 'center',
        background: '#222',
        marginTop: '2em',
        paddingTop: '2em',
        borderRadius: "20px"
    },
    aboutMeTextContainer: {
        textAlign: 'left',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.25rem',
            textAlign: "center"
        }
    },
    avatarLarge: {
        height: 200,
        width: 200,
        boxShadow: '-10px 10px #4d4637'
    },
    aboutMeContainer: {
        padding: '4em',
        [theme.breakpoints.down('md')]: {
            padding: '2em'
        }
    },
    heading: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '2.25rem'
        }
        //color:themeColors.common.sectionColor,
        //textShadow:'-3px 3px #4d4637',        
        //borderBottom:`10px ${themeColors.common.sectionColor} solid`
    },
    headingUnderLine:
    {
        backgroundColor: themeColors.common.sectionColor,
        height: '5px', textAlign: 'center',
        width: '200px',
        [theme.breakpoints.down('xs')]: {
            width: '150px'
        }
    }
}));
const AboutMe = () => {
    const classes = useStyles();
    return (
            <div className={classes.parentContainer}>
                <Grid container justify="center" alignItems="center" style={{ flexDirection: "column" }}>
                    <Typography variant="h3" className={classes.heading}><strong>ABOUT ME</strong></Typography>
                    <div className={classes.headingUnderLine}></div>
                </Grid>
                <Grid container justify="center" alignItems="center" className={classes.aboutMeContainer} spacing={4}>
                    <Grid item md={3}>
                        <Avatar alt="Pratyay Bandyopadhyay" src={praty94img} className={classes.avatarLarge} />
                    </Grid>
                    <Grid item md={9} className={classes.aboutMeTextContainer}>
                        <Typography variant="h5">Hello! I’m Pratyay. A full stack software engineer. </Typography>
                        <Typography variant="h5">My aim is to create appealing, intuitive UIs and integrate them with well thought out data models.</Typography>
                        <Typography variant="h5" style={{ marginTop: 20 }}>I’m always up for new challenges !</Typography>
                        <Typography variant="h5">If you are looking for a developer for your next project , let's chat!</Typography>
                    </Grid>
                </Grid>
            </div>
    );
}

export default AboutMe;