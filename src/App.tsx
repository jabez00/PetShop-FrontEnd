import "./App.css";
import AboutUs from "./components/AboutUs";
import Commitment from "./components/Commitment";
import Footer from "./components/Footer";
import GridShop from "./components/GridShop";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ReviewCarousel from "./components/ReviewCarousel";
import ScrollText from "./components/ScrollText";
import Shop from "./components/Shop";
import Stats from "./components/Stats";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Stats />
      <GridShop />
      <AboutUs />
      <ScrollText />
      <Shop />
      <Commitment />
      <ReviewCarousel />
      <Footer />
    </div>
  );
}

export default App;
