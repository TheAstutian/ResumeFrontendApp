import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <main class='text-gray-400 bg-gray-900 body-font'>
      <Navbar />
     <About />
     <Projects/>
     <Skills />
     <Footer />
    </main>
  );
}

export default App;
