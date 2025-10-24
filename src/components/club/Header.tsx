import { Button } from '@/components/ui/button';

interface HeaderProps {
  onApplicationOpen: () => void;
}

export const Header = ({ onApplicationOpen }: HeaderProps) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl text-primary tracking-widest">LXV</h1>
        <div className="hidden md:flex gap-8 items-center">
          <a href="#about" className="text-sm hover:text-primary transition-colors">О клубе</a>
          <a href="#membership" className="text-sm hover:text-primary transition-colors">Членство</a>
          <a href="#events" className="text-sm hover:text-primary transition-colors">Афиша</a>
          <a href="#faq" className="text-sm hover:text-primary transition-colors">Вопросы и ответы</a>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={onApplicationOpen}
          >
            Вступить в клуб
          </Button>
        </div>
      </nav>
    </header>
  );
};
