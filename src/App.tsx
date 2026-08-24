import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Oportunidade from './pages/oportunidade/Oportunidade';

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