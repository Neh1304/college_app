import logo from './logo.svg';
import './App.css';
import HomePage from './Home/HomePage';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';
import Aboutus from './About/Aboutus';


function App() {
  return (
    <div className="App">
      <HomePage></HomePage>
      <Gallery></Gallery>
      <Contact></Contact>
      <Aboutus></Aboutus>
    </div>
  );
}

export default App;
