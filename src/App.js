import './App.css';


import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  apiKey = process.env.REACT_APP_API_KEY ;
  render() {
    return (
      <div>
       <Navbar title = "NewsMonk" about = "aboutnews" />
      <News  apiKey ={this.apiKey} />
      </div>
    )
  }
}
