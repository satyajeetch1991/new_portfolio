import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import AchievementsCertificationsConferences from "./components/AchievementsCertificationsConferences";
import ExperienceEducation from "./components/ExperienceEducation";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <ExperienceEducation />
        <Tech />
        <Works />
        <AchievementsCertificationsConferences />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
