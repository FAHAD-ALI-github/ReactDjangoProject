import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="Page">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Testimonials/>
      <Footer/>
          </div>
  );
}

export default App;
