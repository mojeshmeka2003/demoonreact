import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './assets/Component/About';
import Home from './assets/Component/Home';
import Notfound from './assets/Component/Notfound';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>Hello </div>
      <Button variant="secondary">Secondary</Button>{' '} */}
      <Router>
  <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/home" element={<Home />} />
     <Route path="*" element={<Notfound />} />
  </Routes>
</Router>
    </>
  )
}

export default App
