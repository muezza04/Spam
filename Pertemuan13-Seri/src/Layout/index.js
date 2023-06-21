import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

//membuat komponen loyout
//layout terdiri dari navbar, footer

function Layout(props) {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Container>{props.children}</Container>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Layout;
