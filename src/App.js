import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import Hero from './Hero'
import Events from './Events'
import Categories from './Categories'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  return (
    <div className="body">
      <Nav />
      <Hero />
      <Events />
      <Categories />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
