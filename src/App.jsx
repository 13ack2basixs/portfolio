import './App.css'
import '@fontsource-variable/fira-code';
import { FirstName, LastName } from './components/Name/Name';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About'
import Skills from './components/Skills/Skills'

function App() {

  return (
    <div>
      <div className='name-container'>
        <LastName />
        <FirstName />
      </div>
      <NavBar />
      <About />
      <Skills />
    </div>
  )
}

export default App
