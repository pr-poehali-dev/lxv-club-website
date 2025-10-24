export const AboutSection = () => {
  const quotes = [
    { text: 'Стиль — это способ сказать, кто ты, не произнося ни слова', author: 'Рэйчел Зои' },
    { text: 'Без уединения невозможно стать великим', author: 'Александр Дюма' },
    { text: 'Секрет наслаждения жизнью заключается в том, чтобы жить настоящим', author: 'Грейс Келли' },
    { text: 'Настоящая элегантность — это не быть замеченным, а быть запомненным', author: 'Джордж Брисон' },
    { text: 'Истинная роскошь — быть собой', author: 'Оскар де ла Рента' },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h3 className="text-4xl md:text-5xl text-center mb-16 text-primary">О клубе LXV</h3>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
            <p>
              LXV — это не просто клуб. Это пространство, созданное для тех, кто умеет ценить уединение, качество и настоящие связи. Здесь нет спешки, нет лишних людей — только атмосфера доверия и комфорта.
            </p>
            <p>
              Мы верим, что настоящий отдых — это возможность остановиться, насладиться моментом и быть в окружении тех, кто разделяет ваши ценности. В LXV каждая деталь продумана, чтобы ваш визит стал не просто вечером, а частью вашего стиля жизни.
            </p>
            <p>
              Располагаясь в самом центре Москвы, клуб предлагает панорамный вид на исторические районы столицы, частную коллекцию сигар, авторское барное меню и пространство для деловых встреч и личного досуга.
            </p>
          </div>
          <div className="space-y-8">
            {quotes.map((quote, index) => (
              <div key={index} className="border-l-2 border-primary/30 pl-6 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <p className="text-lg italic text-muted-foreground font-light mb-2">"{quote.text}"</p>
                <p className="text-sm text-primary">— {quote.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
