import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

// // function Main() {
// //   return (
// //     <main>
// //       <Hero />
// //       <Movies  />
// //     </main>
// //   );
//   // return <Counter />;
// }

function Home({ movies, setMovies }) {
  return (
    <div>
      <Hero />
      <Movies title="Latest Movies" movies={movies} />
    </div>
  );
}

export default Home;
