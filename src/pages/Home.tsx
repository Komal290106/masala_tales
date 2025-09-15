import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FeaturedMenu } from '../components/home/FeaturedMenu';
import { ChefIntro } from '../components/home/ChefIntro';
import { EventsSlider } from '../components/home/EventsSlider';
import { MenuCategories } from '../components/home/MenuCategories';
import { InstagramFeed } from '../components/home/InstagramFeed';

export const Home = () => {
  return (
    <div className="bg-darkBg min-h-screen">
      <HeroSection />
      <FeaturedMenu />
      <ChefIntro />
      <EventsSlider />
      <MenuCategories />
      <InstagramFeed />
    </div>
  );
};