import Icon from '@/components/ui/icon';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-card border-t border-primary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-2xl mb-4 text-primary tracking-widest">LXV</h4>
            <p className="text-muted-foreground font-light text-sm">
              Закрытый клуб для избранных. Москва, исторический центр.
            </p>
          </div>
          <div>
            <h5 className="text-lg mb-4 text-primary">Контакты</h5>
            <div className="space-y-2 text-muted-foreground font-light text-sm">
              <p className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@lxv-club.ru
              </p>
              <p className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (495) 123-45-67
              </p>
            </div>
          </div>
          <div>
            <h5 className="text-lg mb-4 text-primary">Режим работы</h5>
            <div className="space-y-1 text-muted-foreground font-light text-sm">
              <p>Пн-Чт: 18:00 - 02:00</p>
              <p>Пт-Сб: 18:00 - 05:00</p>
              <p>Вс: только по записи</p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary/10 pt-8 text-center text-muted-foreground font-light text-sm">
          <p>&copy; 2024 LXV Club. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
