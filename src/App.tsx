import { BrowserRouter, Routes, Route } from "react-router-dom"
import Oportunidade from "./components/oportunidade/Oportunidade"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/oportunidades" element={<Oportunidade />} />
        {/* outras rotas */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;