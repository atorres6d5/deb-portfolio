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
    Learned how to machine at Everett Community College, and have 6+ years experience in the workplace as a Machinist. Worked on mostly Aluminum. Also worked with Titanium, Inconel, Copper, Stainless Steal, and even some plastics. Can work on Haas, Mori, and Funuk controls. Experience making ITAR parts. I have a few basic tools to bring to the job.
    </CardText>
      <CardMedia
        overlay={<CardTitle title="CNC Machinist" subtitle="Worked part time as a Machinist while going to school at Galvanize" />}
        style={{"backgroundColor": indigo200}}
      >
        <div>
          <Avatar src="./img/load.jpg"  size={`${1/3*100}%`} style={{
            "border-radius":"0%"
          }}/>
          <Avatar src="./img/Machine.jpg" size={`${1/3*100}%`} style={{
            "border-radius":"0%"
          }} />
          <Avatar src="./img/block.jpg"  size={`${1/3*100}%`} style={{
            "border-radius":"0%"
          }} />
        </div>
      </CardMedia>
    </Card>
);

export default Machining;
