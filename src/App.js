import './App.css';
import Navbar from './navigation/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import SiteFooter from './pages/SiteFooter'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
