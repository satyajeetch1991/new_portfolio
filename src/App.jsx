
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import ExperienceEducation from "./components/ExperienceEducation";
import CertificatesAchievements from "./components/CertificatesAchievements";
import CertificatesSection from "./components/CertificatesSection";
import AchievementsSection from "./components/AchievementsSection";
import ThankYou from "./components/ThankYou";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Navbar />
              <Hero />
            </div>
            <About />
            <ExperienceEducation />
            <Tech />
            <Works />
            <CertificatesAchievements />
            <div className='relative z-0'>
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        } />
        <Route path="/certificates" element={<CertificatesSection />} />
        <Route path="/achievements" element={<AchievementsSection />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
