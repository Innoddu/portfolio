import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import { NavBar } from './components/NavBar';
import { Home } from "./pages/Home";
import { Aboutme } from "./pages/Aboutme";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <>
      <NavBar/> 
      <Home />
      <Aboutme />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
