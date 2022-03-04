import React, { useState, forwardRef, useImperativeHandle } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Image from 'next/image'
// select dropdown
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import LocationImage from "../svg/locationImage.png";

function AddLocation(props: { locationModalStatus: Boolean; handleLocatonModal: void, props: any }, ref: any) {

    const [maxWidth] = React.useState<DialogProps['maxWidth']>('md');
    const { locationModalStatus, handleLocatonModal } = props.props;
    // here is list of just three countries
    const [countryList] = useState([{ Name: "Pakistan" }, { Name: "America" }, { Name: "India" }, { Name: "Germany" }])
    const [locationList, setLocationList] = useState({ id: '', Name: "", Street: "", PostalCode: "", City: "", Country: "" });

    //Method use to handle input simple txt fields
    const handleInputChange = (event: any, index: number) => {
        const { name, value } = event.target;
        const list = { ...locationList };
        list[name] = value;
        setLocationList(list);
    };

    const handleChangeCountry = (event: SelectChangeEvent) => {
        const list = { ...locationList };
        list["Country"] = event.target.value as string;
        setLocationList(list);
    };

    useImperativeHandle(ref, () => ({
        editLocationInfo(location: any) {
            setLocationList(location)
        }
    }), [])

    const saveLocationInfo = () => {
        handleLocatonModal(locationList);
        setLocationList({ id: '', Name: "", Street: "", PostalCode: "", City: "", Country: "" })

    }
    const { Name, Street, PostalCode, City, Country } = locationList;

    return (
        <>

            <Box sx={{
                width: '100%'
            }}>
                <Dialog
                    fullWidth={true}
                    maxWidth={maxWidth}
                    open={locationModalStatus}
                    onClose={handleLocatonModal}
                    sx={{
                        width: '100%',
                        "& .MuiDialogTitle-root": {
                            backgroundColor: "#171515",
                            color: "white"
                        },
                        "& .MuiDialogContent-root": {
                            backgroundColor: "#171515",
                            color: "white"
                        },
                        "& .MuiDialogActions-root": {
                            backgroundColor: "#1d1e1d",

                        }
                    }}
                >
                    <DialogTitle>Create location</DialogTitle>
                    <Divider sx={{ border: "1px solid #1d1e1d" }} />
                    <DialogContent>
                        <Grid container mb={5}>
                            <Grid item={true} xs={12}>

                                <h2>Name</h2>
                            </Grid>
                            <Grid item={true} xs={12}>

                                <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" name="Name" value={Name} onChange={(e) => handleInputChange(e)} sx={{
                                    backgroundColor: "#1d1e1d",
                                    '& label': {
                                        color: "white"
                                    },
                                    "& .MuiOutlinedInput-input": {
                                        color: "white"
                                    }
                                }} />

                            </Grid>
                        </Grid>
                        <Divider sx={{ border: "1px solid #1d1e1d" }} />
                        <Grid mt={2}>
                            <Grid item={true} xs={12}>
                                <h2>Address</h2>
                            </Grid>
                            <Grid item={true} xs={12}>
                                <TextField fullWidth id="outlined-basic" label="Street" name="Street" value={Street} onChange={(e) => handleInputChange(e)} variant="outlined" sx={{
                                    backgroundColor: "#1d1e1d", color: "white",
                                    '& label': {
                                        color: "white"
                                    },
                                    "& .MuiOutlinedInput-input": {
                                        color: "white"
                                    }
                                }} />
                            </Grid>

                        </Grid>
                        <Grid container spacing={2} mb={4}>
                            <Grid item={true} xs={2} mt={2}>
                                <TextField fullWidth id="outlined-basic" label="postal code" variant="outlined" name="PostalCode" value={PostalCode} onChange={(e) => handleInputChange(e)} sx={{
                                    backgroundColor: "#1d1e1d", color: "white",
                                    '& label': {
                                        color: "white"
                                    },
                                    "& .MuiOutlinedInput-input": {
                                        color: "white"
                                    }
                                }} />
                            </Grid>
                            <Grid item={true} xs={5} mt={2}>
                                <TextField fullWidth id="outlined-basic" label="city" variant="outlined" name="City" value={City} onChange={(e) => handleInputChange(e)} sx={{
                                    backgroundColor: "#1d1e1d", color: "white",
                                    '& label': {
                                        color: "white"
                                    },
                                    "& .MuiOutlinedInput-input": {
                                        color: "white"
                                    }
                                }} />
                            </Grid>
                            <Grid item={true} xs={5} mt={2}>
                                <FormControl fullWidth style={{ background: "#1d1e1d" }} sx={{

                                    "& label": {

                                        color: "white"
                                    },
                                    "& .MuiSelect-select": {
                                        color: "white"
                                    },


                                }}>
                                    <InputLabel id="demo-simple-select-label">Choose Country</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={Country}
                                        label="Location"
                                        onChange={(e) => handleChangeCountry(e)}
                                    >
                                        {countryList.map((Country) =>
                                            <MenuItem value={Country.Name}>{Country.Name}</MenuItem>
                                        )}

                                    </Select>
                                </FormControl>
                            </Grid>

                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item={true} xs={12}>
                                <Image
                                    src={LocationImage}
                                    alt="Location image"
                                    width="1000"
                                    height={200}
                                />
                            </Grid>
                        </Grid>
                        <Divider sx={{ border: "1px solid #1d1e1d" }} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => saveLocationInfo()} variant="outlined" style={{ color: "white" }}>Save</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </>
    );
}

export default forwardRef(AddLocation)