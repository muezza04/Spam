import Footer from "../components/Footer/Footer";
import FormCovid from "../components/FormCovid/FormCovid";
import GlobalSection from "../components/GlobalSection/GlobalSection";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import ProvinsiTable from "../components/ProvinsiTable/ProvinsiTable";
// Data
import data from "../utils/constants/provinces";
import data1 from "../utils/constants/indonesia";
import { useState } from "react";

const Main = () => {
  const [dataIndo] = useState(data1);
  const [provinces, setProvinces] = useState(data);
  
  return (
    <main>
      <Hero />
      <GlobalSection dataIndo={dataIndo}/>
      <ProvinsiTable provinces={provinces}/>
      <FormCovid provinces={provinces} setProvinces={setProvinces} />
    </main>
  );
}

const Home = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
