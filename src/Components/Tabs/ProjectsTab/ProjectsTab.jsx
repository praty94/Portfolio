import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProjectCards from './Projects/ProjectCards';
import ProjectsData from '../../../Data/Projects.json';
const ProjectTab = () => {
    return (
        <Grid container justify="center" alignItems="center" spacing={10} style={{ marginTop: 20 }}>
            {ProjectsData ? ProjectsData.data.map((item, index) => (
                <Grid item container justify="center" alignItems="center" xs={12} spacing={10} key={`rowContainer-${index}`}>
                    {item && item.map((item,index) => (
                        <Grid item key={`itemContainer-${index}`}>
                            <ProjectCards {...item}></ProjectCards>
                        </Grid>
                    ))}
                </Grid>
            )) : null}
        </Grid>

    )
}

export default ProjectTab;