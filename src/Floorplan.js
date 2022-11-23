import React from 'react';
import  FloorPlanDialog  from './FloorPlanDialog';
import {styled}  from  '@mui/material';
import Grid from '@mui/material/Grid';

const Floorplan = () => {

    const Wrapper = styled('div')(({ theme }) => ({ 
  
        [theme.breakpoints.down('sm')]: {
            displayWrap: 'block',
        }
      }));
    
   
  return (
    <>
    
  
   <h2 className='pricelist'  style={{textAlign:'center'}} id='plan'> Godrej Woods, Floor Plan</h2>
  
    
       
        
   <Wrapper>

   <Wrapper>


        <div className='floorplan'>

        
            <div style={{position:'relative'}}>
                <img src='https://i.imgur.com/KnjLpbe.jpg'  className='planimage' />
                <button className='btncheck'><FloorPlanDialog /></button>
                
            </div>
           
        
          
            <div style={{position:'relative'}}>
                <img src='https://i.imgur.com/GV701YK.jpg'  className='planimage' />
                <button className='btncheck'><FloorPlanDialog /></button>
            </div>
          
        </div >
       
        </Wrapper>     
        
        <div className='floorplan'>
            <div style={{position:'relative'}}>
                <img src='https://i.imgur.com/ykZj235.jpg' className='planimage'/>
                <button className='btncheck'><FloorPlanDialog /></button>
            </div>
            <div style={{position:'relative'}}>
                <img src='https://i.imgur.com/sFgsN4O.jpg'  className='planimage'/>
                <button className='btncheck' ><FloorPlanDialog /></button>
            </div>
        </div>
        </Wrapper>
        
      
    </>
    
  )
}

export default Floorplan;