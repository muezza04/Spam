import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Footer from "./components/Footer";
import KelasSaya from "./pages/KelasSaya";
import PilihPremium from "./components/PilihPremium";
import PilihGratis from "./components/PilihGratis";
import DetailKelas from "./pages/DetailKelas";
import Pembayaran from "./components/Pembayaran";
import PembayaranSukses from "./components/PembayaranSukses";
import MulaiKelas from "./components/MulaiKelas";
import Notif from "./pages/Notif";
import Otp from "./pages/OtpPage";
import AkunProfil from "./pages/AkunProfil";
import Ubahpw from "./pages/Ubahpw";
import Riwayat from "./pages/Riwayat";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/notif" element={<Notif />} />

          <Route path="/otp/:email" element={<Otp />}/>
          <Route path="/akunprofil" element={<AkunProfil />}/>
          <Route path="/ubahpw" element={<Ubahpw />}/>
          <Route path="/riwayat" element={<Riwayat/>}/>
    
          <Route path="/kelas-saya" element={<KelasSaya />} />
          <Route path="/pilih-premium" element={<PilihPremium />} />
          <Route path="/pilih-gratis" element={<PilihGratis />} />
          <Route path="/detail-kelas" element={<DetailKelas />} />
          <Route path="/pembayaran" element={<Pembayaran />} />
          <Route path="/pembayaran-sukses" element={<PembayaranSukses />} />
          <Route path="/mulai-kelas" element={<MulaiKelas />} />
    </Routes>
        
    </div>
  );
}

export default App;
