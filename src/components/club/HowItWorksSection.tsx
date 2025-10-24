export const HowItWorksSection = () => {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="container mx-auto max-w-5xl">
        <h3 className="text-4xl text-center mb-12 text-primary">Как это работает</h3>
        <div className="flex justify-center items-start gap-4 md:gap-8">
          <div className="text-center group cursor-pointer animate-fade-in relative" style={{ animationDelay: '0.1s' }}>
            <div className="w-20 h-20 md:w-32 md:h-32 rounded-full border-2 border-primary/40 flex items-center justify-center mb-4 mx-auto group-hover:border-primary group-hover:scale-110 transition-all duration-300">
              <span className="text-4xl md:text-6xl text-primary font-light">1</span>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground font-light max-w-[100px] md:max-w-none mb-2">Заявка</p>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-background/95 border border-primary/20 rounded-lg p-3 text-xs text-muted-foreground font-light z-10">
              Клуб доступен только по предварительной заявке для сохранения приватности
            </div>
          </div>
          <div className="text-primary text-2xl md:text-4xl pt-8">→</div>
          <div className="text-center group cursor-pointer animate-fade-in relative" style={{ animationDelay: '0.3s' }}>
            <div className="w-20 h-20 md:w-32 md:h-32 rounded-full border-2 border-primary/40 flex items-center justify-center mb-4 mx-auto group-hover:border-primary group-hover:scale-110 transition-all duration-300">
              <span className="text-4xl md:text-6xl text-primary font-light">2</span>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground font-light max-w-[100px] md:max-w-none mb-2">Одобрение</p>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-background/95 border border-primary/20 rounded-lg p-3 text-xs text-muted-foreground font-light z-10">
              Клуб рассматривает каждую заявку лично, чтобы сохранить высокий уровень сообщества
            </div>
          </div>
          <div className="text-primary text-2xl md:text-4xl pt-8">→</div>
          <div className="text-center group cursor-pointer animate-fade-in relative" style={{ animationDelay: '0.5s' }}>
            <div className="w-20 h-20 md:w-32 md:h-32 rounded-full border-2 border-primary/40 flex items-center justify-center mb-4 mx-auto group-hover:border-primary group-hover:scale-110 transition-all duration-300">
              <span className="text-4xl md:text-6xl text-primary font-light">3</span>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground font-light max-w-[100px] md:max-w-none mb-2">Членство</p>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-background/95 border border-primary/20 rounded-lg p-3 text-xs text-muted-foreground font-light z-10">
              После одобрения вы получите доступ ко всем преимуществам клуба
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
