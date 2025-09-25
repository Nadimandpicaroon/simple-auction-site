import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <header className="mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
        <Footer></Footer>
      </header>
    </>
  );
}

export default App;
