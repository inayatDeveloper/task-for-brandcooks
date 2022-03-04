import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Location from "./Location";
import Grid from '@mui/material/Grid';
import { withStyles } from '@material-ui/core/styles';
const styles = {

    tabs: {
        // "& .MuiButtonBase-root-MuiTab-root.Mui-selected": {
        //    color:"red"
        // },
        // "& .MuiTabs-indicator": {
        //     display: "none",
        //     backgroundColor: "orange"
        // },
        "& .Mui-selected": {
            color: "green !important",

        }
    }


};

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function LocationAndSitzPlanTabs(props: any) {
    const { classes } = props;
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <>
            {/* className={styles.main} */}
            <div>
                <Grid>
                    <Grid item={true} xs={12} style={{ display: "flex", justifyContent: "center" }} >
                        <h2>Location & Sitzplan</h2>

                    </Grid>
                </Grid>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider',  }}>
                        {/* className={classes.tabs} */}
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered sx={{
                          
                            "& .MuiTabs-indicator":{
                                backgroundColor:"#37c777"
                            },
                            "& .MuiTab-root":{
                                color:"white !important"
                            }
                            

                        }}>
                        <Tab label="Location" {...a11yProps(0)} />
                        <Tab label="Sitzplan" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Location />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Sitzplan
                </TabPanel>
            </Box>
        </div>
        </>
    );
}

export default withStyles(styles)(LocationAndSitzPlanTabs);