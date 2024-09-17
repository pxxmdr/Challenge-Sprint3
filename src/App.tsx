import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const LazyHome = lazy(() => import("./Pages/Home"));
const LazyLogin = lazy(() => import("./Pages/Login/Index"));
const LazyManualDePecas = lazy(() => import("./Pages/ManualDePecas/Index"));
const LazyIntegrantes = lazy(() => import("./Pages/Integrantes/Index"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Carregando</>}>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/Login" element={<LazyLogin />} />
          <Route path="/ManualDePecas" element={<LazyManualDePecas/>} />
          <Route path="/Integrantes" element={<LazyIntegrantes/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
