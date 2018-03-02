import React, { Component } from 'react';
import './App.css';
import Heading from './components/heading.js'
import About from './components/about.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { deepPurple800, grey800 } from 'material-ui/styles/colors'


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      name:"Aldo Torres",
      title:"Full Stack Web Developer",
      photo:"./img/school_pic.jpg"
    }
  }
  render() {
    return (
      <MuiThemeProvider>
        <AppBar
          style={{'margin-bottom':"0", "backgroundColor": deepPurple800}}
          title={this.state.name}
          titleStyle={{'text-align':"center"}}
         />
      <div className="App seattle">
        <Heading
          title={this.state.title}
          image={this.state.photo}/>
        <About
          name={this.state.name} />
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
