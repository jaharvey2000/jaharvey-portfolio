import './App.css';
import Navbar from './navigation/Navbar'
import Main from './pages/Main'
import NavProvider from './context/NavContext'
import SiteFooter from './pages/SiteFooter'

function App() {
  return (
    <>
      <NavProvider>
        <Navbar />
        <Main />
      </NavProvider>
      <SiteFooter />
    </>
  );
}

export default App;
