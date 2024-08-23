import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Product from './components/Product';
import Login from './components/login';
import Contact from './components/Contact';
import Inventory from './components/Inventory';
import Maintenance from './components/Maintenance';
import Report from './components/Report';


function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/inventory" element={<Inventory/>} />
          <Route path="/maintenance" element={<Maintenance/>} />
          <Route path="/reports" element={<Report/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
