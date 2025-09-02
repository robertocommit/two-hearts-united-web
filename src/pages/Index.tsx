
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import DetailsSection from '@/components/DetailsSection';
import GallerySection from '@/components/GallerySection';
import RSVPSection from '@/components/RSVPSection';
import RegistrySection from '@/components/RegistrySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StorySection />
      <DetailsSection />
      <GallerySection />
      <RSVPSection />
      <RegistrySection />
      <Footer />
    </div>
  );
};

export default Index;
