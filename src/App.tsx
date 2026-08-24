import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { Sobre } from './components/sobre/Sobre';
import Home from './pages/home/Home';
import Oportunidade from './pages/oportunidade/Oportunidade';

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Navbar />

        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/oportunidades" element={<Oportunidade />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;