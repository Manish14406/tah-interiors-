import { Hero } from '../components/home/Hero';
import { About } from '../components/home/About';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { ProjectProcess } from '../components/home/ProjectProcess';
import { ProjectGallery } from '../components/home/ProjectGallery';
import { Testimonials } from '../components/home/Testimonials';
import { FAQ } from '../components/home/FAQ';
import { Contact } from '../components/home/Contact';

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesOverview />
      <WhyChooseUs />
      <ProjectProcess />
      <ProjectGallery />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
