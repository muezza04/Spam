// Import Halaman Home
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateMovie from "./pages/movie/CreateMovie";
import Popular from "./pages/movie/Popular";
import NowPlaying from "./pages/movie/NowPlaying";
import TopRated from "./pages/movie/TopRated";
import Layout from "./Layout/index";

import { ThemeProvider } from "styled-components";
import theme from "./components/utils/constants/theme";
import Detail from "./pages/movie/Detail";

function App() {
  /**
   * Menampilkan Halaman Home.
   * Tag div bisa diganti dengan tag <>.
   * Tag <> adalah React fragment
   */   
  return (
    <>
      <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/create" element={<CreateMovie />}></Route>
          <Route path="/movie/popular" element={<Popular />}></Route>
          <Route path="/movie/now-playing" element={<NowPlaying />}></Route>
          <Route path="/movie/top-rated" element={<TopRated />}></Route>
          <Route path="/movie/:id" element={<Detail />}></Route>
        </Routes>
      </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
