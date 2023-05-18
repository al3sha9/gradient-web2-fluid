import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import HeaderBg from './components/header';
import { useEffect } from 'react';
import About from './components/about';
import Projects from './components/projects';

function App() {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])
  return (
    <>
      <HeaderBg />
      <About />
      <Projects />
    </>
  )
}

export default App
