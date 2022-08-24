import './App.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route exact path = "/"  element ={<Home/>} />
        <Route exact path = "/menu"  element ={<Menu/>} />
        <Route exact path = "/about"  element ={<About/>} />
        <Route exact path = "/contact"  element ={<Contact/>} />
        <Route exact path = "/cart"  element ={<Cart/>} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
