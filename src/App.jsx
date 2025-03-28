/*
App component written via React
This is where all of the parts: Home, Sections, Footer
are combined into a single area

Written by Joseph Lee
*/

// Importing Sections components (In order of appearance)
import Home from './sections/Home.jsx'
import About from './sections/About.jsx'
import Blog from './sections/Blog.jsx'
import Projects from './sections/Projects.jsx'
import Portfolio from './sections/Portfolio.jsx'
import Footer from './sections/Footer.jsx'

// Other Non-Sections Components
import JumpToTop from './components/JumpToTop.jsx'


function App() {

  return (
    <>

      <JumpToTop/>

      <Home />

      <hr/>

      <About />

      <hr/>

      <Blog />

      <hr/>

      <Projects/>

      <hr/>

      <Portfolio/>

      <hr/>

      <Footer />

    </>
  )
}


export default App
