import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateMovie from "./pages/movie/CreateMovie";
import PopularMovie from "./pages/movie/PopularMovie";
import NowPlayingMovie from "./pages/movie/NowPlayingMovie";
import TopRatedMovie from "./pages/movie/TopRatedMovie";
import Layout from "./Layout";
import { ThemeProvider } from "styled-components";

// improt tema yang sudah di buat
import theme from "./utisl/constants/theme";
import GlobalStyle from "./components/Globalstyle";
import Detail from "./pages/movie/Detail";

function App() {
  return (
    <>
      {
        // membuat routing
        //bungkus routing menggunakan routes
        //buat routing menggunakan router
      }
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/create" element={<CreateMovie />} />
            <Route path="/" element={<Home />}></Route>
            <Route path="movie/create" element={<CreateMovie />}></Route>
            <Route path="movie/populer" element={<PopularMovie />}></Route>
            <Route path="movie/now" element={<NowPlayingMovie />}></Route>
            <Route path="movie/top" element={<TopRatedMovie />}></Route>
            <Route path="/movie/:id" element={<Detail />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
