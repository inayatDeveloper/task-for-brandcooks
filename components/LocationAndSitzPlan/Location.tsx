import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddLocation from './AddLocation';
import { locationInterface } from "../../types/location";
import { withStyles } from '@material-ui/core/styles';
const styles = {
    txtField: {
        "& label": {

            color: "red"
        },
        border: "1px solid green"
    },
    select: {
        "& label": {

            color: "white"
        },
        "& .MuiSelect-select": {
            color: "white"
        }
    }
};


function Location(props: any) {
    const { classes } = props;
    const addLocationRef = useRef();
    // Default location set here for pakistan
    const [locationList, setLocaitonList] = useState<locationInterface[]>([{ id: 1, Name: "Islamabad", Street: "I-8/4", PostalCode: "2343", City: "IslamAbad", Country: "Pakistan" }]);
    const [locationModalStatus, setOpenLocatonModal] = useState<Boolean>(false);

    // Method used to show select information of location in modal
    const handleEditLocation = (location: locationInterface) => {
        setOpenLocatonModal(!locationModalStatus);
        addLocationRef.current.editLocationInfo(location)
    }

    // Method used to add new location as well as edit location inforation
    const handleLocatonModal = (addingLoaction: locationInterface) => {
        if (Object.keys(addingLoaction).length && addingLoaction["Name"] !== undefined) {

            let findLocation = locationList.filter((location) =>
                location.id == addingLoaction.id
            )

            // if Case of adding to location list and else for editing
            if (!findLocation.length) {
                // for increament of id each record
                addingLoaction.id = locationList.length + 1;
                const list = [...locationList, addingLoaction];
                setLocaitonList(list);
            }
            else {
                // const list = findLocation.push()
                // setLocaitonList(list);
                let upDatedLocationList = locationList.map((info) => {
                    if (info.id == addingLoaction.id) {
                        info.Name = addingLoaction.Name;
                        info.Street = addingLoaction.Street;
                        info.PostalCode = addingLoaction.PostalCode;
                        info.City = addingLoaction.City;
                        info.Country = addingLoaction.Country;
                        return info;
                    }
                    else {
                        return info;
                    }
                })
                setLocaitonList(upDatedLocationList)
            }
        }
        setOpenLocatonModal(!locationModalStatus);
    };

    // add date row

    const [dateList, setDateList] = useState([{ date: new Date(), location: "" }]);

    const handleAddDateRow = () => {
        setDateList([...dateList, { date: Date, location: "" }]);
    };

    const handleDateChange = (newDate: Date | null, index: number) => {
        const list = [...dateList];
        list[index]["date"] = newDate;
        setDateList(list);
    };


    const handleChangeLocation = (event: SelectChangeEvent, index: number) => {
        const list = [...dateList];
        list[index]["location"] = event.target.value as string;
        setDateList(list);
    };

    return (
        <>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione laborum autem debitis quisquam recusandae id dolore sint molestiae sed quaerat ex quis, provident adipisci pariatur, sapiente incidunt nesciunt blanditiis iusto?</p>
            <Box sx={{ width: '100%' }}>
                <h3>Dates</h3>
                <Divider  sx={{border:"1px solid #1d1e1d"}}/>

                <Grid container mt={1} >

                    <Grid item={true} xs={11}>

                    </Grid>
                    <Grid item={true} xs={1}>
                        <Tooltip title="Lorem, ipsum dolor sit amet consectetur" style={{ backgroundColor: "white" }}>
                            <IconButton>
                                <InfoIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
               

                {dateList.map((date, index) =>
                    <Grid container mt={1} mb={2}>

                        <Grid item={true} xs={4} mr={5}>

                            <LocalizationProvider dateAdapter={AdapterDateFns} >
                                <DatePicker


                                    label="Date"
                                    value={date.date}
                                    onChange={(newDate) =>
                                        handleDateChange(newDate, index)
                                    }
                                    renderInput={(params) => <TextField {...params} sx={{
                                        "& .MuiIconButton-root": {
                                            color: "white !important"
                                        },
                                        "& .MuiOutlinedInput-input": {
                                            backgroundColor: "#1d1e1d",
                                            color: "white"
                                        }
                                        ,
                                        '&:hover,&:focus': {
                                            background: "white",
                                            outlineColor: "red",
                                        },
                                        "& .MuiOutlinedInput-root": {
                                            backgroundColor: "#1d1e1d"
                                        },


                                    }} />}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item={true} xs={5}>

                            <FormControl fullWidth style={{ background: "#1d1e1d" }} className={classes.select}>
                                <InputLabel id="demo-simple-select-label">Choose location</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={date.location}
                                    label="Location"
                                    onChange={(e) => handleChangeLocation(e, index)}
                                >
                                    {locationList.map((location) =>
                                        <MenuItem value={location.Name} key={location.id}>{location.Name}</MenuItem>
                                    )}

                                </Select>
                            </FormControl>
                        </Grid>

                    </Grid>
                )}
                <Divider  sx={{border:"1px solid #1d1e1d"}}/>

                <Grid container mt={5} mb={6}>
                    <Grid item={true} xs={12}>
                        <Button variant="outlined" endIcon={<AddIcon />} onClick={() => handleAddDateRow()} style={{ color: "white" }}>
                            Add date
                        </Button>
                    </Grid>

                </Grid>

                <h3>Locations</h3>
                <Divider  sx={{border:"1px solid #1d1e1d"}}/>
                {locationList.map((location,index) =>

                    <Grid container mt={5} mb={1} key={index}>
                        <Grid item={true} xs={9}>
                            {location.Country} {location.City} {location.Street}
                        </Grid>
                        <Grid item={true} xs={3}>
                            <Link href="#" onClick={() => handleEditLocation(location)} style={{ color: "white" }}> Edit location <EditIcon /> </Link>
                        </Grid>
                    </Grid>
                )}

                <Divider />
                <Grid container mt={5}>
                    <Grid item={true} xs={12}>
                        <Button variant="outlined" endIcon={<AddIcon />} onClick={() => handleLocatonModal({})} style={{ color: "white" }}>
                            Add location
                        </Button>
                    </Grid>
                </Grid>
                <AddLocation props={{ locationModalStatus, handleLocatonModal }} ref={addLocationRef} />
            </Box>

        </>
    );
}


export default withStyles(styles)(Location);
