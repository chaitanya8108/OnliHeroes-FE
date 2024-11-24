import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AddActor from "./pages/AddActor";
import About from "./pages/About";
import LoginPage from "./pages/LoginPage";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
// import CardModal from "./components/CardModal";
import marvel from "./assets/marvels2.png"

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container mainDiv" style={{background: `url(${marvel})`, backgroundPosition: "center", backgroundSize: "cover"}}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/add" element={<AddActor />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<LoginPage />} />
            {/* <Route path="/modal" element={<CardModal />} /> */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
