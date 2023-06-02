import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Carousel from "./components/Carosel";

function App() {
  const images = [];
  const descriptions = [];
  return (
    <>
      <div className="app">
        <NavBar />
        <main>
          <section>
            <h2>About Us</h2>
            <p>
              Welcome to BBL, the home of all the Benbenlaw mods and modpacks
            </p>
          </section>
          <section>
            <h2>Modpacks</h2>
            <Carousel images={images} descriptions={descriptions} />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
