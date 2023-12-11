import React from 'react';
import './App.css';
import Gallery from './Gallery';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Team from './Team';
import Events from './Events';
import Podcast from './Podcast';
import Articles from './Articles';
import Resources from './Resources';
import {
  BrowserRouter as Router, Routes,
  Route, Redirect,
} from "react-router-dom";
import { useState } from 'react';

function App() {

 
  return (
    <div className="App" >
      
        <Header />
        
        <Routes>
          <Route path="SEC/" element={<Home />} />
          <Route path="SEC/team" element={<Team />} />
          <Route path="SEC/gallery" element={<Gallery />} />
          <Route path="SEC/events" element={<Events />} />
          <Route path="SEC/podcast" element={<Podcast/>} />
          <Route path="SEC/articles" element={<Articles/>} />
          <Route path="SEC/resources" element={<Resources/>}/>
        </Routes> 
        
       <Footer/>



      

    </div>
  );
}

export default App;
