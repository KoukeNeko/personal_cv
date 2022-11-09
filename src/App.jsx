import "./App.css";
import { Route, Routes, Outlet } from "react-router-dom"

import About from './components/About';
// import Contact from './Contact';
// import Experience from './Experience';
import Main from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const AnimationLayout = () => {
    const { pathname } = useLocation();
    const pageVariants = {
      initial: {
        opacity: 0
      },
      in: {
        opacity: 1
      },
      out: {
        opacity: 0
      }
    };
  
    const pageTransition = {
      type: 'tween',
      ease: 'linear',
      duration: 0.5
    }; 
    return (
      <PageLayout>
        <motion.div
          key={pathname}
          initial="initial"
          animate="in"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Outlet />
        </motion.div>
      </PageLayout>
    );
  };

  return (
    <div className="Container" role="main">
      <div className="ribbon">
        <i className="fa fa-github" aria-hidden="true"></i>
      </div>
      <div className="App aero_glass">

        <Header />
        <Routes element={<AnimationLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/About" element={<About />} />
          {/* <Route path="/books" element={<BookList />} /> */}
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
