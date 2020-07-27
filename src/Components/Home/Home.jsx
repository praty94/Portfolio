import React, { useRef } from 'react';
import Header from '../HeaderNav/HeaderNav';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { background, webLogo,codeLogo } from '../../Assets';
import { Grid, Typography, Button, Paper, Box } from '@material-ui/core';
//import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import MailIcon from '@material-ui/icons/Mail';
//import { themeColors } from '../../Theme/ThemeHelper';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useEffect } from 'react';
//import { green } from '@material-ui/core/colors';
// import Tabs from '../Tabs/Tabs';

//const whiteShapes = [squareWhite, hexagonWhite, triangleWhite, circleWhite, crossWhite];

const useStyles = makeStyles((theme) => ({
    sectionContainer: {
        height: "100vh",
        textAlign: "left",
        backgroundImage: 'linear-gradient(to left top, #f2c570, #efc87f, #eccb8e, #e8ce9c, #e5d1ab);'
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
        },
    },
    nameMarginNormal: {
        marginTop: '8rem'
    },
    nameMarginSmall: {
        marginTop: '2rem'
    },
    mainTextContent: {
        padding: theme.spacing(1),
        textAlign: "left",
        // [theme.breakpoints.down('xs')]: {
        //     textAlign: 'center'
        // },
    },
    smallText: {
        fontSize: '2.25rem'
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
                        <Grid className={clsx({ [classes.nameContainer]: true, [classes.nameMarginNormal]: minHeight580, [classes.nameMarginSmall]: !minHeight580 })}>
                            <strong>Pratyay</strong><span style={{ fontWeight: 'lighter' }}>Bandyopadhyay</span>
                        </Grid>
                        <Grid className={classes.jobContainer}>
                            <Typography variant="h3" className={clsx({ [classes.adaptiveText]: true, [classes.smallText]: !minHeight490 })}><strong ref={roleTxt}></strong></Typography>
                        </Grid>

                        <Button size="large" className={classes.location} disabled>
                            <LocationOnIcon></LocationOnIcon> India
                        </Button>
                        <div className={clsx({ [classes.socialContainer]: true, [classes.socialMarginNormal]: minHeight490, [classes.socialMarginSmall]: !minHeight490 })}>
                            <Button size="large" variant="outlined">
                                Get in touch
                            </Button>
                        </div>
                    </div>
                </Box>
                <div className="someArea"></div>
                <div className="area">
                    <ul className="staticShapes">
                        <li><img height={400} width={400} src={webLogo} alt="animLogo"></img></li>
                        <li><img height={300} width={300} src={codeLogo} alt="codeLogo"></img></li>
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

            <Paper square={true} className={classes.sectionContainer}>
                <Grid>

                </Grid>
            </Paper>
        </React.Fragment>

    );
}

export default Home;