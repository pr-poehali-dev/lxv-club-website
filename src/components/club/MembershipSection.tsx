import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface MembershipSectionProps {
  onApplicationOpen: () => void;
}

export const MembershipSection = ({ onApplicationOpen }: MembershipSectionProps) => {
  return (
    <section id="membership" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h3 className="text-4xl text-center mb-16 text-primary">Членство в клубе</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-in">
            <CardContent className="pt-8">
              <Icon name="Users" size={48} className="text-primary mb-4 mx-auto" />
              <h4 className="text-2xl text-center mb-4 text-primary">Приватное сообщество</h4>
              <p className="text-muted-foreground font-light text-center">
                Закрытое пространство для единомышленников, ценящих конфиденциальность и качество общения
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="pt-8">
              <Icon name="Calendar" size={48} className="text-primary mb-4 mx-auto" />
              <h4 className="text-2xl text-center mb-4 text-primary">Эксклюзивные события</h4>
              <p className="text-muted-foreground font-light text-center">
                Регулярные закрытые мероприятия: дегустации, мастер-классы, встречи с экспертами
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="pt-8">
              <Icon name="Crown" size={48} className="text-primary mb-4 mx-auto" />
              <h4 className="text-2xl text-center mb-4 text-primary">Персональный сервис</h4>
              <p className="text-muted-foreground font-light text-center">
                Индивидуальный подход к каждому участнику, персональный менеджер и особые привилегии
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
            Членство в LXV — это не просто статус, а образ жизни. Мы приглашаем только тех, кто разделяет наши ценности и готов стать частью сообщества единомышленников.
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
            onClick={onApplicationOpen}
          >
            Подать заявку на членство
          </Button>
        </div>
      </div>
    </section>
  );
};
