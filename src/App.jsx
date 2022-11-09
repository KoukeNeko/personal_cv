import "./App.css";

// import About from './About';
// import Contact from './Contact';
// import Experience from './Experience';
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="Container" role="main">
      <div className="ribbon">
          <i className="fa fa-github" aria-hidden="true"></i>
      </div>
      <div className="App aero_glass">
        
        <Header />
        <Main />
        <Footer />
      </div>
      {/* <div className="App--hidden">
        0000
      </div> */}
    </div>
  );
}

export default App;
