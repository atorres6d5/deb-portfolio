import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { deepPurple800 } from 'material-ui/styles/colors'


const Machining = () => (
    <Card>
      <CardHeader
        title="About Me"
        subtitle="Web Development"
        style={{"backgroundColor": deepPurple800 }}
      />
      <CardMedia
        overlay={<CardTitle title="Machinist" subtitle="Worked part time as a Machinist while going to school at Galvanize" />}
      >
        <div>
          <img src="./img/load.jpg" alt=""  className="machining"/>
          <img src="./img/Machine.jpg" alt="" className="machining" />
          <img src="./img/block.jpg" alt="" className="machining" />
        </div>
      </CardMedia>
      <CardTitle title="CNC Machining" subtitle="Certified Everett Community College" />
      <CardText>
        Learned how to machine at Everett Community College and have 6+ years exp. in the workplace as a Machinist. Worked on mostly Aluminium. Also worked with Titanium, Inconel, Copper, Stainless Steal, and even some plastics. Aerospace Industry ITAR worker
      </CardText>
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
);

export default Machining;
