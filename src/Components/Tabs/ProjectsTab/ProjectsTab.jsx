import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProjectCards from './Projects/ProjectCards';
import ProjectsData from '../../../Data/Projects.json';
const ProjectTab = () => {
    return (
        <Grid container justify="center" alignItems="center" spacing={2}>
            {ProjectsData ? ProjectsData.data.map((item, index) => (
                <Grid item key={index}>
                    <ProjectCards {...item}></ProjectCards>                    
                </Grid>
            )) : null}            
        </Grid>

    )
}

export default ProjectTab;