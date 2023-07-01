import Home from "./pages/Home";
import { Route, Routes} from "react-router-dom";
import IndonesiaCovid from "./pages/covid/Indonesia";
import ProvinsiCovid from "./pages/covid/Provinsi";
import AboutCovid from "./pages/covid/About";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/covid/indonesia" element={<IndonesiaCovid />}/>
          <Route path="/covid/provinsi" element={<ProvinsiCovid />}/>
          <Route path="/covid/about" element={<AboutCovid />}/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
