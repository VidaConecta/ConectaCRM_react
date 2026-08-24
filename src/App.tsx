import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sobre } from "./components/sobre/Sobre"
import Oportunidade from "./pages/oportunidade/Oportunidade";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";


function App() {
  return (


    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/oportunidades" element={<Oportunidade />} />
          {/* outras rotas */}

        </Routes>
        <Footer />
      </div>
    </BrowserRouter >

  )
}

export default App;