import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface ApplicationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ApplicationDialog = ({ open, onOpenChange }: ApplicationDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card">
        <DialogHeader>
          <DialogTitle className="text-3xl text-primary">Заявка на членство</DialogTitle>
        </DialogHeader>
        <form className="space-y-6 mt-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Имя *</Label>
              <Input id="firstName" required className="bg-background border-primary/20" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Фамилия *</Label>
              <Input id="lastName" required className="bg-background border-primary/20" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Телефон *</Label>
            <Input id="phone" type="tel" required className="bg-background border-primary/20" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" required className="bg-background border-primary/20" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="about">Расскажите о себе *</Label>
            <Textarea 
              id="about" 
              rows={4} 
              required 
              className="bg-background border-primary/20"
              placeholder="Сфера деятельности, интересы, причина вступления в клуб"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="reference">Рекомендация (если есть)</Label>
            <Input 
              id="reference" 
              className="bg-background border-primary/20"
              placeholder="Имя и фамилия действующего участника клуба"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="interests">Что вас интересует в клубе? *</Label>
            <Textarea 
              id="interests" 
              rows={3} 
              required 
              className="bg-background border-primary/20"
              placeholder="Например: дегустации, деловое общение, культурная программа"
            />
          </div>

          <p className="text-sm text-muted-foreground font-light">
            * Обязательные поля. Ваша заявка будет рассмотрена в течение 3-5 рабочих дней. 
            Мы свяжемся с вами для уточнения деталей и приглашения на собеседование.
          </p>

          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Отправить заявку
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
