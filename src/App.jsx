import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
