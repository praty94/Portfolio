import React, { useRef, useEffect } from 'react';
import Header from '../HeaderNav/HeaderNav';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { webLogo, codeLogo } from '../../Assets';
import { Grid, Typography, Button, Paper, Box } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AboutMe from '../AboutMe/AboutMe';
import CV from '../CV/cv';

const useStyles = makeStyles((theme) => ({
    sectionContainer: {
        height: "100vh",
        textAlign: "left"
    },
    sectionContainerFluid: {        
        paddingBottom: "2rem",
        minHeight: "100vh",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    gradientMain: {
        backgroundImage: 'linear-gradient(to left top, #f2c570, #efc87f, #eccb8e, #e8ce9c, #e5d1ab);'
    },
    gradientSecondary:{
        backgroundImage: 'linear-gradient(to right bottom, #f2c570, #efc87f, #eccb8e, #e8ce9c, #e5d1ab);'
    },
    headerNav: {
        //backgroundImage: `linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.4)),url(${background})`,
        background: "#222",
        backgroundSize: "cover",
        backgroundPosition: 'right'
    },
    clipSection: {
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
        }
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
        [theme.breakpoints.down('xs')]: {
            padding: '8px 0px 8px 0px'
        },
    },
    socialMarginNormal: {
        marginTop: '4rem'
    },
    socialMarginSmall: {
        marginTop: '1rem'
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
        color: "#FFF",
        padding: 16,
        fontSize: '1.5rem',
        [theme.breakpoints.down('xs')]: {
            padding: '16px 0px 16px 0px',
        }
    },
    nameMarginNormal: {
        marginTop: '8rem'
    },
    nameMarginSmall: {
        marginTop: '2rem'
    },
    mainTextContent: {
        padding: theme.spacing(1),
        textAlign: "left"
    },
    smallText: {
        fontSize: '2.25rem'
    },
    adaptiveText: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '2.25rem'
        }
    },
    aboutMeContainer: {
        paddingTop: theme.spacing(10),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4)
    },
    cvContainer: {
        padding: theme.spacing(4),
        color:'#fff'
    }
}));

const Home = () => {
    const classes = useStyles();
    const minHeight460 = useMediaQuery('(min-height:460px)');
    const minHeight490 = useMediaQuery('(min-height:490px)');
    const minHeight580 = useMediaQuery('(min-height:580px)');
    const roleTxt = useRef();

    let i = 0;
    const txt = 'Full Stack Software Engineer';
    const speed = 50;
    const typeWriter = () => {
        if (i < txt.length && roleTxt.current) {
            roleTxt.current.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    useEffect(() => {
        typeWriter();
        // eslint-disable-next-line
    }, []);

    return (
        <React.Fragment>
            <Header></Header>
            <div className={clsx({ [classes.headerNav]: true, [classes.sectionContainer]: true, [classes.clipSection]: minHeight460 })}>
                <Box padding={2} style={{ zIndex: 99, position: 'relative' }}>
                    <div className={classes.mainTextContent}>
                        <Grid className={clsx('shadowText', { [classes.nameContainer]: true, [classes.nameMarginNormal]: minHeight580, [classes.nameMarginSmall]: !minHeight580 })}>
                            <strong>Pratyay</strong><span style={{ fontWeight: 'lighter' }}>Bandyopadhyay</span>
                        </Grid>
                        <Grid className={classes.jobContainer}>
                            <Typography variant="h3" id="jobDesc" className={clsx('shadowText', { [classes.adaptiveText]: true, [classes.smallText]: !minHeight490 })}><strong ref={roleTxt}></strong></Typography>
                        </Grid>

                        <Button size="large" className={clsx('shadowText', classes.location)} disabled>
                            <LocationOnIcon></LocationOnIcon> India
                        </Button>
                        <div className={clsx({ [classes.socialContainer]: true, [classes.socialMarginNormal]: minHeight490, [classes.socialMarginSmall]: !minHeight490 })}>
                            <Button size="large" variant="outlined">
                                Get in touch
                            </Button>
                        </div>
                    </div>
                </Box>
                <div className="overlay"></div>
                <div className="area">
                    <ul className="staticShapes">
                        <li><img height={400} width={400} src={webLogo} alt="animLogo"></img></li>
                        <li><img height={300} width={300} src={codeLogo} alt="codeLogo"></img></li>
                    </ul>
                </div >
            </div>

            <Paper square={true} className={clsx(classes.gradientMain,classes.sectionContainerFluid)}>
                <Grid className={classes.aboutMeContainer}>
                    <AboutMe></AboutMe>
                </Grid>
            </Paper>
            <Grid container justify="center" alignItems="center" className={classes.cvContainer}>
                <CV></CV>
            </Grid>
            <Paper square={true}  className={clsx(classes.gradientSecondary,classes.sectionContainerFluid)}>
                <Grid className={classes.aboutMeContainer}>
                    <AboutMe></AboutMe>
                </Grid>
            </Paper>
        </React.Fragment>

    );
}

export default Home;