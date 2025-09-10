
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import DetailsSection from '@/components/DetailsSection';
import GallerySection from '@/components/GallerySection';
import WeddingPhotosSection from '@/components/WeddingPhotosSection';
import RSVPSection from '@/components/RSVPSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StorySection />
      <DetailsSection />
      <GallerySection />
      <WeddingPhotosSection />
      <RSVPSection />
      <Footer />
    </div>
  );
};

export default Index;
