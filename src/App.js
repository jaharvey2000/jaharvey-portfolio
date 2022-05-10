import './App.css';
import AppHeader from './components/AppHeader'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import AppFooter from './components/AppFooter'

function App() {
  return (
    <>
      <AppHeader />
      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <AppFooter />
    </>
  );
}

export default App;
