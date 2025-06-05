
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './compo/NavBar';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Register from './pages/Register';
import StartHome from './compo/StartHome';
import LogIn from './pages/LogIn';
import Price from './compo/Price';
import Login from './pages/LogIn';

function App() {

  return (
    <>
    <Routes>

      <Route path ="/" element ={
        <div>
          <NavBar/>
          <StartHome/>
        </div>
      }
      />
      <Route path ="/home" element ={
        <div>
          {/* <NavBar/> */}
          <Home/>
        </div>
      }
      />
      <Route path ="/register" element ={
        <div>
          <Register/>
        </div>
      }
      />
      <Route path ="/login" element ={
        <div>
          <Login/>
        </div>
      }
      />
      <Route path ="/services" element ={
        <div>
          <NavBar/>
          <Services/>
        </div>
      }
      />
      <Route path ="/price" element ={
        <div>
          <NavBar/>
          <Price/>
        </div>
      }
      />
      <Route path ="/about" element ={
        <div>
          <NavBar/>
          <About/>
        </div>
      }
      />
      <Route path ="/contact" element ={
        <div>
          <NavBar/>
          <Contact/>
        </div>
      }
      />
      </Routes>
    </>
  )
}

export default App
