import "./App.css";
import { Route, Routes, Outlet } from "react-router-dom"

import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="Container" role="main">
      <div className="ribbon" onClick={()=>window.open('https://github.com/VioletsFoxes/personal_cv','_blank')}>
        <i className="fa fa-github" aria-hidden="true"></i>
      </div>
      <div className="App aero_glass">

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
      {/* <div className="App--hidden">
        0000
      </div> */}
    </div>
  );
}

export default App;
