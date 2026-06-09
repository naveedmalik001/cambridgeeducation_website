import { HeroSection } from '@/components/home/HeroSection';
import { WhyCambridgeSection } from '@/components/home/WhyCambridgeSection';
import { TajikistanSection } from '@/components/home/TajikistanSection';
import { FeaturedUniversities } from '@/components/home/FeaturedUniversities';
import { CountrySlider } from '@/components/home/CountrySlider';
import { ServicesSection } from '@/components/home/ServicesSection';
import { SuccessJourneySection } from '@/components/home/SuccessJourneySection';
import { GallerySection } from '@/components/home/GallerySection';
import { DownloadBrochureSection } from '@/components/home/DownloadBrochureSection';
import { ContactSection } from '@/components/home/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CountrySlider />
      <WhyCambridgeSection />
      <TajikistanSection />
      <FeaturedUniversities />
      <ServicesSection />
      <SuccessJourneySection />
      <GallerySection />
      <DownloadBrochureSection />
      <ContactSection />
    </>
  );
}
