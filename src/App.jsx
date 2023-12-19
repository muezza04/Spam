import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
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
    
         
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
