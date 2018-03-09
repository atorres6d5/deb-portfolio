import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import { deepPurple800, indigo200, deepPurple400 } from 'material-ui/styles/colors'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 950,
    height: 600,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: './img/projects/industry.png',
    title: 'Industry',
    what: "Track production time",
    github_front:"https://github.com/atorres6d5/Industry-frontend",
    github_server:"https://github.com/atorres6d5/industry-api",
    deployed_app:"https://industry-cap.herokuapp.com"

  },{
    img:'./img/projects/dash_dash.png',
    title:'Dash Dash',
    what: 'Mobile - Alarm Clock',
    github_front:"https://github.com/atorres6d5/dashdash-frontend",
    github_server:"https://github.com/atorres6d5/dashdash-server",
    deployed_app:"https://dashdash-frontend.herokuapp.com"
  },{
    img:'./img/projects/grumble.png',
    title:'Grumble',
    what: 'Social platform to leave reviews on snacks',
    github_front:"https://github.com/atorres6d5/Grumble-frontend",
    github_server:"https://github.com/atorres6d5/galvanize-snacks",
    deployed_app:"http://grumbleg67.surge.sh/"
  },{
    img:'./img/projects/hogwarts.jpg',
    title:"Hogwarts Athletics",
    what:'Home page for a sports teamd',
    github_front:"https://github.com/atorres6d5/Q2_Hogwarts_Athletics",
    github_server:"https://github.com/atorres6d5/Q2_backend",
    deployed_app:"http://flyingbroomsticks.surge.sh/"
  },{
    img:'./img/projects/spc_sheet.png',
    title:'SPC Tracker',
    what: 'Documentation for part dimensions',
    github_front:"https://github.com/atorres6d5/frontEndProject",
    github_server:"",
    deployed_app:"http://jemco_spc.surge.sh/"
  }

];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const Projects = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={250}
      style={styles.gridList}
    >
      <Subheader
        style={{"backgroundColor": deepPurple400 }}
        >Projects made at Galvanize</Subheader>
        {tilesData.map((tile, i) => (
          <GridTile
            style={{"font-size":'3em'}}
            key={i}
            title={<a href={tile.deployed_app}>{tile.title}</a>}
            subtitle={<b>{tile.what}</b>}
            actionIcon={<i className="fab fa-github"></i>}
          >
            <img src={tile.img} />
          </GridTile>
        ))}<GridTile ><div class="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="aldo-torres"><a class="LI-simple-link" href='https://www.linkedin.com/in/aldo-torres?trk=profile-badge'>Aldo Torres</a></div></GridTile>
    </GridList>
  </div>
);

export default Projects;
