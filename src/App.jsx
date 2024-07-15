import './App.scss';
import Header from './components/Header/Header';
import { Outlet } from 'react-router';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skill from './components/Skill/Skill.jsx';
import Experience from './components/Experience/Experience.jsx';
import Work from './components/Work/Work.jsx';
import Testimonial from './components/Testimonial/Testimonial.jsx';
import GetInTouch from './components/GetInTouch/GetInTouch.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      {/* Section hero*/}
      <Hero />

      {/* Section about */}
      <section id="about">
        <About />
      </section>

      {/* Section skills */}
      <section id="skill">
        <Skill />
      </section>

      {/* Section experience */}
      <section id="experience">
        <Experience />
      </section>

      {/* Section work */}
      <section id="work">
        <Work />
      </section>

      {/* Section testimonial */}
      <section id="testimonial">
        <Testimonial />
      </section>

      {/* Section get in touch */}
      <section id="getInTouch">
        <GetInTouch />
      </section>

      <section id="footer">
        <Footer />
      </section>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
