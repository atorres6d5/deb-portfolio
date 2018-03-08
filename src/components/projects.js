import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 650,
    height: 400,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: './img/projects/industry.png',
    title: 'Industry',
    what: "Track production time",
  },{
    img:'./img/projects/dash_dash.png',
    title:'Dash Dash',
    what: 'Mobile - Alarm Clock'
  },{
    img:'./img/projects/grumble.png',
    title:'Grumble',
    what: 'Social platform to leave reviews on snacks'
  },{
    img:'./img/projects/hogwarts.jpg',
    title:"Hogwarts Athletics",
    what:'Home page for a sports teamd'
  },{
    img:'./img/projects/spc_sheet.png',
    title:'SPC Tracker',
    what: 'Documentation for part dimensions'
  }

];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const Projects = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>Projects</Subheader>
      {tilesData.map((tile, i) => (
        <GridTile
          key={i}
          title={tile.title}
          subtitle={<span><b>{tile.what}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default Projects;
