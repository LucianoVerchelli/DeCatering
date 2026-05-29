import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Catering from "./pages/cateringAsistido";
import Comedores from "./pages/comedoresInSitu";
import Viandas from "./pages/ViandasParaEmpresas";

function App() {

  return (

   <BrowserRouter basename="/DeCatering">

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route path="*" element={<h1>Ruta no encontrada</h1>} />

                    <Route
              path="/servicios/CateringAsistido"
              element={<Catering />}
            />

            <Route
              path="/servicios/comedoresInSitu"
              element={<Comedores />}
            />

            <Route
              path="/servicios/viandasParaEmpresas"
              element={<Viandas />}
            />

      </Routes>

    </BrowserRouter>

  );
}

export default App;