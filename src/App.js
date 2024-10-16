import './App.css';


import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import Spinnerr from './components/Spinnerr';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";

export default class App extends Component {
  apiKey = process.env.REACT_APP_API_KEY ;
  render() {
    return (
      <div>
        <Router>
       <Navbar title = "NewsMonk"  />
      
      <Routes>
      <Route  exact path="/" element={<News key="start" apiKey ={this.apiKey} category="general" />} ></Route>
      <Route  exact path="/bussiness" element={<News key="bussiness" apiKey ={this.apiKey} category="bussiness" />} ></Route>
       
       <Route  exact path="/entertainment" element={<News key="entertainment" apiKey ={this.apiKey} category="entertainment" />}></Route>     
       <Route  exact path="/general" element={<News key="general" apiKey ={this.apiKey} category="general" />}></Route>
       <Route  exact path="/health" element={<News key="health" apiKey ={this.apiKey} category="health" />}></Route>
       <Route  exact path="/science" element={<News key="science" apiKey ={this.apiKey} category="science" />}></Route>
       <Route  exact path="/sports" element={<News key="sports" apiKey ={this.apiKey} category="sports" />}></Route>
       <Route  exact path="/technology" element={<News  key="technology" apiKey ={this.apiKey} category="technology" />} />   
          
        </Routes>
      </Router>
      </div>
    )
  }
}
