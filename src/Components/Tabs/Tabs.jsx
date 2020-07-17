import React from 'react';
import { Tab, Box, Tabs, Paper, Grid } from '@material-ui/core';
import AboutMeTab from './AboutMeTab/AboutMeTab';
import ProjectsTab from './ProjectsTab/ProjectsTab';
import TechnologiesTab from './TechnologiesTab/TechnologiesTab';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={2}>
        {props.children}
      </Box>
    </div>
  );
}

export default function DisabledTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Grid container justify="center" alignItems="center">
        <Paper square>
          <Tabs
            value={value}
            indicatorColor="secondary"
            onChange={handleChange}
            aria-label="page tabs"
            centered
          >
            <Tab label="Projects" />
            <Tab label="Technologies" />
            <Tab label="About Me" />
          </Tabs>
        </Paper>
      </Grid>
      <TabPanel value={value} index={0}>
        <ProjectsTab></ProjectsTab>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TechnologiesTab></TechnologiesTab>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AboutMeTab></AboutMeTab>
      </TabPanel>
    </React.Fragment>
  );
}