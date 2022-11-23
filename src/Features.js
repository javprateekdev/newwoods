import React from 'react'
import FeatureSlider from './FeatureSlider'
import fimages from './fimages';
import Brochure from './Brochure';

const Features = () => {
  return (
    <>
    <div id='Gallery' >
            <h2 style={{textAlign:'center',background:'#015b51',borderRadius:'5px',color:'white',height:'35px'}}>Why to  Choose Godrej Woods ?</h2>
        </div>
    <div className='features'>
        
        <div style={{width:"50%"}}>
            <FeatureSlider fimages={fimages} />
         </div>
        <div style={{width:"50%",marginLeft:'15px'}}>
        <h4 style={{fontSize:'25px'}}>Specifications</h4>
        <ui>
            <li style={{fontSize:'18px',marginTop:'-15px'}}>Urban Forest Theme Project</li>
            <li style={{fontSize:'18px',marginTop:'4px'}}>Adjacent to 97-acre Golf Course</li>
            <li style={{fontSize:'18px',marginTop:'4px'}}>Green View from Every Apartment</li>
            <li style={{fontSize:'18px',marginTop:'4px'}}>Excellent Connectivity</li>
            <li style={{fontSize:'18px',marginTop:'4px'}}>Nearby are several International Schools and Hospitals </li>

        </ui>
        <div><Brochure/></div>
        </div>
</div>
    </>
    
  )
}

export default Features;