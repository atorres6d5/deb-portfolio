import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

const Heading = ({ title, image, techStack}) => (
  <div>
    <h1>{title}</h1>
    <Avatar
      src={image}
      size={350}
      style={{'border-radius': "50%"}}
    />
    <h1>Tech Stack</h1>
    <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection:'row',
    justifyContent:'center',
  }}>
      {techStack.map(tech=>{
        return (
          <Chip
            style={{
            marginLeft:5,
            marginRight:5,
            marginTop:5
            }}
            backgroundColor={"#b8bcc8"}
          >
            <Avatar
              src={tech.img}
            />
            {tech.name}
          </Chip>
      )
      })}
    </div>
  </div>
);

export default Heading;
