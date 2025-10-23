import { useState } from 'react'
import Header from './components/Header'
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {

  return (
    <div className="">
      <Header/>
      <Projects/>
      {/* <Skills/> */}
      {/* <Contact/> */}
    </div>
  )
}

export default App;
