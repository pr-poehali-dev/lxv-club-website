import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export const ZonesSection = () => {
  const zones = [
    {
      name: 'Бар',
      description: 'Классический клубный бар с панорамным видом и коллекцией премиальных напитков',
      features: ['Коллекция из 200+ напитков', 'Авторские коктейли', 'Панорамный вид']
    },
    {
      name: 'VIP зал',
      description: 'Приватное пространство для деловых встреч и закрытых мероприятий',
      features: ['Полная приватность', 'Персональное обслуживание', 'До 12 гостей']
    },
    {
      name: 'Хьюмидор',
      description: 'Климатическая комната с эксклюзивной коллекцией сигар',
      features: ['300+ видов сигар', 'Идеальные условия хранения', 'Именные ячейки']
    },
    {
      name: 'Панорамный зал',
      description: 'Основной зал с захватывающим видом на исторический центр Москвы',
      features: ['Вид на 360°', 'Комфортные зоны отдыха', 'Атмосфера камерности']
    }
  ];

  return (
    <section className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h3 className="text-4xl text-center mb-16 text-primary">Пространство клуба</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {zones.map((zone, index) => (
            <Card 
              key={index} 
              className="bg-background/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <h4 className="text-2xl mb-3 text-primary">{zone.name}</h4>
                <p className="text-muted-foreground font-light mb-4">{zone.description}</p>
                <ul className="space-y-2">
                  {zone.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Check" size={16} className="text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
