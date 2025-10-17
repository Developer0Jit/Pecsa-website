
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import VisionMission from "./pages/Vision/VisionMission";
import AboutUs from "./pages/About/AboutUs";
import Footer from "./components/navbar/Footer";
import FutureProjects from "./pages/Future-Projects/FutureProjects";
import CompanyValues from "./pages/Company-Values/CompanyValues";
import VisitUs from "./pages/Visit-us/VisitUs.JSX";
import OurLeaders from "./pages/Our-Leaders/OurLeaders";

function App() {
  return (
    <div className='' style={{background:"#dfdfdf", margin:'0 25px'}}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/company-value" element={<CompanyValues />} />
        <Route path="/future-project" element={<FutureProjects />} />
        <Route path="/visit-us" element={<VisitUs />} />
        <Route path="/our-leaders" element={<OurLeaders />} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;

