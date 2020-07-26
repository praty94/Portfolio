import React from 'react';
import Header from '../HeaderNav/HeaderNav';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { background1, triangle, square, squareWhite, circle, hexagon, hexagonWhite, triangleBlue, triangleWhite, circleWhite, crossWhite } from '../../Assets';
import { Grid, Typography, Button, Paper, Box } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import { themeColors } from '../../Theme/ThemeHelper';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { green } from '@material-ui/core/colors';
// import Tabs from '../Tabs/Tabs';

const whiteShapes = [squareWhite, hexagonWhite, triangleWhite, circleWhite, crossWhite];
const useStyles = makeStyles((theme) => ({
    sectionContainer: {
        height: "100vh",
        textAlign: "left",
        background: themeColors.common.sectionColor
    },
    headerNav: {
        backgroundImage: `linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.4)),url(${background1})`,
        backgroundSize: "cover",
        backgroundPosition: 'right',
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 8vw))',
        marginBottom: '-8vw'
    },
    location: {
        textTransform: "none",
        fontSize: "1.25rem",
        color: "rgba(255, 255, 255, 1)!important",
        fontWeight: "lighter",
        [theme.breakpoints.down('xs')]: {
            padding: '8px 0px 8px 0px',
        },
    },
    socialButton: {
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 1)',
        '&:hover': {
            transform: 'scale(1.25)',
            cursor: 'pointer'
        },
        transition: 'all 300ms'
    },
    socialContainer: {
        padding: 8,
        marginTop:'4rem',
        [theme.breakpoints.down('xs')]: {
            padding: '8px 0px 8px 0px'
        },
    },
    tabContainer: {
        marginTop: '-1.5rem'
    },
    jobContainer: {
        color: "#FFF",
        padding: 16,
        [theme.breakpoints.down('xs')]: {
            padding: '16px 0px 16px 0px'
        },
    },
    nameContainer: {
        marginTop: 105,
        color: "#FFF",
        padding: 16,
        fontSize: '1.5rem',
        [theme.breakpoints.down('xs')]: {
            padding: '16px 0px 16px 0px',
        },
    },
    mainTextContent: {
        padding: theme.spacing(1),
        textAlign: "left",
        // [theme.breakpoints.down('xs')]: {
        //     textAlign: 'center'
        // },
    },
    adaptiveText: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '2.25rem'
        },
    },
    triangle: {
        width: 0,
        height: 0,
        borderBottom: '100px solid red',
        borderRight: '100vw solid transparent',
        position: 'absolute',
        top: '86.55vh'
    }
}));
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const getRandomProps = () => {
    const size = getRndInteger(10, 100);
    const opacity = Math.random() + 0.2;
    const shape = whiteShapes[getRndInteger(0, 5)];
    return { height: size, width: size, src: shape, style: { opacity: opacity } };
}
const Home = () => {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');
    return (
        <React.Fragment>
            <Header></Header>
            <div className={clsx(classes.headerNav, classes.sectionContainer)}>
                <Box padding={2} style={{zIndex:99,position:'relative'}}>
                    <div className={classes.mainTextContent}>
                        <Grid className={classes.nameContainer}>
                            <strong>Pratyay</strong><span style={{ fontWeight: 'lighter' }}>Bandyopadhyay</span>
                        </Grid>
                        <Grid className={classes.jobContainer}>
                            <Typography variant="h3" className={classes.adaptiveText}><strong>Full Stack Software Engineer</strong></Typography>
                        </Grid>

                        <Button size="large" className={classes.location} disabled>
                            <LocationOnIcon></LocationOnIcon> India
                        </Button>
                        <div className={classes.socialContainer}>
                            <Button size="large" variant="outlined">
                                Get in touch
                            </Button>
                        </div>
                    </div>
                </Box>

                 <div className="area">
                    <ul className="staticShapes">
                        <li><img height={200} width={200} src={crossWhite} ></img></li>
                        {/* <li><img height={150} width={150} src={hexagon}></img></li>
                        <li><img height={125} width={125} src={triangle}></img></li>
                        <li><img height={200} width={200} src={square}></img></li>
                        <li><img height={200} width={200} src={triangleBlue}></img></li> */}
                    </ul>
                   {/* <ul className="shapes">
                        <li><img height={20} width={20} src={circleWhite}></img></li>
                        <li><img height={20} width={20} src={squareWhite}></img></li>
                        <li><img height={20} width={20} src={triangleWhite}></img></li>
                        <li><img height={30} width={30} src={crossWhite}></img></li>
                        <li><img height={20} width={20} src={squareWhite}></img></li>
                        <li><img height={20} width={20} src={circleWhite}></img></li>
                        <li><img height={40} width={40} src={hexagonWhite}></img></li>
                        <li><img height={60} width={60} src={circleWhite}></img></li>
                        <li><img height={30} width={30} src={triangleWhite}></img></li>
                        <li><img height={45} width={45} src={triangleWhite}></img></li>
                        <li><img height={25} width={25} src={circleWhite}></img></li>
                        <li><img height={60} width={60} src={crossWhite}></img></li>
                        <li><img height={20} width={20} src={circleWhite}></img></li>
                        <li><img height={20} width={20} src={hexagonWhite}></img></li>
                        <li><img height={50} width={50} src={hexagonWhite}></img></li>
                    </ul>*/}
                </div >  
                {/* <div className={classes.triangle}></div> */}
            </div>

            <Paper square={true} className={classes.sectionContainer} elevation={2}>

            </Paper>
        </React.Fragment>

    );
}

export default Home;