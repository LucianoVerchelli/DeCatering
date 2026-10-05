import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Catering from "./pages/CateringAsistido";
import Comedores from "./pages/ComedoresInSitu";
import Viandas from "./pages/ViandasParaEmpresas";
import ScrollToTop from './pages/ScrollToTop';
import PrivacyPolicy from "./pages/PrivacyPolicy";
function App() {

  return (

 <BrowserRouter>

   <ScrollToTop />

      <Routes>

  <Route
    path="/"
    element={<Home />}
  />

  <Route
    path="/servicios/CateringAsistido"
    element={<Catering />}
  />

  <Route
    path="/servicios/ComedoresInSitu"
    element={<Comedores />}
  />

  <Route
    path="/servicios/ViandasParaEmpresas"
    element={<Viandas />}
  />

  <Route
    path="/politica-de-privacidad"
    element={<PrivacyPolicy />}
  />

  <Route
    path="*"
    element={<h1>Ruta no encontrada</h1>}
  />

</Routes>

    </BrowserRouter>

  );
}

export default App;