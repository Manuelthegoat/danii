import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Album from './Components/Album/Album';
import Shows from './Components/Shows/Shows';
import Artist from './Components/Artist/Artist';
import Tickets from './Components/Tickets/Tickets';
import Footer from './Components/Footer/Footer';
import Ditto from './Components/Ditto/Ditto';

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Album />
      <Shows />
      <Artist />
      <Tickets /><br/>
      <Ditto />
      <Footer />
    </>
  );
}

export default App;
