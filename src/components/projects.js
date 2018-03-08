import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import { deepPurple800, indigo200 } from 'material-ui/styles/colors'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 950,
    height: 300,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: './img/projects/industry.png',
    title: 'Industry',
    what: "Track production time",
    github_front:"https://github.com/atorres6d5/Industry-frontend",
    github_server:"https://github.com/atorres6d5/industry-api"
  },{
    img:'./img/projects/dash_dash.png',
    title:'Dash Dash',
    what: 'Mobile - Alarm Clock',
    github_front:"https://github.com/atorres6d5/dashdash-frontend",
    github_server:"https://github.com/atorres6d5/dashdash-server"
  },{
    img:'./img/projects/grumble.png',
    title:'Grumble',
    what: 'Social platform to leave reviews on snacks',
    github_front:"https://github.com/atorres6d5/Grumble-frontend",
    github_server:"https://github.com/atorres6d5/galvanize-snacks"
  },{
    img:'./img/projects/hogwarts.jpg',
    title:"Hogwarts Athletics",
    what:'Home page for a sports teamd',
    github_front:"https://github.com/atorres6d5/Q2_Hogwarts_Athletics",
    github_server:"https://github.com/atorres6d5/Q2_backend"
  },{
    img:'./img/projects/spc_sheet.png',
    title:'SPC Tracker',
    what: 'Documentation for part dimensions',
    github_front:"https://github.com/atorres6d5/frontEndProject",
    github_server:""
  }

];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const Projects = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={550}
      style={styles.gridList}
    >
      <Subheader
        style={{"backgroundColor": deepPurple800}}
        >Projects</Subheader>
        {tilesData.map((tile, i) => (
          <GridTile
            key={i}
            title={tile.title}
            subtitle={<span><b>{tile.what}</b></span>}
            actionIcon={<IconButton href={tile.github_front} iconClassName="fab fa-github"></IconButton>}
          >
            <img src={tile.img} />
          </GridTile>
        ))}
    </GridList>
  </div>
);

export default Projects;
