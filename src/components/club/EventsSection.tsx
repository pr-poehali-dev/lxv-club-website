import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface EventsSectionProps {
  onApplicationOpen: () => void;
}

export const EventsSection = ({ onApplicationOpen }: EventsSectionProps) => {
  const events = [
    {
      title: 'Дегустация рома',
      date: '15 ноября',
      description: 'Эксклюзивная дегустация карибского рома с экспертом',
      image: 'https://cdn.poehali.dev/files/0ece6944-644c-4efb-b85b-8f800936cbab.jpg'
    },
    {
      title: 'Тайный ужин от шеф-повара',
      date: '22 ноября',
      description: 'Камерный ужин с авторским меню от приглашенного шеф-повара',
      image: 'https://cdn.poehali.dev/files/8732bcf0-5c4a-4b08-b018-f18f0051322d.jpg'
    },
    {
      title: 'Мастер-класс по сигарам',
      date: '28 ноября',
      description: 'Введение в культуру сигар: от выбора до правильной дегустации',
      image: 'https://cdn.poehali.dev/files/b0092c2f-dc6d-4a71-8ef3-892e5dd20d82.jpg'
    }
  ];

  return (
    <section id="events" className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h3 className="text-4xl text-center mb-16 text-primary">Афиша клуба</h3>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <Card 
              key={index} 
              className="bg-background overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 text-sm rounded">
                  {event.date}
                </div>
              </div>
              <CardContent className="pt-6">
                <h4 className="text-2xl mb-3 text-primary">{event.title}</h4>
                <p className="text-muted-foreground font-light">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button 
            variant="outline"
            className="border-primary/40 hover:bg-primary/10"
            onClick={onApplicationOpen}
          >
            <Icon name="Calendar" size={20} className="mr-2" />
            Забронировать участие
          </Button>
        </div>
      </div>
    </section>
  );
};
