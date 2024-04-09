import HomePage from "./HomePage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Leganzza from "./components/Leganzza";
import Infoquest from "./components/Infoquest";
import ErrorPage from "./components/ErrorPage";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";


function App() {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      <Router>
        {!loaded ? (
          <Preloader />
        ) : (
          <>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/leganzza" element={<Leganzza />} />
              <Route path="/infoquest" element={<Infoquest />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </>
        )}
      </Router>
    </>
  )
}

export default App
