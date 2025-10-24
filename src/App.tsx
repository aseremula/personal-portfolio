import { useState } from 'react'
import Header from './components/Header'
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Greeting from './components/Greeting';
import Divider from './components/Divider';

function App() {

  return (
    <div className="">
      <Header/>
      <Divider/>
      <Projects/>
      <Divider/>
      <Skills/>
      <Divider/>
      <Greeting/>
      <Divider/>
      <Contact/>
    </div>
  )
}

export default App;
