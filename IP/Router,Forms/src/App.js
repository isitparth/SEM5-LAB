import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RegistrationForm from './components/RegForm';
import Home from './components/Home';
import Contact from './components/Contact';
import Brands from './components/Brands';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/registration" element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
