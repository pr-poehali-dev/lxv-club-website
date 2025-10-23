import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [ageVerified, setAgeVerified] = useState(false);
  const [applicationOpen, setApplicationOpen] = useState(false);

  const quotes = [
    { text: 'Стиль — это способ сказать, кто ты, не произнося ни слова', author: 'Рэйчел Зои' },
    { text: 'Без уединения невозможно стать великим', author: 'Александр Дюма' },
    { text: 'Секрет наслаждения жизнью заключается в том, чтобы жить настоящим', author: 'Грейс Келли' },
    { text: 'Настоящая элегантность — это не быть замеченным, а быть запомненным', author: 'Джордж Брисон' },
    { text: 'Истинная роскошь — быть собой', author: 'Оскар де ла Рента' },
  ];

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

  const faqs = [
    {
      question: 'Кто может стать членом клуба?',
      answer: 'Членом LXV может стать совершеннолетний гость, заполнивший предварительную анкету и получивший одобрение клуба. Особенно приветствуются рекомендации действующих участников.'
    },
    {
      question: 'Каковы условия внесения депозита?',
      answer: 'Для вступления в клуб необходимо внести минимальный депозит, который будет зачислен на ваш счёт. Депозит можно использовать для оплаты сигар, напитков, ужинов и мероприятий.'
    },
    {
      question: 'Могу ли я привести с собой гостя?',
      answer: 'Да, вы можете пригласить в клуб своего гостя. Пожалуйста, сообщите об этом менеджеру заранее, чтобы он мог подтвердить и зарегистрировать визит.'
    },
    {
      question: 'Какой дресс-код принят в клубе?',
      answer: 'В LXV действует дресс-код smart casual. Мы просим гостей выбирать элегантную и аккуратную одежду, соответствующую атмосфере клуба.'
    },
    {
      question: 'Как участвовать в мероприятиях?',
      answer: 'Расписание всех мероприятий публикуется на сайте в разделе «Афиша». Чтобы забронировать место, достаточно оставить заявку онлайн или обратиться к персональному менеджеру клуба.'
    }
  ];

  if (!ageVerified) {
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
                onClick={() => setAgeVerified(true)}
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
  }

  return (
    <div className="min-h-screen">
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
              onClick={() => setApplicationOpen(true)}
            >
              Вступить в клуб
            </Button>
          </div>
        </nav>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ aspectRatio: '16/9', width: '100vw', height: '56.25vw', minHeight: '100vh', minWidth: '177.78vh' }}
            src="https://www.youtube.com/embed/wzupEPTNpLI?autoplay=1&mute=1&loop=1&playlist=wzupEPTNpLI&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            title="LXV Club"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
          <h2 className="text-6xl md:text-8xl mb-6 text-warm-beige tracking-wider">LXV</h2>
          <p className="text-xl md:text-2xl mb-8 text-warm-beige/90 font-light">
            Закрытый клуб на 65 этаже в Москва Сити
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
            onClick={() => setApplicationOpen(true)}
          >
            Запросить приглашение
          </Button>
        </div>
      </section>

      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-4xl text-center mb-12 text-primary">Как это работает</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="pt-8 text-center">
                <div className="text-5xl mb-4 text-primary">01</div>
                <h4 className="text-xl mb-4 font-light">Заявка</h4>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Клуб доступен только по предварительной заявке — это позволяет сохранить приватность и атмосферу
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="pt-8 text-center">
                <div className="text-5xl mb-4 text-primary">02</div>
                <h4 className="text-xl mb-4 font-light">Знакомство</h4>
                <p className="text-muted-foreground font-light leading-relaxed">
                  После одобрения приглашаем вас на встречу: экскурсия, знакомство с менеджером, ответы на вопросы
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="pt-8 text-center">
                <div className="text-5xl mb-4 text-primary">03</div>
                <h4 className="text-xl mb-4 font-light">Членство</h4>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Пробуете клубную коллекцию, и если формат подходит, обсуждаем индивидуальные привилегии
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl text-center mb-6 text-primary">
            LXV — закрытый клуб на 65 этаже
          </h3>
          <p className="text-center text-xl text-muted-foreground mb-16 max-w-3xl mx-auto font-light leading-relaxed">
            С захватывающим видом на исторический центр Москвы — это камерность, безопасность, безупречный стиль и индивидуальный подход
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="group cursor-pointer border-primary/20 hover:border-primary/60 transition-all bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <Icon name="Key" className="mb-4 text-primary" size={40} />
                <h4 className="text-2xl mb-3 font-light">Привилегии и членство</h4>
                <p className="text-muted-foreground font-light">
                  Узнайте, какие эксклюзивные возможности доступны только участникам LXV
                </p>
              </CardContent>
            </Card>
            <Card className="group cursor-pointer border-primary/20 hover:border-primary/60 transition-all bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <Icon name="Calendar" className="mb-4 text-primary" size={40} />
                <h4 className="text-2xl mb-3 font-light">События и культура</h4>
                <p className="text-muted-foreground font-light">
                  Станьте частью уникальных мероприятий и клубной жизни
                </p>
              </CardContent>
            </Card>
            <Card className="group cursor-pointer border-primary/20 hover:border-primary/60 transition-all bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <Icon name="Sparkles" className="mb-4 text-primary" size={40} />
                <h4 className="text-2xl mb-3 font-light">Атмосфера клуба</h4>
                <p className="text-muted-foreground font-light">
                  Познакомьтесь с лучшими местами для отдыха, встреч и развлечений
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="membership" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-4xl text-center mb-16 text-primary">Привилегии и членство</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <Icon name="Lock" className="text-primary mt-1" size={24} />
                <div>
                  <h4 className="text-xl mb-2 font-light">Частный доступ</h4>
                  <p className="text-muted-foreground font-light">Только для участников — никаких посторонних</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="Users" className="text-primary mt-1" size={24} />
                <div>
                  <h4 className="text-xl mb-2 font-light">Клубные мероприятия</h4>
                  <p className="text-muted-foreground font-light">Лекции, дегустации, камерные ужины</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="CreditCard" className="text-primary mt-1" size={24} />
                <div>
                  <h4 className="text-xl mb-2 font-light">Персональный депозит</h4>
                  <p className="text-muted-foreground font-light">Удобная оплата всех услуг клуба</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Icon name="Archive" className="text-primary mt-1" size={24} />
                <div>
                  <h4 className="text-xl mb-2 font-light">Именная ячейка</h4>
                  <p className="text-muted-foreground font-light">Хранение вашей личной коллекции</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="Award" className="text-primary mt-1" size={24} />
                <div>
                  <h4 className="text-xl mb-2 font-light">Эксклюзивные продукты</h4>
                  <p className="text-muted-foreground font-light">Доступ к редким сигарам и напиткам</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="UserCheck" className="text-primary mt-1" size={24} />
                <div>
                  <h4 className="text-xl mb-2 font-light">Персональный менеджер</h4>
                  <p className="text-muted-foreground font-light">Индивидуальный подход к каждому члену</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 p-8 bg-background/50 border border-primary/20 rounded-lg">
            <p className="text-center italic text-lg text-muted-foreground font-light">
              "Истинная роскошь — быть собой"
            </p>
            <p className="text-center text-sm text-primary mt-2">— Оскар де ла Рента</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-4xl text-center mb-6 text-primary">Атмосфера клуба LXV</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
            Клуб разделён на особые зоны. Каждое пространство — это отдельное настроение и впечатление
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {zones.map((zone, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary/60 transition-all bg-card/80 backdrop-blur">
                <CardContent className="p-6">
                  <h4 className="text-2xl mb-3 font-light text-primary">{zone.name}</h4>
                  <p className="text-muted-foreground mb-4 font-light">{zone.description}</p>
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

      <section id="events" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl text-center mb-6 text-primary">Афиша мероприятий</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            В клубе LXV регулярно проводятся камерные ужины, дегустации, лекции и эксклюзивные клубные вечера. 
            Это место для общения, обмена опытом и новых впечатлений в кругу единомышленников
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="group overflow-hidden border-primary/20 hover:border-primary/60 transition-all bg-background">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-primary mb-2">{event.date}</div>
                  <h4 className="text-xl mb-3 font-light">{event.title}</h4>
                  <p className="text-muted-foreground font-light mb-4">{event.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/40 hover:bg-primary/10"
                    onClick={() => setApplicationOpen(true)}
                  >
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 overflow-hidden bg-secondary/20">
        <div className="whitespace-nowrap animate-slide-left">
          {[...quotes, ...quotes].map((quote, index) => (
            <span key={index} className="inline-block px-8 text-lg text-muted-foreground font-light">
              "{quote.text}" — {quote.author}
            </span>
          ))}
        </div>
      </section>

      <section id="faq" className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-4xl text-center mb-12 text-primary">Часто задаваемые вопросы</h3>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-primary/20 rounded-lg px-6 bg-card/50">
                <AccordionTrigger className="text-left font-light hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 px-6 bg-card">
        <div className="container mx-auto max-w-md text-center">
          <h4 className="text-2xl mb-4 font-light text-primary">Будьте в курсе событий</h4>
          <p className="text-muted-foreground mb-6 font-light">Подпишитесь на новости клуба</p>
          <div className="flex gap-2">
            <Input 
              type="email" 
              placeholder="Ваш email"
              className="bg-background border-primary/20"
            />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Подписаться
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-primary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h5 className="text-xl mb-4 text-primary">LXV</h5>
              <p className="text-sm text-muted-foreground font-light">
                Закрытый сигарный клуб премиум-класса на 65 этаже Москва-Сити
              </p>
            </div>
            <div>
              <h6 className="text-sm mb-4 font-light">Контакты</h6>
              <p className="text-sm text-muted-foreground font-light mb-2">Москва, Пресненская набережная, 12</p>
              <p className="text-sm text-muted-foreground font-light mb-2">+7 (495) 123-45-67</p>
              <p className="text-sm text-muted-foreground font-light">info@lxv-club.ru</p>
            </div>
            <div>
              <h6 className="text-sm mb-4 font-light">Часы работы</h6>
              <p className="text-sm text-muted-foreground font-light mb-2">Пн-Чт: 18:00 - 02:00</p>
              <p className="text-sm text-muted-foreground font-light">Пт-Сб: 18:00 - 04:00</p>
              <p className="text-sm text-muted-foreground font-light">Вс: по записи</p>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground border-t border-primary/10 pt-8 font-light">
            © 2024 LXV Club. Все права защищены
          </div>
        </div>
      </footer>

      <Dialog open={applicationOpen} onOpenChange={setApplicationOpen}>
        <DialogContent className="max-w-md bg-card border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-2xl text-primary font-light">Заявка на вступление</DialogTitle>
          </DialogHeader>
          <form className="space-y-4 mt-4">
            <div>
              <Label htmlFor="name" className="font-light">Имя</Label>
              <Input id="name" placeholder="Ваше имя" className="bg-background border-primary/20" />
            </div>
            <div>
              <Label htmlFor="phone" className="font-light">Телефон</Label>
              <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" className="bg-background border-primary/20" />
            </div>
            <div>
              <Label htmlFor="email" className="font-light">Email</Label>
              <Input id="email" type="email" placeholder="email@example.com" className="bg-background border-primary/20" />
            </div>
            <div>
              <Label htmlFor="referral" className="font-light">По рекомендации (необязательно)</Label>
              <Input id="referral" placeholder="Имя рекомендующего" className="bg-background border-primary/20" />
            </div>
            <div>
              <Label htmlFor="about" className="font-light">О себе</Label>
              <Textarea 
                id="about" 
                placeholder="Расскажите немного о себе и ваших интересах"
                className="bg-background border-primary/20 min-h-24"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Отправить заявку
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;