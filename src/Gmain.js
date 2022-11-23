import React from 'react';
import { Grid ,styled} from '@mui/material';
import ImageSlider from './ImageSlider';
import images from "./images";
import ContactPage from './ContactPage';
import Banner from './Banner';
import Features from './Features';
import Price from './Price';
import Floorplan from "./Floorplan";
import Location from "./Location";
import Ammenities from "./Ammenities";
import YoutubeEmbed from "./Video";
import Footer from './Footer';
import GuestFooter from './GuestFooter';
import Corner from './Corner';
import Planslider from './Planslider';
import Fade from './Fade';




const Gmain = () => {

  const NoWrap = styled('div')(({ theme }) => ({ 
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));
  return (
    <div>
<Grid container lg={12} xs={12} xm={12} sm={12} spacing={2} style={{marginTop:'50px'}}>

  <Grid item lg={8} xs={12} xm={12} sm={12} >
  <Fade images={images} />
    </Grid>
    
   <Grid item lg={8} xs={12} xm={12} sm={12}>
    
   <Banner />
  <Corner/>
  </Grid>
  <Grid item lg={8} xs={12} xm={12} sm={12}>
    
  <Features />
   </Grid>
   <Grid item lg={8} xs={12} xm={12} sm={12}>
    
   
     </Grid>
     <Grid item lg={8} xs={12} xm={12} sm={12}>
    
     <Floorplan />
     </Grid>
     <Grid item lg={8} xs={12} xm={12} sm={12}>
    
     <Location />
     </Grid>
     <Grid item lg={8} xs={12} xm={12} sm={12}>
    
     <Ammenities />
    </Grid>
    <Grid item lg={8} xs={12} xm={12} sm={12}>
    
    <YoutubeEmbed />
    </Grid>
    < NoWrap className="sidebar" style={{width:"27%",height:'75%'}}>
   <ContactPage />
   </ NoWrap>
   <Grid item lg={12} xs={12} xm={12} sm={12}>
    
   <GuestFooter /> 
    </Grid>
    
</Grid>


    </div>
  )
}

export default Gmain;