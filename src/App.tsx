import Header from './components/Header'
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Greeting from './components/Greeting';
import Divider from './components/Divider';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {

  return (
    <div id="home" className="relative appear">
      <Navigation/>
      <Header/>
      <Divider/>
      <Projects/>
      <Divider/>
      <Skills/>
      <Divider/>
      <Greeting/>
      <Divider/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
