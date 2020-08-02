import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {resume} from '../../Assets';
import {Grid,Typography,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    flexCenter: { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }
}));
const CV = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
        <Grid item md={2} className={classes.flexCenter}>
            <img src={resume} height={100} width={100} alt="cvIcon"></img>
        </Grid>
        <Grid item md={10} className={classes.flexCenter} style={{ textAlign: 'center' }}>
            <Typography variant="h5" style={{ padding: '1.25em' }}>If you are interested in knowing more about my professional career, you can download my CV.</Typography>
            <Button size="large" variant="outlined">
                Download CV
                    </Button>
        </Grid>
        </React.Fragment>
    );
}

export default CV;