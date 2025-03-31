import './App.css'
import NavBar from './components/NavBar/NavBar';
import Section from './components/Section/Section';

function App() {

  return (
    <div>
      <NavBar />

      <Section id="about">about</Section>
      <Section id="skills">skills</Section>
      <Section id="projects">projects</Section>
      <Section id="experience">experience</Section>
      <Section id="contact">contact</Section>
    </div>
  )
}

export default App
