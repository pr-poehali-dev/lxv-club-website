import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onApplicationOpen: () => void;
}

export const HeroSection = ({ onApplicationOpen }: HeroSectionProps) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-deep-charcoal">
        <iframe
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover scale-150"
          src="https://vk.com/video_ext.php?oid=-221057625&id=456239051&hd=2&autoplay=1&loop=1"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      </div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <h2 className="text-6xl md:text-8xl mb-6 text-warm-beige tracking-wider">LXV</h2>
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
          onClick={onApplicationOpen}
        >
          Запросить приглашение
        </Button>
      </div>
    </section>
  );
};