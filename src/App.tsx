import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingCTA } from './components/common/FloatingCTA';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { BookTable } from './pages/BookTable';
import { About } from './pages/About';

function App() {
  return (
    <Router>
      <div className="font-cormorant">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/book" element={<BookTable />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </Router>
  );
}

export default App;