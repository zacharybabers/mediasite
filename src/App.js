import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Mediapage from './Mediapage';
import Photopage from './Photopage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ThreeDpage from './ThreeDpage';
import Writingpage from './Writingpage';
import Gamespage from './Gamespage';
import Aboutpage from './Aboutpage';
import React, { useState } from "react";
import Codepage from './Codepage';
import { WritingProjects } from './writingcomponents/WritingProjects';

class App extends React.Component {
  constructor(){
    super();
  }

  getWritingRoutes(){
    let routesArray = [];

    WritingProjects.forEach((project) => {
      let route = <Route path={project.route} element={project.writingPage} />
      routesArray.push(route);
    });

    return routesArray;
  }
  
  render(){

    const myRoutes = this.getWritingRoutes();
    return (
      <Router>
        <div className = "app">
          <Header/>
          <div className='content'>
            <Routes>
              <Route path='/' element={
                <Mediapage/>
              } />
              <Route path='/code' element={
                <Codepage/>
              } />
              <Route path='/photo' element={
                <Photopage/>
              } />
              <Route path='/games' element={
                <Gamespage/>
              } />
              <Route path='/3D' element={
                <ThreeDpage/>
              } />
              <Route path='/writing' element={
                <Writingpage/>
              } />
              <Route path='/about' element={
                <Aboutpage/>
              } />
              {myRoutes}
            </Routes>
          </div>
        </div>
      </Router>
      
    );
  }
  
}

export default App;
