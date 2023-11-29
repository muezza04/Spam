import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import KelasSaya from "./components/KelasSaya";
import DetailKelas from "./components/DetailKelas";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/kelas-saya" element={<KelasSaya />} />
          <Route path="/detail-kelas/:id" element={<DetailKelas />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
