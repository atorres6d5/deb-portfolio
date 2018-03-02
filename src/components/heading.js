import React from 'react';
import Avatar from 'material-ui/Avatar';


const Heading = ({name, title, image}) => (
  <div>
    <h1>{title}</h1>
    <Avatar
      src={image}
      size={350}
      style={{height: 'auto', 'border-radius': '75px'}}
    />
  </div>
);

export default Heading;
