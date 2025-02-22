import "./App.css";
import "./styles/style.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LiveMatches from "./components/LiveMatches";
import LatestNews from "./components/LatestNews";
import About from "./components/About";
import Ranking from "./components/Ranking";
import Tweets from "./components/Tweets";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="text-white">
      <Header />

      <Hero />
      <LiveMatches />
      <LatestNews />
      <About />
      <Ranking />
      <Tweets />
      <Gallery />

      <Footer />
    </main>
  );
}

export default App;
