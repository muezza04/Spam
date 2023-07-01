import FormCovid from "../components/FormCovid/FormCovid";
import GlobalSection from "../components/GlobalSection/GlobalSection";
import Hero from "../components/Hero/Hero";
import ProvinsiTable from "../components/ProvinsiTable/ProvinsiTable";
// Data
import data from "../utils/constants/provinces";
import data1 from "../utils/constants/indonesia";
import { useState } from "react";

// Cara baru untuk melakukan addData Api
// import AddCovidForm from "../components/AddCovidFrom/AddCovidForm";

const Main = () => {
  const [dataIndo] = useState(data1);
  const [provinces, setProvinces] = useState(data);
  
  return (
    <main>
      <Hero />
      <GlobalSection />
      {/* <ProvinsiTable provinces={provinces}/>
      <FormCovid provinces={provinces} setProvinces={setProvinces} /> */}
    </main>
  );
}

const Home = () => {
  return (
    <>
      <Main />
    </>
  );
}

export default Home;
