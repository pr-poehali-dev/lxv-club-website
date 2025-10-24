import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const FAQSection = () => {
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

  return (
    <section id="faq" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h3 className="text-4xl text-center mb-16 text-primary">Часто задаваемые вопросы</h3>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="border border-primary/20 rounded-lg px-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <AccordionTrigger className="text-lg hover:text-primary">
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
  );
};
