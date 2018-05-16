import React, { Component } from 'react';
import './App.css';
import Heading from './components/heading.js'
import Machining from './components/machining.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { deepPurple800, deepPurple50, grey50
, blue500, grey800 } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Projects from './components/projects.js'
import Developer from './components/developer.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      name:"Aldo Torres",
      title:"Full Stack Web Developer",
      photo:"./img/school_pic.jpg",
      techStack:[
        {
          name:"JavaScript",
          img:"./img/techStack/javascript.png"
        },
        {
          name:"HTML5",
          img:"./img/techStack/html.png"
        },
        {
          name:"CSS",
          img:"./img/techStack/css.png"
        },
        {
          name:"React JS",
          img:"./img/techStack/reactjs.png"
        },
        {
          name:"React Native",
          img:"./img/techStack/react-native.png"
        },
        {
          name:"Semantic UI",
          img:"./img/techStack/semantic-ui-react.png"
        },
        {
          name:"Bootstrap",
          img:"./img/techStack/Bootstrap.png"
        },
        {
          name:"Matrial UI",
          img:"./img/techStack/material-ui.png"
        },
        {
          name:"Firebase",
          img:"./img/techStack/firebase.png"
        },
        {
          name:"Knex",
          img:"img/techStack/knex.png"
        },
        {
          name:"PostgreSQL",
          img:"img/techStack/postgresql.png"
        },
        {
          name:"MySQL",
          img:"./img/techStack/mysql.png"
        },
        {
          name:"Node",
          img:"./img/techStack/node.jpg"
        },
        {
          name:"Node Express",
          img:"./img/techStack/express.png"
        }
      ]
    }
  }

  muiTheme = getMuiTheme({
      palette: {
        textColor: grey50
      },
      appBar: {
        height: 75,
      }
  })



  render() {
    return (
      <MuiThemeProvider muiTheme={this.muiTheme}>
        <AppBar
          iconElementLeft={<div></div>}
          style={{'margin-bottom':"0", "backgroundColor": deepPurple800}}
          title={this.state.name}
          titleStyle={{'text-align':"center", "fontSize":"30"}}
         />
      <div className="seattle">
        <Heading
          title={this.state.title}
          image={this.state.photo}
          techStack={this.state.techStack}
        />
      </div>
      <div className="container dev">
        <Developer />
      </div>
      <div className="container machinist">
        <Machining
          name={this.state.name}
          className="row justify-content-center"
         />
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
