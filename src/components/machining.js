import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { deepPurple800, indigo200 } from 'material-ui/styles/colors'
import Avatar from 'material-ui/Avatar';

const Machining = () => (
    <Card style={{
      "backgroundColor":indigo200
    }}>
    <CardTitle title="CNC Machining" subtitle="Certified Everett Community College" style={{"backgroundColor":deepPurple800}}/>
    <CardText style={{
      "backgroundColor":indigo200,
    }}>
    I learned how to machine at Everett Community College, and have 6+ years experience in the workplace, as a Machinist. I worked on mostly Aluminum. I also worked with Titanium, Inconel, Copper, Stainless Steal, and even some plastics. I first learned how to work on Haas machines, and now am familiar with Mori-Seki, and Funuc controls. I've worked on a three machine cell ran lights out production.
    </CardText>
      <CardMedia
        // overlay={<CardTitle title="CNC Machinist" subtitle="Worked part time as a Machinist while going to school at Galvanize" />}
        style={{"backgroundColor": indigo200}}
      >
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection:'row',
        justifyContent:'space-around',
      }}>
          <Avatar src="./img/load.jpg"  size={`${1/3*90}%`} style={{
            "border-radius":"0%"
          }}/>
          <Avatar src="./img/Machine.jpg" size={`${1/3*90}%`} style={{
            "border-radius":"0%"
          }} />
          <Avatar src="./img/block.jpg"  size={`${1/3*90}%`} style={{
            "border-radius":"0%"
          }} />
        </div>
      </CardMedia>
    </Card>
);

export default Machining;
