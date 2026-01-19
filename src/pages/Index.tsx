import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const endDate = new Date('2025-12-31T23:59:59');
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: 'MapPin',
      text: 'В наличии в Екатеринбурге'
    },
    {
      icon: 'Package',
      text: 'Полная комплектация: шкаф + зажим + ЗИП'
    },
    {
      icon: 'Shield',
      text: 'Гарантия 12 месяцев'
    },
    {
      icon: 'Truck',
      text: 'Доставка по России и СНГ'
    }
  ];

  const specifications = [
    { label: 'Модель', value: 'Yongan DZJ-90' },
    { label: 'Тип', value: 'Вибропогружатель электрический крановый' },
    { label: 'Максимальное усилие', value: '90 кН' },
    { label: 'Частота вибрации', value: '1500-2500 об/мин' },
    { label: 'Мощность двигателя', value: '55 кВт' },
    { label: 'Напряжение питания', value: '380 В' },
    { label: 'Вес', value: '2800 кг' },
    { label: 'Страна производства', value: 'Китай' }
  ];

  return (
    <div className="min-h-screen">
      <header className="border-b border-border/40 bg-[#272D49] sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://cdn.poehali.dev/files/KGS_logo_white_yellow.png" alt="KGS" className="h-12 w-auto" />
            <div className="border-l border-border/40 pl-3">
              <p className="text-sm text-muted-foreground leading-tight max-w-md">
                Производство и поставка оборудования для<br />строительства свайных фундаментов
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+73432000000" className="text-sm hover:text-primary transition-colors">
              +7 (343) 200-00-00
            </a>
          </div>
        </div>
      </header>

      <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #273369 0%, #272D49 100%)' }}>
        <div className="absolute inset-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-[#F6A327]/10 border border-[#F6A327]/30 rounded-md px-4 py-2">
                <img src="https://cdn.poehali.dev/files/KGS_logo_white_yellow.png" alt="" className="h-5 w-auto" />
                <span className="text-sm font-semibold text-[#F6A327] uppercase tracking-wide">
                  СПЕЦПРЕДЛОЖЕНИЕ
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Вибропогружатель электрический крановый{' '}
                <span className="text-[#F6A327]">Yongan DZJ-90</span>
              </h1>

              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-foreground/90">
                    <div className="w-10 h-10 rounded-lg bg-[#F6A327]/10 border border-[#F6A327]/30 flex items-center justify-center flex-shrink-0">
                      <Icon name={feature.icon} size={20} className="text-[#F6A327]" />
                    </div>
                    <span className="text-base">{feature.text}</span>
                  </div>
                ))}
              </div>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-[#F6A327]/20 animate-scale-in">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground uppercase tracking-wide">
                    Специальная цена
                  </span>
                  <div className="bg-[#F6A327]/20 text-[#F6A327] px-3 py-1 rounded-full text-sm font-bold">
                    -4%
                  </div>
                </div>
                <div className="mb-6">
                  <div className="text-4xl md:text-5xl font-bold mb-1">8 150 000 ₽</div>
                  <div className="text-sm text-muted-foreground">с НДС</div>
                </div>
                <div className="flex gap-3">
                  <Button className="flex-1 bg-[#10B981] hover:bg-[#10B981]/90 text-white">
                    <Icon name="Phone" size={18} className="mr-2" />
                    Позвонить
                  </Button>
                  <Button className="flex-1 bg-[#F6A327] hover:bg-[#F6A327]/90 text-[#273369]">
                    <Icon name="Send" size={18} className="mr-2" />
                    Оставить заявку
                  </Button>
                </div>
              </Card>

              <div className="flex items-center gap-2 bg-card/60 border border-border/40 rounded-lg p-4">
                <Icon name="Clock" size={20} className="text-[#F6A327] flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Предложение действует до 31 декабря 2025
                </span>
              </div>
            </div>

            <div className="relative animate-fade-in flex items-center justify-center" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F6A327]/20 to-transparent rounded-2xl blur-3xl" />
              <img 
                src="https://cdn.poehali.dev/files/Вибрик без фона.png" 
                alt="Yongan DZJ-90" 
                className="relative w-full max-w-lg h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Успейте до конца года
          </h2>
          <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { value: timeLeft.days, label: 'Дней' },
              { value: timeLeft.hours, label: 'Часов' },
              { value: timeLeft.minutes, label: 'Минут' },
              { value: timeLeft.seconds, label: 'Секунд' }
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center bg-card/80 backdrop-blur-sm border-[#F6A327]/20">
                <div className="text-4xl md:text-5xl font-bold text-[#F6A327] mb-2">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'linear-gradient(135deg, #273369 0%, #272D49 100%)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Технические характеристики
          </h2>
          <Card className="max-w-4xl mx-auto p-8 bg-card/80 backdrop-blur-sm border-[#F6A327]/10">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {specifications.map((spec, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-border/40 last:border-0">
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="font-semibold text-foreground">{spec.value}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Оставьте заявку
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Наши специалисты свяжутся с вами в ближайшее время
            </p>
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-[#F6A327]/10">
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input placeholder="Иван Иванов" className="bg-background/50" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input type="tel" placeholder="+7 (___) ___-__-__" className="bg-background/50" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="example@mail.ru" className="bg-background/50" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Комментарий</label>
                  <Textarea placeholder="Расскажите о вашем проекте..." rows={4} className="bg-background/50" />
                </div>
                <Button className="w-full bg-[#F6A327] hover:bg-[#F6A327]/90 text-[#273369] font-semibold">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 bg-[#272D49] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img src="https://cdn.poehali.dev/files/KGS_logo_white_yellow.png" alt="KGS" className="h-10 w-auto" />
              <span className="text-sm text-muted-foreground">© 2025 KGS-Ural. Все права защищены</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:+73432000000" className="text-sm hover:text-[#F6A327] transition-colors flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (343) 200-00-00
              </a>
              <a href="mailto:info@kgs-ural.ru" className="text-sm hover:text-[#F6A327] transition-colors flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@kgs-ural.ru
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;