import React from 'react';
import HMap from './HMap';
import { Grid } from '@mui/material';

const Location = () => {
  return (
    <div id='Location'>
      <Grid container lg={12} xm={12} xs={12} spacing={2}>
      <Grid lg={12} xs={12} xm={12} >
      <h2 style={{textAlign:'center',background:'#015b51',borderRadius:'5px',color:'white',height:'35px'}}>Godrej Woods, Sector 43, Noida :Location Advantages</h2>
      </Grid>
       <Grid lg={12} xs={12} xm={12}>
       <HMap/>
       </Grid>
            </Grid>
        
    </div>
  )
}

export default Location;