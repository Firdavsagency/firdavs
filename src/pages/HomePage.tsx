import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import Process from '../components/Process';
import Team from '../components/Team';
import Faq from '../components/Faq';
import BookCall from '../components/BookCall';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <CaseStudies />
      <Process />
      <Team />
      <Faq />
      <BookCall />
    </Layout>
  );
};

export default HomePage;