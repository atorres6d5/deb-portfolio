import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { deepPurple800, indigo200 } from 'material-ui/styles/colors'
import Avatar from 'material-ui/Avatar';
import Projects from './projects.js'



const Developer = ({}) => (
  <div>
    <Card style={{
      "backgroundColor":indigo200
    }}>
      {/* <CardMedia
        overlay={<CardTitle title="Web Developer" subtitle="Galvanize student, Full Stack Web Developer. JavaScript, React, Node Express, Postgress" />}
        style={{"backgroundColor": indigo200}}
      >
        <div>
          <img className="dev_pic"
            src="./img/Programmer-Developer-Wallpaper.jpg"/>
        </div>
      </CardMedia> */}
      <CardTitle title="Galvanize" subtitle="6 month Full time class, in a blended learning enviroment. Studied Full Stack Web Development and computer science concepts" style={{"backgroundColor":deepPurple800}}/>
      <Projects />
    </Card>
  </div>
);

export default Developer;
