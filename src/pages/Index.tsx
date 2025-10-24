import { useState } from 'react';
import { AgeVerification } from '@/components/club/AgeVerification';
import { Header } from '@/components/club/Header';
import { HeroSection } from '@/components/club/HeroSection';
import { HowItWorksSection } from '@/components/club/HowItWorksSection';
import { AboutSection } from '@/components/club/AboutSection';
import { ZonesSection } from '@/components/club/ZonesSection';
import { MembershipSection } from '@/components/club/MembershipSection';
import { EventsSection } from '@/components/club/EventsSection';
import { FAQSection } from '@/components/club/FAQSection';
import { Footer } from '@/components/club/Footer';
import { ApplicationDialog } from '@/components/club/ApplicationDialog';

const Index = () => {
  const [ageVerified, setAgeVerified] = useState(false);
  const [applicationOpen, setApplicationOpen] = useState(false);

  if (!ageVerified) {
    return <AgeVerification onVerify={() => setAgeVerified(true)} />;
  }

  return (
    <div className="min-h-screen">
      <Header onApplicationOpen={() => setApplicationOpen(true)} />
      <HeroSection onApplicationOpen={() => setApplicationOpen(true)} />
      <HowItWorksSection />
      <AboutSection />
      <ZonesSection />
      <MembershipSection onApplicationOpen={() => setApplicationOpen(true)} />
      <EventsSection onApplicationOpen={() => setApplicationOpen(true)} />
      <FAQSection />
      <Footer />
      <ApplicationDialog open={applicationOpen} onOpenChange={setApplicationOpen} />
    </div>
  );
};

export default Index;
