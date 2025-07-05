import React from 'react';
// import { Menu, Play, Edit, Heart, User } from 'lucide-react';
import AnimatedNavHeader from './components/header';
import HeroSection from './components/hero';
import DominicPortfolio from './components/about';
import AchievementSection from './components/achievement';
import CetifiactionSection from './components/certification';
import CallToActionSection from './components/callToAction';
import FeaturedProjectsSection from './components/featureProject';
import StatisticsSection from './components/statistics'
import CircularGallery from './components/CircularGallery'



const App = () => {

  return (
    <main>
    <AnimatedNavHeader/>
    <HeroSection/>
    <DominicPortfolio/>
    <AchievementSection/>
    <CetifiactionSection/> 
    <CallToActionSection/>
    <FeaturedProjectsSection/>
    <div style={{ height: '600px', position: 'relative' }}>
      <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
    </div>
    <StatisticsSection/>
    </main>
  );
};

export default App;