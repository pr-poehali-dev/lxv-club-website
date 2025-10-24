import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface AgeVerificationProps {
  onVerify: () => void;
}

export const AgeVerification = ({ onVerify }: AgeVerificationProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-deep-charcoal/50 backdrop-blur-md">
      <Card className="w-full max-w-md mx-4 bg-card/95 border-primary/20">
        <CardContent className="pt-8 pb-6 text-center">
          <h1 className="text-4xl mb-6 text-primary tracking-wider">LXV</h1>
          <p className="text-muted-foreground mb-8 font-light">
            Добро пожаловать в клуб LXV — данный сайт предназначен для лиц старше 18 лет, для продолжения подтвердите ваш возраст
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              variant="default" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={onVerify}
            >
              Мне есть 18 лет
            </Button>
            <Button variant="outline" onClick={() => window.location.href = 'https://google.com'}>
              Мне нет 18 лет
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
