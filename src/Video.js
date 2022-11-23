import React from "react";
import PropTypes from "prop-types";


const YoutubeEmbed = ( ) => 
 
(
    
  <div className="video" id='Tour'>
    <h2 style={{textAlign:'center'}}>Godrej Woods ,Take a Virtual Tour</h2>
    <iframe
      width="950"
      height="350"
      
      src={`https://www.youtube.com/embed/z0avNg3bDks`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;