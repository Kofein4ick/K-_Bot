import React from 'react';
import '../App.css'
import { Grid } from '@mui/material';

const Loader = () =>{

    return (
    <Grid container direction={"column"} alignItems={"flex-start"} className="d-flex align-items-center">
        <div style={{marginTop:'40vh'}} className="lds-dual-ring"></div>
    </Grid>
  )};
  
  export default Loader;