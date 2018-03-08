import React, { Component } from 'react';
import './App.css';
import Heading from './components/heading.js'
import Machining from './components/about.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { deepPurple800, deepPurple50
, blue500, grey800 } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Projects from './components/projects.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      name:"Aldo Torres",
      title:"Full Stack Web Developer",
      photo:"./img/school_pic.jpg"
    }
  }

  muiTheme = getMuiTheme({
      palette: {
        textColor: blue500,
      },
      appBar: {
        height: 75,
      }
  })



  render() {
    return (
      <MuiThemeProvider muiTheme={this.muiTheme}>
        <AppBar
          style={{'margin-bottom':"0", "backgroundColor": deepPurple800}}
          title={this.state.name}
          titleStyle={{'text-align':"center"}}
         />
      <div className="seattle">
        <Heading
          title={this.state.title}
          image={this.state.photo}/>
      </div>
      <div>

        <Machining
          name={this.state.name} />
      </div>
      <div>
        <Projects />
      </div>

    </MuiThemeProvider>
    );
  }
}

export default App;
