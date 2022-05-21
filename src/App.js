import './style/App.css';
import NavProvider from './context/NavContext'
import Navbar from './navigation/Navbar'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import SiteFooter from './components/SiteFooter'

function App() {
  return (
    <>
      <NavProvider>
        <Navbar />
        <main>
            <Home />
            <About />
            <Experience />
            <Contact />
        </main>
      </NavProvider>
      <SiteFooter />
    </>
  );
}

export default App;
