import React from 'react';
import Box from '@material-ui/core/Box';
import ProjectCards from './Projects/ProjectCards';
const ProjectTab = () => {

    return (
        <div>
            <Box p={2}>                
                <ProjectCards title="Personal Portfolio" subtitle="July 2020" description="Personal portfolio application made in ReactJs"></ProjectCards>                
            </Box>            
        </div>
    )
}

export default ProjectTab;